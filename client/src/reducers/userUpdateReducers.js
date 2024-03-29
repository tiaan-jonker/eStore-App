import {
  USER_UPDATE_PROFILE_REQ,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_RESET,
} from '../constants/userConstants'

const initialState = { user: {} }

function userDetailReducer(state = initialState, action) {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQ:
      return { loading: true }
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default userDetailReducer
