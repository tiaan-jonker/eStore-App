import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const cartItemsInLocalStorage = localStorage.getItem('cartItem')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  cart: { cartItems: cartItemsInLocalStorage },
}

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)

export default store
