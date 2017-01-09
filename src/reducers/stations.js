import * as actions from '../actions/stations';

const defaultState = {
  isFetching: false, // flase for a UI loading
  didInvalidate: false, // for local caching of data
  errMsg: null, // to show a UI error msg in case there was an error
  lastFetched: null, // when was data last fetched, use with didInvalidate to maintain a local cache of data
  items: [
    {
      "id": 1,
      "name": "Auburn",
      "address": {
        "street": "No 284, Pitt Street",
        "suburb": "Auburn",
        "postcode": "2000",
        "state": "NSW"
      }
    },
    {
      "id": 2,
      "name": "Seven Hills",
      "address": {
        "street": "No 4, blue Street",
        "suburb": "Seven Hills",
        "postcode": "2000",
        "state": "NSW"
      }
    },
    {
      "id": 3,
      "name": "Blacktown",
      "address": {
        "street": "No 4, blue Street",
        "suburb": "Seven Hills",
        "postcode": "2000",
        "state": "NSW"
      }
    }
  ]
};

const stations = (state = defaultState, action) => {
  switch(action.type) {
    case actions.FETCH_STATIONS_REQUEST: {
      let update =  {isFetching: true};

      state = {
        ...state,
        ...update
      };

      return state
    }

    case actions.FETCH_STATIONS_FAIL: {
      let update =  {errMsg: action.payload.errMsg};

      state = {
        ...state,
        ...update
      };

      return state
    }

    case actions.FETCH_STATIONS_SUCCESS: {
      let update =  {
        lastFetched: +new Date(),
        items: action.payload.items
      };

      state = {
        ...state,
        ...update
      };

      return state
    }

    default:
      return state;
  }
}

export default stations;
