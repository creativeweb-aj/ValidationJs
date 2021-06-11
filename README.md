# ValidationJs
### Validation for input fields

![alt text](https://github.com/creativeweb-aj/ValidationJs/blob/main/page.png?raw=true)

## How to use validation JS
This is required JQuery library and BootStrap library before import validation js library.

After import all required libraries.

### Create a object of validation js
`var validation = new ValidationJs();`

#### First add number validation in any input field by passing input field id in it's function.

`validation.setNumberValidation('number', true, true, 'Please enter number only');`

#### Second is for number or number with decimal input.
`validation.setDecimalNumberValidation('decimalNumber', true, true, 'Please enter number or decimal number only');`

This object has two function one for number and second is for decimal number validation.
Means when we use number function input fields take only number.
But when we use decimal number function input fields take decimal number as well.

So this is our two function in this library.
In these function have multiple events for validation like
- User can't input alphabet only number can be press.
- Copy and Paste event for check valid value in input field.
- Message passing functionality for user interaction.

Function have four arguments for different use cases.

- First is for set event on input field by taking input field id.
- Second **true** is use for enable copy and paste event validation.
- Third **true** is use for enable keyup event validations.
- Fourth is message that we want to give to user.

These are same arguments is use in both functions for passing.
