import axios from "axios";
import * as types from './products.actionTypes';

export const getData = (sort, order, filtervalues) => async (dispatch) => {
    dispatch({ type: types.REQUEST_SUCCESS })
    try {
        let result = await axios.get(`https://black-skirt.cyclic.app/products`, {
            params: {
                category: filtervalues,
                sortBy: sort,
                order
            }
        });
        console.log(filtervalues, sort, order)
        dispatch({ type: types.GET_PRODUCT_REQUEST, payload: result.data })
        return result.data;
    } catch (error) {
        dispatch({ type: types.REQUEST_ERROR, payload: error.message })
    }
}


export const FilterDataReq = (value) => async (dispatch) => {
    dispatch({ type: types.REQUEST_SUCCESS })
    try {
        let result = await axios.get(`https://black-skirt.cyclic.app/products?category=calcium`);
        console.log(result.data)
        dispatch({ type: types.GET_PRODUCT_REQUEST, payload: result.data })
        return result.data;
    } catch (error) {
        dispatch({ type: types.REQUEST_ERROR, payload: error.message })
    }
}
