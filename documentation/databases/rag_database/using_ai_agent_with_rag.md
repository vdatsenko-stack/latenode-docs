# Using AI Agent with RAG

Article Description: Connect AI Agent to RAG Search to build smart, document-aware automation flows.
Published: Yes
Suggested: No

![brave_gM7qog41yj.png](Using%20AI%20Agent%20with%20RAG%2024657d45a067803fbe6ccd311ef0dd97/brave_gM7qog41yj.png)

### Working with AI Agent

Example scenario with an **AI Agent** using RAG Search as a tool:

![brave_g4WNTGL7Ia.png](Using%20AI%20Agent%20with%20RAG%2024657d45a067803fbe6ccd311ef0dd97/brave_g4WNTGL7Ia.png)

---

### Prompt Configuration for Agent

The agent is configured with a system prompt instructing it to use the RAG Search tool when the user asks for documentation-related information:

![brave_0LQnFGuHt3.png](Using%20AI%20Agent%20with%20RAG%2024657d45a067803fbe6ccd311ef0dd97/brave_0LQnFGuHt3.png)

---

### RAG Search Tool Setup

The RAG Search node is connected to the agent using `fromAIAgent()`. A storage is selected, `top_k` is set, and the tool description helps the model understand its capabilities.

---

![brave_PbRbclOrKm.png](Using%20AI%20Agent%20with%20RAG%2024657d45a067803fbe6ccd311ef0dd97/brave_PbRbclOrKm.png)

### End-to-End Example

1. The user sends a question to the agent
2. The agent uses RAG Search to retrieve relevant chunks
    
    ![brave_cUkNBIC51U.png](Using%20AI%20Agent%20with%20RAG%2024657d45a067803fbe6ccd311ef0dd97/brave_cUkNBIC51U.png)
    
3. The agent composes and returns a final response
    
    ![brave_czantk1C8F.png](Using%20AI%20Agent%20with%20RAG%2024657d45a067803fbe6ccd311ef0dd97/brave_czantk1C8F.png)