import axios from "axios";
import {
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_PRODUCT,
} from "../constants";

export const getAllProducts = (): any => async (dispatch: any) => {
  try {
    dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: GET_ALL_PRODUCTS_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const getProduct =
  (data: any): any =>
  async (dispatch: any) => {
    dispatch({ type: GET_PRODUCT, payload: data });
  };
