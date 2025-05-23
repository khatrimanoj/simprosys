// thunks.js
import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } from './actions';

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      dispatch(fetchProductsSuccess(data));
    } catch (error) {
      dispatch(fetchProductsFailure(error));
    }
  };
};