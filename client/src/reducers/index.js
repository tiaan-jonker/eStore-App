import { combineReducers } from 'redux'

import productListReducer from './productListReducers'
import productDetailReducer from './productDetailReducers'
import cartReducer from './cartReducers'
import userReducer from './userReducers'

export default combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  userLogin: userReducer,
})
