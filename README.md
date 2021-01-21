# Motorway UI Test

Welcome to the Motorway UI technical test. This test focuses on user experience, and your skills with HTML, CSS, a11y and leveraging browser APIs.

## Set up

This repo is a slightly modified Create React App and an Express server which serves a JSON feed of images.

- Clone the repo and run `npm install`

- `npm run serve` will run the server

- in another terminal window `npm run start` will start CRA

After this, CRA will open a tab with the app running, usually `localhost:3000`. If you look in `src/App.js` you'll see the API call to the server is already made and will console log out the results.

#### Note

- The server and CRA are watching the relevant files and will hot reload if any changes are made.

- Feel free to modify or install whatever code you feel is necessary. If installing packages which are wrappers for native browsers APIs please leave a comment explaining why.

## Tasks

### 1. UI development

Created a responsive UI to display the images returned by the API. I've used _Materializecss_, built on material design to build the UI.

I've used _react-modal_ to show the full size of an image.

### 2. Performance

The API that is returning images is rather slow because there is a setTimeOut in _server.js_. I've removed it to improve the speed. Also, I've used [_react-cool-img_](https://www.npmjs.com/package/react-cool-img), npm library to load the images.

### 3. Forms

A Button toggles (show and hide) the form. I've Used HTML's _required_ attribute to validate it's a required field. Also, used _regex_ to validate in the text fields.

## Notes

I've used Chrome browser to test my application.

## Bonus

We can make use of _concurrently_, a npm library. This allows us to combine and run the client & server in single localhost. We can configure this in package.json file.
