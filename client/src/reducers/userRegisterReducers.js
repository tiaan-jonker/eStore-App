import {
  USER_REGISTER_REQ,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from '../constants/userConstants'

const initialState = {}

function userRegisterReducer(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTER_REQ:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default userRegisterReducer
