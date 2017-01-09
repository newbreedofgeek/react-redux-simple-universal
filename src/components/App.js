import React from 'react';
import Counter from './Counter';
import Stations from './Stations';

const AppComponent = (props) => {
  const { counter, onIncrement, onDecrement, stations, fetchStations } = props;

  const counterProps = {
    counter,
    onIncrement,
    onDecrement
  }

  const stationsProps = {
    stations,
    fetchStations
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
