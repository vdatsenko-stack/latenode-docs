---
title: Guardrails for AI Agents
description: Strategies to control agent behavior, validate inputs and outputs, and ensure safe, predictable automation flows.
sidebar_position: 1
---

## Overview

Guardrails are strategies that help ensure AI Agents operate safely, consistently, and within clearly defined boundaries. They are especially important in production scenarios where unpredictable behavior can lead to incorrect tool usage, malformed outputs, or unintended consequences.

This guide explains how to implement guardrails on the levels of instructions, tools, and scenario logic using Latenode.

---

### Why Use Guardrails

AI Agents powered by large language models (LLMs) are inherently flexible and probabilistic. Without constraints, they can:

- Misinterpret vague input
- Call the wrong tools
- Generate unstructured responses
- Act outside of intended use

Guardrails help maintain stability, protect user experience, and prevent failures in downstream logic.

---

### Instruction-Level Guardrails

Use the **Instructions** field to define:

- What the agent is allowed and not allowed to do
- What conditions must be met before taking action
- How to handle missing or invalid inputs
- How to respond to irrelevant messages
- What tone or format the output should follow

### Example

📄 **Paste this into the System Message field:**

```
You handle refund requests only. Do not respond to unrelated topics. If the message is not about a refund, reply: “I can only help with refund-related questions.” Do not call any tool unless both email and order_id are provided. Use polite, brief language.
```

---

### Tool-Level Guardrails

Control behavior through connected tools:

- Only connect needed nodes
- Use clear parameter names (`user_email`, not `input1`)
- Validate required fields before execution
- Return structured error messages

### Output Example

```json
{
  "status": "error",
  "message": "Missing required field: email"
}
```

Avoid ambiguous outputs like `"done"` or `"ok"`.

---

### Scenario-Level Guardrails

Use logic blocks to enforce restrictions before or after the agent call:

- Roiting — validate input presence
- **Set Variables node** — normalize or sanitize input
- **Max Iterations** — prevent infinite tool loops

---

### Output Validation

Use the **Output JSON Schema** field to enforce response structure.

### Example schema:

```json
{
  "type": "object",
  "properties": {
    "status": { "type": "string" },
    "summary": { "type": "string" }
  },
  "required": ["status"]
}

```

Validate the output before continuing the scenario.

---

### Safety Prompts

Embed rules directly in the **System Message**, such as:

- "Never make assumptions about user identity."
- "Do not respond to unsupported topics."
- "Request confirmation before processing sensitive actions."

These reduce the risk of misuse or incorrect tool calls.

---

### Best Practices

- Limit agents to focused use cases
- Connect only necessary tools
- Validate inputs with logic blocks
- Enforce JSON output schemas
- Monitor execution logs regularly

---