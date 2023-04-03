import * as types from "./admin.types";
// import * as types2 from '../products/products.actionTypes'
const initialState = {
  loading: false,
  error: false,
  products: [],
  cart: [],
  userData: [],
  orders: [],
  Admins: [],
};

const AdminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOADING:
      return { ...state, loading: true };
    case types.ERROR:
      return { ...state, error: true, loading: false };
    case types.GETPRODUCTS:
      return { ...state, products: payload, loading: false };
    case types.FILTERPRODUCTS: {
      return { ...state, products: payload, loading: false };
    }
    case types.DELETEPRODUCT: {
      console.log(payload);
      let x = state.products.filter((ele) => {
        return ele._id !== payload.product._id;
      });

      return { ...state, products: x };
    }

    case types.UPDATEPRODUCT: {
      console.log("update payload", payload?._id);
      let x = state.products.map((ele) => {
        return ele._id === payload?._id ? payload : ele
      }
      )
      return {
        ...state,
        products: x,
      };
    }

    case types.ADDPRODUCT:
      console.log(payload);
      return { ...state, products: [payload, ...state.products] };
    case types.AddCartItem:
      return { ...state, cart: [payload, ...state.cart] };
    case types.GETUSERDATA:
      return { ...state, userData: payload };
    case types.POSTUSERDATA:
      return { ...state, userData: [payload, ...state.userData] };
    case types.GETORDERSDATA:
      return { ...state, orders: payload };
    case types.POSTORDERSDATA:
      return { ...state, orders: [payload, ...state.orders] };
    case types.DeleteCartItem: {
      let x = state.cart.filter((item) => {
        return item.id !== payload.id;
      });
      return { ...state, cart: x };
    }
    case types.RESETCART:
      return { ...state, cart: [] };
    case types.GETADMINSDATA:
      return { ...state, Admins: payload };
    default:
      return state;
  }
};
export default AdminReducer;
