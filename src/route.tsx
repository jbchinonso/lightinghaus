import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Views from './views'


const route = () => {
    return (
        <Router>
            <Route exact path="/" component={ Views.Home } /> 
        </Router>
    )
}

export default route
