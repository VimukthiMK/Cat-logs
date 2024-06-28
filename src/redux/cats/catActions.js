import { createAsyncThunk } from '@reduxjs/toolkit'
import ApiRequest from 'src/lib/ApiRequest'

// Fetch all Cat Breeds
export const fetchCats = createAsyncThunk('cats/fetchCats', async () => {
  const response = await ApiRequest.get('/breeds')
  if (response.data.length > 0) {
    return response.data
  } else {
    throw new Error('Not found')
  }
})

// Fetch Cat breed by Id
export const fetchCatById = createAsyncThunk('cats/fetchCatById', async (catId) => {
  const response = await ApiRequest.get(`/images/search?breed_ids=${catId}`)
  if (response.data.length > 0) {
    return response.data[0]
  } else {
    throw new Error('Cat not found')
  }
})

