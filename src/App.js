import React from 'react'

import SideMenu from './components/SideMenu'
import Navbar from './components/Navbar'
import CustomerPage from './pages/CustomerPage'
import EditCustomer from './features/customer/EditCustomer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
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
