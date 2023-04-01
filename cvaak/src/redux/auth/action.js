import * as types from "./actionTypes";
import axios from "axios";
const userLogin = (payload) => async (dispatch) => {
  return {
    type: types.USER_LOGIN,
    payload,
  };
};

const userRegister = (payload) => async (dispatch) => {
  try {
    payload.location = "Maharashtra";
    payload.role = "user";
    const res = await axios.post(
      "https://black-skirt.cyclic.app/users/register",
      payload
    );
    if (res.data) {
      const login = await axios.post(
        "https://black-skirt.cyclic.app/users/login",
        { email: payload.email, password: payload.password }
      );
      dispatch({ type: types.USER_REGISTER, payload: login.data });
      console.log(login.data);
    }
  } catch (err) {
    console.log(err);
  }
  //   console.log(payload);
};

const userStatusUpdate = (payload) => {
  return {
    type: types.USER_STATUS_UPDATE,
    payload,
  };
};

const userLogout = () => {
  return {
    type: types.USER_LOGOUT,
  };
};

export { userLogin, userRegister, userStatusUpdate, userLogout };
