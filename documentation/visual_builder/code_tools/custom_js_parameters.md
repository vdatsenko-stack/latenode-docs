---
title: Custom JS Parameters
description: Custom JS Parameters
sidebar_position: 3
---



Custom parameters are necessary to "extract" certain parts from the code and fill them in special fields without editing the code directly.

For example, if an API key is used in the code, you can generate a separate field in the JavaScript node for entering this parameter and reference it in the code. This way, when the API key changes, you only need to update the value in the separate field, not the code.

## Parameter Description

To display input fields for parameters in the node interface:

1. Add parameter descriptions to the code.  
2. Click the **Generate Parameters** button.

You can use the following template for parameter descriptions:

```jsx
/** @CustomParams
{
	"parameter1": {
	  "type": "string",                  // Type of the parameter, required
	  "title": "Name_parameter1",        // Name of the parameter, required
	  "required": true,                  // Parameter requirement, optional (but recommended to fill)
	  "description": "Enter parameter1", // Parameter description, optional
	  "options": {                       // Parameter options, optional
		  "minLength": 10
	  }
	},
	"parameter2": {
	  "type": "int",
	  "title": "Name_parameter2",
	  "required": true,
	  "description": "Enter parameter2",
	  "options": {
		  "minLength": 10
	  }
	}
}
*/
````

## Parameter Types and Options

### Connection (connection)

The connection type parameter is used for entering a connection by selecting it in the auxiliary window.

Template:

```/** @CustomParams
{
	"parameter": {
	  "type": "connection",              
	  "title": "connection_parameter",   
	  "required": false,                 
	  "description": "Enter parameter"   
	}
}
*/

```

Below is an example code that adds a row to a Google Sheet. The data for the row, including the token for connection, is entered as parameters.

![Untitled](./untitled.png)

```jsx
/** @CustomParams
{
    "access_token": {
        "type": "connection",
        "required": true,
        "title": "Google Sheet Connection",
        "description": "Google sheet authorization. Use \"Authorization\" field"
    },
    "spreadsheetId": {
        "type": "string",
        "required": true,
        "title": "Spreadsheet ID"
    },
    "sheetName": {
        "type": "string",
        "required": true,
        "title": "Sheet Name"
    },
    "values": {
        "type": "string_array",
        "title": "Values"
    }
}
*/

import axios from 'axios';

