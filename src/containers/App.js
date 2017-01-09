import { connect } from 'react-redux';
import AppComponent from '../components/App';
import { onIncrement, onDecrement } from '../actions/counter';
import { fetchStations } from '../actions/stations';

const mapStateToProps = (state, ownProps) => ({
  counter: state.counter,
  stations: state.stations
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => (
    dispatch(onIncrement())
  ),
  onDecrement: () => (
    dispatch(onDecrement())
  ),
  fetchStations: () => {
    dispatch(fetchStations());
  }
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default AppContainer;
