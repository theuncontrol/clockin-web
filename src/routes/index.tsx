import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Clockin from '../pages/Clockin'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Clockin} path="/" exact />
    </BrowserRouter>
  )
}

export default Routes
