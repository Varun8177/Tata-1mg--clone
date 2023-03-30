import * as types from "./actionTypes";

const initialState = {
    isAuth: false,
    userName: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.USER_LOGIN: {
            return { ...state, userName: payload, isAuth: true }
        }

        case types.USER_REGISTER: {
            return { ...state, userName: payload, isAuth: true }
        }
        case types.USER_STATUS_UPDATE: {
            return { ...state, userName: payload, isAuth: true }
        }
        case types.USER_LOGOUT: {
            return { ...state, userName: null, isAuth: false }
        }

        default: {
            return state
        }
    }

}

export {
    reducer
};
