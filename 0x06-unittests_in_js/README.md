README.md
==========

0x06. Unittests in JS
=====================

Project Overview
----------------

This project focuses on using Mocha, Chai, and Sinon for writing and running unit tests in a Node.js environment. You will learn how to set up and run a test suite, use different assertion libraries, and implement various testing techniques like spies and stubs. Integration testing with a small Node.js server is also covered.

Key Technologies
----------------

- **Mocha**: A JavaScript test framework running on Node.js, used for unit and integration testing.
- **Chai**: A BDD / TDD assertion library for Node.js and the browser.
- **Sinon**: A library for creating spies, stubs, and mocks in JavaScript.

Learning Objectives
-------------------

By the end of this project, you should be able to:

1. **Use Mocha to Write a Test Suite**: Understand the basics of setting up and running tests with Mocha.
2. **Different Assertion Libraries**: Implement tests using both Node.js's built-in assert module and the Chai assertion library.
3. **Present Long Test Suites**: Organize and present tests effectively when dealing with extensive test suites.
4. **Spies**: Use Sinon to monitor function calls and their arguments without altering the function's behavior.
5. **Stubs**: Replace parts of your code with Sinon stubs to control the behavior of functions for testing.
6. **Hooks**: Utilize Mocha hooks (`before`, `after`, `beforeEach`, and `afterEach`) to set up and tear down test conditions.
7. **Unit Testing with Async Functions**: Test asynchronous code effectively using Mocha and Chai.
8. **Integration Tests with Node.js**: Write integration tests for a small Node.js server using Mocha and related tools.

Requirements
------------

- **Node Version**: All of your code will be executed on Ubuntu 18.04 using Node 12.x.x.
- **Editors**: You may use `vi`, `vim`, `emacs`, or `Visual Studio Code`.
- **File Endings**: All your files should end with a new line.
- **README**: A `README.md` file, at the root of the folder of the project, is mandatory.
- **File Extensions**: Your code should use the `.js` extension.
- **Testing Command**: When running every test with `npm run test *.test.js`, everything should pass correctly without any warning or error.

Resources
---------

- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://github.com/request/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-node-js-apps-using-mocha-chai-and-sinonjs)

Usage
-----

To set up and run the project, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install the necessary dependencies using `npm install`.
4. Write your tests in files with the `.test.js` extension.
5. Run your tests with the command `npm run test`.

Contributing
------------

If you wish to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Create a new Pull Request.

License
-------

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


