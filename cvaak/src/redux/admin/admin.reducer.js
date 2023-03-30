import *as types from './admin.types'
// import * as types2 from '../products/products.actionTypes'
const initialState = {
    loading: false,
    error: false,
    products: [],
    cart: [],
    userData: [],
    orders: [],
    Admins: []
}

const AdminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.LOADING:
            return { ...state, loading: true }
        case types.ERROR:
            return { ...state, error: true, loading: false }
        case types.GETPRODUCTS:
            return { ...state, products: payload, loading: false }
        case types.FILTERPRODUCTS: {
            return { ...state, products: payload, loading: false }
        }
        case types.DELETEPRODUCT: {
            let x = state.products.filter((item) => {
                return item.id !== payload.id
            })
            return { ...state, products: x }
        }
        case types.UPDATEPRODUCT: {
            return {
                ...state, products: state.products.map((item) =>
                    item.id === payload.id ? payload : item)
            }
        }
        case types.ADDPRODUCT:
            return { ...state, products: [payload, ...state.products] }
        case types.AddCartItem:
            return { ...state, cart: [payload, ...state.cart] }
        case types.GETUSERDATA:
            return { ...state, userData: payload }
        case types.POSTUSERDATA:
            return { ...state, userData: [payload, ...state.userData] }
        case types.GETORDERSDATA:
            return { ...state, orders: payload }
        case types.POSTORDERSDATA:
            return { ...state, orders: [payload, ...state.orders] }
        case types.DeleteCartItem: {
            let x = state.cart.filter((item) => {
                return item.id !== payload.id
            })
            return { ...state, cart: x }
        }
        case types.RESETCART:
            return { ...state, cart: [] }
        case types.GETADMINSDATA:
            return { ...state, Admins: payload }
        default:
            return state
    }
}
export default AdminReducer