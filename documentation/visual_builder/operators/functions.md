---
title: Functions
description: Overview of built-in functions available in Latenode.
sidebar_position: 1
---

:::tip
💡 You can use our GPT Assistant for help with **Latenode operators**:

👉 [**Latenode Operators Assistant**](https://chatgpt.com/g/g-67d704425c088191b741075e2b0f9815-latenode-operators-assistant)

It can guide you on writing expressions, using variables, filters, and building logic inside your scenarios.
:::

## Algorithm

Operators in this group ensure the execution of logical operations with operands and output the result. The outcome of these operations varies.

## Result

## If

It outputs a specified value when conditions are met or a different value if the conditions are not met.  

![Untitled](/img/placeholder.webp)

- **Result of the expression:** Specified value.  
- **Example:** If 3.ValueSV = 10, then true. If 3.ValueSV = 11, then false.  

## ()

This operator provides logical and mathematical isolation for any expressions.  

- **Result of the expression:** -.  

## not

This operator provides logical negation of specified/received boolean values.  

![Untitled](/img/placeholder.webp)

- **Result of the expression:** Negation of the value.  
- **Example:** If 3.ValueSV is TRUE, then FALSE.  

## if empty

It outputs a specified value if the operand is absent (null), and the value of the operand if it is present.  

![Untitled](/img/placeholder.webp)

- **Result of the expression:** The value.  
- **Example:** If 3.ValueSV is absent (null), then 5. If 3.ValueSV = 50, then 50.  

## empty

This operator checks for the absence of values in the operand.  

![Untitled](/img/placeholder.webp)

- **Result of the expression:** TRUE/FALSE.  
- **Example:** If 3.ValueSV is absent (null), then TRUE. If 3.ValueSV = "May", then FALSE.  

## contains

This operator checks for the presence of selected characters in a string, number, or array (including an array of boolean values), regardless of their location.  

![Untitled](/img/placeholder.webp)

- **Result of the expression:** TRUE/FALSE.  
- **Example:** If 3.ValueSV = "Hello Latenode", then TRUE. If 3.ValueSV = "Hi Latenode", then FALSE.  

## starts with

This operator checks for the presence of selected characters at the beginning of a string or number.  

![Untitled](/img/placeholder.webp)

- **Result of the expression:** TRUE/FALSE.  
- **Example:** If 3.ValueSV = "June", then TRUE. If 3.ValueSV = "May", then FALSE. If 3.ValueSV = "1000", then FALSE.  

## ends with

This operator checks for the presence of selected characters at the end of a string or number.  

![Untitled](/img/placeholder.webp)

- **Result of the expression:** TRUE/FALSE.  
- **Example:** If 3.ValueSV = "June", then TRUE. If 3.ValueSV = "May", then FALSE. If 3.ValueSV = "1000", then FALSE.  

## matches pattern

This operator checks for a match between the operand and a regular expression.  

![Untitled](/img/placeholder.webp)

- **Result of the expression:** TRUE/FALSE.  
- **Example:** If 3.ValueSV = "Abc", then TRUE. If 3.ValueSV = 2000, then FALSE.  

## to lower

This operator converts a string to lowercase.  

![Untitled](/img/placeholder.webp)

- **Result of the expression:** Lowercase text.  
- **Example:** If 3.ValueSV = 'TEST', then test.  

## to upper

This operator converts a string to uppercase.  

![Untitled](/img/placeholder.webp)

- **Result of the expression:** Uppercase text.  
- **Example:** If 3.ValueSV = 'test', then TEST.  

## length

This operator outputs the number of characters in a string or the number of values in an array.  

![Untitled](/img/placeholder.webp)

- **Result of the expression:** A number.  
- **Example:** If 3.ValueSV = 'test', then 4.  

## get

This operator outputs a JSON parameter or an array element.  

- **Result of the expression:** Parameter.  
- **Example:** The value of the parameter ValueWH1 from the provided JSON. For example, if ValueWH1 = 15, then 15.  

![Untitled](/img/placeholder.webp)

- **Example:** The value of the element in the provided array ValueWH with index 1. For instance, if ValueWH1 = 15, then 15.  

![Untitled](/img/placeholder.webp)

## switch

This operator checks if the expression matches the selected operand and outputs a value when a match is found. The operand can be a boolean value, a string, or a number.  

:::tip
💡 The function operator returns the result corresponding to the first matching value.
:::

![Untitled](/img/placeholder.webp)

- **Result of the expression:** Value.  
- **Example:** If 3.ValueSV = 'A', then 1. If 3.ValueSV = 'Abc1000', then 2.  

## replace

This operator replaces selected values in a string or number with specified values.  

![Untitled](/img/placeholder.webp)

- **Result of the expression:** Text or number with character replacement.  
- **Example:** If 3.ValueSV = 'Hi Latenode', then 'Test Latenode'.  

## trim

This operator removes spaces at the beginning and end of a string.  

![Untitled](/img/placeholder.webp)

- **Result of the expression:** Text without spaces.  
- **Example:** If 3.ValueSV = ' Hi Latenode ', then 'Hi Latenode'.  

## substring

This operator outputs a portion of a string or number from a selected starting position not inclusive to a chosen ending position, inclusive.  

![Untitled](/img/placeholder.webp)

- **Result of the expression:** A portion of text.  
- **Example:** If 3.ValueSV = 'Latenode', then 'a'.  

## indexOf

This operator provides the position of the first occurrence of a search value in a string or number.  

:::tip
💡 This operator returns "-1" if the search value is not found.
:::

![Untitled](/img/placeholder.webp)

- **Result of the expression:** A portion of text.  
- **Example:** If 3.ValueSV = 'Latenode', then 4.  
