import React from 'react';
import Counter from './Counter';

const AppComponent = (props) => {
  return (
    <div className="app">
      <h1> App </h1>
      <Counter {...props} />
    </div>
  )
}

export default AppComponent;
