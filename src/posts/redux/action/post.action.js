import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadPost, deletePost, submitPost, getPostById,addComment } from "../../services/post.service";
import PostDetail from "../../components/PostDetail";
 
export const submitPostAction = createAsyncThunk(
  "posts/submitPostAction",
  async(postData,{rejectWithValue,dispatch}) => {
    try{
      const response = await submitPost(postData);
      dispatch(loadPostsAction())
      console.log(response);
      return {data:response.data,status:response.status}
    }
    catch(err){
      return rejectWithValue(err?.data || {message: "Failed to create post"})
    }
  }
)
 
 
export const loadPostsAction = createAsyncThunk(
  "posts/loadPostsAction",
  async(postData,{rejectWithValue}) => {
    try{
      const response = await loadPost(postData);
      return {data:response.data,status:response.status}
    }
    catch(err){
      return rejectWithValue(err?.data || {message: "Failed to load the posts"})
    }
  }
)
 
export const deletePostAction = createAsyncThunk(
  "posts/deletePostAction",
  async(postData,{rejectWithValue}) => {
    try{
      const response = await deletePost(postData);
      return {data:response.data,status:response.status}
    }
    catch(err){
      return rejectWithValue(err?.data || {message: "Failed to delete the posts"})
    }
  }
)
export const getPostByIdAction = createAsyncThunk(
  "posts/getPostByIdAction",
  async(id,{rejectWithValue}) => {
    try{
      const response = await getPostById(id);
      console.log(response);
      if(response.status===200){
        return response.data
      }
    } catch(err){
      const status = err ?. status || err?.response?.status;
      if(status===400)
        return rejectWithValue({
      notFound:true,status:400})
      return rejectWithValue(err?.data || {message:"Failed to load the post"})
    }
  }
)

export const addCommentAction = createAsyncThunk(
  'posts/addCommentAction',
  async({id,commentData},{rejectWithValue}) => {
    console.log({id,commentData},"it is present in action")
    try{
      const response = await addComment(id,commentData);
      return{
        data:response.data,
        status:response.status,
        id
      }
    }
    catch(error){
      return rejectWithValue(error?.data || {message:"Failed to add Comment"})
    }
  }

)