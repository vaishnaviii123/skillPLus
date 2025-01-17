import {
    API_METHODS,
    AUTH,
    END_POINT,
    ApiHandler,
    BASE_URL,
  } from '../config';
  
  const Failerdata = {
    responseCode: 403,
    message: "You do not currently have access to the mobile application."
  }
  
  export const SignIn = data => {
    return async (dispatch, getState) => {
      dispatch({ type: AUTH.LOGIN_REQUEST });
      const reqParam = {
        "email": data.email,
        "password": data.password,
        "deviceType": data.deviceType,
        "deviceToken": data.deviceToken,
      };
  
      const method = API_METHODS.POST;
      const endPoint = BASE_URL + END_POINT.sigin;
      try {
        const response = await ApiHandler({ endPoint, method, reqParam });
        if (response?.data?.responseCode === 200) {
          if (response.data) {
            if (response.data?.responseBody?.roleResponsePayload?.isAccessor === "yes") {
              if (response.data?.responseBody?.accessorType === "Mobile Assessor" || response.data?.responseBody?.accessorType === "Both") {
                dispatch({
                  type: AUTH.LOGIN_SUCCESS,
                  payload: response.data,
                });
              }
              else {
                dispatch({ type: AUTH.LOGIN_FAIL, payload: Failerdata });
              }
            }
            else {
              dispatch({ type: AUTH.LOGIN_FAIL, payload: Failerdata });
            }
          } else {
            dispatch({ type: AUTH.LOGIN_FAIL, payload: response.data });
          }
        } else {
          dispatch({ type: AUTH.LOGIN_FAIL, payload: response.data });
        }
      } catch (err) {
        if (err.response?.responseCode === 401) {
          dispatch({ type: AUTH.LOGIN_FAIL, payload: err.response.data });
        } else {
          dispatch({ type: AUTH.LOGIN_FAIL, payload: err });
        }
      }
    };
  };
  
  export const ClearAuthStatus = data => {
    return async (dispatch, getState) => {
      dispatch({ type: AUTH.CLEAR_STATUS });
    };
  };
  
  
  export const Userlogout = data => {
    return async (dispatch, getState) => {
      dispatch({ type: AUTH.LOGOUT_USER });
    };
  };