---
title: SetVariables
description: Storing and retrieving variables within a scenario
sidebar_position: 9
---

![Untitled](/img/placeholder.webp)

## **Node Description**

**SetVariables** - an action-type node used to introduce a new variable into the script. The added variable can be subsequently used within the script.

See [Example scenario using SetVariables and the add operator](#broken-link-was-here)

:::tip
The added variable is unique within the script and can be changed during the execution of script nodes. If two **SetVariables** nodes are placed in sequence and both define the value of the same variable, the final value for the variable will be set by the last **SetVariables** node.
:::

## **Node Configuration**

To configure the **SetVariables** node, you need to fill in pairs of Key-Value fields.

- **(1) Key** - the field for entering the variable name;  
- **(2) Value** - the field for entering the variable's value.  

![chrome_fMOSSV3jL6.png](/img/placeholder.webp)

If a **SetVariables** node is connected to an **Iterator** node and is executed multiple times sequentially, the node's output is displayed with an indication of **Iterations**. Each iteration corresponds to its own output data.

![Untitled](/img/placeholder.webp)
