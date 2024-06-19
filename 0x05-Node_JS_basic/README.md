# NodeJS Basics

## Project Overview

This project is designed to provide a comprehensive introduction to Node.js and its ecosystem. You'll learn to run JavaScript code using Node.js, leverage Node.js modules, read files, handle command line arguments and environment variables, and create small HTTP servers using both Node.js and Express.js. Additionally, you'll use modern JavaScript (ES6) features with Babel-node and speed up development with Nodemon.

## Learning Objectives

By the end of this project, you should be able to:

1. **Run JavaScript using Node.js**: Understand the basics of how Node.js executes JavaScript code outside a browser.
2. **Use Node.js Modules**: Familiarize yourself with importing and using modules in Node.js.
3. **Read Files Using Specific Node.js Modules**: Learn to read file contents using `fs` (File System) module.
4. **Access Command Line Arguments and Environment Variables Using `process`**: Understand how to interact with the process object to access runtime information.
5. **Create Small HTTP Servers**: Develop basic HTTP servers using Node.js and Express.js frameworks.
6. **Create Advanced Routes with Express.js**: Implement more complex routing mechanisms in Express.js.
7. **Use ES6 with Node.js using Babel-node**: Write modern ES6+ JavaScript code and compile it to work with Node.js.
8. **Develop Faster with Nodemon**: Automatically restart your Node.js application on changes using Nodemon.

## Requirements

- **Editors**: vi, vim, emacs, Visual Studio Code
- **Environment**: Ubuntu 18.04 LTS, Node.js version 12.x.x
- **File Requirements**:
  - All files must end with a new line.
  - Code should use the `.js` extension.
  - A `README.md` file at the root of the project is mandatory.
  - Export functions/classes using `module.exports`.

- **Testing and Linting**:
  - Use `Jest` for testing (`npm run test`).
  - Use `ESLint` for code linting.
  - Ensure code passes all tests and lint checks (`npm run full-test`).

## Project Structure

- **`database.csv`**: Contains a list of users with fields `firstname`, `lastname`, `age`, and `field`.
- **`package.json`**: Specifies project dependencies and scripts.
- **`babel.config.js`**: Configuration file for Babel to transpile ES6 code.
- **`.eslintrc.js`**: Configuration file for ESLint to maintain code quality.

## Setup

1. **Clone the repository** and navigate to the project directory.
2. Run `$ npm install` to install all required dependencies.

## Provided Files

### `database.csv`
```csv
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
