# Modifying data in a collection

Article Description: Inserting, updating, and deleting records in database collections.
Published: Yes
Suggested: No

When you want to modify data in a collection, you need to select objects and apply a set of modifiers to them.

### There are two ways to select objects:

- specify the identifier of a specific object
- apply a set of filters to select multiple objects (see [querrying collection](Querying%20Collection%2019157d45a06780c0a029e0f3b3d6213a.md))

## Modifiers

We use `YAML` for the modifier format.

```json
- Field:        path
  Type:         string
  Description:  Address inside the object that is being modified.
                If you specify "." then the modification will replace the entire
                content of the object.
---
- Field:        set
  Type:         Expression
  Description:  Expression to calculate the value.
```

### Note

All filter sets start with the keyword `conditions` , and all modifier sets start with the keyword `items`

### Example

Let's imagine that we have an object that we can get using the following filter:

```yaml
conditions:
  - operation: equal
    query:
      field: "object_id"
    expected:
      value: "5bd4b778-1f7f-4fce-ab89-dd6eb6dfaf98"
```

Object value:

```yaml
{
  "test": 123
}
```

Let's apply modifiers

```yaml
items:
  - path: "."
    set:
      value:
        a:
          b:
            id: "123"
  - path: "a.b.i"
    set:
      value: 123
  - path: "a.b.s"
    set:
      value: "string"
  - path: "a.b.f"
    set:
      field: "object_id"
  - path: "a.b.p"
    set:
      path: "a.b.i"
```

The first modifier replaces all objects with the described object.

```yaml
{
  "a": {
    "b": {
      "id": "123"
    }
  }
}
```

The second modifier adds a value of type number to the object.

```yaml
{
  "a": {
    "b": {
      "id": "123",
      "i": 123
    }
  }
}
```

The third modifier adds a value of type string to the object.

```yaml
{
  "a": {
    "b": {
      "id": "123",
      "i": 123,
      "s": "string"
    }
  }
}
```

The fourth modifier adds a value of type string to the object, and the value is taken from the object_id field from the system information about the object.

```yaml
{
  "a": {
    "b": {
      "id": "123",
      "i": 123,
      "s": "string",
      "f": "aebe4239-0fb9-4e87-9f52-9dc8228467e8"
    }
  }
}
```

The fifth modifier adds a value to the object taken from the same object after the previous modifiers.

```yaml
{
  "a": {
    "b": {
      "id": "123",
      "i": 123,
      "s": "string",
      "f": "aebe4239-0fb9-4e87-9f52-9dc8228467e8",
      "p": 123
    }
  }
}
```

## Expressions

This section lists all the expressions that you can use in the conditions.

```yaml
- Expression:  Field
  Field:       field
  Type:        string
  Description: This extension allows you to get the value of a record field in its entirety.
               Below you can see the available values for this extension:
               • object_id
               • value
               • created_at
---
- Expression:  Path
  Field:       path
  Description: This extension allows you to look inside an object value.
               To view nested values, use the dot separator.
               Examples:
               • a
               • a.b
               • a.b.c
---
- Expression:  Value
  Field:       value
  Type:        string, number, array, object, bool
  Description: This extension allows you to specify a specific value for further comparison
```