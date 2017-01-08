import React from 'react';
import Counter from './Counter';
import Stations from './Stations';

const AppComponent = (props) => {
  const counterProps = {
    counter: props.counter,
    onIncrement: props.onIncrement,
    onDecrement: props.onDecrement
  }

  const stationsProps = {
    stations: props.stations
  }

  return (
    <div className="app">
      <h1> App </h1>
      <Counter {...counterProps} />
      <Stations {...stationsProps} />
    </div>
  )
}

export default AppComponent;
