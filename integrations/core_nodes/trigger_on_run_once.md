---
title: Trigger on Run once
description: Executing a one-time automation scenario
sidebar_position: 1
---

![Untitled](./trigger_on_run_once/untitled.png)

## Node Description

**Trigger on Run once** is a trigger-type node that allows manually starting a scenario by clicking the **Run once** button. Unlike other triggers, it does not require external requests or specific events to activate. The node allows passing input parameters (text or files) into the scenario.

![Untitled 1](./trigger_on_run_once/untitled_1.png)

## **Example of Node Usage**

### **Example 1: Processing Text with JavaScript**

In this example, the user inputs text, the scenario processes it using JavaScript, and the result is stored as a variable.

### **Scenario Structure**

1. **Trigger on Run once** – Starts the scenario manually and receives text input.
2. **JavaScript** – Processes the text (e.g., converts to uppercase or counts words).

### **Scenario Setup**

#### **1. Configuring the Trigger on Run Once Node**

* Click on the **Trigger on Run once** node.
* In the **Params** section, add a text parameter.
* Specify a name for the variable (e.g., `input_text`).
* Enter a sample text value for testing.

![brave\_Qyymm7pVG9](./trigger_on_run_once/brave_qyymm7pvg9.png)

* Click **Save** and **Run once** to pass the data into the scenario.

![brave\_adWork9YBa](./trigger_on_run_once/brave_adwork9yba.png)

#### **2. Processing Data with JavaScript**

Add a **JavaScript** node and insert the following code, then press **Generate params**:

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

* Pass the input variable containing text.

![brave\_fNDpJbftqJ](./trigger_on_run_once/brave_fndpjbftqj.png)

* Run the scenario.
* The output will be the formatted text.

![brave\_cZ7vEmRyUD](./trigger_on_run_once/brave_cz7vemryud.png)

---

### **Example 2: Recognizing Image Content Using AI**

In this example, an image is uploaded and sent to an AI service for content recognition.

### **Scenario Structure**

1. **Trigger on Run once** – Starts the scenario manually and allows image upload.
2. **AI Image Processing** – Sends the image to an AI service for recognition.

### **Scenario Setup**

#### **1. Configuring the Trigger on Run Once Node**

* Click on the **Trigger on Run once** node.
* In the **Params** section, add a **File** parameter.
* Specify a name for the variable (e.g., `input_image`).

![brave\_8iSm9mn9tu](./trigger_on_run_once/brave_8ism9mn9tu.png)

* Upload a sample image for testing.

![brave\_xVkNOX2qIo](./trigger_on_run_once/brave_xvknox2qio.png)

* Click **Save** and **Run once** to pass the data into the scenario.

![brave\_Cfbabb8YTM](./trigger_on_run_once/brave_cfbabb8ytm.png)

#### **2. Sending the Image to AI for Analysis**

* Add an AI-based image recognition node (e.g., GPT or another service).

![brave\_C6ZQnoBLMn](./trigger_on_run_once/brave_c6zqnoblmn.png)

* Pass the **file content**, **filename**, and **prompt for analysis** into the corresponding fields.

![brave\_jbhVsoO1w3](./trigger_on_run_once/brave_jbhvsoo1w3.png)

* Run the scenario to receive the recognized result.

![brave\_vrDWVtYYk8](./trigger_on_run_once/brave_vrdwvtyyk8.png)

---

### **Node Behavior on Execution**

* The **first** execution stores the processed values.
* Subsequent executions overwrite previous values.
* Uploaded files are processed and passed into the scenario with metadata.

These examples demonstrate how the **Trigger on Run once** node can be used to process text and file data within automated workflows while saving results for later use.
