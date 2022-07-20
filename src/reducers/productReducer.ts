import {
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
} from "../constants";

const initialState: any = {
  products: [],
  error: false,
  loading: false,
  errorMsg: "",
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload,
      };
    case GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};
