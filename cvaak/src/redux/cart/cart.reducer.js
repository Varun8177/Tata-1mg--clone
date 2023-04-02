import * as types from "./cart.types";


const initialState = {
    products: [],
    isLoading: false,
    isError: false,
};

const CartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.CART_ERROR: {
            return { ...state, isError: true, isLoading: false }
        }
        case types.CART_LOADING: {
            return { ...state, isLoading: true }
        }
        case types.GET_ITEMS_SUCCESS: {
            return { ...state, products: payload, isLoading: false }
        }
        case types.ADD_ITEM_SUCCESS: {
            return { ...state, products: [payload, ...state.products], isLoading: false }
        }
        case types.RESETCART: {
            return { ...state, products: [] }
        }
        default: {
            return state;
        }
    }
}

export default CartReducer;