import React from 'react'
import CreateProfile from '../components/forms/CreateProfile'
import { useMatch } from 'react-router-dom'
import { BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom'
import AddEducation from '../components/forms/AddEducation'
import AddExperience from '../components/forms/AddExperience'

const ProfileRouter = () => {
  
  return (
    
    <>
    {""}
    
    <Routes>
        <Route path = "/createprofile" element={<CreateProfile/>}></Route>
        <Route path = "/editprofile" element = {<CreateProfile/>}></Route>
        <Route path="/education" element={<AddEducation />}></Route>
        <Route path="/experience" element={<AddExperience />}></Route>
    </Routes>
    </>
  )
}

export default ProfileRouter