import { unwrapResult } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewCustomers } from './customersSlice'

function CustomerForm() {
  const dispatch = useDispatch()
  const [id, setId] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [address, setAddress] = useState('')
  const [picName, setPicName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const canSave =
    [companyName, address, picName, phone, email].every(Boolean) &&
    addRequestStatus === 'idle'

  const generateId = () => {
    var timestamp
    var moonLanding = new Date()
    timestamp = moonLanding.getDay().toString()
    timestamp += moonLanding.getMonth().toString()
    timestamp += moonLanding.getFullYear().toString()
    timestamp += moonLanding.getMilliseconds().toString()
    return parseInt(timestamp)
  }

  const onCompanyNameChanged = (e) => {
    setCompanyName(e.target.value)
    setId(generateId)
  }
  const onAddressChanged = (e) => setAddress(e.target.value)
  const onPicNameChanged = (e) => setPicName(e.target.value)
  const onPhoneChanged = (e) => setPhone(e.target.value)
  const onEmailChanged = (e) => setEmail(e.target.value)

  const onSaveCustomerClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        const resultAction = await dispatch(
          addNewCustomers({ id, companyName, address, picName, phone, email })
        )
        unwrapResult(resultAction)
        setId('')
        setCompanyName('')
        setAddress('')
        setPicName('')
        setPhone('')
        setEmail('')
      } catch (err) {
        console.error('Failed to save !')
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }

  return (
    <form className="p-3">
      <div className="row border border-1 border-primary rounded-3 p-4">
        <div className="col-6 ">
          <label htmlFor="company_name" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={onCompanyNameChanged}
            className="form-control"
            id="company_name"
          />
        </div>
        <div className="col-6">
          <label htmlFor="pic_name" className="form-label">
            PIC Name
          </label>
          <input
            type="text"
            name="picName"
            id="pic_name"
            value={picName}
            onChange={onPicNameChanged}
            className="form-control"
          />
        </div>
        <div className="col-6">
          <label htmlFor="email" className="form-label">
            Phone
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onEmailChanged}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            Email
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={phone}
            onChange={onPhoneChanged}
            className="form-control"
          />
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={onAddressChanged}
            className="form-control"
          />
        </div>
        <div className="d-flex justify-content-end mt-4">
          <button
            onClick={onSaveCustomerClicked}
            disabled={!canSave}
            type="button"
            className="btn btn-sm btn-primary "
          >
            submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default CustomerForm
