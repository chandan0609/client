import React from 'react'
import { BrowserRouter as Router, Route, NavLink,Routes } from 'react-router-dom'
import Posts from '../components/Posts'
import PostDetail from '../components/PostDetail'

const PostRouter = () => {
  return (
    <Routes>
        <Route path="/createpost" element={<Posts/>}></Route>
        <Route path="/:id" element = {<PostDetail/>}></Route>
    </Routes>
  )
}

export default PostRouter