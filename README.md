# React Redux Simple Universal

This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app) and aims to add server side rendering on top of existing Create React App functionality (i.e. without ejecting and adding minimum new dev dependencies). It adds a new script called `npm run server` to provide react / redux SSR (server side render)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development `client mode`.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the `client mode` app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run server`

Runs the express server with the server rendered react template. i.e `server mode`.
