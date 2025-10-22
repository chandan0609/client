import React from 'react'
import { BrowserRouter as Router, Route, NavLink,Link } from 'react-router-dom'

const DashboardAction = () => {
  return (
    <><div class="dash-buttons">
        <Link to ="/profile/editprofile" class="btn btn-light">
          <i class="fas fa-user-circle text-primary"></i> Edit Profile</Link>
        <Link to="/profile/experience" class="btn btn-light"
          ><i class="fab fa-black-tie text-primary"></i> Add Experience</Link>
        <Link to="/profile/education" class="btn btn-light"
          ><i class="fas fa-graduation-cap text-primary"></i> Add Education</Link>
      </div></>
  )
}

export default DashboardAction