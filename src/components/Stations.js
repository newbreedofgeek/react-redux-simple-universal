import React from 'react';

const StationsComponent = (props) => (
  <div>
    <h2>Example of fetching data via API</h2>
    <hr />
    {
      (props.stations.isFetching)
      ?
        <div>Loading.....</div>
      :
        <ul>
        {
          props.stations.items.map((station, index) => (
            <li key={index}>{ station.name }</li>
          ))
        }
        </ul>
    }
    <hr />
  </div>
);

export default StationsComponent;
