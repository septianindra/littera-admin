import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { fetchCustomers } from '../customer/customersSlice'

function ProctoringList() {
  const dispatch = useDispatch()
  const customers = useSelector((state) => state.customers.customers)

  const customerStatus = useSelector((state) => state.customers.status)

  useEffect(() => {
    if (customerStatus === 'idle') dispatch(fetchCustomers())
  }, [customerStatus, dispatch])

  return (
    <div className="row">
      {customers.map((customer) => (
        <div className="col-3" key={customer.id}>
          <Link to={`/proctor/${customer.id}`}>
            <figure className="figure">
              <div
                className="bg-dark"
                style={{ height: '160px', width: '300px' }}
              ></div>
              <figcaption className="figure-caption">
                ID : {customer.id}
              </figcaption>
            </figure>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProctoringList
