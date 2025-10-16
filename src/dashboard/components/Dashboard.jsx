import React from 'react'
import DashboardAction from './DashboardAction'
import ExpDetails from './ExpDetails'
import EduDetails from './EduDetails'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCurrentProfileAction } from '../../profiles/redux/action/profile.action'
const Dashboard = () => {
  const dispatch = useDispatch();
  const {profile,error} = useSelector((state) => state.profile)
  useEffect(() => {
    //to call the action 
    // then according to the response we will show the create profile or dashboard with details
    dispatch(getCurrentProfileAction());
  },[]);//empty array of dependency because we want to execute it only once.
    const createProfile = (
        <section className="container">
            <h2 className="my-2">Dashboard</h2>
            <p>You have not created a profile yet</p>
            <Link to="/profile/createProfile" className = "btn btn-primary">
            Create Profile</Link>
        </section>
    )
    const renderDashboard = (
        <section class="container">
      <h1 class="large text-primary">
        Dashboard
      </h1>
      <p class="lead"><i class="fas fa-user"></i> Welcome John Doe</p>
      <DashboardAction/>
    <ExpDetails/>

      <h2 class="my-2">Education Credentials</h2>
      <EduDetails/>
        <div class="my-2">
            <button class="btn btn-danger">
                <i class="fas fa-user-minus"></i>

                Delete My Account
            </button>
          </div>
    </section>
    )
  return (
    <>
    {profile == null ? createProfile : renderDashboard}
    
    </>
  )
}

export default Dashboard