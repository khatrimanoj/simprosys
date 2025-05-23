// actions.js
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchProductsRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchProductsSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
