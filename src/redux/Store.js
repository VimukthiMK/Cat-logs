import { configureStore } from '@reduxjs/toolkit'
import catReducer from 'src/redux/cats/catSlice'

export const store = configureStore({
  reducer: {
    cats: catReducer,
  },
})
