import * as actions from '../actions/stations';

const defaultState = {
  isFetching: false, // flase for a UI loading
  didInvalidate: false, // can be used to local caching, i.e. mark data as `state` based on some rules and only refetch if so
  errMsg: null, // to show a UI error msg in case there was an error
  lastFetched: null, // when was data last fetched
  items: []
  // items: [
  //   {
  //     "id": 1,
  //     "name": "Auburn",
  //     "address": {
  //       "street": "No 284, Pitt Street",
  //       "suburb": "Auburn",
  //       "postcode": "2000",
  //       "state": "NSW"
  //     }
  //   },
  //   {
  //     "id": 2,
  //     "name": "Seven Hills",
  //     "address": {
  //       "street": "No 4, blue Street",
  //       "suburb": "Seven Hills",
  //       "postcode": "2000",
  //       "state": "NSW"
  //     }
  //   },
  //   {
  //     "id": 3,
  //     "name": "Blacktown",
  //     "address": {
  //       "street": "No 4, blue Street",
  //       "suburb": "Seven Hills",
  //       "postcode": "2000",
  //       "state": "NSW"
  //     }
  //   }
  // ]
};

const stations = (state = defaultState, action) => {
  switch(action.type) {
    case actions.FETCH_STATIONS_REQUEST: {
      state = {
        ...state,
        ...action.payload
      };

      return state
    }

    case actions.FETCH_STATIONS_FAIL: {
      state = {
        ...state,
        ...action.payload
      };

      return state
    }

    case actions.FETCH_STATIONS_SUCCESS: {
      state = {
        ...state,
        ...action.payload
      };

      return state
    }

    default:
      return state;
  }
}

export default stations;
