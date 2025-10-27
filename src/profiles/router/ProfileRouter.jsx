import React from 'react'
import CreateProfile from '../components/forms/CreateProfile'
import { useMatch } from 'react-router-dom'
import { BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom'
import AddEducation from '../components/forms/AddEducation'
import AddExperience from '../components/forms/AddExperience'
import AllProfiles from '../components/pages/AllProfiles'
import ProfileDetail from '../components/pages/ProfileDetail'
const ProfileRouter = () => {
  
  return (
    
    <>
    {""}
    
    <Routes>
        <Route path = "/createprofile" element={<CreateProfile/>}></Route>
        <Route path = "/editprofile" element = {<CreateProfile/>}></Route>
        <Route path="/education" element={<AddEducation />}></Route>
        <Route path="/experience" element={<AddExperience />}></Route>
        <Route path = "/profile" element={<AllProfiles/>}></Route>
        <Route path="/profile/:id" element={<ProfileDetail/>}></Route>
    </Routes>
    </>
  )
}

export default ProfileRouter