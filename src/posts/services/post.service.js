import API from "../../utils/api";
 
// load user details
// export const createPost = async () => {
//   try {
//     // URL: http://localhost:9500/api/posts
//     // method: GET
//     // headers: {x-auth-token: token}
//     // response(success): {user details}
//     // response(failure): {error validational details}
//     const response = await API.get("/posts");
//     // below return is ur success response
//     console.log(response);
//     localStorage.setItem("token", response.data.token);
//     return { data: response.data, status: response.status };
//   } catch (error) {}
// };
 
export const submitPost = async (postData) => {
  try {
    const response = await API.post("/posts", postData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
 
export const deletePost = async (postId) => {
  try {
    const response = await API.delete(`${"/posts"}/${postId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
 
export const loadPost = async () => {
  try {
    console.log("i am in post service.js")
    const response = await API.get("/posts");
    return {data:response.data,status:response.status}
  } catch (error) {
    throw error.response.data;
  }
};

export const getPostById = async (id) => {
  try {
    const response = await API.get(`/posts/${id}`)
    console.log(response)
    return{
      data:response.data,
      status:response.status
    }
  }
  catch(error){
    console.log(error.response)
    throw{
      data:error.response.data,
      status:error.response.status
    }
  }
}
export const addComment = async (id,commentData) => {
  try{
    console.log("i am in service")
    const response = await API.post(`posts/comment/${id}`,commentData)
    console.log(response)
    return{
      data:response.data,
      status:response.status
    }
  }
  catch(error){
    console.log(error)
    throw{
      data:error.response.data,
      status:error.response.status
    }
  }
}