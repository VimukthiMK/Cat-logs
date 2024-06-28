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

