import {
  USER_DETAILS_REQ,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
} from '../constants/userConstants'

const initialState = { user: {} }

function userDetailReducer(state = initialState, action) {
  switch (action.type) {
    case USER_DETAILS_REQ:
      return { ...state, loading: true }
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default userDetailReducer
