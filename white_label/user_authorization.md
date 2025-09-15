---
title: User Authentication
description: Instructions for tenant user auth
sidebar_position: 4
---

## **User Authentication**

A key advantage of Latenode integration is its authentication simplicity. Users sign in through your application, receiving a special token to access Latenode functions. The system uses JSON Web Token (JWT), secured by a unique private key from Latenode. The JWT contains user data from your system. After Latenode platform verifies the JWT signature, the user receives client privileges and can work with integrations within their account.

## Signature Private Key

Before you can generate a JWT, you will need a valid **signature key** from Latenode. Contact support to obtain the key.

<aside>
💡

Keep this key in a secure location - it will be used to verify user authentication in your application.

</aside>

## **Creating and Signing JWT**

Now that you have the signature key, you can create and sign a JSON Web Token (JWT). To do this, you can use one of the [libraries](https://jwt.io/libraries) suitable for your backend.

The JWT that you generate for the user must have the following properties:

- **Header** must specify the encryption algorithm and look something like this::
    
    ```json
    {
      "alg": "RS256",
      "typ": "JWT"
    }
    ```
    
    Supported JWT algorithms:
    
    - RS256, RS384, RS512
    - ES256, ES256K, ES384, ES512
    - PS256, PS384, PS512
- Private signature key issued by Latenode
- Payload with the following data:
    - `tenant_id` - Required numeric field. Provided by the Latenode platform.
    - `user_id` - Required field. ID of the user in your organization. A unique string value that uniquely identifies the user.
    - `plan_id` - Optional numeric field. ID of the tariff plan that will be set for the user if this is the user's first authorization on the platform. This field does not need to be filled in afterwards.
    
    JWT `Payload` example
    
    ```json
    {
      "tenant_id": 1,
      "user_id": "1",
      "plan_id": 35
    }
    ```
    

Creating a JWT token is sufficient to register or authorize a user on the Latenode platform. Use this token in the [`configure`](Installing%20the%20embedded%20SDK%201b657d45a06780a8af8bca11990b981c.md) sdk method. If the user is new, they will be automatically registered and authorized. 

---

## ⚠️ Known Browser Limitations (Safari & Incognito Mode)

When using the standard authentication flow inside an iframe, some browsers — notably **Safari** and **incognito/private mode** in Chrome — may block third-party cookies. Since our authorization relies on cookies inside an iframe, this may lead to failed login attempts.

**Recommendations:**

- If you're using **Safari**, you can:
    - Add the iframe parent domain to the list of trusted sites
    - Or disable “Prevent cross-site tracking” in Safari settings
- If you're using **incognito mode**, please use a regular browser session instead — incognito mode disables third-party cookie storage by default.
