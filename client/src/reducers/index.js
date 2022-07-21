import { combineReducers } from 'redux'

import productListReducer from './productListReducers'
import productDetailReducer from './productDetailReducers'
import cartReducer from './cartReducers'

export default combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
})
