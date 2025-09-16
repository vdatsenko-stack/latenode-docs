---
title: Tool Design for AI Agents
description: Guidelines for building and naming tools agents can reliably use in automation flows.
sidebar_position: 1
---

## Overview

Tools are nodes connected to the AI Agent that perform specific actions or return data. They must be well-defined so the agent can use them reliably.

![brave_UIHvrbBbf0.png](Tool%20Design%20for%20AI%20Agents%201f857d45a0678064bc74d217953d3f9c/brave_UIHvrbBbf0.png)

---

### Naming

Agents refer to tools by their node names. Use clear, descriptive names that directly reflect the purpose of the tool.

### ✅ Good:

- `create_event_tool`
- `send_email_draft`
- `retrieve_calendar_tool`

### ❌ Poor:

- `Node 3`
- `tempTool`
- `doStuff`

> 🧠 Tool names are a key part of the agent's reasoning. If the name doesn’t convey the purpose, the agent may ignore or misuse the tool.
> 

---

### Behavior Guidelines

- Tools should be deterministic and return consistent results
- If the tool performs irreversible actions (e.g. sending an email, booking a meeting), ensure that the agent logic confirms intent before calling it
- Tools should return helpful errors when required input is missing or invalid — in a format the agent can interpret

---

### Tool Descriptions

Each tool should include a short description that explains its function. This is used by the agent to decide when (and if) to use it.

![brave_6HRDochjbQ.png](Tool%20Design%20for%20AI%20Agents%201f857d45a0678064bc74d217953d3f9c/brave_6HRDochjbQ.png)

> 📌 The tool description is not just for documentation — it is also passed via API and directly affects how the agent reasons about and chooses to call the tool. A vague or missing description can lead to the tool being ignored or misused.
> 

### ✅ Good:

> create_event_tool: "Creates a new calendar event using title, time, and participant list."
> 

### ❌ Poor:

> "Does stuff with the calendar"
> 
> 
> `"Test tool"`
> 

> 🔍 Keep descriptions short, specific, and action-oriented. Write them for the agent — not just for humans.
> 

---

### Testing

Always test each tool in isolation before connecting it to an agent. Validate that the tool:

- Executes reliably with real input
- Returns usable results
- Fails gracefully when needed

---