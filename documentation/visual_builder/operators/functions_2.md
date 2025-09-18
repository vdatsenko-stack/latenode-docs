---
title: Functions 2
description: Advanced function usage for handling complex automation scenarios.
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

## encode URL

This operator сonverts the text part of the string to an encoded URL.

![Untitled](./untitled.png)

- **Result of the expression:** URL.  
- **Example:** If 3.ValueSV = ‘Δοκιμή’, then ‘%CE%94%CE%BF%CE%BA%CE%B9%CE%BC%CE%AE’.  

## decode URL

This operator decodes a URL into the original text string.

![Untitled](./untitled_1.png)

- **Result of the expression:** Text.  
- **Example:** If 3.ValueSV = '%CE%94%CE%BF%CE%BA%CE%B9%CE%BC%CE%AE', then 'Δοκιμή'.  

## escape markdown

This operator escapes special characters in a string, such as the asterisk "*", by adding a backslash before the character.

![Untitled](./untitled_2.png)

- **Result of the expression:** Text with escaping.  
- **Example:** If 3.ValueSV = 'Latenode*', then 'Latenode\*'.  

## split

This operator splits a string into an array of substrings using a chosen delimiter.

:::tip
💡 This function trims substrings (removes spaces from both ends of the substring), and if the trimmed substring becomes an empty string, it is excluded from the array by default.
:::

![Untitled](./untitled_3.png)

- **Result of the expression:** Array of substrings.  
- **Example:** If 3.ValueSV = 'Latenode.No', then [ "Latenode", "No" ]  

## md5

This operator converts a string or number into an encoded representation using the md5 algorithm.

![Untitled](./untitled_4.png)

- **Result of the expression:** Value in md5 encoding.  
- **Example:** If 3.ValueSV = 'Latenode', then 'cda182c15952870f090372f4811abe7b'.  

## sha1

This operator converts a string or number into an encoded representation using the sha1 algorithm.

![Untitled](./untitled_5.png)

- **Result of the expression:** Value in sha1 encoding.  
- **Example:** If 3.ValueSV = 'Latenode', then '16fc251ab241e924273ad70315fc5887d641140e'.  

## sha256

This operator converts a string or number into an encoded representation using the sha256 algorithm.

![Untitled](./untitled_6.png)

- **Result of the expression:** Value in sha256 encoding.  
- **Example:** If 3.ValueSV = 'Latenode', then 'a10967ea390e513139a6a7e56dc0f0dc32dd50a10d677a3ac622adff351c9781'.  

## sha512

This operator converts a string or number into an encoded representation using the sha512 algorithm.

![Untitled](./untitled_7.png)

- **Result of the expression:** Value in sha512 encoding.  
- **Example:** If 3.ValueSV = 'Latenode', then '119c2aaa3245368e2d18d939702c270cb7beaa4627b97cd48a54661b6213a43238215e74b8cb445efb671324d371b479f50753082cd7a30d7e9d6706eca245b7'.  

## base64

This operator converts a string or number into an encoded representation using the base64 algorithm.

![Untitled](./untitled_8.png)

- **Result of the expression:** Value in base64 encoding.  
- **Example:** If 3.ValueSV = 'Latenode', then 'TGF0ZW5vZGU='.  
