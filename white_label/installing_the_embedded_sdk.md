---
title: Installing the embedded SDK
description: Instructions for integrating and configuring the embedded iFrame mode, enabling seamless embedding of content across platforms
sidebar_position: 3
---

# Installing the embedded SDK

Article Description: Instructions for integrating and configuring the embedded iFrame mode, enabling seamless embedding of content across platforms.
Published: Yes
Suggested: No

This article describes how to integrate the Latenode platform into your project using the SDK.

### Container Setup Inside the Website

To use the SDK, you need to prepare a container where the iframe will be rendered. Ensure that the container is already present in the DOM tree.

### SDK Configuration

Add the following tag to your website:

```html
<script src="https://embedded.latenode.com/static/sdk/0.1.4.js"></script>
```

Once this script is executed, the `LatenodeEmbeddedSDK` class will be added to the global `window` object.

## Methods of SDK

### configure

The method allows rendering an `iframe`. To do this, you need to call the method on an instance of the `LatenodeEmbeddedSDK` class.

```jsx
const latenodeSDK = new LatenodeEmbeddedSDK();
latenodeSDK.configure({
  token: 'USER_JWT_TOKEN',
  container: 'lowCodeDivContainer',
  ui: {
  "scenarios": {
    "hideEmptyScenariosGreetings": false,
    "hideExploreAppsButton": true,
    "logo": {
      "src": "YOUR_LOGO_URL",
      "style": {
        "width": 150,
        "height": 150,
        "margin": ""
      }
    },
    "activeStateFilterStyle": "tabs"
  },
  "scenario": {
    "showGrid": false,
    "nodeTypeList": {
	    "requestNewAppURL": "https://latenode.com/request-new-app"
	    }
  },
  "main": {
    "hideSideMenu": false 
  },
  "theme": {
    "primaryColor": "#2394ae",
    "button": {
      "default": {
        "default": {
          "backgroundColor": "white",
          "textColor": "#2394ae",
          "borderColor": "#2394ae"
        },
        "active": {
          "backgroundColor": "white",
          "textColor": "#1c768b",
          "borderColor": "#1c768b"
        },
        "hover": {
          "backgroundColor": "white",
          "textColor": "#4fa9be",
          "borderColor": "#4fa9be"
        },
        "disabled": {
          "backgroundColor": "white",
          "textColor": "#7bbfce",
          "borderColor": "#7bbfce"
        },
        "borderWidth": "2px",
        "borderRadius": "20px"
      },
      "primary": {
        "default": {
          "backgroundColor": "#2394ae",
          "textColor": "white",
          "borderColor": "#2394ae"
        },
        "active": {
          "backgroundColor": "#1c768b",
          "textColor": "white",
          "borderColor": "#1c768b"
        },
        "hover": {
          "backgroundColor": "#4fa9be",
          "textColor": "white",
          "borderColor": "#4fa9be"
        },
        "disabled": {
          "backgroundColor": "#7bbfce",
          "textColor": "white",
          "borderColor": "#7bbfce"
        },
        "borderWidth": "2px",
        "borderRadius": "20px"
      },
      "action": {
        "default": {
          "backgroundColor": "#233849",
          "textColor": "white",
          "borderColor": "#233849"
        },
        "active": {
          "backgroundColor": "#1c2d3a",
          "textColor": "white",
          "borderColor": "#1c2d3a"
        },
        "hover": {
          "backgroundColor": "#4f606d",
          "textColor": "white",
          "borderColor": "#4f606d"
        },
        "disabled": {
          "backgroundColor": "#7b8892",
          "textColor": "white",
          "borderColor": "#7b8892"
        },
        "borderWidth": "2px",
        "borderRadius": "20px"
      },
      "success": {
        "default": {
          "backgroundColor": "#233849",
          "textColor": "white",
          "borderColor": "#233849"
        },
        "active": {
          "backgroundColor": "#1c2d3a",
          "textColor": "white",
          "borderColor": "#1c2d3a"
        },
        "hover": {
          "backgroundColor": "#4f606d",
          "textColor": "white",
          "borderColor": "#4f606d"
        },
        "disabled": {
          "backgroundColor": "#7b8892",
          "textColor": "white",
          "borderColor": "#7b8892"
        },
        "borderWidth": "2px",
        "borderRadius": "20px"
      },
      "danger": {
        "default": {
          "backgroundColor": "#bf161f",
          "textColor": "white",
          "borderColor": "#bf161f"
        },
        "active": {
          "backgroundColor": "#991219",
          "textColor": "white",
          "borderColor": "#991219"
        },
        "hover": {
          "backgroundColor": "#cc454c",
          "textColor": "white",
          "borderColor": "#cc454c"
        },
        "disabled": {
          "backgroundColor": "#d97379",
          "textColor": "white",
          "borderColor": "#d97379"
        },
        "borderWidth": "2px",
        "borderRadius": "20px"
      },
      "subtle": {
        "default": {
          "backgroundColor": "white",
          "textColor": "#2394ae",
          "borderColor": "#2394ae"
        },
        "active": {
          "backgroundColor": "white",
          "textColor": "#1c768b",
          "borderColor": "#1c768b"
        },
        "hover": {
          "backgroundColor": "white",
          "textColor": "#4fa9be",
          "borderColor": "#4fa9be"
        },
        "disabled": {
          "backgroundColor": "white",
          "textColor": "#7bbfce",
          "borderColor": "#7bbfce"
        },
        "borderWidth": "2px",
        "borderRadius": "20px"
      }
    },
    "input": {
      "borderRadius": "20px"
    },
    "scenario": {
      "backgroundColor": "#f1f1f1"
    }
  }
},
  navigation: {
    handler: ({ route }) => {
      console.log('user navigated to ' + route);
    }
  }
}).then(() => {
 console.log('iframe rendered');
});
```

