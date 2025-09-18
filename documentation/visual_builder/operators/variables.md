---
title: Variables
description: Managing and manipulating variables effectively.
sidebar_position: 1
---

:::tip
💡 You can use our GPT Assistant for help with **Latenode operators**:

👉 [**Latenode Operators Assistant**](https://chatgpt.com/g/g-67d704425c088191b741075e2b0f9815-latenode-operators-assistant)

It can guide you on writing expressions, using variables, filters, and building logic inside your scenarios.
:::

## Algorithm

Operators in this group provide the capability to return specific values.

## Result

## timestamp

This operator returns the number of seconds that have elapsed since midnight (00:00:00 UTC) on January 1, 1970 (Thursday), also known as the Unix epoch time.  

![Untitled](./untitled.png)

- **Result of the expression:** Number (count of seconds).  
- **Example:** If the function is executed at 2023-09-10T18:39:01Z, then **1694360344**.  

## now

This operator returns the current date and time.  

![Untitled](./untitled_1.png)

- **Result of the expression:** Date and time.  
- **Example:** If the function is executed at 2023-09-10T15:40:28Z, then **2023-09-10T15:40:28Z.**  

## getGlobalVar

This operator returns the value of the global variable whose name is specified as an operand.  

![Untitled](./untitled_2.png)

- **Result of the expression:** Value of a global variable (string, number, boolean value).  
- **Example:** If the **dayTemp** variable exists and its value is 283.500000, then **283.500000**.  

![Untitled](./untitled_3.png)
