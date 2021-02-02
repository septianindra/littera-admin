import React from 'react'

import SideMenu from './components/SideMenu'
import Navbar from './components/Navbar'
import CustomerPage from './pages/CustomerPage'
import EditCustomer from './features/customer/EditCustomer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProctoringList from './features/proctoring/ProctoringList'
import ProctorSingleWindow from './features/proctoring/ProctorSingleWindow'
import ZoomToggle from './components/ZoomToggle'

function App() {
  let Toggle

  document.getElementById('zmmtg-root').style.display = 'none'
  if (process.env.NODE_ENV === 'development') {
    Toggle = <ZoomToggle />
  } else {
    /* eslint-disable no-unused-vars */
    Toggle = <></>
  }

  return (
    <Router>
      {Toggle}
      <div className="container-fluid bg-gradient">
        <div className="row">
          <div className="col-2 p-2 vh-100">
            <div className="bg-gradite h-100">
              <SideMenu />
            </div>
          </div>
          <div className="col-10 overflow-auto">
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
                  <Route exact path="/proctor/">
                    <ProctoringList />
                  </Route>
                  <Route exact path="/proctor/:id">
                    <ProctorSingleWindow />
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
