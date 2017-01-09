import React, { Component } from 'react';

class StationsComponent extends Component {
  componentDidMount() {
    this.props.fetchStations();
  }

  render() {
    return (
      <div>
        <h2>Example of fetching data via API</h2>
        <hr />
        {
          (this.props.stations.isFetching)
          ?
            <div>Loading.....</div>
          :
            <ul>
            {
              this.props.stations.items.map((station, index) => (
                <li key={index}>{ station.name }</li>
              ))
            }
            </ul>
        }
        <hr />
      </div>
    )
  }
};

export default StationsComponent;
