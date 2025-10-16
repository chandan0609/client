import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom'
import Dashboard from '../components/Dashboard'

const DashboardRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/" element = {<Dashboard />}/>
    </Routes>
    </>
  )
}

export default DashboardRouter