This method returns a `Promise` that resolves once the `iframe` has been loaded and rendered inside the specified `container`.

### Configuration Parameters

```yaml
auth:
  - field: token
    type: string
    required: true
    description: JWT token that was generated for the user

embed:
  - field: container
    type: string | HTMLElement
    required: true
    description: ID of the container or a DOM element reference where the iframe will be rendered

ui:
  scenarios:
    - field: ui.scenarios.hideEmptyScenariosGreetings
      type: boolean
      required: false
      description: Whether to hide the greeting message when there are no scenarios

    - field: ui.scenarios.hideExploreAppsButton
      type: boolean
      required: false
      description: Whether to hide the "Explore Apps" button

    - field: ui.scenarios.logo.src
      type: string
      required: false
      description: URL of a custom logo
      
  scenario:
    - field: ui.scenario.showGrid
      type: boolean
      required: false
      description: Whether to show the grid

    - field: ui.scenario.nodeTypeList.requestNewAppURL
      type: string
      required: false
      description: URL of the page requesting missing applications

  main:
    - field: ui.main.hideSideMenu
      type: boolean
      required: false
      description: Whether to hide the main navigation menu (section list)

  theme:
    - field: ui.theme.primaryColor
      type: string
      required: false
      description: Primary accent color for the interface

    - field: ui.theme.button
      type: object
      required: false
      description: Configuration for all button types and their states (default, hover, active, disabled)

    - field: ui.theme.button.[type].[state].backgroundColor
      type: string
      required: false
      description: Background color of a button for the specified type and state

    - field: ui.theme.button.[type].[state].textColor
      type: string
      required: false
      description: Text color of a button for the specified type and state

    - field: ui.theme.button.[type].[state].borderColor
      type: string
      required: false
      description: Border color of a button for the specified type and state

    - field: ui.theme.button.[type].borderRadius
      type: string
      required: false
      description: Border radius for a given button type (e.g. "4px")

    - field: ui.theme.button.[type].borderWidth
      type: string
      required: false
      description: Border width for a given button type (e.g. "2px")

    - field: ui.theme.input.borderRadius
      type: string
      required: false
      description: Border radius for input fields

    - field: ui.theme.scenario.backgroundColor
      type: string
      required: false
      description: Background color for the scenario editor area

navigation:
  - field: navigation.handler
    type: (data: { route: string }) => void
    required: false
    description: Navigation event handler inside the iframe. This function will be called each time the application route changes
```

### navigate

This method allows navigation within the iframe. For example:

```jsx
LatenodeSDK.navigate({ to: '/scenarios' });
```

### cleanup

The SDK has side effects in its operation. To properly finalize work with the `iframe`, it is recommended to call the cleanup method, which will remove all registered callbacks in `window`, for example:

```jsx
LatenodeSDK.cleanup();
```