export default async function run({execution_id, input, data, store}) {
    const accessToken = JSON.parse(data.access_token).access_token;
    const spreadsheetId = data.spreadsheetId;
    const sheetName = data.sheetName;
    const values = [data.values];

    const appendOptions = {
        range: sheetName,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        includeValuesInResponse: true,
    };

    try {
        const response = await axios({
            method: 'post',
            url: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(sheetName)}:append`,
            params: appendOptions,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            data: {
                values: values,
            },
        });

        return {
            appendedData: response.data,
        };
    } catch (error) {
        console.error('Error appending data to Google Sheet:', error);
        return {
            error: error.response?.data || error.message,
        };
    }
}
```

### String (string)

The string type parameter is used for entering text. You can use the minLength option to define the minimum number of characters required.

Template:

```jsx
/** @CustomParams
{
	"parameter": {
	  "type": "string",                 
	  "title": "string_parameter",
	  "required": false,
	  "description": "Enter parameter",
	  "options": {     
		  "minLength": 10
	  }
	}
}
*/
```

Below is an example code that counts the number of characters in the specified parameter.

```jsx
/** @CustomParams
{
	"parameter2": {
	  "type": "string",                 
	  "title": "string_parameter",
	  "required": false,
	  "description": "Enter parameter",
	  "options": {     
		  "minLength": 10
	  }
	}
}
*/

export default async function run({ execution_id, input, data, store }) {
    // The input string parameter is obtained from the data object
    const String = data.parameter2;

    // Ensure parameter2 is a string
    if (typeof String !== 'string') {
        throw new Error('Parameter "String" must be a string.');
    }

    // Count the number of characters in the string
    const characterCount = String.length;

    // Return the character count
    return {
        characterCount
    };
}
```

![Untitled](./untitled_1.png)

### Integer (int)

The integer type parameter is used for entering whole numbers. You can use the following options for this parameter:

* max: maximum number
* min: minimum number

Template:

```jsx
/** @CustomParams
{
	"parameter": {
	    "type": "int",
	    "title": "int_parameter",
		"required": true,
		"description": "Enter parameter", 
	    "options": {
	        "max": 100,
	        "min": 50
	    }
	}
}
*/
```

Below is an example code that generates a random number not exceeding the value specified in the parameter.

```jsx
/** @CustomParams
{
	"parameter3": {
	    "type": "int",
	    "title": "int_parameter",
		"required": true,
		"description": "Enter parameter", 
	    "options": {
	        "max": 100,
	        "min": 50
	    }
	}
}
*/

import { randomInt } from 'crypto';

export default async function run({ execution_id, input, data, store }) {
    // The input parameter MaxN is obtained from the data object.
    const MaxN = data.parameter3;

    // Ensure MaxN is a number.
    if (typeof MaxN !== 'number') {
        throw new Error('MaxN should be a number.');
    }

    // Generate a random number from 0 to MaxN (not including MaxN).
    const randomNumber = randomInt(MaxN);

    // Return the generated random number.
    return {
        randomNumber
    };
}
```

![Untitled](./untitled_2.png)

### String Array (string\_array)

A string array type parameter is used for entering a list of strings. You can use the maxCount option to define the maximum number of strings allowed.

Template:

```jsx
/** @CustomParams
{
	"parameter": {
	  "type": "string_array",            
	  "title": "string_array_parameter", 
	  "required": false,                
	  "description": "Enter parameter",
	  "options": {                      
		  "maxCount": 2
	  }
	}
}
*/
```

Below is an example that outputs the array specified in the parameter and the number of elements in it.

```jsx
/** @CustomParams
{
	"parameter4": {
	  "type": "string_array",            
	  "title": "string_array_parameter", 
	  "required": false,                
	  "description": "Enter parameter",
	  "options": {                      
		  "maxCount": 5
	  }
	}
}
*/

export default async function run({ execution_id, input, data, store }) {
    // The input array parameter is obtained from the data object.
    const array = data.parameter4;

	// Ensure parameter4 is an array.
    if (!Array.isArray(array)) {
        throw new Error('Parameter "parameter4" must be an array.');
    }

    // Count the number of strings in the array.
    const stringCount = array.length;

    // Return the count result.
    return {
        array,
		stringCount
    };
}
```

![Untitled](./untitled_3.png)

### Key-Value (string\_to\_string)

The key-value parameter type is used for entering a list of strings in a key-value format.

Template:

```jsx
/** @CustomParams
{
	"parameter": {
	  "type": "string_to_string",             
	  "title": "string_to_string_parameter",  
	  "required": false,                      
	  "description": "Enter parameter",       
	  "options": {                            
		  "maxCount": 2
	  }
	}
}
*/
```

Below is an example that identifies the highest value and its key from the list of values in the parameter.

```jsx
/** @CustomParams
{
	"parameter5": {
	  "type": "string_to_string",             
	  "title": "string_to_string_parameter",  
	  "required": false,                      
	  "description": "Enter parameter",       
	  "options": {                            
		  "maxCount": 2
	  }
	}
}
*/

export default async function run({execution_id, input, data}) {
    // Ensure parameter5 exists and is an object.
    if (typeof data.parameter5 !== 'object' || data.parameter5 === null) {
        throw new Error('parameter5 is missing or not an object');
    }

    // Initialize variables to store the maximum value and the corresponding key.
    let maxKey = null;
    let maxValue = -Infinity;

    // Iterate through all keys and values in the parameter5 object.
    for (const [key, value] of Object.entries(data.parameter5)) {
        // Convert the value to a number.
        const numericValue = parseFloat(value);

        // Check if the current value is the highest.
        if (numericValue > maxValue) {
            maxValue = numericValue;
            maxKey = key;
        }
    }

    // Return the maximum value and its key.
    return {
        maxKey,
        maxValue
    };
}
```

![Untitled](./untitled_4.png)

### Dropdown List (select)

The dropdown list parameter type is used to select a value from a predefined list of possible values. You can use the following options for this parameter:

* options: an array like `[{ "key": "SelectOptionKey1", "value": "SelectOptionValue1" }]`. (value is the value that will be displayed in the dropdown list, key is the key that will be used in the code).
* multiple: allows selecting multiple values.

Template:

```jsx
/** @CustomParams
{
	"parameter": {
	  "type": "select",             
	  "title": "select_parameter",  
	  "required": false, 
	  "description": "Enter parameter", 
	  "options": {                     
		  "options": [{ "key": "SelectOptionKey1", "value": "SelectOptionValue1" }, { "key": "SelectOptionKey2", "value": "SelectOptionValue2" }],
      "multiple": false
	  }
	}
}
*/
```

Below is an example that outputs the selected value of the parameter.

```jsx
/** @CustomParams
{
	"parameter6": {
	  "type": "select",             
	  "title": "select_parameter",  
	  "required": false, 
	  "description": "Enter parameter", 
	  "options": {                     
		  "options": [{ "key": "1", "value": "100" }, { "key": "2", "value": "200" }],
      "multiple": false
	  }
	}
}
*/

export default async function run({ execution_id, input, data, store }) {
    // Create a mapping of keys to values for easy lookup.
    const optionsMapping = {
        "1": "100",
        "2": "200"
    };

    // Obtain the key selected by the user.
	const selectedKey = data.parameter6;

    // Find the corresponding value.
    const selectedValue = selectedKey ? optionsMapping[selectedKey] : undefined;

    if (selectedValue) {
        console.log('Selected value:', selectedValue);
        return { selectedValue };
    } else {
        console.log('Selected value not found.');
        return {};
    }
}
```

![Untitled](./untitled_5.png)

### Boolean (bool)

The boolean parameter type is used for entering a true/false value.

Template:

```jsx
/** @CustomParams
{
	"parameter": {
	  "type": "bool",                   
	  "title": "bool_parameter",        
	  "required": false,                
	  "description": "Enter parameter" 
	}
}
*/
```

Below is an example code that outputs one value or another depending on whether the parameter is set to **`true`** or **`false`**.

```jsx
/** @CustomParams
{
	"parameter7": {
	  "type": "bool",                   
	  "title": "bool_parameter",        
	  "required": false,                
	  "description": "Enter parameter" 
	}
}
*/

export default async function run({execution_id, input, data, store}) {
	
	const TrueFalse = data.parameter7

	 // Check the value and return "Yes" or "No" based on the condition.
    const result = TrueFalse === true ? "Yes" : "No";

    return {
        result 
    };
}
```

![Untitled](./untitled_6.png)