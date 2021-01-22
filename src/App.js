import React from 'react'

import SideMenu from './components/SideMenu'
import Navbar from './components/Navbar'
import CustomerPage from './pages/CustomerPage'
import EditCustomer from './features/customer/EditCustomer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ZoomToggle from './components/ZoomToggle'

function App() {
  document.getElementById('zmmtg-root').style.display = 'none'
  let Toggle
  if (process.env.NODE_ENV === 'development') {
    Toggle = <ZoomToggle />
  } else {
    /* eslint-disable no-unused-vars */
    Toggle = <></>
  }

  return (
    <Router>
      {Toggle}
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 vh-100 ">
            <SideMenu />
          </div>
          <div className="col-10 bg-secondary overflow-auto">
            <Navbar />
            <div className="card">
              <div className="card-body">
                <Switch>
                  <Route path="/customer">
                    <CustomerPage />
                  </Route>
                  <Route path="/edit-customer/:id">
                    <EditCustomer />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
