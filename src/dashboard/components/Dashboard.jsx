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
const { profile, loading, error } = useSelector((state) => state.profile);
useEffect(() => {
dispatch(getCurrentProfileAction());
  }, 
[dispatch]);
console.log("Dashboard profile state:", { profile, loading, error });
// Show loading indicator while data is being fetched
if (loading) {
return <h2>Loading...</h2>;
}
// Show create profile option if no profile exists
if (!profile) {
return (
<section className="container">
<h2 className="my-2">Dashboard</h2>
<p>You have not created a profile yet</p>
<Link to="/profile/createprofile" className="btn btn-primary">
          Create Profile
</Link>
</section>
);
}
// Show dashboard with profile details once data is loaded
return (
<section className="container">
<h1 className="large text-primary">Dashboard</h1>
<p className="lead">
<i className="fas fa-user"></i> Welcome {profile.user?.
name || "User"}
</p>
<DashboardAction />
<ExpDetails />
<h2 className="my-2">Education Credentials</h2>
<EduDetails />
<div className="my-2">
<button className="btn btn-danger">
<i className="fas fa-user-minus"></i> Delete My Account
</button>
</div>
</section>
);
};
export default Dashboard