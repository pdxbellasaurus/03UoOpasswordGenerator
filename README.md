# 03 Javascript Password Generator

Launch Password Generator

## Description
This week’s homework rwas a task to modify starter code to create an application that enables users to generate random passwords based on criteria that they’ve selected. 

## Application Appearance
The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## Application Functionality
When the user clicks the "Generate Password" button they are presented with a series of proprompts for password criteria, including passowrd length (between 8 and 128 characters), lowercase, uppercase, numeric, and/or special characters. The user's input for password length is validated and will prompt for a valid length if it is not between 8 and 128 characters or if left blank. Additionally, will chack that at least one character type and will alert the user and ask for the user to confirm characters selections if they did not meet the criteria. 

Once the user's input  is validated and at least one character type is selected, a password meeting the selected criteria will be displated in the text area on the page.

## Functionality Status
The application will validate the user's input and that one character type is selected properly. However, at current state, the text written to the page will display undefined. It appears that there may be an issue with the Math.random() function in the code. It is noted in the console that the character type selections are displayed in an array corectly (only selected types are colled in the array to perform the random function), and may be an issue with the variable for the length (which is currently wrapped in a vaildation function within other functions and an issue with glabal versus global) or with the rendering to a string. Several variations and reworks were completed, as well as extensive review of articles. However, these attempts continued to render undefined result. 

## Resources
JavaScript String split() Method
https://www.w3schools.com/jsref/jsref_split.asp


------------------------
### 03UoOpasswordGenerator
UofO BCS Week 03 Homework
