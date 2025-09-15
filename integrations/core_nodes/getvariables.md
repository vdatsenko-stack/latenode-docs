# GetVariables

Article Description: Storing and retrieving variables within a scenario.
Published: Yes
Suggested: No

![Untitled](./getvariables/untitled.png)

## **Node Description**

**GetVariables** - an action-type node used to retrieve and subsequently utilize a variable specified in the **SetVariables** node.

## **Node Configuration**

To configure the **GetVariables** node, you need to fill in the **Variables (1)** field with the corresponding name of the parameter from the previous **SetVariables (2)** node.


<aside>
⚠️ When using nodes for variable input and retrieval, it's important to follow a specific sequence of script nodes. The **SetVariables** node should be executed before the **GetVariables** node.

</aside>
