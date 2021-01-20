import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import { fetchSingleCustomer } from './customersSlice'

function EditCustomer() {
  let { id } = useParams()
  const dispatch = useDispatch()
  const customer = useSelector((state) => state.customers.customers)

  const customerStatus = useSelector((state) => state.customers.status)

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
            <label for="inputEmail4" class="form-label">
              Company Name
            </label>
            <input
              type="email"
              value={customer.company_name}
              class="form-control"
              id="inputEmail4"
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              PIC Name
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              Phone
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-6">
            <label for="inputZip" class="form-label">
              Email
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input type="text" class="form-control" id="inputAddress" />
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

  return (
    <>
      <div>{content}</div>
    </>
  )
}

export default EditCustomer
