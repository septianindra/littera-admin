import React from 'react'
import { BsList, BsSearch } from 'react-icons/bs'
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="d-flex align-items-center">
          <button type="button" className="btn btn-primary">
            <BsList />
          </button>
          <div className="input-group mx-3">
            <span className="input-group-text">
              <BsSearch />
            </span>
            <input type="text" className="form-control" placeholder="search" />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
