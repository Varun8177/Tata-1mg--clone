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