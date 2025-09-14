# JSON Parse

Article Description: Extracting and processing JSON data.
Published: Yes
Suggested: No

![Untitled](JSON%20Parse%2019757d45a067804684e5c9b133d330ed/Untitled.png)

## **Node Description**

**JSON Parse** - an action-type node used for converting the provided string into JSON format.

## **Node Configuration**

To configure the JSON Parse node, it is necessary to fill in the mandatory field **JSON string**.

![Untitled](JSON%20Parse%2019757d45a067804684e5c9b133d330ed/Untitled%201.png)

### **JSON string**

This field is required for entering the string that needs to be converted into JSON format.

<aside>
💡 In the **JSON string** field, you can input text, variables from other nodes, or parameters from responses of other nodes.

</aside>

## **Example of Node Usage**

To obtain a string converted to JSON format, you need to create a scenario with nodes: 

![Untitled](JSON%20Parse%2019757d45a067804684e5c9b133d330ed/Untitled%202.png)

1. **Trigger on Webhook** node is used to trigger the scenario and pass the string `{"Fruit": "Apple", "Sum": 10}` into it;

![Untitled](JSON%20Parse%2019757d45a067804684e5c9b133d330ed/Untitled%203.png)

2. **JSON string** node is used to perform the conversion of the string;

![Untitled](JSON%20Parse%2019757d45a067804684e5c9b133d330ed/Untitled%204.png)

3. **Webhook response** node is used to receive the result of the string conversion.

![Untitled](JSON%20Parse%2019757d45a067804684e5c9b133d330ed/Untitled%205.png)

The result of executing this scenario is a JSON object.

![Untitled](JSON%20Parse%2019757d45a067804684e5c9b133d330ed/Untitled%206.png)

### JSON

```jsx
{
	"Fruit": "Apple",
	"Sum": 10
}
```