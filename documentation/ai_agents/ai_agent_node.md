---
title: AI Agent Node
description: Core component for building LLM-based automations using instructions, tool calls, and contextual memory.
sidebar_position: 1
---

![CleanShot 2025-05-16 at 18.38.18.png](./CleanShot_2025-05-16_at_18.38.18.png)

**AI Agent** is a component of the Latenode platform designed to build intelligent scenarios based on large language models (LLMs). It allows you to integrate external functions, conduct contextual dialogues, and perform sequential actions based on user input.

## Purpose

The AI Agent is used for:

- generating responses to user queries
- calling other nodes in a scenario as functions
- working with short-term memory within a session
- receiving structured JSON responses
- executing scenarios with a limited number of iterations

---

## AI Agent Interface

![brave_fvEXfL38jp.png](./brave_fvEXfL38jp.png)

### Main Fields

| Field | Description |
| --- | --- |
| Model | The name of the LLM model used (e.g., openai/gpt-4.1) determines the quality and cost of execution. |
| **Session ID** | Identifier used to load and separate conversation history. If provided, the agent will include the corresponding conversation history in the context. If empty or omitted, each request will be treated as a new session without history.For example, this can be a chat ID or a user ID to distinguish different conversation threads. |
| **User Prompt** | The user's main query. Supports variable interpolation. |
| **System Message** | Instruction for the language model. Controls the agent's behavior (tone, style, restrictions, etc.). |

### Additional Settings

| Context Window Length | Specifies the number of most recent message pairs (user and assistant) to include in the context window passed to the LLM. Increasing this value allows the model to consider a longer conversation history, which can improve coherence, but may also consume more tokens and affect performance |
| --- | --- |
| **Max Iterations** | Defines the upper limit of tool invocations allowed for the LLM agent in a single reasoning process. If this threshold is reached, the agent will halt execution and respond with a message indicating it was stopped due to reaching the maximum iteration count. |
| Temperature | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. |
| Max Tokens | An upper bound for the number of tokens that can be generated for a completion |
| Structured output (switch) | When enabled, the LLM will be forced to respond in JSON format. You should define the expected JSON structure and formatting rules in the prompt or in "Output JSON Schema” |
| Output JSON Schema | When specified, this JSON Schema defines the exact structure, types, and constraints of the expected JSON output from the LLM. The model will be guided to strictly follow this schema during generation. Example: `{ "type": "object", "properties": { "output": { "type": "string", "description": "Provide output here" } } }` |
| Quick Preview Schema | This field lets you format response data for easy reading. Define key-path pairs in JSON, where the key is the header and the value is the data path |

> ℹ️ To explore all available models, their names, prices, and descriptions, you can use the **List Models node**. It returns a structured list of models supported by the AI Agent node.
> 

![brave_xNNZGPqEGq.png](./brave_xNNZGPqEGq.png)

---

## How It Works

---

AI Agent implements the concept of Function Calling (as defined by OpenAI) or Tool Call. When launched, it forms a standard chat request with roles (system, user) and a list of available **tools**, based on connected nodes.

The request includes:

![brave_9uh4VMBrnf.png](./brave_9uh4VMBrnf.png)

