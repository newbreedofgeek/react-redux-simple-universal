import path from 'path';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducers';
import App from './containers/App';

const app = Express();
const port = 3000;

app.user(handleRender);

// middleware
function handleRender(req, res) {
  const store = createStore(counterApp); // a new redux store

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const preloadedState = store.getState();

  res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
  return `
   <!doctype html>
   <html>
     <head>
       <title>Redux Universal Example</title>
     </head>
     <body>
       <div id="root">${html}</div>
       <script>
         // WARNING: See the following for Security isues with this approach:
         // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
         window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
       </script>
       <script src="/static/bundle.js"></script>
     </body>
   </html>
   `
}

app.listen(port);
