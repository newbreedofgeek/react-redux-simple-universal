import fetch from 'isomorphic-fetch';
import * as api from '../api/stations';

export const FETCH_STATIONS_REQUEST = 'FETCH_STATIONS_REQUEST';
export const FETCH_STATIONS_FAIL = 'FETCH_STATIONS_FAIL';
export const FETCH_STATIONS_SUCCESS = 'FETCH_STATIONS_SUCCESS';

export const fetchStations = (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({
      type: FETCH_STATIONS_REQUEST,
      payload: {
        isFetching: true
      }
    })

    fetch(api.getStations)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: FETCH_STATIONS_SUCCESS,
          payload: {
            isFetching: false,
            lastFetched: +new Date(),
            items: json
          }
        })

        resolve();
      })
      .catch(e => {
        dispatch({
          type: FETCH_STATIONS_FAIL,
          payload: {
            isFetching: false,
            errMsg: e
          }
        })

        reject();
      })
  });
};
