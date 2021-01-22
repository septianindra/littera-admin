import React from 'react'

import AddCustomerForm from '../features/customer/AddCustomerForm'
import CustomerList from '../features/customer/CustomerList'
import ZoomWindow from '../components/ZoomWindow'

function CustomerPage() {
  return (
    <>
      <AddCustomerForm />
      <CustomerList />
      <ZoomWindow />
    </>
  )
}

export default CustomerPage
