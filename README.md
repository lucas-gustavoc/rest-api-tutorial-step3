:construction: *ongoing project* :construction:

# Rest API Tutorial - Part 2

This tutorial aims to create a complete Node.js based RESTful API. Its purpose is to be self-explanatory, using especially code comments to achieve that.

It's good to mention that a previous knowledge on JavaScript basics is important for the right understanding of this tutorial.

Besides, it's not necessary to have a previous knowledge on Node.js, since we'll be covering the basics here.

If you haven't seen the first part of this tutorial, please visit [first part page](https://github.com/lucas-gustavoc/rest-api-tutorial-step1) in order to start it.

## Second Part Goal

In this second part of the tutorial, we're going to add some new requests and mock a database inside the project.

To achieve that, we're going to simulate a wish list, where people can register their wishes anonymously and assign them a priority.

## How to Use this Tutorial

You can make a good use of this tutorial by setting it up (see [Getting Started](#getting-started) section), reading the [How did we do it?](#how-did-we-do-it) section and reading the code comments.

While reading the [How did we do it?](#how-did-we-do-it) section, it's an interesting idea to switch between your browser and your code editor, so you can follow the steps we took directly inside the code.

## Resources

To make it happen, this project uses the following external resources:

- `Visual Studio Code`: We're using Visual Studio Code as code editor and command line tool. For details, please visit https://code.visualstudio.com/
- `Express.js`: Used as the basic structure of our API. For details, please visit https://expressjs.com/
- `Nodemon`: Used for debugging purposes. For details, please visit https://www.npmjs.com/package/nodemon
- `Jest`: Used for testing purposes. For details, please visit https://jestjs.io/
- `Postman`: Used for testing the application with API requests. In order to learn more about how to use Postman, you can visit the [Postman Introduction Page](https://learning.postman.com/docs/getting-started/introduction/).

## Getting Started

In order to get started with this tutorial, make sure **you have Node.js installed in your machine** (for details, please visit https://nodejs.org/en/download/) and a **code editor** available (we're using Visual Studio for this project, but it's up to you to choose one).

With all this in place, you can move on.

1. Download the project files and place them into a directory of your choice. You can also use the `git clone` tool if you prefer to.

2. Using a terminal (Visual Studio Code has a built-in terminal, which can be accessed pressing `ctrl + '`), navigate to the folder you've placed the files and type `npm install` and press Enter. This will install all the external modules we will be using in this tutorial.

3. Still in the terminal, type `npm start` and press Enter. This will run the application so you can see it working.

4. Go to your browser and access the address http://localhost:3000/. If you see the phrase "Hello World!", you're done with the setup. You can do some API tests with Postman (visit [Postman Introduction Page](https://learning.postman.com/docs/getting-started/introduction/) for details) accordingly the [API Reference](#api-reference) and after that you can go to the [How did we do it?](#how-did-we-do-it) section to start learning.

## How did we do it?

Here, we will start from the point we stopped in the Part 1. So is you haven't accomplished that part yet, I recommend you to visit the [Part 1's page](https://github.com/lucas-gustavoc/rest-api-tutorial-step1) in order to do so.

With all that in place, we can start below:

1. We installed the module `uniqid` in order to generate IDs for the created wishes. This can be done by running `npm install uniqid` in the terminal.

2. We created the folders `controller` and `model` inside the preexisting folder `src`. It's really important that you stick to the exact folder names we've mentioned, otherwise it could lead to execution problems.

3. Inside the folder `controller`, we created a file called `wishes.js` and filled it with the code you can see in this same file in this tutorial. You can just copy and paste, remembering to read the comments to understand what's going on over ther.

4. You can do the same process you did on step 3 with the file `model/Wish.js`, which simulates a database using just an array, and the file `Wish.test.js`, which tests our `Wish.js` file. Testing concepts are note the purpose of this tutorial, so we won't be describing our approaches for testing, but you can check it in this file. Remember to keep the file names in an exact match as they are in this tutorial.

5. Now you can install the Jest module, which is responsible for running tests in the application. You can do this by running the command `npm install jest --save-dev` in your terminal. The `--save-dev` statement makes Node.js understand that this is a module focused on the development environment, not the production one. This is important for clarification and efficiecy matters.

6. We added a new script to the file `package.json` called `test`. It will be above or below the `start` script, and will look like this: `"test": "jest"`.

7. We made some changes in the file `index.js`, so you can copy it all and replace yours. Remember to read the new comments to understand the process.

Now you're ready to run the same tests you ran at the [Getting Started](#getting-started) section.

## API Reference

Updates:
- controller and model folders and files
- index changes
- uniqid installing
- Jest installing
- tests