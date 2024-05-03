
import { FETCH_COFFEE_REQUEST, FETCH_COFFEE_SUCCESS, FETCH_COFFEE_FAILURE, SORT_COFFEE_ASC, SORT_COFFEE_DESC } from './actionType';

export const coffeeReducer = (state = { isLoading: false, isError: false, coffee: [] }, action) => {
  switch (action.type) {
    case FETCH_COFFEE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_COFFEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        coffee: action.payload
      };
    case FETCH_COFFEE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case SORT_COFFEE_ASC:
      return {
        ...state,
        coffee: state.coffee.slice().sort((a, b) => a.price - b.price)
      };
    case SORT_COFFEE_DESC:
      return {
        ...state,
        coffee: state.coffee.slice().sort((a, b) => b.price - a.price)
      };
    default:
      return state;
  }
};
