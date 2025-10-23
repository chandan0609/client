import React from 'react'
import CreateProfile from '../components/forms/CreateProfile'
import { useMatch } from 'react-router-dom'
import { BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom'
import AddExperience from '../components/forms/AddExperience'
import AddEducation from '../components/forms/AddEducation'

const ProfileRouter = () => {
  
  return (
    
    <>
    {""}
    
    <Routes>
        <Route path = "/create-profile" element={<CreateProfile/>}></Route>
        <Route path = "/edit-profile" element = {<CreateProfile/>}></Route>
        <Route path = "/add-experience" element= {<AddExperience/>}></Route>
        <Route path = "/add-education" element= {<AddEducation />}></Route>
    </Routes>
    </>
  )
}

export default ProfileRouter