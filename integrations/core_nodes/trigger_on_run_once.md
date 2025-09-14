# Trigger on Run once

Article Description: Executing a one-time automation scenario.
Published: Yes
Suggested: No

![Untitled](Trigger%20on%20Run%20once%2019757d45a06780499768f373f5deecc9/Untitled.png)

## Node Description

**Trigger on Run once** is an trigger-type node that allows manually starting a scenario by clicking the **Run once** button. Unlike other triggers, it does not require external requests or specific events to activate. The node allows passing input parameters (text or files) into the scenario.

![Untitled](Trigger%20on%20Run%20once%2019757d45a06780499768f373f5deecc9/Untitled%201.png)

## **Example of Node Usage**

### **Example 1: Processing Text with JavaScript**

In this example, the user inputs text, the scenario processes it using JavaScript, and the result is stored as a variable.

### **Scenario Structure**

1. **Trigger on Run once** – Starts the scenario manually and receives text input.
2. **JavaScript** – Processes the text (e.g., converts to uppercase or counts words).

### **Scenario Setup**

### **1. Configuring the Trigger on Run Once Node**

- Click on the **Trigger on Run once** node.
- In the **Params** section, add a text parameter.
- Specify a name for the variable (e.g., `input_text`).
- Enter a sample text value for testing.
    
    ![brave_Qyymm7pVG9.png](Trigger%20on%20Run%20once%2019757d45a06780499768f373f5deecc9/brave_Qyymm7pVG9.png)
    
- Click **Save** and **Run once** to pass the data into the scenario.
    
    ![brave_adWork9YBa.png](Trigger%20on%20Run%20once%2019757d45a06780499768f373f5deecc9/brave_adWork9YBa.png)
    

### **2. Processing Data with JavaScript**

Add a **JavaScript** node and insert the following code and press **Generate params**:

```jsx
/** @CustomParams
{
  "text": {
    "key": "text",
    "title": "Text",
    "description": "Text to convert to uppercase",
    "type": "string"
  }
}
*/
export default async function run({ data }) {
  const { text } = data;

  // Validate the input text
  if (!text) {
    throw new Error('The text parameter is required.');
  }

  const upperCaseText = text.toUpperCase();

  return { upperCaseText };
}
```

- Pass the input variable containing text.
    
    ![brave_fNDpJbftqJ.png](Trigger%20on%20Run%20once%2019757d45a06780499768f373f5deecc9/brave_fNDpJbftqJ.png)
    
- Run the scenario.
- The output will be the formatted text.
    
    ![brave_cZ7vEmRyUD.png](Trigger%20on%20Run%20once%2019757d45a06780499768f373f5deecc9/brave_cZ7vEmRyUD.png)
    

---

### **Example 2: Recognizing Image Content Using AI**

In this example, an image is uploaded and sent to an AI service for content recognition.

### **Scenario Structure**

1. **Trigger on Run once** – Starts the scenario manually and allows image upload.
2. **AI Image Processing** – Sends the image to an AI service for recognition.

### **Scenario Setup**

### **1. Configuring the Trigger on Run Once Node**

- Click on the **Trigger on Run once** node.
- In the **Params** section, add a **File** parameter.
- Specify a name for the variable (e.g., `input_image`).
    
    ![brave_8iSm9mn9tu.png](Trigger%20on%20Run%20once%2019757d45a06780499768f373f5deecc9/brave_8iSm9mn9tu.png)
    
- Upload a sample image for testing.
    
    ![brave_xVkNOX2qIo.png](Trigger%20on%20Run%20once%2019757d45a06780499768f373f5deecc9/brave_xVkNOX2qIo.png)
    
- Click **Save** and **Run once** to pass the data into the scenario.
    
    ![brave_Cfbabb8YTM.png](Trigger%20on%20Run%20once%2019757d45a06780499768f373f5deecc9/brave_Cfbabb8YTM.png)
    

<aside>
💡 Also you can see quick image preview

![brave_CKLWXBscvK.png](Trigger%20on%20Run%20once%2019757d45a06780499768f373f5deecc9/brave_CKLWXBscvK.png)

</aside>

### **2. Sending the Image to AI for Analysis**

- Add an AI-based image recognition node (e.g., GPT or another service).
    
    ![brave_C6ZQnoBLMn.png](Trigger%20on%20Run%20once%2019757d45a06780499768f373f5deecc9/brave_C6ZQnoBLMn.png)
    
- Pass the **file content**, **filename**, and **prompt for analysis** into the corresponding fields.
    
    ![brave_jbhVsoO1w3.png](Trigger%20on%20Run%20once%2019757d45a06780499768f373f5deecc9/brave_jbhVsoO1w3.png)
    
- Run the scenario to receive the recognized result.
    
    ![brave_vrDWVtYYk8.png](Trigger%20on%20Run%20once%2019757d45a06780499768f373f5deecc9/brave_vrDWVtYYk8.png)
    

---

### **Node Behavior on Execution**

- The **first** execution stores the processed values.
- Subsequent executions overwrite previous values.
- Uploaded files are processed and passed into the scenario with metadata.

These examples demonstrate how the **Trigger on Run once** node can be used to process text and file data within automated workflows while saving results for later use.