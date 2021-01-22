import React from 'react'
import littera from '../resources/imgs/littera.png'
import {
  BsClipboardData,
  BsFolder,
  BsPerson,
  BsHouseDoor,
  BsReverseLayoutTextSidebarReverse,
  BsEye,
} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function SideMenu() {
  return (
    <>
      <div className="d-flex p-5">
        <img src={littera} className="img-fluid my-4" alt="" />
      </div>
      <div className="d-flex mx-5 mt-2">
        <div className="btn w-100 text-start ">
          <div className="d-flex align-items-center">
            <BsHouseDoor size="1.5rem" />
            <div>
              <Link className="nav-link" to="/">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mx-5 mt-4">
        <div className="btn w-100 text-start">
          <div className="d-flex align-items-center">
            <BsFolder size="1.5rem" />
            <div className="mx-2">
              <Link className="nav-link" to="/qbank">
                Q bank
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mx-5 mt-4">
        <div className="btn w-100 text-start ">
          <div className="d-flex align-items-center">
            <BsPerson size="1.5rem" />
            <div>
              <Link className="nav-link" to="/customer">
                Customer
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mx-5 mt-4">
        <div className="btn w-100 text-start ">
          <div className="d-flex align-items-center">
            <BsReverseLayoutTextSidebarReverse size="1.5rem" />
            <div>
              <Link className="nav-link" to="/exam">
                Exam
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mx-5 mt-4">
        <div className="btn w-100 text-start ">
          <div className="d-flex align-items-center">
            <BsClipboardData size="1.5rem" />
            <div>
              <Link className="nav-link" to="/report">
                Report
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex mx-5 mt-4">
        <div className="btn w-100 text-start ">
          <div className="d-flex align-items-center">
            <BsEye size="1.5rem" />
            <div>
              <Link className="nav-link" to="/proctoring">
                Proctoring
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideMenu
