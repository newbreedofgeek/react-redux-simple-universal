import { connect } from 'react-redux';
import AppComponent from '../components/App';

const mapStateToProps = (state, ownProps) => ({
  counter: state.counter,
  stations: state.stations
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => (
    dispatch({
      type: 'INCREMENT'
    })
  ),
  onDecrement: () => (
    dispatch({
      type: 'DECREMENT'
    })
  )
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default AppContainer;
