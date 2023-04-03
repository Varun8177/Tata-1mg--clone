import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  userName: null,
  admin: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_CHECK: {
      return { ...state, isAuth: payload };
    }
    case types.USER_LOGIN: {
      return { ...state, isAuth: true };
    }

    case types.USER_REGISTER: {
      return { ...state, isAuth: true };
    }
    case types.USER_STATUS_UPDATE: {
      return {
        ...state,
        userName: payload.username,
        admin: payload.admin,
        isAuth: true,
      };
    }
    case types.USER_LOGOUT: {
      return { ...state, userName: null, isAuth: false };
    }

    default: {
      return state;
    }
  }
};

export { reducer };
