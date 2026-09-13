1. The name of my project

DevStack Technology Stack Builder

2. A Little Description

DevStack is a web application that can be used to investigate technologies and to put together an individual's own technology stack.

3. Technologies Used

React.js, Vite, TypeScript, and Tailwind CSS, DaisyUI

4. Three Features

There are a number of technologies each of them having a description and belonging to a certain category.

You can create your own stack you have the option of adding or removing technology.

The adaptability of the web application means that it is responsive and functions well on all types of devices, including desktops, tablets, and mobile phones.

1. What is JSX and why is it used in React?

JSX is an extension of JavaScript that was developed in order to make the code for React simpler to read and to write.

2. What is the difference between props and state?

Props are used for passing information between one component and another.

A state is a particular kind of data that can be stored in the components.

3. What is the useState hook and where did you use it in this project?

useState enables us to update the components state and cause a re-render; I used it to store the selected technologies, the mobile menu and the active buttons.

4. What function does the useEffect hook have? Why was it necessary to use it in order to load the JSON data?

The useEffect function is used for carrying out side effects in a React component, and that's what I needed in order to load the JSON data.

5. Why does each item in a .map() list need a key prop?

In React each item in the array must have a unique key so that the library is able to identify them and update them correctly.

6. What does conditional rendering consist of? Give one example of when you used it.

Conditional rendering is a method enabling us to display a part of the UI according to whether or not a certain condition is true or false. For example, the message "Your stack is empty" will be displayed if the stack has no technology.

7. What is the method of passing data from a parent component to a child component? How does a child component pass data back to the parent?

The data is passed on from parent components to child components through the use of props, and the child component sends information back to the parent by passing the required values through props (callbacks).