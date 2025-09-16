# HTTP Request

Article Description: Sending and receiving HTTP requests for API communication.  
Published: Yes  
Suggested: No  

![Untitled](./http_request/untitled.png)

## **Node Description**

**HTTP Request** — an action-type node used to send requests to an external application's API.  

This node supports sending requests over both HTTP and HTTPS protocols.

## **Node Configuration**

To configure the **HTTP Request** node, you need to fill in both required and optional fields.  

The required **fields** are:

- **URL;**
- **Method.**

![brave_qmd1FjaegH](./http_request/brave_qmd1fjaegh.png)

### **URL**

The **URL** field is where you input the URL of the external application's API that you want to send a request to.  

> 💡 Variables and parameters from other nodes can be inserted into the URL using the "?" symbol

### **Method**

The field is used to enter the name of the method used in the request (GET/POST/PUT/PATCH/DELETE).  

![brave_9UDYz3uyVB](./http_request/brave_9udyz3uyvb.png)

### **Proxy**

The configuration block with fields includes:

- **Enter proxy address**: A field for entering the address of the proxy through which the request should be routed.  
- **Enter login**: A field for entering credentials for using the proxy.  
- **Enter password**: A field for entering credentials for using the proxy.  

These fields are filled in when access to the external application's API is restricted to the local network.  

![brave_DrFvMPYCCL](./http_request/brave_drfvmpyccl.png)

### **Body**

The block of fields for configuring and filling in the request body includes:  

![brave_KSVXnu8vRP](./http_request/brave_ksvxnu8vrp.png)

Before filling in the field, you need to select the format in which the request body will be transmitted (you can see a more detailed description [here](https://developer.mozilla.org/ru/docs/Web/HTTP/Methods/POST)):

- **raw**;  
- **form-data;**  
- **x-www-form-urlencoded.**

When selecting the **form-data** and **x-www-form-urlencoded** options, you have access to:

- The **Add a param** button (**1**) for adding a new Key-Value pair;  
- The **Delete** button (**2**) for removing a Key-Value pair.  

![brave_uTnyCtlTeV](./http_request/brave_utnyctltev.png)

### **Headers**

The block of fields for filling in request headers: 

- **Key** — a field for entering additional information about the request. For example, the format — **content-type;**  
- **Value** — a field for entering the value of additional information about the request. For example, the value of the format — **application/json.**

To add a new Key-Value pair, use the **Add a header** button (**1**). To delete a Key-Value pair, use the **Delete** button (**2**).  

![brave_YPKF70KhOm](./http_request/brave_ypkf70khom.png)

> 💡 When authorizing via a Bearer token, one of the request headers should be the pair with the Key `Authorization` and the Value `Bearer <token>`.

### **Authorization**

A block of fields for selecting an authentication method and entering authentication credentials.  
The following authentication methods are available for selection:

- **Without authentication** — for sending requests that do not require authentication or require authentication via a Bearer token;  
- **Basic auth** — for sending requests that require basic authentication;  
- **Digest auth** — for sending requests that require digest authentication;  
- **NTLM auth** — for sending requests that require NTLM authentication.  

When choosing the authentication methods **Basic auth/Digest auth**, you need to enter credentials, which include a username and password.  
In the case of selecting the **NTLM auth** method, you must input a username, password, and domain.  

![brave_lHFn9bRWCs](./http_request/brave_lhfn9brwcs.png)

### **Hiding data in history**

A toggle switch for data hiding.  

Additional logic for data concealment can be configured in the field that appears when clicking the **Advanced Settings** button.

## **Quick node configuration**

Applications that provide APIs may specify HTTP request examples in CURL format. For example:  

```bash
curl -X GET https://api.test.com/v1/email/balance \
     -H 'Content-Type: application/json' \
     -H 'Authorization: Bearer $API_TOKEN'


To quickly configure an **HTTP Request** node, follow these steps:

1. Click on **Create from Example (CURL)**.

![brave\_Jo9NUba3JO](./http_request/brave_jo9nuba3jo.png)

2. Copy the example request and paste it into the modal window. Then, click the **Create** button:

![Untitled 1](./http_request/untitled_1.png)

3. Review the filled fields for the **HTTP Request** node.

![Untitled 2](./http_request/untitled_2.png)


