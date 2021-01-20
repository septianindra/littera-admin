import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import CostumerForm from './CustomerForm'

function AddCustomerForm() {
  const [collapse, setCollapse] = useState(false)
  const toggle = () => setCollapse(!collapse)

  const content = (collapse) => {
    if (collapse) {
      return <CostumerForm toggle={toggle} />
    }
  }
  return (
    <>
      <button type="button" onClick={toggle} className="btn btn-sm btn-primary">
        <BsPlus /> add new customer
      </button>
      {content(collapse)}
    </>
  )
}

export default AddCustomerForm
