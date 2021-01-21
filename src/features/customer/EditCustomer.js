import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSingleCustomer } from './customersSlice'

function EditCustomer() {
  let { id } = useParams()
  const dispatch = useDispatch()
  const customerStatus = useSelector((state) => state.customers.singleStatus)
  const customer = useSelector((state) => state.customers.customer)
  const error = useSelector((state) => state.customers.error)

  useEffect(() => {
    if (customerStatus === 'idle') dispatch(fetchSingleCustomer(id))
  }, [customerStatus, dispatch, id])

  let content

  if (customerStatus === 'idle') {
    content = (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  } else if (customerStatus === 'succeeded') {
    content = (
      <form className="p-3">
        <div className="row border border-1 border-primary rounded-3 p-4">
          <div className="col-md-6 ">
            <label htmlFor="companyName" className="form-label">
              Company Name
            </label>
            <input
              type="email"
              className="form-control"
              id="companyName"
              value={customer.company_name}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="picName" className="form-label">
              PIC Name
            </label>
            <input
              type="text"
              className="form-control"
              id="picName"
              value={customer.pic_name}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCiphonety" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={customer.phone}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={customer.email}
            />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={customer.address}
            />
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button type="submit" className="btn btn-sm btn-primary mx-2">
              submit
            </button>
            <a type="submit" href="/customer" className="btn btn-sm btn-danger">
              cancel
            </a>
          </div>
        </div>
      </form>
    )
  } else if (customerStatus === 'failed') {
    content = <div>{error}</div>
  }
  console.log(customer)

  return <>{content}</>
}

export default EditCustomer
