# Adding and configuring authorizations

Article Description: Setting up authentication for third-party integrations.
Published: Yes
Suggested: No

## New authorization

To add a new  authorizations, you need to click on the **New authorization** button on the page with the list of authorizations.

![Untitled](.adding_and_configuring_authorizations/Untitled.png)

After clicking the add authorization button, you should choose the desired service from the provided list in the **Choose a service** window**.**

<aside>
⚠️ It is possible to add authorization after creating a node by clicking the **New authorization** button **(1)**. When adding authorization from the node, there is **no need to select a service**, it is determined automatically **(2)**.

</aside>

![Untitled](Adding%20and%20configuring%20authorizations%2019157d45a0678007aa93feb28c5509a7/Untitled%201.png)

## Authorization Setup

To configure a authorization, for example, to Google Sheets, you need to:

1. Select the appropriate service in the **Choose a Service** window**:**

![Untitled](Adding%20and%20configuring%20authorizations%2019157d45a0678007aa93feb28c5509a7/Untitled%202.png)

2. Choose the required authorization and click on the **Sign in with Google** button:

![Untitled](Adding%20and%20configuring%20authorizations%2019157d45a0678007aa93feb28c5509a7/Untitled%203.png)

3. Authenticate using your Google account;

![Untitled](Adding%20and%20configuring%20authorizations%2019157d45a0678007aa93feb28c5509a7/Untitled%204.png)

4. Confirm that you have the necessary rights for Latenode and click on the **Continue** button:

![Untitled](Adding%20and%20configuring%20authorizations%2019157d45a0678007aa93feb28c5509a7/Untitled%205.png)

## Using the authorization

To utilize the added authorization when configuring script nodes, follow these steps: 

1. Choose and add a specialized node that corresponds to the configured authorization. For example, **Add Quick Event:**

![chrome_lgzmem6vTX.png](Adding%20and%20configuring%20authorizations%2019157d45a0678007aa93feb28c5509a7/chrome_lgzmem6vTX.png)

2. Click the **Create an authorization** button **(1)** and choose the corresponding authorization from the list **(2).**

<aside>
⚠️ Only authorizations that correspond to the node are displayed in the list. For example, only **Google Calendar** authorizations will be displayed for **Google Calendar** group nodes.

</aside>

![Untitled](Adding%20and%20configuring%20authorizations%2019157d45a0678007aa93feb28c5509a7/Untitled%206.png)

1. Review the value in the **Connection** field and fill in the other node configuration fields;

![Untitled](Adding%20and%20configuring%20authorizations%2019157d45a0678007aa93feb28c5509a7/Untitled%207.png)

4. To modify authorization, click on the edit icon **(1)** and select a new authorization **(2)**. The current authorization is marked in blue **(3)**.

![Untitled](Adding%20and%20configuring%20authorizations%2019157d45a0678007aa93feb28c5509a7/Untitled%208.png)

## All Authorizations

Existing authorizations are available for viewing on the **Authorizations** page**.**

You can view the main attributes of a authorization in the respective columns of the **Authorizations** table**:**

![Untitled](Adding%20and%20configuring%20authorizations%2019157d45a0678007aa93feb28c5509a7/Untitled%209.png)

- (**1**) Authorization name - in the **Name** column. It can be edited if needed by clicking on it;
- (**2**) Service authorization - in the **Service** column. For example, Google Sheets;
- (**3**) Authorization creation Date - in the **Created Date** column. Using the gear icon, you can reconfigure the column to display the date of modification instead of the creation date;
    
    ![chrome_cpJgGy49kq.png](Adding%20and%20configuring%20authorizations%2019157d45a0678007aa93feb28c5509a7/chrome_cpJgGy49kq.png)
    
- Menu (**4**) available for each row and allowing you to:

**Reauthorize** if necessary;

**Delete** the authorization. 

![Untitled](Adding%20and%20configuring%20authorizations%2019157d45a0678007aa93feb28c5509a7/Untitled%2010.png)

<aside>
⚠️ After clicking the **Delete** button and confirming the action in the modal window, the authorization will be permanently deleted.

</aside>

![Untitled](Adding%20and%20configuring%20authorizations%2019157d45a0678007aa93feb28c5509a7/Untitled%2011.png)

For ease of viewing and managing authorizations, a text filter is available for entering the desired authorization name.

![Untitled](Adding%20and%20configuring%20authorizations%2019157d45a0678007aa93feb28c5509a7/Untitled%2012.png)
