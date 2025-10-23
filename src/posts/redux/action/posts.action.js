import { postUser } from "../../services/posts.service";

export const submitPostAction = createAsyncThunk(
  "posts/submitPostAction",
  async(postData,{rejectWithValue}) => {
    try{
      const response = await postUser(postData);
      return {data:response.data,status:response.status}
    }
    catch(err){
      return rejectWithValue(err?.data || {message: "Failed to create or update profile"})
    }
  }
)



export const loadPostsAction = createAsyncThunk(
  "posts/loadPostsAction",
  async(postData,{rejectWithValue}) => {
    try{
      const response = await postUser(postData);
      return {data:response.data,status:response.status}
    }
    catch(err){
      return rejectWithValue(err?.data || {message: "Failed to create or update profile"})
    }
  }
)

export const deletePostAction = createAsyncThunk(
  "posts/deletePostAction",
  async(postData,{rejectWithValue}) => {
    try{
      const response = await postUser(postData);
      return {data:response.data,status:response.status}
    }
    catch(err){
      return rejectWithValue(err?.data || {message: "Failed to create or update profile"})
    }
  }
)