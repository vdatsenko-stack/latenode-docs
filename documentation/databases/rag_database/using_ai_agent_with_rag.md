---
title: Using AI Agent with RAG
description: Connect AI Agent to RAG Search to build smart, document-aware automation flows.
sidebar_position: 1
---

<<<<<<< HEAD
![brave_gM7qog41yj.png](/img/placeholder.webp)
=======
![brave_gM7qog41yj.png](/img/placeholder.webp)
>>>>>>> 61c02578c222cfc13f406aedd8bc847fdf67cd50

### Working with AI Agent

Example scenario with an **AI Agent** using RAG Search as a tool:

<<<<<<< HEAD
![brave_g4WNTGL7Ia.png](/img/placeholder.webp)
=======
![brave_g4WNTGL7Ia.png](/img/placeholder.webp)
>>>>>>> 61c02578c222cfc13f406aedd8bc847fdf67cd50

---

### Prompt Configuration for Agent

The agent is configured with a system prompt instructing it to use the RAG Search tool when the user asks for documentation-related information:

<<<<<<< HEAD
![brave_0LQnFGuHt3.png](/img/placeholder.webp)
=======
![brave_0LQnFGuHt3.png](/img/placeholder.webp)
>>>>>>> 61c02578c222cfc13f406aedd8bc847fdf67cd50

---

### RAG Search Tool Setup

The RAG Search node is connected to the agent using `fromAIAgent()`. A storage is selected, `top_k` is set, and the tool description helps the model understand its capabilities.

---

<<<<<<< HEAD
![brave_PbRbclOrKm.png](/img/placeholder.webp)
=======
![brave_PbRbclOrKm.png](/img/placeholder.webp)
>>>>>>> 61c02578c222cfc13f406aedd8bc847fdf67cd50

### End-to-End Example

1. The user sends a question to the agent
2. The agent uses RAG Search to retrieve relevant chunks
    
<<<<<<< HEAD
    ![brave_cUkNBIC51U.png](/img/placeholder.webp)
    
3. The agent composes and returns a final response
    
    ![brave_czantk1C8F.png](/img/placeholder.webp)
=======
    ![brave_cUkNBIC51U.png](/img/placeholder.webp)
    
3. The agent composes and returns a final response
    
    ![brave_czantk1C8F.png](/img/placeholder.webp)
>>>>>>> 61c02578c222cfc13f406aedd8bc847fdf67cd50
