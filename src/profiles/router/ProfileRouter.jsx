import React from 'react'
import CreateProfile from '../components/forms/CreateProfile'
import { useMatch } from 'react-router-dom'
import { BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom'

const ProfileRouter = () => {
  
  return (
    
    <>
    {""}
    
    <Routes>
        <Route path = "/createprofile" element={<CreateProfile/>}></Route>
        <Route path = "editprofile" element = {<CreateProfile/>}></Route>
    </Routes>
    </>
  )
}

export default ProfileRouter