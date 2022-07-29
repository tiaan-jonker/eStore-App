import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

const initialState = { cartItems: [], shippingAddress: {} }

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

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      }
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      }

    default:
      return state
  }
}

export default cartReducer
