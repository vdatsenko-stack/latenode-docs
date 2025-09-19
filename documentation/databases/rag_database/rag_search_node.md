---
title: RAG Search Node
description: Search documents via vector similarity using natural language queries within scenarios.
sidebar_position: 1
---

![image.png](/img/placeholder.webp)

### Node: RAG Search

To use stored data inside a scenario, connect the **RAG Search** node from the **AI Agent → Actions** category.

![brave_oaJlOzWTyP.png](/img/placeholder.webp)

---

### Main Fields (RAG Search Node)

| Field | Description |
| --- | --- |
| **Storage** | Select the storage to search in |
| **Question** | Natural language query |
| **Top_k** | Number of chunks to return (default: 5, max: 20) |

---

### How It Works

1. You upload a document into a storage
2. The document is automatically split into chunks and indexed
3. RAG Search receives a query and performs embedding-based retrieval
4. The node returns raw chunks that match the query

---

### Node Execution Example

A natural language query is passed into the node, which returns a list of matching chunks based on the specified `top_k`.

![brave_KuSh6PXIlW.png](/img/placeholder.webp)

---