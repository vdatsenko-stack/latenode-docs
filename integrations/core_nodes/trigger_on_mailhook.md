# Trigger on Mailhook

Article Description: Configuring a mailhook trigger to initiate automation.
Published: Yes
Suggested: No

![brave_lIUpzZvnKA.png](Trigger%20on%20Mailhook%201f857d45a06780888f70d07467dbd0d4/brave_lIUpzZvnKA.png)

## Node Description

Mailhook is a trigger node that launches a scenario when an email is received at a unique, automatically generated email address. It's used to automate processes based on incoming emails - such as handling notifications, client messages, or system alerts.

![brave_VO9YoUWYup.png](Trigger%20on%20Mailhook%201f857d45a06780888f70d07467dbd0d4/brave_VO9YoUWYup.png)

---

## Node Configuration

Once the Mailhook node is added, two email addresses are automatically generated:

![brave_Wv5zPto3w4.png](Trigger%20on%20Mailhook%201f857d45a06780888f70d07467dbd0d4/brave_Wv5zPto3w4.png)

- **Production Email** — used in a published scenario. The scenario is triggered every time an email is received. It remains active as long as the scenario is running.
- **Development Email** — used for testing. The scenario is triggered once upon receiving an email, and then it automatically stops.

Both email addresses are shown in the `Path` field of the node and can be copied for use.

---

## Usage

To trigger the scenario, simply send an email to one of the Mailhook addresses.

Examples:

- Manually sending an email from a client like Gmail or Outlook;
- Receiving automated email notifications from third-party services;
- Using Mailhook as an entry point for client communications.

---

## Input

Mailhook does not accept data from upstream nodes. It triggers the scenario based solely on incoming emails.

---

## Output

The Mailhook node returns a structured JSON object containing the full details of the received email, including metadata, headers, message content, and attachments.

![brave_kjEeUU6NTB.png](Trigger%20on%20Mailhook%201f857d45a06780888f70d07467dbd0d4/brave_kjEeUU6NTB.png)

### Example output:

```json
{
  "headers": [
    {
      "key": "subject",
      "value": "Example Subject"
    },
    {
      "key": "from",
      "value": "Sender Name <sender@example.com>"
    }
    // ...
  ],
  "from": {
    "address": "sender@example.com",
    "name": "Sender Name"
  },
  "to": [
    {
      "address": "your-mailhook-id@mailhook-latenode.com",
      "name": ""
    }
  ],
  "subject": "Example Subject",
  "messageId": "<unique-message-id@example.com>",
  "date": "2025-05-19T09:26:58.000Z",
  "html": "<div>Hello</div>",
  "text": "Hello",
  "attachments": [
    {
      "filename": "document.pdf",
      "mimeType": "application/pdf",
      "disposition": "attachment",
      "related": true,
      "contentId": "<unique-content-id>",
      "content": {}
    }
  ]
}

```

### Fields explained:

- `headers` — array of all original email headers (`key`/`value` pairs).
- `from` — sender’s name and email address.
- `to` — list of recipients (usually just your Mailhook address).
- `subject` — email subject line.
- `messageId` — unique identifier of the email.
- `date` — date and time the email was sent (ISO format).
- `html` — HTML version of the email body.
- `text` — plain text version of the email body.
- `attachments` — array of file objects attached to the email.

### Attachment object fields:

- `filename` — name of the attached file.
- `mimeType` — MIME type of the file.
- `disposition` — usually `"attachment"`, may also be `"inline"`.
- `related` — `true` if it's part of the email content (e.g., embedded image).
- `contentId` — identifier for inline referencing (e.g. `<image1@cid>`).
- `content` —  file content

---

## Testing and Debugging

For debugging, use the Development Email address. The scenario will run once and stop, making it safe to test logic and inspect the structure of the output data.

---