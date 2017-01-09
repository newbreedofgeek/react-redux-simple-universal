import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './containers/App';
import serveStatic from 'serve-static';
import { fetchStations } from './actions/stations';

const app = express();
const port = 3000;

app.use('/public', serveStatic(path.join(__dirname, '../build/static')));
app.use(handleRender);

// express middleware
function handleRender(req, res) {
  const store = createStore(rootReducer); // a new redux store

  // get aync data
  fetchStations(store.dispatch)
    .then(() => {
      const html = renderToString(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const preloadedState = store.getState();

      res.send(renderFullPage(html, preloadedState));
    });
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
       <script src="/public/js/bundle.js"></script>
     </body>
   </html>
   `
}

app.listen(port, function () {
  console.log('server listening on port 3000!')
});
