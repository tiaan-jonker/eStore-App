import {
  PRODUCT_DETAIL_REQ,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
} from '../constants/productConstants'

const initialState = { product: { reviews: [] } }

function productDetailReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_DETAIL_REQ:
      return { loading: true, ...state }
    case PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export default productDetailReducer
