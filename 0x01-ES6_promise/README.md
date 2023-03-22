## 0x01. ES6 Promises
<hr>

# Learning Requirements
<hr>
<ul>
    <li>Understand the concept of Promises and when to use them</li>
    <li>Learn how to use the then, resolve, and catch methods</li>
    <li>Learn how to use all the methods of the Promise object, including throw/try, the await operator, and async functions</li>
</ul>

# Project Dependencies
<hr>
<ul>
    <li><a href="https://nodejs.org/">Node.js</a></li>
    <li><a href="https://jestjs.io/">Jest</a>for testing</li>
    <li><a href="https://babeljs.io/">Babel</a>for transpiling ES6 code</li>
    <li><a href="https://eslint.org/">ESLint</a>for linting</li>
</ul><br>
<p>Make sure to have these installed before starting the project</p>

# Getting Started
<hr>
<ol>
    <li>Clone the project repository: `git clone https://github.com/Awet11-Tesfay/alx-backend-javascript.git`</li>
    <li>Navigate to the project directory: `cd alx-backend-javascript/0x01-ES6_promise`</li>
    <li>Install the project dependencies: `npm install` or `yarn`</li>
    <li>Run the project tests: `npm test` or `yarn test`</li>
</ol>

# Scripts
<hr>
<p>The project comes with the following scripts in the `package.json` file:</p>
<pre>
    {
    "scripts": {
        "lint": "./node_modules/.bin/eslint",
        "check-lint": "lint [0-9].js",
        "dev": "npx babel-node",
        "test": "jest",
        "full-test": "./node_modules/.bin/eslint [0-9].js && jest"
    },
    "devDependencies": {
        "@babel/core": "^7.6.0",
        "@babel/node": "^7.8.0",
        "@babel/preset-env": "^7.6.0",
        "eslint": "^6.4.0",
        "eslint-config-airbnb-base": "^14.0.0",
        "eslint-plugin-import": "^2.18.2",
        "eslint-plugin-jest": "^22.17.0",
        "jest": "^24.9.0"
    }
    }
</pre>

<ul>
    <li>`lint`: Runs ESLint on the project</li>
    <li>`check-lint`: Checks for linting errors on files matching the pattern `[0-9]*.js`</li>
    <li>`dev`: Runs the project using Babel and Node.js</li>
    <li>`test`: Runs the tests using Jest</li>
    <li>`full-test`: Runs ESLint and Jest on the project</li>
</ul>
<br>
<p>The project also comes with a `babel.config.js` file:</p>
<br>
<pre>
    module.exports = {
    presets: [
        [
        "@babel/preset-env",
        {
            targets: {
            node: "current",
            },
        },
        ],
    ],
    };
</pre>
<br>
<p>The project also comes with a `utils.js` file:</p>
<br>
<pre>
    export function uploadPhoto() {
    return Promise.resolve({
        status: 200,
        body: "photo-profile-1",
    });
    }

    export function createUser() {
    return Promise.resolve({
        firstName: "Guillaume",
        lastName: "Salva",
    });
    }
</pre>
<br>
<p>And finally, the project also comes with a `.eslintrc.js` file:</p>
<br>
<pre>
    module.exports = {
    env: {
        browser: false,
        es6: true,
        jest: true,
    },
    extends: ["airbnb-base", "plugin:jest/all"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["jest"],
    rules: {
        "no-console": "off",
        "no-shadow": "off",
        "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    },
    overrides: [
        {
        files: ["*.js"],
        excludedFiles: "babel.config.js",
        },
    ],
    };
</pre>
<br>
<p>Resources MDN - JavaScript Promises JavaScript Promises: an Introduction [Promise - JavaScript | MDN](<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global</a>)</p>
<br>
# Author
<hr>

<ul>
    <li>Haile Gebregergis Shifare <a href="https://github.com/Awet11-Tesfay">GitHub Profile</a></li>
</ul>