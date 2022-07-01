import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './data'

export default configureStore({
  reducer: {
      products: productsReducer,
  }
})