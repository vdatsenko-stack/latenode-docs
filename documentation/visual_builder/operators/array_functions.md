# Array Functions

Article Description: Processing and modifying arrays dynamically within workflows.
Published: Yes
Suggested: No

<aside>
💡 You can use our GPT Assistant for help with **Latenode operators**:

👉 [**Latenode Operators Assistant**](https://chatgpt.com/g/g-67d704425c088191b741075e2b0f9815-latenode-operators-assistant)

It can guide you on writing expressions, using variables, filters, and building logic inside your scenarios.

</aside>

## Algorithm

Operators in this group provide the ability to perform operations on arrays and array elements.

<aside>
💡 Elements of the array can be strings, numbers, or boolean values.

</aside>

## Result

## add

This operator adds a value to the specified variable to create an array. See  [Scenario Example Using SetVariables](../../Examples%20&%20Tutorials%201c257d45a06780a9886cf7408c3a350e/%F0%9F%93%9D%20Scenario%20Examples%2019157d45a0678101a860c354d339b123/Using%20SetVariables%20node%20and%20the%20add%20operator%2019157d45a06780fdb9eafe03d5b22af2.md)[**.**](https://www.notion.so/1ebd5701a8824deab3e17ab1415e50d0?pvs=21)

- **Result of the expression:** Value in the array.

## join

It concatenates all the array elements into a string, adding the specified delimiter between each array element.

![Untitled](Array%20Functions%2019157d45a0678064afbbfd60edc31b85/Untitled.png)

- **Execution Result:** text with the specified delimiter.
- **Example:** If _.Array = [1,2,3,4,5], then "1.2.3.4.5".

## slice

Returns a modified array containing the specified elements from the provided array.

<aside>
💡 The specified numbers are the ordinal numbers of the array elements. In the example below, it returns elements from the zeroth (exclusive) to the first (inclusive) element. The ending number may be omitted, in which case, it will return all elements of the array after the initial number.

</aside>

![Untitled](Array%20Functions%2019157d45a0678064afbbfd60edc31b85/Untitled%201.png)

- **Execution Result:** an array of values.
- **Example:** If 1.Body = [{"Value": "Hi"}, {"Value": "Latenode"}], then [{"Value": "Hi"}].

## merge

Merges two or more passed arrays into one array. 

![Untitled](Array%20Functions%2019157d45a0678064afbbfd60edc31b85/Untitled%202.png)

- **Execution Result:** an array of values.
- **Example:** If 1.Body[0] = [{"Value": 5}, {"Value": 10}] and 1.Body[1] = [{"Value": 15}, {"Value": 20}], then [{"Value": 5}, {"Value": 10}, {"Value": 15}, {"Value": 20}].

## map

Returns an array containing the desired values of the given complex array. Can be used for filtering values.

![Untitled](Array%20Functions%2019157d45a0678064afbbfd60edc31b85/Untitled%203.png)

![Untitled](Array%20Functions%2019157d45a0678064afbbfd60edc31b85/Untitled%204.png)

- **Execution Result:** an array of found values.
- **Example:**

Input data:

```jsx
[
	{
		"Name": "Kate",
		"Address": "Tokyo",
		"Age": 25
	},
	{
		"Name": "Anna",
		"Address": "Seoul",
		"Age": 35
	},
	{
		"Name": "Lisa",
		"Address": "Beijing",
		"Age": 45
	}
]
```

Result:

```jsx
[
	25,
	35,
	45
]
```

## sort

Returns an array containing values of the given array sorted in the desired order. Sorting options available:

- **asc** - in ascending order;
- **desc** - in descending order;
- **asc ci** - in ascending order, case-insensitive;
- **desc ci** - in descending order, case-insensitive.

![Untitled](Array%20Functions%2019157d45a0678064afbbfd60edc31b85/Untitled%205.png)

- **Execution result:** an array of sorted values.
- **Example:** If 1.Body = [{ "Value": 5}, {"Value": 10},{ "Value": 15}, {"Value": 20}], then [{ "Value": 20}, {"Value": 15},{ "Value": 10}, {"Value": 5}]

## deduplicate

Removes duplicate values from the given array and returns an array with unique values. 

- **Execution result:** an array of unique values.

![Untitled](Array%20Functions%2019157d45a0678064afbbfd60edc31b85/Untitled%206.png)

- **Example:**

Input data:

```jsx
[
	{
		"Name": "Kate",
		"Age": 45
	},
	{
		"Name": "Anna",
		"Age": 45
	},
	{
		"Name": "Lisa",
		"Age": 45
	},
	{
		"Name": "Lisa",
		"Age": 45
	},
	{
		"Name": "Anna",
		"Age": 25
	}
]
```

Result:

```jsx
[
	{
		"Age": 45,
		"Name": "Kate"
	},
	{
		"Age": 45,
		"Name": "Anna"
	},
	{
		"Age": 45,
		"Name": "Lisa"
	},
	{
		"Age": 25,
		"Name": "Anna"
	}
]
```

## distinct

Removes duplicates from the given array and returns an array with unique values. All duplicates are removed based on the specified key, except for the first found value.

- **Execution result:** an array of unique values.
- **Example 1:**

![Untitled](Array%20Functions%2019157d45a0678064afbbfd60edc31b85/Untitled%207.png)

Input data:

```jsx
[
	{
		"Name": "Kate",
		"Age": 45
	},
	{
		"Name": "Anna",
		"Age": 45
	},
	{
		"Name": "Lisa",
		"Age": 45
	},
	{
		"Name": "Lisa",
		"Age": 45
	},
	{
		"Name": "Anna",
		"Age": 25
	}
]
```

Result:

```jsx
[
	{
		"Age": 45,
		"Name": "Kate"
	},
	{
		"Age": 25,
		"Name": "Anna"
	}
]
```

- **Example 2:**

![Untitled](Array%20Functions%2019157d45a0678064afbbfd60edc31b85/Untitled%208.png)

Input data:

```jsx
[
	{
		"Name": "Kate",
		"Age": 45
	},
	{
		"Name": "Anna",
		"Age": 45
	},
	{
		"Name": "Lisa",
		"Age": 45
	},
	{
		"Name": "Lisa",
		"Age": 45
	},
	{
		"Name": "Anna",
		"Age": 25
	}
]
```

Result:

```jsx
[
	{
		"Age": 45,
		"Name": "Kate"
	},
	{
		"Age": 45,
		"Name": "Anna"
	},
	{
		"Age": 45,
		"Name": "Lisa"
	}
]
```

- **Example 3:**

![Untitled](Array%20Functions%2019157d45a0678064afbbfd60edc31b85/Untitled%209.png)

Input data:

```jsx
[
	{
		"Name": "Kate",
		"Age": 45
	},
	{
		"Name": "Anna",
		"Age": 45
	},
	{
		"Name": "Lisa",
		"Age": 45
	},
	{
		"Name": "Lisa",
		"Age": 45
	},
	{
		"Name": "Anna",
		"Age": 25
	}
]
```

Result:

```jsx
[
	{
		"Age": 45,
		"Name": "Kate"
	},
	{
		"Age": 45,
		"Name": "Anna"
	},
	{
		"Age": 45,
		"Name": "Lisa"
	},
	{
		"Age": 25,
		"Name": "Anna"
	}
]

```