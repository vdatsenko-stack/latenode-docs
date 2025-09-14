# How to create your own nodes

Article Description: Step-by-step guide for building custom Latenode nodes.
Published: Yes
Suggested: No

**Scenario** type “**Nodul”** is often used for quickly integrating into another scenario that involves preconfigured and repetitive actions. 

Often a scenario of type **Nodul** is used to quickly embed an already customized and repetitive action into another, main scenario. The generated scenario of type Nodul is selectable in the list of all nodes and visually represents a customized node.

When executing **Production-branch** of the scenario that uses a scenario of type Nodul, the status of the scenario of type Nodul is important:

- If the status of the Nodul type scenario is **Pause** and the **Trigger on Webhook** node is the trigger for the main scenario, an error will occur during scenario execution indicating that the Nodul type scenario needs to be activated.

![Untitled](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/Untitled.png)

- If the status of the scenario is of the Nodul **Pause** type and the **Trigger on RunOnce** node is the trigger for the main scenario, no error will occur and the scenario will be executed.
- If the status of the scenario is of type Nodul **Active**, then no error will occur at any trigger of the main scenario and the scenario will be executed.

If the **Development-branch** of the scenario is running, no error will occur and the scenario will be executed.

Let's consider the algorithm for creating a **Nodul** scenario with an example.

We will create a scenario that records a string in a Google Sheet. Recording a string of text in a Google Sheet will be considered the repetitive action. Retrieving data from a source and transforming it, if necessary, will be considered the specific action.

To achieve this, you need to:

1. Create a **Scenario** of type **Scenario** with the preliminary name "String to Table," the result of which is a frequently repeated action, i.e., entering information into a Google Sheet:

![Untitled](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/Untitled%201.png)

- Add a **Trigger on Webhook** node to trigger the scenario;
- Add an **Add Single Row** node to write a row to the Google Sheet according to your settings**;**

![Untitled](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/Untitled%202.png)

- Add a **Webhook Response** node to return a response upon scenario execution**;**

![Untitled](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/Untitled%203.png)

- **Save** and activate the scenario;

2. In the "String to Table" scenario, replace the **Trigger on Webhook** node with a **NodulInput** node and replace the **Webhook Response** node with a **NodulOutput** node;

![QuickLook_llgjlaktLc.png](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/QuickLook_llgjlaktLc.png)

<aside>
💡

You can add XML code for the icon in the "Icon (svg)" field to make the scenario easier to identify.

![Untitled](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/Untitled%204.png)

</aside>

3. Change the current scenario name "String to Table" to "Al Tools/Actions/GoogleSheetAddRow";

![brave_LKGkcfKOuy.png](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/brave_LKGkcfKOuy.png)

<aside>
💡 The "Al Tools/Actions" part of the name is necessary for storing the scenario as an **Action** node in the Al Tools folder.

</aside>

4. Change the scenario type to **Nodul**;

![Untitled](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/Untitled%205.png)

<aside>
💡 Next to the scenario name, after changing the type, icons are used to denote "Nodul" (a sign of a **Nodul** type scenario) and "Private" (indicating no public access to the scenario).

</aside>

![brave_LKGkcfKOuy.png](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/brave_LKGkcfKOuy%201.png)

5. ****Add a parameter to the **NodulInput** node, for example, **User** - a text string. You can add parameters using the "Add Parameter" button.

![Untitled](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/Untitled%206.png)

6**.** Adjust the settings of the **Add Single Row** node so that the text added to the table row is equal to the value of the **User** parameter in the **NodulInput** node.

![Untitled](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/Untitled%207.png)

7**.** Add the execution result of the "Ok" scenario to the **Result** field of the **NodulOutput** node**;**

![QuickLook_7OfZdSdBUW.png](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/QuickLook_7OfZdSdBUW.png)

8. Create a scenario of type **Scenario** with the name "Get and Write Users," where the result of execution involves retrieving user data, transforming it, and writing the username to a Google Sheet.

![Untitled](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/Untitled%208.png)

- Add a **Trigger on Webhook** node to trigger the "Get and Write Users" scenario and pass JSON with user data into it:

```json
{
	"Surname": "John",
	"Name": "Doe",
	"Email": "a0128997@gmail.com"
}
```

- Add a **JavaScript** node to create the full user name based on the data received in the **Webhook** using code:

```jsx
export default async function run({execution_id, input, data}) {

const SurName = data["{{1.body.Surname}}"];
const Name = data["{{1.body.Name}}"];
const FullName = Name +' '+ SurName;

    return {
      FullName
    }
}
```

![Untitled](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/Untitled%209.png)

- Add a **GoogleSheetAddRow** node (**Nodul** type scenario) to write the full user name obtained in the **JavaScript** node into a Google Sheet;

![Untitled](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/Untitled%2010.png)

- Add a **Webhook response** node to receive a response from the **GoogleSheetAddRow** node indicating successful execution.

![Untitled](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/Untitled%2011.png)

9. **Save** and activate the scenario.

The result of the scenario is the recording of a row in a Google Sheet and a successful row recording response. 

![Untitled](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/Untitled%2012.png)

In the future, if user information comes from new sources or requires different processing, the **GoogleSheetAddRow** node can be reused without reconfiguring the logic for recording rows in Google Sheets. 

![Untitled](How%20to%20create%20your%20own%20nodes%2019e57d45a067802d94caed9118a7d080/Untitled%2013.png)