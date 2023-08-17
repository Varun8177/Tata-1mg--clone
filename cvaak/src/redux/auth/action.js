import * as types from "./actionTypes";
import axios from "axios";

const userLogin = (payload) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://black-skirt.cyclic.app/users/login",
      { email: payload.email, password: payload.password }
    );
    const { data } = response;
    localStorage.setItem("token", data.token);
    dispatch({ type: types.USER_LOGIN, payload: data });
    payload.signinSuccess();
  } catch (error) {
    payload.signinFail();
  }
};

const userRegister = (payload) => async (dispatch) => {
  try {
    payload.location = "Maharashtra";
    payload.role = "user";
    await axios.post("https://black-skirt.cyclic.app/users/register", payload);
    payload.signupSuccess();
  } catch (err) {
    payload.signupFail();
  }
};

const userStatusUpdate = () => async (dispatch) => {
  const login = await fetch("https://black-skirt.cyclic.app/users/verify", {
    method: "GET",
    headers: {
      auth: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const res = await login.json();
  dispatch({ type: types.USER_STATUS_UPDATE, payload: res });
};

const userLogout = () => (dispatch) => {
  localStorage.clear();
  dispatch({
    type: types.USER_LOGOUT,
  });
};

export { userLogin, userRegister, userStatusUpdate, userLogout };
