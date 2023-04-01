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
  } catch (error) {
    console.log(error)
  }
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
      localStorage.setItem("token", login.data.token);
      dispatch({ type: types.USER_REGISTER, payload: login.data });
      console.log(login.data);
    }
  } catch (err) {
    console.log(err);
  }
};

const userStatusUpdate = () => async (dispatch) => {
  const login = await fetch("https://black-skirt.cyclic.app/users/verify", {
    method: "GET",
    headers: {
      auth: `Bearer ${localStorage.getItem("token")}`
    }
  });
  const res = await login.json()
  dispatch({ type: types.USER_STATUS_UPDATE, payload: res })
  console.log("validation", res)
};

const userLogout = () => (dispatch) => {
  localStorage.clear()
  dispatch({
    type: types.USER_LOGOUT,
  })
};

export { userLogin, userRegister, userStatusUpdate, userLogout };
