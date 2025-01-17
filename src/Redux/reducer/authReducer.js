import { AUTH } from '../config/types';

const initialState = {
    loginStatus: false,
    responseCode: null,
    errMsg: null,
    loading: false,
    authToken: null,
    userData: null,
    userId: null,
    userType: null,
    userName: null,
    email: null,
    mobileNumber: null,
    country: null,
    city: null,
    address: null,
    pinCode: null,

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH.LOGIN_REQUEST:
            return Object.assign({}, state, {
                loginStatus: false,
                responseCode: null,
                errMsg: null,
                loading: true,
                authToken: null,
                userData: null,
                userId: null,
                userType: null,
                userName: null,
                email: null,
                mobileNumber: null,
                country: null,
                city: null,
                address: null,
                pinCode: null,

            });
        case AUTH.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                responseCode: action?.payload?.responseCode,
                loginStatus: true,
                errMsg: action?.payload?.message,
                loading: false,
                authToken: action?.payload?.responseBody?.accessToken,
                userData: action?.payload?.responseBody,
                userId: action?.payload?.responseBody?.id,
                userType: action?.payload?.responseBody?.roleResponsePayload?.roleName,
                userName: action?.payload?.responseBody?.name,
                email: action?.payload?.responseBody?.email,
                mobileNumber: action?.payload?.responseBody?.mobileNumber,
                country: action?.payload?.responseBody?.country,
                city: action?.payload?.responseBody?.city,
                address: action?.payload?.responseBody?.address,
                pinCode: action?.payload?.responseBody?.pinCode,

            });
        case AUTH.LOGIN_FAIL:
            return Object.assign({}, state, {
                loginStatus: false,
                errMsg: action?.payload?.message,
                responseCode: action?.payload?.responseCode,
                loading: false,
                authToken: null,
                userData: null,
                userId: null,
                userType: null,
                userName: null,
                email: null,
                mobileNumber: null,
                country: null,
                city: null,
                address: null,
                pinCode: null,

            });
        case AUTH.CLEAR_STATUS:
            return Object.assign({}, state, {
                responseCode: null,
                errMsg: null,
            });
        case AUTH.LOGOUT_USER:
            return Object.assign({}, state, {
                loginStatus: false,
                responseCode: null,
                errMsg: null,
                loading: false,
                authToken: null,
                userData: null,
                userId: null,
                userType: null,
                userName: null,
                email: null,
                mobileNumber: null,
                country: null,
                city: null,
                address: null,
                pinCode: null,

            });
        default:
            return state;
    }
};

export default authReducer;
