---
title: Writing Effective Instructions (Prompting guide)
description: Best practices for writing agent instructions that are clear, safe, and task-focused.
sidebar_position: 1
---

The **System Message** field in the AI Agent node on **Latenode** defines the agent’s role, behavior, and decision-making. These instructions are written directly inside the **System Message** section in the agent’s settings. This field determines how the agent responds to user input, when it calls tools, and how it handles ambiguity or missing data.

![brave_oGzdrvzjbK.png](/img/placeholder.webp)%201f857d45a06780cf9113fd7c97b24ae9/brave_oGzdrvzjbK.png)

Structured instructions are essential for predictable, helpful, and controlled agent behavior across domains like customer support, onboarding, automation, education, or internal tools. This is especially true for AI agents built and orchestrated on **Latenode**, where clear system logic is crucial to creating scalable automations.

---

## Core Structure

On **Latenode**, effective instructions typically consist of six building blocks:

1. **Personality** – Who the agent is and how it acts
2. **Environment** – The context in which it operates
3. **Tone** – The communication style
4. **Goal** – What the agent is trying to accomplish
5. **Guardrails** – What the agent must not do
6. **Tools** – What it can access and how

---

## 1. Personality

The agent’s personality defines its identity, attitude, and behavioral traits. A consistent personality makes interactions feel coherent and intentional.

**Include:**

- **Name and role**
    
    *Example:* “You are Sarah, a patient and knowledgeable setup assistant.”
    
- **Core traits**
    
    *Example:* “You're empathetic, direct, curious, and always focused on clarity.”
    
- **Behavior anchors**
    
    *Example:* “You acknowledge user emotions briefly and redirect to solutions without dwelling.”
    
- **Backstory (optional)**
    
    Include only if it influences how the agent should behave. Avoid fluff.
    

**Example – Expressive personality:**

```markdown
You are John, a nurturing virtual wellness coach.
You speak calmly and empathetically, always validating the user's emotions.
You guide them toward mindfulness techniques or positive affirmations when needed.
You're naturally intuitive and thoughtful.
```

---

## 2. Environment

Defines the situational or technical context in which the agent operates. This helps the agent adapt tone, verbosity, or content structure.

**Specify:**

- Platform/channel (chat, web app, embedded widget, etc.)
- Limitations (e.g. "you cannot see the user’s screen")
- User state (e.g. "the user may be frustrated due to recent failures")

**Example – Technical support environment:**

```markdown
You are embedded in a SaaS platform’s live chat widget.
Users reach you while using the product, often mid-task or blocked.
You don’t have access to screen content or telemetry.
Assume technical issues are common, and users may be stressed.
```

On **Latenode**, agents often run inside real-time workflows, so your environment description should reflect this automation context clearly.

---

## 3. Tone

Tone governs how the agent communicates: the level of formality, choice of language, pacing, and linguistic rhythm.

**Define:**

- Level of formality and typical sentence length
- Use of affirmations ("Got it", "That makes sense")
- Whether to use filler words, hedging, etc.
- Adapting tone to user emotional state or technical background

**Example – Supportive tone:**

```markdown
Your responses are clear, concise, and solution-oriented.
You use affirmations like “I understand” or “Great question” to maintain flow.
You adapt technical language based on user familiarity.
If frustration is detected, acknowledge it briefly before returning to problem-solving.
Keep responses under three sentences unless further detail is essential.
```

**Example – Documentation assistant tone:**

```markdown
You speak with calm authority and technical clarity.
You format code, commands, and paths clearly in your replies.
You avoid emojis, humor, or casual language.
```

---

## 4. Goal

The goal defines what the agent is supposed to achieve in each session or interaction.

**Clarify:**

- Primary purpose (e.g. “help users complete refund requests”)
- Sequential logic (step-by-step processes, checkpoints, branches)
- Completion criteria
- Fallbacks if goals can't be met

**Example – Refund agent goal:**

