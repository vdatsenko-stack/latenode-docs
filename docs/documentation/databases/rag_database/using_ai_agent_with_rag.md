---
title: Using AI Agent with RAG
description: Connect AI Agent to RAG Search to build smart, document-aware automation flows.
sidebar_position: 1
---

![brave_gM7qog41yj.png](./using_ai_agent_with_rag/brave_0lqnfguht3.png)

### Working with AI Agent

Example scenario with an **AI Agent** using RAG Search as a tool:

![brave_g4WNTGL7Ia.png](./using_ai_agent_with_rag/brave_0lqnfguht3.png)

---

### Prompt Configuration for Agent

The agent is configured with a system prompt instructing it to use the RAG Search tool when the user asks for documentation-related information:

![brave_0LQnFGuHt3.png](./using_ai_agent_with_rag/brave_0lqnfguht3.png)

---

### RAG Search Tool Setup

The RAG Search node is connected to the agent using `fromAIAgent()`. A storage is selected, `top_k` is set, and the tool description helps the model understand its capabilities.

---

![brave_PbRbclOrKm.png](./using_ai_agent_with_rag/brave_0lqnfguht3.png)

### End-to-End Example

1. The user sends a question to the agent
2. The agent uses RAG Search to retrieve relevant chunks
    

    ![brave_cUkNBIC51U.png](./using_ai_agent_with_rag/brave_0lqnfguht3.png)
    
3. The agent composes and returns a final response
    
    ![brave_czantk1C8F.png](./using_ai_agent_with_rag/brave_0lqnfguht3.png)

    ![brave_cUkNBIC51U.png](./using_ai_agent_with_rag/brave_0lqnfguht3.png)
    
3. The agent composes and returns a final response
    
    ![brave_czantk1C8F.png](./using_ai_agent_with_rag/brave_0lqnfguht3.png)
