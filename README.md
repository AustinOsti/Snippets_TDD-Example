# Snippets_TDD-Example
Introduction to Test Driven Design Example

# Procedure
1. Run npm install jest --D 
Jest is a testing suite. Often, you’ll need a testing library and a separate assertion library, but Jest is an all-in-one solution.

2. In the package.json file include the replace the "test" key: value pair in scripts with the following code:
"test": "jest"
This will allow tou to invoke the test utility as follows:
npm run test

# Project
In this snippet we show how the TDD is used to develop application logic. 
In our example, we are developing code to create a unique ID.

# Testing Based on Specifications
As tempting as it is to just sit down and start typing application logic, a well-formulated plan will make development easier. We need to define what our program will do. We define these goals with specifications.

Our high-level specification for this project is to create a unique ID, although we should break that down into smaller units that we will test. For our small project we will use the following specifications:

1. Create a random number
2. The number is an integer.
3. The number created is within a specified range.
4. The number is unique.

