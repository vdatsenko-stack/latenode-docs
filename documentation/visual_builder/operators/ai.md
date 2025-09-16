# AI

Article Description: Using AI-driven logic within automation workflows.
Published: Yes
Suggested: No

The AI operators include a single operator - **askAI()**. The operand should be the user's request to the AI.

In addition to text, the request can use existing variables or global variables or output parameters of previous nodes, enclosed in symbols according to the pattern **`"+Variable/Data+"` .**

<aside>
💡 The operator can be used to configure nodes by adding it to node fields or to set conditions in the **Condition** field.

</aside>

<aside>
⚠️ When using artificial intelligence (AI), follow these precautions. Provide clear and understandable instructions to AI to avoid misunderstandings and incorrect results. Verify the accuracy of the AI's responses, especially if they have serious consequences or are critical for decision-making. Remember that AI responses can vary based on input data, model training, and other factors. Be prepared for different outcomes.

</aside>

Below are some examples of using the AI operator.

## Text Generation

A user request can be a text prompt, such as asking to generate an invitation for an event as the value of the variable **Val**:

1. Add the **Trigger on Run once** and **SetVariables** nodes to the scenario.

2. Add the variable **Val** and set its value to **`{{askAI("Generate a short invitation text for an event\r")}}`**.

3. Run the scenario once and review the node execution results to verify the presence of the new variable.

![Untitled](AI%2019157d45a0678073adebedbc27538adf/Untitled.png)

## User Feedback Monitoring

A request can involve identifying the tone or sentiment of incoming text. The text can be the output parameter of a previous node, such as an email or Telegram chat message. For simplicity, generate the text directly within the scenario by adding the following nodes:

![Untitled](AI%2019157d45a0678073adebedbc27538adf/Untitled%201.png)

1. **Trigger on Run once** node to trigger the scenario with the **Run once** button.

2. **SetVariables** node to generate the **Text** variable, containing the product review text.

![Untitled](AI%2019157d45a0678073adebedbc27538adf/Untitled%202.png)

3. **Webhook response** node to return a response upon successful execution of the scenario. In the **Body** field of the **Webhook response** node, add the AI operator with a request using the variable from the **SetVariables** node: **`{{askAI("Determine if the text \"" + _.Text + "\" is a negative review")}}`**

![Untitled](AI%2019157d45a0678073adebedbc27538adf/Untitled%203.png)

The result of this scenario is an AI response:

***Yes, the text "The packaging is damaged and the courier was late" can be considered a negative review.***

![Untitled](AI%2019157d45a0678073adebedbc27538adf/Untitled%204.png)

## Text Classification

A request can involve determining if the incoming text is a question. Using the AI operator in routes allows the scenario to follow different branches based on the AI's response.

<aside>
⚠️ Since the condition for route execution is a boolean **TRUE** in the **Condition** field, you must configure this field correctly. For example, ask the AI to return "true" or "false" and compare the result to "true." The equality true=true will be **TRUE**, triggering the route.

</aside>

For simplicity, generate the text directly within the scenario by adding the following nodes:

1. **Trigger on Run once** node to trigger the scenario with the **Run once** button.

2. **SetVariables** node to generate the **Value** variable containing the text for classification.

![Untitled](AI%2019157d45a0678073adebedbc27538adf/Untitled%205.png)

3. **Question** route with the condition **`{{askAI("The text contains \"" + $2.Value + "\" is there a question? If so, return one word \"true\", otherwise return one word \"false\"") = "true"}}`**.

![Untitled](AI%2019157d45a0678073adebedbc27538adf/Untitled%206.png)

4. **Webhook response** node for the **Question** route with the response *The text contains a question* upon scenario execution.

5. **Not a question** route with the condition **`{{askAI("The text contains \"" + $2.Value + "\" is there a question? If not, return one word \"true\", otherwise return one word \"false\"") = "true"}}`**.

![Untitled](AI%2019157d45a0678073adebedbc27538adf/Untitled%207.png)

6. **Webhook response** node for the **Not a question** route with the response *The text does not contain a question* upon scenario execution.

The result of the scenario depends on the text in the **Value** variable:

- If the variable contains a question, such as *What is the deadline for completing the task?*, the scenario's result is *The text contains a question*.

![Untitled](AI%2019157d45a0678073adebedbc27538adf/Untitled%208.png)

- If the variable contains a statement, such as *Documentation is an important part of learning*, the scenario's result is *The text does not contain a question*.

![Untitled](AI%2019157d45a0678073adebedbc27538adf/Untitled%209.png)