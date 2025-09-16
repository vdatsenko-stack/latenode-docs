# Using Databases from JS Code

Article Description: Accessing and interacting with database using JavaScript.
Published: Yes
Suggested: No

From JavaScript node code, you can work with databases, collections, and objects.

Below are code examples with the main concepts.

### Working with Collections

All methods can be called using ORM: to create a database js-object, use `db.database('database_id')` and specify the specific ID of your database (you can find it on the "Database" page in the left menu).

```jsx
export default async function run({execution_id, input, data, store, db}) {
	const database_id = '4da687c4-2ba1-476f-9ff2-c5942aab2fbd'

	const database = db.database(database_id)
}

```

To access collection and object management methods, you need to create a collection js-object:

```jsx
export default async function run({execution_id, input, data, store, db}) {
	const database_id = '4da687c4-2ba1-476f-9ff2-c5942aab2fbd'

	const database = db.database(database_id)
	const collection = database.collection('collection_name')
}

```

The `collection()` method does **not** create a new collection. If you need to create a new collection, you can call the method `await database.createCollection('collection_name')`. If such a collection already exists, an error is **not** returned.

### Working with Objects

To create an object in a collection, use the method `await collection.createObject()`. As a parameter, you can pass a string, number, boolean value, array, or js-object of any nesting. The method returns a string with the object ID:

```jsx
export default async function run({execution_id, input, data, store, db}) {
	const database_id = '4da687c4-2ba1-476f-9ff2-c5942aab2fbd'

	const database = db.database(database_id)
	const collection = database.collection('collection_name')

	const object_id = await collection.createObject({
		testField: {
		  field: "test"
		}
	})

	return {
		object_id
	}
}

```

To output a list of objects, use the method `await collection.findObjects(limit, offset, filter)`. The limit parameter sets the number of rows to read in one request, offset - the start of reading shift (standard parameters as for pagination). The filter parameter is optional and can be set as a string (YAML and JSON) or as a js-object:

```jsx
export default async function run({execution_id, input, data, store, db}) {
	const database_id = '4da687c4-2ba1-476f-9ff2-c5942aab2fbd'

	const database = db.database(database_id)
	const collection = database.collection('collection_name')

	const objects1 = await collection.findObjects(50, 0)

	const filterStr = `
	conditions:
	  - operation: "equal"
	    query:
	      path: "example"
	    expected:
	      value: "example_js"
	`

	const objects2 = await collection.findObjects(50, 0, filterStr)

	const filterObj = {
		conditions: [
			{
				operation: "equal",
				query: {
					path: "example"
				},
				expected: {
					value: "example_js"
				}
			}
		]
	}

	const objects3 = await collection.findObjects(50, 0, filterObj)

	return {
		objects1,
		objects2,
		objects3
	}
}

```

To update objects, use the method `await collection.updateObjects(filter, updater)`. The updater parameter, similar to the filter, can be either a string (YAML and JSON) or a js-object. The method returns a number - the count of updated objects:

```jsx
export default async function run({execution_id, input, data, store, db}) {
	const database_id = '4da687c4-2ba1-476f-9ff2-c5942aab2fbd'

	const database = db.database(database_id)
	const collection = database.collection('collection_name')

	const filterStr = `
conditions:
  - operation: "equal"
    query:
      path: "example"
    expected:
      value: "example_js"
	`
	const updaterStr = `
items:
  - path: "example"
     set:
       value: "example_js_2"`
	`

	const count1 = await collection.updateObjects(filterStr, updaterStr)

	const filterObj = {
		conditions: [
			{
				operation: "equal",
				query: {
					path: "example"
				},
				expected: {
					value: "example_js_2"
				}
			}
		]
	}
	const updaterObj = {
		items: [
			{
				path: "example",
				set: {
					value: "example_js_3"
				}
			}
		]
	}

	const count2 = await collection.updateObjects(filterObj, updaterObj)

	return {
		count1,
		count2
	}
}

```

## Table of All Methods Description

### Database JS-object

```yaml
- Method name:          collection(collection_name)
  Parameters:           collection_name - string
  Description:          Used to get a collection js-object, which is used for further work with objects.
  Return value:         Collection js-object
---
- Method name:          createCollection(collection_name)
  Parameters:           collection_name - string
  Description:          Creates a new collection with the given name. If the collection already exists, no error is returned.
  Return value:         Collection js-object
---
- Method name:          listCollections()
  Parameters:
  Description:          Get a list of collections for the specified database.
  Return value:         Array of objects:
                         [
                           {
                             "storage_id": "id",
                             "collection_name": "name"
                           }
                         ]

```

### Collection JS-object

```yaml
- Method name:          get()
  Parameters:
  Description:          Requests the collection from the database.
  Return value:         Example of collection:
                         {
                           "storage_id": "id",
                           "collection_name": "name"
                         }
---
- Method name:          updateCollectionName(new_collection_name)
  Parameters:           new_collection_name - string
  Description:          Updates the collection name.
  Return value:
---
- Method name:          truncate()
  Parameters:
  Description:          Deletes all objects in the collection.
  Return value:
---
- Method name:          delete()
  Parameters:
  Description:          Deletes the collection.
  Return value:
---
- Method name:          findObjects(limit, offset, filter = '')
  Parameters:           limit - int
                        offset - int
                        filter - string/object (optional parameter)
  Description:          Searches for objects with or without a filter.
  Return value:         Array of objects
---
- Method name:          getObjectByID(object_id)
  Parameters:           object_id - string
  Description:          Gets an object by its ID.
  Return value:         Object
---
- Method name:          createObject(object)
  Parameters:           object - any JS data type
  Description:          Creates an object.
  Return value:         ID of the created object
---
- Method name:          updateObjects(filter, updater)
  Parameters:           filter - string/object
                        updater - string/object
  Description:          Updates objects by filter.
  Return value:         Number of updated objects
---
- Method name:          deleteObject(object_id)
  Parameters:           object_id - string
  Description:          Deletes an object by its ID.
  Return value:         If the object existed and was deleted - 1
                        If the object was not found or already deleted - 0
---
- Method name:          deleteObjectsByFilter(filter)
  Parameters:           filter - string/object
  Description:          Deletes objects by filter.
  Return value:         Number of deleted objects

```