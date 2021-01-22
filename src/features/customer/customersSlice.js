import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  customers: [],
  customer: [],
  status: 'idle',
  error: null,
  singleStatus: 'idle',
  singleError: null,
}

export const fetchCustomers = createAsyncThunk(
  'customers/fetchCustomers',
  async () => {
    const response = await axios.get(`http://localhost:4000/customers/read`)
    return response
  },
)

export const fetchSingleCustomer = createAsyncThunk(
  'customers/fetchSingleCustomer',
  async (id) => {
    const response = await axios.get(
      `http://localhost:4000/customers/read/${id}`,
    )
    return response
  },
)

export const addNewCustomers = createAsyncThunk(
  'customers/addNewCustomers',
  async (data) => {
    const response = await axios.post(
      'http://localhost:4000/customers/create',
      data,
    )
    return response
  },
)

export const deleteCustomer = createAsyncThunk(
  'customers/deleteCustomer',
  async (id) => {
    const response = await axios.delete(
      `http://localhost:4000/customers/delete/${id}`,
    )
    return response
  },
)

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: { changeCustomerStatus: (state) => (state.status = 'idle') },
  extraReducers: {
    [fetchCustomers.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchCustomers.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.customers = state.customers.concat(action.payload.data)
    },
    [fetchCustomers.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [fetchSingleCustomer.pending]: (state, action) => {
      state.singleStatus = 'loading'
    },
    [fetchSingleCustomer.fulfilled]: (state, action) => {
      state.singleStatus = 'succeeded'
      state.customer = action.payload.data[0]
    },
    [fetchSingleCustomer.rejected]: (state, action) => {
      state.singleStatus = 'failed'
      state.singleError = action.error.message
    },
    [addNewCustomers.fulfilled]: (state, action) => {
      state.customers = state.customers.concat(action.payload.data[0])
    },
    [deleteCustomer.fulfilled]: (state, action) => {
      state.customers = state.customers.filter(
        (cust) => cust.id !== action.payload,
      )
    },
  },
})
export const { changeCustomerStatus } = customersSlice.actions
export default customersSlice.reducer
