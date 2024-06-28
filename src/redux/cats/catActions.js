import { createAsyncThunk } from '@reduxjs/toolkit'
import ApiRequest from 'src/lib/ApiRequest'

export const fetchCats = createAsyncThunk('cats/fetchCats', async () => {
  const response = await ApiRequest.get('/breeds')
  if (response.data.length > 0) {
    return response.data
  } else {
    throw new Error('Not found')
  }
})

export const fetchCatById = createAsyncThunk('cats/fetchCatById', async (catId) => {
  const response = await ApiRequest.get(`/images/search?breed_ids=${catId}`)
  if (response.data.length > 0) {
    return response.data[0]
  } else {
    throw new Error('Cat not found')
  }
})

