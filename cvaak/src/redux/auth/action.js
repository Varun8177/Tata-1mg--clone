import * as types from "./actionTypes";

const userLogin = (payload) => {
    return {
        type: types.USER_LOGIN,
        payload
    }
}

const userRegister = (payload) => {
    return {
        type: types.USER_REGISTER,
        payload
    }
}

const userStatusUpdate = (payload) => {
    return {
        type: types.USER_STATUS_UPDATE,
        payload
    }
}

const userLogout = () => {
    return {
        type: types.USER_LOGOUT,

    }
}


export {
    userLogin,
    userRegister,
    userStatusUpdate,
    userLogout
}