import * as constants from './constants';

const defaultState = {
  isFetching: false,
  errMsg: null,
  lastFetched: null,
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
    case constants.FETCH_STATIONS_REQUEST: {
      let update =  {isFetching: true};

      state = {
        ...state,
        ...update
      };

      return state
    }

    case constants.FETCH_STATIONS_FAIL: {
      let update =  {errMsg: action.payload.errMsg};

      state = {
        ...state,
        ...update
      };

      return state
    }

    case constants.FETCH_STATIONS_SUCCESS: {
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
