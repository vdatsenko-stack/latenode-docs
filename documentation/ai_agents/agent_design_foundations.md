---
title: Agent Design Foundations
description: Structuring agents using instructions and tools for consistent logic and behavior.
sidebar_position: 1
---

## Overview

Latenode AI Agents are powered by a built-in LLM and driven by two key components you control:

- **Instructions** — define the agent’s behavior, logic, and decisions.
- **Tools** — connected nodes that the agent can call to perform actions or retrieve data.

This page explains how to design those components effectively to build reliable, task-oriented agents.

![brave_JMGq4SJCaa.png](Agent%20Design%20Foundations%201f857d45a067804292dbd516b058ffa2/brave_JMGq4SJCaa.png)

---

## How It Works

Each time the AI Agent node receives a message, it:

1. Reads the instructions.
2. Analyzes the input.
3. Decides whether to call a tool or generate a direct reply.
4. Executes the logic based on your setup.

The quality of this process depends on how clearly you structure the agent’s instructions and tools.

![brave_CoiQwPMI3S.png](Agent%20Design%20Foundations%201f857d45a067804292dbd516b058ffa2/brave_CoiQwPMI3S.png)

---

## Instructions

Instructions define how the agent should behave. They are written in plain language and describe what the agent is allowed to do, how it should react to user inputs, and how to use the available tools.

![WDADesktopService_6szsCoof3M.png](Agent%20Design%20Foundations%201f857d45a067804292dbd516b058ffa2/WDADesktopService_6szsCoof3M.png)

---

## Recommendations

---

- Be explicit about allowed and disallowed actions.
- Include fallback logic for missing data.
- Keep instructions focused on one scenario.
- Use simple, direct language.
- **Clearly describe each tool’s purpose** — the agent relies on these descriptions to decide which tool to call.
- **Avoid vague tool labels or descriptions** — instead of “get info”, say “fetch current weather data” or “retrieve currency exchange rate”.

> 🧠 The more accurately you define what each tool does, the better the agent can reason and choose the right one for the task.
> 

---

## Tools

Tools are the external actions the agent can take. In Latenode, these are the connected nodes — such as HTTP requests, Notion, or Google Sheets.

![brave_ZHO76IKiB7.png](Agent%20Design%20Foundations%201f857d45a067804292dbd516b058ffa2/brave_ZHO76IKiB7.png)

---

### Best Practices

- Use descriptive names: `create_invoice`, `send_email`
- Avoid connecting too many tools per agent
- Design each tool to do one task well
- Test tools separately before connecting

![brave_uskvi2zwEO.png](Agent%20Design%20Foundations%201f857d45a067804292dbd516b058ffa2/brave_uskvi2zwEO.png)

```
{{fromAIAgent("email"; "Customer email address")}}
```

---