// bring in babel-polyfill as we need a Promise polyfill to ensure our isomorphic-fetch works the same across server and all browsers.
import 'babel-polyfill';

// load the client app.
import './client.js';
