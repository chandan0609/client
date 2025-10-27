import React from 'react'
import { BrowserRouter as Router, Route, NavLink,Routes } from 'react-router-dom'
import Posts from '../components/Posts'

const PostRouter = () => {
  return (
    <Routes>
        <Route path="/createpost" element={<Posts/>}></Route>
    </Routes>
  )
}

export default PostRouter