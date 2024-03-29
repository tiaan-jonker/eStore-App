import {
  USER_LOGIN_REQ,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants'

const initialState = {}

function userLoginReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_REQ:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export default userLoginReducer
