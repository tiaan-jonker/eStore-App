import { combineReducers } from 'redux'

import productListReducer from './productListReducers'
import productDetailReducer from './productDetailReducers'
import cartReducer from './cartReducers'
import userLoginReducer from './userLoginReducers'
import userRegisterReducer from './userRegisterReducers'
import userDetailsReducer from './userDetailsReducers'
import userUpdateReducer from './userUpdateReducers'

export default combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
})
