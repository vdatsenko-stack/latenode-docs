---
title: Querying Collection
description: Retrieving and analyzing data from database collections.
sidebar_position: 1
---

When querying data from a collection, you can use a set of constraints to filter objects.

To filter, you need to specify a set of conditions (filters if you like).

We use `YAML` for the request format.

## Note

All filter sets start with the keyword `conditions` , all filters at the first level are applied by the `AND` condition

```yaml
conditions:
  - {operation}
  - {operation}
```

### Example

```yaml
conditions:
  - operation: equal
    query:
      path: name
    expected:
      value: Jon
```

## Conditions

```
- Field:       operation
  Type:        string
  Description: Each condition must contain an operation field
  ---
- Field:       Condition body
  Description: Depending on the selected operation, the set of fields may vary  
```

## Operations

This section lists all the operations that you can use in the conditions.

```
- Operation:   and 
  Fields:      conditions
  Type:        []Condition 
  Description: Contains a set of conditions
---
- Operation:   or
  Fields:      conditions
  Type:        []Condition
  Description: Contains a set of conditions
---
- Operation:   equal
  Fields:      query, expected
  Type:        Expression
  Description: query: Expression for calculating the value, 
               expected: Expression for calculating the expected value
---
- Operation:   not_equal
  Fields:      query, expected
  Type:        Expression
  Description: query: Expression for calculating the value,
               expected: Expression for calculating the expected value
---
- Operation:   has_keys
  Fields:      keys
  Type:        []string
  Description: Set of paths to check for availability
---
- Operation:   not_has_keys
  Fields:      keys
  Type:        []string
  Description: Set of paths to check for unavailability
```

## Expressions

This section lists all the expressions that you can use in the conditions.

```
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

### Note for Path expression

Consider an example object and two filters

```jsx
{
  "t1": {
    "ddd": "ewwflsdk",
    "grz": "d123",
    "aaa": "123"
  }
}
```

The filter that will work:

```yaml
conditions:
  - operation: equal
    query:
      path: t1.grz
    expected:
      value: d123
```

Filter that won't work:

```yaml
conditions:
  - operation: equal
    query:
      path: t1
    expected:
      value: 
        grz: d123
```

This behavior is due to the fact that we compare the entire result obtained in the `Path` expression with the entire result obtained in the `Value` expression.

For cases when you need to compare only part of the received object, you can create an expression from two or more filters.

For example, the following expression will ignore part of the object at the address `t1` but compare two values from the nested object at once:

```yaml
conditions:
  - operation: equal
    query:
      path: t1.grz
    expected:
      value: d123
  - operation: equal
    query:
      path: t1.ddd
    expected:
      value: ewwflsdk
```

## Filtering examples

All examples will be carried out based on the following input data.

```json
[
  {
    "storage_id": "c9d6b296-ab57-435e-a28b-6b207b9674b8",
    "collection_name": "users",
    "object_id": "8f842609-b710-479b-96d3-0b0f3be62571",
    "value": {
      "name": "Marta",
      "age": 35,
      "info": {
        "verified": true
      },
      "labels": [
        "author",
        "reader"
      ]
    },
    "created_at": "2006-01-02 15:04:05.999999999 -0700 MST"
  },
  {
    "storage_id": "c9d6b296-ab57-435e-a28b-6b207b9674b8",
    "collection_name": "users",
    "object_id": "88c90cbe-6aab-43dd-81cb-e7a37580e813",
    "value": {
      "name": "Joe",
      "age": 40,
      "info": {
        "verified": false,
        "banned": true
      },
      "labels": [
        "reader",
        "critic"
      ]
    },
    "created_at": "2006-01-02 15:04:05.999999999 -0700 MST"
  }
]
```

## Basic Filter

First, let's find a match by path in object value. For this we will need the operator `equal`.

```yaml
conditions:
  - operation: equal
    query:
      path: name
    expected:
      value: Marta
```

This will return all the objects where the field name is equal to Marta.

```json
{
  "storage_id": "c9d6b296-ab57-435e-a28b-6b207b9674b8",
  "collection_name": "users",
  "object_id": "8f842609-b710-479b-96d3-0b0f3be62571",
  "value": {
    "name": "Marta",
    "age": 35,
    "info": {
      "verified": true
    },
    "labels": [
      "author",
      "reader"
    ]
  },
  "created_at": "2006-01-02 15:04:05.999999999 -0700 MST"
}
```

Now let's find all users whose name is not Marta. For this we will need the operator `not_equal`.

```yaml
conditions:
  - operation: not_equal
    query:
      path: name
    expected:
      value: Marta
```

This will return all the objects where the field name is not equal to Marta. In our case, we will get an object with the user Joe.

```json
{
  "storage_id": "c9d6b296-ab57-435e-a28b-6b207b9674b8",
  "collection_name": "users",
  "object_id": "88c90cbe-6aab-43dd-81cb-e7a37580e813",
  "value": {
    "name": "Joe",
    "age": 40,
    "info": {
      "verified": false,
      "banned": true
    },
    "labels": [
      "reader",
      "critic"
    ]
  },
  "created_at": "2006-01-02 15:04:05.999999999 -0700 MST"
}
```

Now let's request all users with a complete match of a part of the object.

```yaml
conditions:
  - operation: equal
    query:
      path: info
    expected:
      value:
        verified: false
        banned:   true
```

The value expression automatically determines the value type (string, object, list, number).

In this case, we will again get the user object Joe.

```json
{
  "storage_id": "c9d6b296-ab57-435e-a28b-6b207b9674b8",
  "collection_name": "users",
  "object_id": "88c90cbe-6aab-43dd-81cb-e7a37580e813",
  "value": {
    "name": "Joe",
    "age": 40,
    "info": {
      "verified": false,
      "banned": true
    },
    "labels": [
      "critic"
    ]
  },
  "created_at": "2006-01-02 15:04:05.999999999 -0700 MST"
}
```

## Multiple Filters

### Filtering with OR

```yaml
conditions:
  - operation: or
    conditions:
      - operation: equal
        query:
          path: info.banned
        expected:
          value:true
      - operation: equal
        query:
          path: info.verified
        expected:
          value:false
```

### Filtering with AND

```yaml
conditions:
  - operation: and
    conditions:
      - operation: equal
        query:
          path: info.banned
        expected:
          value:true
      - operation: equal
        query:
          path: info.verified
        expected:
          value:false
```

## Nested Filters

You can nest conditions within each other to get the best filtering result.

```yaml
conditions:
  - operation: and
    conditions:
      - operation: equal
        query:
          path: age
        expected:
          value: 40
      - operation: or
        conditions:
          - operation: equa;
            query:
              path: info.verified
            expected:
              value:false
          - operation: equal
            query:
              path: info.banned
            expected:
              value:true
```

## Search for complex objects

Sometimes you may want to find an object where the fields of the object are somehow related to each other.

In this case, you can use two Path expressions and compare their values with each other.

```yaml
conditions:
  - operation: equal
    query:
      path:
        path: first_name
      expected:
        path: last_name
```

In this example, if someone specifies the same first and last name, we will get such users in the response.

You can also combine different types of expressions in one query.

```yaml
conditions:
  - operation: and
    conditions:
      - operation: equal
        query:
          path: first_name
        expected:
          path: last_name
      - operation: not_equal
        query:
          path: first_name
        expected:
          path: Joe
```