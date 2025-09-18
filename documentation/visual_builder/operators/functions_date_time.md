---
title: Functions (date, time)
description: Working with date and time functions for scheduling and time-sensitive operations.
sidebar_position: 1
---

:::tip
💡 You can use our GPT Assistant for help with **Latenode operators**:

👉 [**Latenode Operators Assistant**](https://chatgpt.com/g/g-67d704425c088191b741075e2b0f9815-latenode-operators-assistant)

It can guide you on writing expressions, using variables, filters, and building logic inside your scenarios.
:::

## Algorithm

Operators in this group ensure the execution of logical operations with operands of the date/time type. The result of the operations is the date.

## Result

## addMinutes

This operator generates a new date value:

- adding the specified number of minutes to the current date value, if a positive value is specified;  
**Example:** If 3.ValueSV = 2023-01-01T00:**00**:00Z, then 2023-01-01T00:0**5**:00Z.  

![Untitled](./untitled.png)

- subtracting the specified number of minutes from the current date value, if a negative value is specified.  
**Example:** If 3.ValueSV = 2023-01-01T00:**25**:00Z, then 2023-01-01T00:**20**:00Z.  

![Untitled](./untitled_1.png)

## addHours

This operator generates a new date value:

- adding the specified number of hours to the current date value, if a positive value is specified;  
**Example:** If 3.ValueSV = 2023-01-01T**00**:00:00Z, then 2023-01-01T**10**:00:00Z.  

![Untitled](./untitled_2.png)

- subtracting the specified number of hours from the current date value, if a negative value is specified.  
**Example:** If 3.ValueSV = 2023-01-01T**12**:00:00Z, then 2023-01-01T**04**:00:00Z.  

![Untitled](./untitled_3.png)

## addDays

This operator generates a new date value:

- adding the specified number of days to the current date value, if a positive value is specified;  
**Example:** If 3.ValueSV = 2023-01-**01**T00:00:00Z, then 2023-01-**02**T00:00:00Z.  

![Untitled](./untitled_4.png)

- subtracting the specified number of days from the current date value, if a negative value is specified.  
**Example:** If 3.ValueSV = **2023-01-01**T00:00:00Z, then **2022-12-29**T00:00:00Z.  

![Untitled](./untitled_5.png)

## addMonths

This operator generates a new date value:

- adding the specified number of months to the current date value, if a positive value is specified.  

![Untitled](./untitled_6.png)

**Example:** If 3.ValueSV = 2023-01-01T00:00:00Z, then 2023-**05**-01T00:00:00Z.  

- subtracting the specified number of months from the current date value, if a negative value is specified.  
**Example:** If 3.ValueSV = **2023-01-01**T00:00:00Z, then **2021-12-01**T00:00:00Z.  

![Untitled](./untitled_7.png)

## setMinute

This operator generates a new date value by replacing the minutes of the current date with a specified value.  

![Untitled](./untitled_8.png)

- **Example:** If 3.ValueSV = 2023-01-31T11:11:00Z, then 2023-01-31T11:**05**:00Z.  

## setHour

This operator generates a new date value by replacing the hours of the current date with a specified value.  

![Untitled](./untitled_9.png)

- **Example:** If 3.ValueSV = 2023-01-31T11:11:00Z, then 2023-01-31T**05**:11:00Z.  

## setDay

This operator generates a new date value by replacing the day of the current date with the specified value. The new day value can be either a number or the name of the day in Latin.  

:::tip
💡 If the specified value is in the range from 1 to 7, the resulting date will fall within the current week (from Sunday to Saturday), and the new day will correspond to its ordinal number. If the specified value is outside the range from 1 to 7, the resulting date will belong to the previous or next week.
:::

- **Example:** If 3.ValueSV = 2023-09-03T00:00:00Z, then 2023-09-**10**T00:00:00Z.  

![Untitled](./untitled_10.png)

- **Example:** If 3.ValueSV = 2023-09-03T00:00:00Z, then 2023-09-04T00:00:00Z.  

![Untitled](./untitled_11.png)

## formatDate

This operator returns the date in the requested format and in the specified time zone if provided.  

:::tip
💡 You can find the list of time zones [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).
:::

![Untitled](./untitled_12.png)

- **Example:** If 3.ValueSV = 2023-09-03T00:00:00Z, then 03.09.2023 03:00  

## parseDate

This operator converts a string into a date in the requested format.  

![Untitled](./untitled_13.png)

- **Example:** If 3.ValueSV = 2023-09-03, then 2023-09-03T00:00:00Z.  

## Combination of parseDate and formatDate

In cases where the initial date value is provided as a string, the combination of parseDate and formatDate can be used. This allows you to first convert the string into a date value and then format it into the desired format.  

**Example:** If 3.ValueSV = "2030-03-14 08:45:12" (string), to convert it into the format DD.MM.YYYY HH:mm:ss, use the following construction:  

![image.png](./image.png)

Result: 14.03.2030 08:45:12.  

**Tip:**  

Use this combination if:  
- The initial date value is provided as a string.  
- You need to convert the string into a date value and format it into the required format.  
