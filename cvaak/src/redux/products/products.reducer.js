import * as types from "./products.actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

const ProductReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCT_REQUEST: {
      return { ...state, isLoading: false, products: payload };
    }
    case types.REQUEST_SUCCESS: {
      return { isLoading: true, isError: false };
    }
    case types.REQUEST_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case types.REQUEST_FILTER: {
      return { ...state, isLoading: false, products: payload };
    }

    default: {
      return state;
    }
  }
};

export default ProductReducer;
