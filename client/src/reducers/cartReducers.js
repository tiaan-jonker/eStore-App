import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_ITEM,
} from '../constants/cartConstants'

const initialState = { cartItems: [] }

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
      const itemExists = state.cartItems.find(
        (el) => el.product === item.product
      )
      if (!itemExists) {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
      return {
        ...state,
        cartItems: state.cartItems.map((el) =>
          el.product === itemExists.product ? item : el
        ),
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (el) => el.product !== action.payload
        ),
      }

    default:
      return state
  }
}

export default cartReducer
