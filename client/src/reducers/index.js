import { combineReducers } from 'redux'

import productListReducer from './productListReducers'
import productDetailReducer from './productDetailReducers'

export default combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
})
