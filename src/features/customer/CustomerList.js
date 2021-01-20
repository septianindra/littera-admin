import React, { useEffect } from 'react'
import { BsArrowUpDown, BsPen, BsTrash } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCustomer, fetchCustomers } from './customersSlice'
import format from 'date-format'
import { unwrapResult } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'

function CustomerList() {
  const dispatch = useDispatch()
  const customers = useSelector((state) => state.customers.customers)

  const customerStatus = useSelector((state) => state.customers.status)

  useEffect(() => {
    if (customerStatus === 'idle') dispatch(fetchCustomers())
  }, [customerStatus, dispatch])

  const onDeleteCustomerClicked = async (id) => {
    const resultAction = await dispatch(deleteCustomer(id))
    unwrapResult(resultAction)
  }

  return (
    <div className="p-3">
      <p class="fs-5 text-primary fw-bold text-uppercase">Customer List</p>
      <div className="p-3 mb-4 border border-primary rounded-3">
        <table class="table table-sm table-hover">
          <thead>
            <tr>
              <th scope="col">
                <div class="btn-group" role="group">
                  <div type="button" class="btn btn-sm" disabled>
                    Id
                  </div>
                  <button type="button" class="btn btn-sm btn-primary">
                    <BsArrowUpDown />
                  </button>
                </div>
              </th>
              <th scope="col">
                <div class="btn-group" role="group">
                  <div type="button" class="btn btn-sm" disabled>
                    Company
                  </div>
                  <button type="button" class="btn btn-sm btn-primary">
                    <BsArrowUpDown />
                  </button>
                </div>
              </th>
              <th scope="col">
                <div class="btn-group" role="group">
                  <div type="button" class="btn btn-sm" disabled>
                    Address
                  </div>
                  <button type="button" class="btn btn-sm btn-primary">
                    <BsArrowUpDown />
                  </button>
                </div>
              </th>
              <th scope="col">
                <div class="btn-group " role="group">
                  <div type="button" class="btn btn-sm" disabled>
                    PIC Name
                  </div>
                  <button type="button" class="btn btn-sm btn-primary">
                    <BsArrowUpDown />
                  </button>
                </div>
              </th>
              <th scope="col">
                <div class="btn-group" role="group">
                  <div type="button" class="btn btn-sm" disabled>
                    Phone
                  </div>
                  <button type="button" class="btn btn-sm btn-primary">
                    <BsArrowUpDown />
                  </button>
                </div>
              </th>
              <th scope="col">
                <div class="btn-group" role="group">
                  <div type="button" class="btn btn-sm" disabled>
                    Email
                  </div>
                  <button type="button" class="btn btn-sm btn-primary">
                    <BsArrowUpDown />
                  </button>
                </div>
              </th>
              <th scope="col">
                <div class="btn-group" role="group">
                  <div type="button" class="btn btn-sm" disabled>
                    Date
                  </div>
                  <button type="button" class="btn btn-sm btn-primary">
                    <BsArrowUpDown />
                  </button>
                </div>
              </th>
              <th scope="col">
                <div class="btn-group" role="group">
                  <div type="button" class="btn btn-sm" disabled>
                    Last Update
                  </div>
                  <button type="button" class="btn btn-sm btn-primary">
                    <BsArrowUpDown />
                  </button>
                </div>
              </th>
              <th scope="col">
                <BsPen />
              </th>
              <th scope="col">
                <BsTrash />
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr>
                <td>{customer.id}</td>
                <td>{customer.company_name}</td>
                <td>{customer.address}</td>
                <td>{customer.pic_name}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>
                  {format.asString('dd-MM-yyyy', new Date(customer.created_at))}
                </td>
                <td>
                  {format.asString('dd-MM-yyyy', new Date(customer.updated_at))}
                </td>
                <td>
                  <button className="btn">
                    <Link to={`/edit-customer/${customer.id}`}>
                      <BsPen />
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => onDeleteCustomerClicked(customer.id)}
                    className="btn"
                  >
                    <BsTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <button class="page-link">Previous</button>
            </li>
            <li class="page-item">
              <button class="page-link">1</button>
            </li>
            <li class="page-item">
              <button class="page-link">2</button>
            </li>
            <li class="page-item">
              <button class="page-link">3</button>
            </li>
            <li class="page-item">
              <button class="page-link">Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default CustomerList
