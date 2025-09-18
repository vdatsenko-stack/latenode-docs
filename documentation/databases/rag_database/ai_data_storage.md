---
title: AI Data Storage
description: Store, manage, and index documents with chunking and embedding for semantic search.
sidebar_position: 1
---

![brave_gM7qog41yj.png](./brave_gM7qog41yj.png)

### Purpose

AI Data Storage (RAG) is a component of the Latenode platform designed for storing and indexing text files, images, and other knowledge sources.

> 🧠 This tool is primarily intended to be used in conjunction with the AI Agent — it provides documents in the form of chunks, which the agent can then use to generate responses.
> 

Use cases include:

- Uploading and storing structured or unstructured content
- Generating embedding vectors for fast semantic search
- Running natural language search queries
- Connecting to the **RAG Search** node inside a scenario

---

### How to Access

You can access this feature via **Data Storage → AI Data Storage (RAG)** in the left-hand side menu.

![brave_l3S0LYq3WK.png](./brave_l3S0LYq3WK.png)

---

### Creating Storage

Click **Create Storage** to open the setup modal:

![brave_awRQKmbKQs.png](./brave_awRQKmbKQs.png)

Fill in the required fields: **Storage Name, Chunk Size, Chunk Overlap**

![brave_nHbU4QmKzu.png](./brave_nHbU4QmKzu.png)

---

### What are Chunk Size and Overlap?

- **Chunk Size** — the number of tokens in a single chunk. Smaller chunks provide higher accuracy but increase the total number of chunks.
- **Chunk Overlap** — the percentage of token overlap between neighboring chunks. Helps maintain context across them.

---

### Managing Storage

Created storages are displayed in a table:

![brave_R2vB1tRsYc.png](./brave_R2vB1tRsYc.png)

| Field | Description |
| --- | --- |
| Name | Storage name |
| Chunk Size | Number of tokens per chunk |
| Chunk Overlap | Overlap between chunks in % |
| Created | Creation date |
| Updated | Last updated date |

---

### Uploading Files

Open a storage to access the upload interface. Drag-and-drop is supported.

![brave_B5v1L58izT.png](./brave_B5v1L58izT.png)

After uploading:

- Each file is processed and indexed (status: **Processing**)
- Files are listed with size, upload date, and status
- Editing or downloading files is currently **not supported**

![brave_5f8Vn9IysJ.png](./brave_5f8Vn9IysJ.png)

---

### Features & Limits

| Feature | Status |
| --- | --- |
| OCR | Supported (English and Russian) |
| Image Upload | Supported (if image contains text) |
| File Editing | Not supported |
| File Download | Not yet available |
| Automatic Indexing | Yes |
| Supported Formats | PDF, TXT, JSON, MD, PNG, JPG, and more |
| Upload via scenario | Not yet supported |

---

### Technical Details

| Parameter | Value |
| --- | --- |
| Max file size | 20 MB (50 MB planned) |
| Embedding model | Cloudflare + LlamaIndex |
| Vector limit | 5 000 000 vectors per account |
| Billing | Charged only during file upload (PNP credits) |

---

### Billing

- PNP credits are deducted upon file upload
- Billing is based on pages/chunks
    - Example: **1 page ≈ 6600 microcredits**
- Queries via RAG Search **are not additionally billed**

---

> 🧪 **RAG is currently in beta. Pricing, behavior, and limitations may change.**
> 

---