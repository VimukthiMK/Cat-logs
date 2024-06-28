import { createSlice } from '@reduxjs/toolkit'
import { fetchCats} from 'src/redux/cats/catActions'

const catSlice = createSlice({
  name: 'cats',
  initialState: {
    cats: [],
    selectedCat: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    selectCat: (state, action) => {
      state.selectedCat = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
    // Fetch All Cat Breeds
      .addCase(fetchCats.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.cats = action.payload
      })
      .addCase(fetchCats.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { selectCat } = catSlice.actions
let catReducer = catSlice.reducer
export default catReducer
