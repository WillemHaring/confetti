## Confetti
![confetti logo](./resources/icon.png "Confetti")

 The Confetti plugable widget wraps the react-dom-confetti component in a Mendix widget



## Features
- **Manual trigger**
    - If you don't want it to listen to a datasource
 set the trigger with button property to render a the component as a button. When you press the button, the confetti with trigger
- **Expression based trigger**
    - Make the component listen to an external condition by setting an expression
- **Design time configuration**
    - You can configure the behavioir of the confetti at designtime, include the confetti particle colors
- **Runtime configuration**
    - If you want to influence the behaviour of the confetti at runtime, hook it up to a datasource

## Usage
#### Manual standalone
1. Drag the component on a page
2. Make sure that trigger with button is set to Yes
3. Set a caption for the button [default = 'Hit me']
4. Set a delay for the explosion [default = '3000 ms']
5. Set a message for the button white couting down [default = 'Loading...']
6. Set a button style
7. If you want another action when the confetti explodes, set the action in the onclick action

Run the page

##### Manual triggered by an expression
1. Drag the component on a page
2. make sure that trigger with button is set to false
3. Enter an expression that results in a boolean, please note the following:
    - The confetti will trigger when this expressions transitions from false to true
    - The confetti will only trigger again when this expression has gone to false.
    - couple of examples:
        - 

#### Design time configuration
1. Drag the component on a page
2.

## Demo project
[link to sandbox]

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution
[specify contribute]
