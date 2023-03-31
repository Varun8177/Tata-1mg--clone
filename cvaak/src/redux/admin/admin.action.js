import axios from 'axios'
import *as types from './admin.types'


export const GetRequest = () => async (dispatch) => {
    dispatch({ type: types.LOADING })
    try {

        const res = await axios.get(`https://health-prime.onrender.com/products`)

        const res = await axios.get(`https://black-skirt.cyclic.app/products`)

        dispatch({ type: types.GETPRODUCTS, payload: res.data })
    } catch (error) {
        dispatch({ type: types.ERROR })
    }
}

export const GetUserDataRequest = () => async (dispatch) => {
    dispatch({ type: types.LOADING })
    try {
        const res = await axios.get(`https://black-skirt.cyclic.app/users/`)
        dispatch({ type: types.GETUSERDATA, payload: res.data })
    } catch (error) {
        dispatch({ type: types.ERROR })
    }
}

export const PostUserDataRequest = (details) => async (dispatch) => {
    const res = await axios.post(`https://black-skirt.cyclic.app/users/`, details)
    if (res.data) {
        dispatch({ type: types.POSTUSERDATA, payload: res.data })
    }
}

// export const GetOrdersDataRequest = () => async (dispatch) => {
//     dispatch({ type: types.LOADING })
//     try {
//         const res = await axios.get(`https://black-skirt.cyclic.app/orders`)
//         dispatch({ type: types.GETORDERSDATA, payload: res.data })
//     } catch (error) {
//         dispatch({ type: types.ERROR })
//     }
// }

// export const PostOrdersDataRequest = (details) => async (dispatch) => {
//     const res = await axios.post(`https://black-skirt.cyclic.app/orders`, details)
//     if (res.data) {
//         dispatch({ type: types.POSTORDERSDATA, payload: res.data })
//     }
// }

// export const FilterProd = (value) => async (dispatch) => {
//     try {
//         const res = await axios.get(`https://black-skirt.cyclic.app/products`)
//         let x = res.data.filter((item) => {
//             return item.use.includes(value);
//         });
//         dispatch({ type: types.FILTERPRODUCTS, payload: x })
//     } catch (error) {
//         dispatch({ type: types.ERROR })
//     }

// }

export const DeleteProd = (id) => async (dispatch) => {
    const res = await axios.get(`https://black-skirt.cyclic.app/products/${id}`)
    const deleteRes = await axios.delete(`https://black-skirt.cyclic.app/products/delete//${id}`)
    if (res.data) {
        dispatch({ type: types.DELETEPRODUCT, payload: res.data })
    }
}

export const UpdateProd = (id, changes) => async (dispatch) => {
    const res = await axios.patch(`https://black-skirt.cyclic.app/products/update/${id}`, changes)
    if (res.data) {
        dispatch({ type: types.UPDATEPRODUCT, payload: res.data })
    }
}

export const AddProd = (details) => async (dispatch) => {
    const res = await axios.post(`https://black-skirt.cyclic.app/products/add`, details)
    if (res.data) {
        dispatch({ type: types.ADDPRODUCT, payload: res.data })
    }
}

export const GetAdminDataRequest = () => async (dispatch) => {
    dispatch({ type: types.LOADING })
    try {
        const res = await axios.get(`https://black-skirt.cyclic.app/users`)
        dispatch({ type: types.GETADMINSDATA, payload: res.data })
    } catch (error) {
        dispatch({ type: types.ERROR })
    }
}