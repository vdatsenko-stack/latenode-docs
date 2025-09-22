---
title: JSON Parse
description: Extracting and processing JSON data
sidebar_position: 8
---

![Untitled](/placeholder.png)

## **Node Description**

**JSON Parse** - an action-type node used for converting the provided string into JSON format.

## **Node Configuration**

To configure the JSON Parse node, it is necessary to fill in the mandatory field **JSON string**.

![Untitled](/placeholder.png)

### **JSON string**

This field is required for entering the string that needs to be converted into JSON format.

:::tip
In the **JSON string** field, you can input text, variables from other nodes, or parameters from responses of other nodes.
:::

## **Example of Node Usage**

To obtain a string converted to JSON format, you need to create a scenario with nodes: 

![Untitled](/placeholder.png)

1. **Trigger on Webhook** node is used to trigger the scenario and pass the string `{"Fruit": "Apple", "Sum": 10}` into it;

![Untitled](/placeholder.png)

2. **JSON string** node is used to perform the conversion of the string;

![Untitled](/placeholder.png)

3. **Webhook response** node is used to receive the result of the string conversion.

![Untitled](/placeholder.png)

The result of executing this scenario is a JSON object.

![Untitled](/placeholder.png)

### JSON

```jsx
{
	"Fruit": "Apple",
	"Sum": 10
}
