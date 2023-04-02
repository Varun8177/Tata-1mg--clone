import axios from "axios";
import * as types from './cart.types';

export const getCartData = () => async (dispatch) => {
    try {
        const res = await fetch('https://black-skirt.cyclic.app/cart', {
            headers: {
                auth: `Bearer ${localStorage.getItem("token")}`
            }
        })
        const data = await res.json()
        dispatch({ type: types.GET_ITEMS_SUCCESS, payload: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: types.CART_ERROR })
    }
}


export const postCartData = (newProduct) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post("https://black-skirt.cyclic.app/cart/add", newProduct, {
            headers: {
                auth: `Bearer ${token}`
            }
        });
        const { item } = response.data;
        dispatch({ type: types.ADD_ITEM_SUCCESS, payload: item })
    } catch (error) {
        console.log(error)
        dispatch({ type: types.CART_ERROR })
    }
}

// Reset the user's cart by sending a DELETE request to the server
export const resetCart = () => async (dispatch) => {
    try {
        // Get the user's token from local storage
        const token = localStorage.getItem('token');

        // If the token is not available, handle the error
        if (!token) {
            throw new Error('No token available');
        }

        // Send the DELETE request to the server using the axios instance
        const response = await axios.delete('https://black-skirt.cyclic.app/cart/delete/', {
            headers: {
                auth: `Bearer ${token}`,
            },
        });

        console.log(response)
        // Dispatch the RESETCART action to update the cart state in the store
        dispatch({ type: types.RESETCART });
    } catch (error) {
        // Handle the error and dispatch a CART_ERROR action
        console.log(error);
        dispatch({ type: types.CART_ERROR });
    }
};




