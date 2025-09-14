# JWT token generation

Article Description: Detailed instructions on creating and signing JWT tokens
Published: No
Suggested: No

The JWT token must be signed using an algorithm that supports a private and public key.

Permissible JWT token signing algorithms:

- RS256
- RS384
- RS512
- ES256
- ES256K
- ES384
- ES512
- PS256
- PS384
- PS512

The JWT token payload has the following format:

```json
{
  "tenant_id": 1,
  "user_id": "1",
  "plan_id": INITIAL_PLAN_ID
}
```

Here, `tenant_id` is a numeric value assigned to your organization by the Latenode platform. `user_id` is a unique string value that identifies a specific user within your organization. To specify the initial subscription for a new user, the `plan_id` parameter must be filled with the numeric ID of the plan you created in the admin panel.

To sign the token, use the private key that you generated when registering the public key within the Latenode platform.

Creating a JWT token is sufficient to register or authorize a user on the Latenode platform. Use this token in the `sdk.configure` method. If the user is new, they will be automatically registered and authorized.