import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import { fetchSingleCustomer } from './customersSlice'

function EditCustomer() {
  let { id } = useParams()
  const dispatch = useDispatch()
  const customerStatus = useSelector((state) => state.customers.singleStatus)
  const customer = useSelector((state) => state.customers.customer)
  const error = useSelector((state) => state.customers.error)

  useEffect(() => {
    if (customerStatus === 'idle') dispatch(fetchSingleCustomer(id))
  }, [customerStatus, dispatch])

  let content

  if (customerStatus === 'idle') {
    content = (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    )
  } else if (customerStatus === 'succeeded') {
    content = (
      <form class="p-3">
        <div className="row border border-1 border-primary rounded-3 p-4">
          <div class="col-md-6 ">
            <label for="companyName" class="form-label">
              Company Name
            </label>
            <input
              type="email"
              class="form-control"
              id="companyName"
              value={customer.company_name}
            />
          </div>
          <div class="col-md-6">
            <label for="picName" class="form-label">
              PIC Name
            </label>
            <input
              type="text"
              class="form-control"
              id="picName"
              value={customer.pic_name}
            />
          </div>
          <div class="col-md-6">
            <label for="inputCiphonety" class="form-label">
              Phone
            </label>
            <input
              type="text"
              class="form-control"
              id="phone"
              value={customer.phone}
            />
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              value={customer.email}
            />
          </div>
          <div class="col-12">
            <label for="address" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="address"
              value={customer.address}
            />
          </div>
          <div class="d-flex justify-content-end mt-4">
            <button type="submit" class="btn btn-sm btn-primary mx-2">
              submit
            </button>
            <a type="submit" href="/customer" class="btn btn-sm btn-danger">
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
