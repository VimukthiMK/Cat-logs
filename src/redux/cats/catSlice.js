import { createSlice } from '@reduxjs/toolkit'
import { fetchCats, fetchCatById } from 'src/redux/cats/catActions'

const catSlice = createSlice({
  name: 'cats',
  initialState: {
    cats: [],
    selectedCat: null,
    status: 'idle',
    error: null,
     searchTerm: '',
  },
  reducers: {
    selectCat: (state, action) => {
      state.selectedCat = action.payload
    },
    // Search Term
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
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

    // Fetch Single Cat By Id
      .addCase(fetchCatById.pending, (state) => {
        state.status = 'loading'
        state.selectedCat = null 
      })
      .addCase(fetchCatById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        if (action.payload && action.payload.breeds.length > 0) {
          state.selectedCat = { ...action.payload.breeds[0], image: action.payload }
        } else {
          state.error = 'Cat not found'
          state.selectedCat = null
        }
      })
      .addCase(fetchCatById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
        state.selectedCat = null
      })
  },
})

export const { selectCat, setSearchTerm } = catSlice.actions
let catReducer = catSlice.reducer
export default catReducer