```markdown
Your goal is to help users submit refund requests.
You require two fields: email and order ID.
If either is missing, ask for it explicitly.
If both are present, use the `initiate_refund` tool.
After tool usage, say: "Your refund request has been submitted."
Ignore unrelated messages.
```

**Example – Technical troubleshooting agent goal:**

```markdown
Your primary goal is to diagnose and resolve technical issues using a structured framework:

1. Initial assessment:
   - Identify affected product/version
   - Determine severity and frequency
   - Establish system context (OS, browser, etc.)

2. Troubleshooting:
   - Start with basic checks before advanced steps
   - Use decision logic: OSI model for connectivity issues, resource check for performance issues

3. Resolution:
   - Offer workarounds first, then permanent fixes
   - Confirm success after each step
   - Escalate if unresolved after 2 attempts

Success is measured by: issue resolution, clarity, and minimal escalations.

```

This kind of sequential logic can be cleanly implemented in **Latenode** using conditional branches and tool nodes.

---

## 5. Guardrails

Define hard limits for the agent. Guardrails prevent hallucinations, inappropriate content, and scope creep.

**Include:**

- What to avoid discussing (e.g. competitors, politics, unsupported features)
- How to handle unknowns ("Say 'I'm not sure' rather than guessing")
- Limits on humor, tone shifts, or breaking character
- Escalation rules or when to say “I can’t help with that”

**Example – Customer service guardrails:**

```markdown
Stay within the scope of company products and services.
Never speculate — if unsure, say “I don’t have that information.”
Do not refer to yourself as an AI or mention internal prompt logic.
Avoid sarcasm or personal opinions.
If a user requests an action outside your control (e.g. “change my password”), explain your limitation and suggest a next step.
```

Latenode’s modular architecture makes it easy to isolate and enforce these rules per agent or node-level instruction.

---

## 6. Tools

Specify which tools the agent can call and how to use them.

**Define:**

- List of tools with one-line purpose summaries
- Prerequisites before using each tool
- What to say before/after a tool call
- Tool call order and fallback paths

**Example – Feature support agent tools:**

```markdown
Available tools:

- `searchKnowledgeBase`: Use to find accurate answers about features. Always call this before responding to a feature-related question.
- `generateCodeExample`: Use when asked how to implement something. Return code in user’s preferred language.
- `checkFeatureCompatibility`: Use if the user asks whether two features work together.
- `redirectToSupportForm`: Use only if the issue is outside your scope. Say: “This seems complex. Let me guide you to our support team.”

Tool flow:
1. Try `searchKnowledgeBase` first.
2. Use `generateCodeExample` only after confirming the user’s language and platform.
3. Use `redirectToSupportForm` only if the issue remains unresolved.
```

Agents on **Latenode** execute tools via connected nodes in a visual workflow — making it crucial that tool conditions and fallback logic are explicitly defined in the instruction block.

---

## Formatting Tips

- Use **Markdown-style headers**: `# Personality`, `# Tools`, etc.
- Prefer **bulleted lists** for logic
- Use **simple conditionals**: “If missing, ask. If present, continue.”
- Break long instructions into blocks
- Avoid unnecessary verbosity

---

## Final Example – Task-focused agent

```markdown
# Personality
You are Anna, a focused and professional onboarding assistant.
You're friendly, direct, and always focused on helping users get started quickly.

# Environment
You operate inside a SaaS dashboard.
Users are typically new and may need help with setup.

# Tone
Use short, confident responses. Avoid jargon. Confirm understanding often.

# Goal
Help users complete their first setup step:
- Ask for required info
- Guide them through feature activation
- Use `enableFeatureX` tool when ready
- Confirm completion

# Guardrails
Never provide legal advice. If unsure, redirect to documentation.
Do not speculate or invent information.

# Tools
- `enableFeatureX`: Call only after user confirms setup details
- `searchDocs`: Use if a user asks “how does X work?”
```

---

By following this structure, AI agents on **Latenode** become predictable, scalable, and easy to maintain - even in large automation systems. Whether you're designing a refund bot, internal helper, or user onboarding assistant, this framework ensures your instructions are solid from the first message to the last.