- `User Prompt` (1) — the user’s request (role: user),
- `System Message` (2) — the system message (role: system),
- **Tool metadata** — each connected node must provide:
    
    ![brave_oShdIMhDhh.png](./brave_oShdIMhDhh.png)
    
    - a **name (3)** (taken from the node's title),
    - a **description (4)** (from the `Tool Description` field),
    - a list of **arguments (5)** defined via `fromAIAgent()` inside input fields.

---

**Example:**

```
{{fromAIAgent("Email Body"; "Include an email body as either plain text or HTML. If HTML, make sure to set the "Body Type" prop to html")}}
```

Each such node is treated as a callable function with a name, arguments, and description. If the model decides to call one of the functions, Latenode executes the corresponding node and returns the result to the AI Agent.

> 🧠 The model decides on its own which tools to invoke depending on the meaning of the user request. You can connect multiple tools- only relevant ones will be triggered based on context.
> 

### AI Chat

![brave_sIdzBuBDiw.png](./brave_sIdzBuBDiw.png)

On the right side of the node configuration, there is an **AI Chat** tab. You can use it to talk to the assistant in real-time and test its behavior. This is useful for verifying how the model interprets the prompt, what actions it suggests, and which tools it decides to call.

---

## Connecting Tools to the Agent

![brave_ZlaQrPlTp8.png](./brave_ZlaQrPlTp8.png)

To make AI Agent use other scenario blocks, they must be **visually connected from the bottom** via the constructor interface.

There are two ways to do this:

- **Drag and drop** the desired node (e.g., HTTP Request, Telegram, Search, etc.) and connect it to the **bottom connector** of the AI Agent node.
- Or, click on the connector of the AI Agent and manually link it to an existing node.

Once connected, the linked node becomes available as a callable **tool** for the agent.

---

## Passing Parameters to Connected Tools

![brave_xiqvZfU4oX.png](./brave_xiqvZfU4oX.png)

To pass data from the AI Agent into the connected node, use the `fromAIAgent()` operator. This operator acts as a **placeholder for dynamic input** — the agent will automatically substitute it with relevant values during execution.

You can place `{{fromAIAgent("parameter_name"; "parameter description")}}` inside any input field of the connected node (such as `Request Body`, `Prompt`, `Text`, etc.).

This expression defines the expected argument for the tool:

- `"parameter_name"` — the internal name of the parameter
- `"parameter description"` — shown to the model and used in function schema

---

**Format:**

```
{{fromAIAgent("parameter_name"; "description")}}
```

**Example:**

![brave_h72MlkiWPY.png](./brave_h72MlkiWPY.png)

```
{{fromAIAgent("Email Body"; "Include an email body as either plain text")}}
```

---

This will register the node as an available function with:

- its **name** (taken from the node title),
- a **description** (taken from the `Tool Description` field),
- a list of **parameters** defined via `fromAIAgent()` expressions.

> ⚠️ Each node must have a unique name. If the name is missing, execution will fail.
> 

---

## Example: Weather Forecast (No Authorization Required)

![brave_dhJzbkPo2S.png](./brave_dhJzbkPo2S.png)

Let’s see how AI Agent works using a weather forecast request.

1. Place an **AI Agent** on the canvas.
2. In the `System Message` field, write:
    
    ```
    You are an assistant who can get the weather. Use the appropriate tool.
    ```
    
3. Add an `HTTP Request` node below it.
4. Name the node, e.g., `Weather forecast`
5. Set method to: `GET`
6. In the URL field, insert:
    
    ```
    https://wttr.in/{{fromAIAgent("city"; "City name for the weather forecast")}}?format=3
    ```
    
7. Launch AI Agent with the prompt:
    
    ```
    What's the weather like in Berlin?
    ```
    

As a result:

- The AI Agent receives the user request;
- analyzes that a weather forecast is needed;
- finds the node named `weather_forecast`, which uses `fromAIAgent` with the `city` parameter;
- substitutes the value “London” and makes the HTTP request;
- receives a brief forecast and sends it back to the user.

![brave_ahtqYMQUqg.png](./brave_ahtqYMQUqg.png)

---

## Example: Flexible Telegram Chatbot

AI Agent also works well in chatbot format. You can connect **multiple nodes** and let the model decide which to use.

For instance, here’s a basic Telegram chatbot:

![brave_kclShZkQHU.png](./brave_kclShZkQHU.png)

Telegram trigger connected to AI Agent, and from AI Agent to:

- `Web Search` (Perplexity);
- `Create Note` (Notion);
- `Current Weather`

In this scenario:

- If the user sends a general message, the agent simply replies with text without calling tools.

![brave_68lN7zAoQd.png](./brave_68lN7zAoQd.png)

- If the user asks to create note, it uses the `Create Note`node.

![brave_cua2kt18nf.png](./brave_cua2kt18nf.png)

- If the user asks to do something complex, such as getting the weather and searching for information online, two tools - `Web Search` and `Current Weather`  - will be triggered sequentially, and their results will be included in the response.

![brave_lL4T52yY0g.png](./brave_lL4T52yY0g.png)

Each node is registered with `fromAIAgent()` to pass parameters. The model understands which tool to use - and ignores the rest.

This makes the chatbot dynamic and modular.

---

## Multi-Agentic Workflows

While basic and modular agents are suitable for most simple and mid-level use cases, **multi-agentic workflows** allow for advanced coordination between multiple agents - each acting independently and fulfilling a specialized role.

![brave_TStf2Ey04h.png](./brave_TStf2Ey04h.png)

In these scenarios, agents can exchange data, trigger one another conditionally, and take on distinct responsibilities within a single request. For example, one agent may serve as a **copywriter**, another as an **editor**, and a third as a **fact-checker**. This separation of roles helps reduce hallucinations that typically occur when a single agent is overloaded with multiple objectives.

These patterns are particularly useful for:

- multi-step reasoning;
- tool orchestration;
- AI pipelines that require clear logic separation and internal feedback loops.

> 📘 For more detailed, step-by-step examples of how AI Agents behave and coordinate in different scenarios, see the full article:
> 
> 
> 👉 [AI Agents Examples](https://latenode.com/docs/ai-agents-examples)
> 

---