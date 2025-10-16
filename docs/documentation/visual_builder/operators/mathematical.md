---
title: Mathematical
description: Executing arithmetic operations inside automation workflows.
sidebar_position: 1
---

:::tip
💡 You can use our GPT Assistant for help with **Latenode operators**:

👉 [**Latenode Operators Assistant**](https://chatgpt.com/g/g-67d704425c088191b741075e2b0f9815-latenode-operators-assistant)

It can guide you on writing expressions, using variables, filters, and building logic inside your scenarios.
:::

## Algorithm

Operators in this group ensure the execution of mathematical operations between operands and output the result. The result of performing the same operation may vary depending on the types of operands.

## Result

## +

The result of the operation can be addition of numbers, concatenation of multiple strings, or concatenation of a string and a number.  

![Untitled](/img/placeholder.webp)

- If the operand types are **numbers**, and for example, **3.ValueSV1 = 5** and **3.ValueSV2 = 10**, then **15**;  
- If the operand types are **strings**, and for example, **3.ValueSV1 = Test** and **3.ValueSV2 = Test**, then **TestTest;**  
- If one of the operands is a **string** and the other is a **number**, and for example, **3.ValueSV1 = Test** and **3.ValueSV2 = 15**, then **Test15.**  

## -

The result of the operation is the difference between numbers.  

:::tip
💡 The result of the operation can be the conversion of a positive number into a negative one if there is only one operand, and the operator is placed before it.
:::

![Untitled](/img/placeholder.webp)

- If the operand types are **numbers**, and for example, **3.ValueSV1 = 20** and **3.ValueSV2 = 3**, then the result is **17.**  

## /

The result of the operation is the division of numbers.  

![Untitled](/img/placeholder.webp)

- If the operand types are **numbers**, and for example, **3.ValueSV1 = 20** and **3.ValueSV2 = 2**, then the result is **10.**  

## *

The result of the operation is the multiplication of the numbers by each other.  

![Untitled](/img/placeholder.webp)

- If the operand type is a **number**, and, for example, **3.ValueSV1 = 10** and **3.ValueSV2 = 3**, then the result is **30.**  

## mod

The result of the operation is obtaining the remainder from dividing the numbers.  

![Untitled](/img/placeholder.webp)

- If the operand type is a **number**, and, for example, **3.ValueSV1 = 5** and **3.ValueSV2 = 2**, then the result is **1.**  

## Average

The result of the operation is the average value of numerical values in a specific array or the average value of numerical values entered individually.  

- If the operand type is a **number**, and, for example, **3.ValueSV1 = 5** and **3.ValueSV2 = 10**, then the result is **7,5;**  

![Untitled](/img/placeholder.webp)

- If the operand type is an **array**, and, for example, **3.ValueSV1 = [5, 10]**, then the result is **7,5.**  

![Untitled](/img/placeholder.webp)

## Сeil

The result of the operation is the smallest integer greater than or equal to the specified number.  

![Untitled](/img/placeholder.webp)

- If the operand type is a **number**, and, for example, **3.ValueSV1 = 3,7**, then the result is **4.**  

## Floor

The result of the operation is the largest integer less than or equal to the specified number.  

![Untitled](/img/placeholder.webp)

- If the operand type is a **number**, and, for example, **3.ValueSV1 = 3,7**, then the result is **3.**  

## Max

The result of the operation is the largest number in the specified array or the largest number among individually entered numbers.  

:::tip
💡 The number of numerical operands is not limited and can be any.
:::

- If the operand type is a **number**, and, for example, **3.ValueSV1 = 15 and 3.ValueSV2 = 20**, then the result is **20;**  

![Untitled](/img/placeholder.webp)

- If the operand type is an **array**, and, for example, **3.ValueSV1 = [15, 20]**, then the result is **20.**  

![Untitled](/img/placeholder.webp)

## Min

The result of the operation is the smallest number in the specified array or the smallest number among individually entered numbers.  

:::tip
💡 The number of numerical operands is not limited and can be any.
:::

- If the operand type is a **number**, and, for example, **3.ValueSV1 = 15** and **3.ValueSV2 = 20**, then the result is **15;**  

![Untitled](/img/placeholder.webp)

- If the operand type is an **array**, and, for example, **3.ValueSV1 = [15, 20]**, then the result is **15.**  

![Untitled](/img/placeholder.webp)

## Round

The result of the operation is rounding the number to the nearest integer.  

![Untitled](/img/placeholder.webp)

- If the operand type is a **number**, and, for example, **3.ValueSV1 = 9.5**, then **10**.  

## Sum

The result of the operation is the sum of values in the specified array or the sum of individually entered numbers.  

:::tip
💡 The number of numerical operands is not limited and can be any.
:::

- If the operand types are **numbers**, and, for example, **3.ValueSV1 = 5** and **3.ValueSV2 = 63**, then **68;**  

![Untitled](/img/placeholder.webp)

- If the operand type is an **array**, and, for example, **3.ValueSV1 = [5, 10]**, then **15**.  

![Untitled](/img/placeholder.webp)

## ParseNumber

The result is the syntactic parsing of the string and returning a numerical value.  

:::tip
💡 If the operand is a number, the result of the expression is also a number, and no errors occur. The string analysis is performed considering the specified separator between the integer and decimal parts of the number.
:::

![Untitled](/img/placeholder.webp)

- If the operand type is **number**, and, for example, **3.ValueSV1 = 5**, then **5;**  
- If the operand type is **string**, and, for example, **3.ValueSV1 = "5; 10"**, then **5,10.**  

## FormatNumber

The result is the conversion of a numerical value and returning the value with the specified parameters:  

:::warning
⚠️ The separators for the decimal and thousands formats should be different, for example, a comma and a period.
:::

- Format, for example, 4 (up to four decimal places);  
- Decimal separator, default is ",";  
- Thousands separator, default is ".".  

![Untitled](/img/placeholder.webp)

- If the operand type is a **number**, and, for example, **3.ValueSV1 = 185.77**, then **185,7700.**  
