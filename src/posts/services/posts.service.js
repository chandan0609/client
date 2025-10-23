import API from "../../utils/api";

// load user details
export const postUser = async () => {
  try {
    // URL: http://localhost:9500/api/posts
    // method: GET
    // headers: {x-auth-token: token}
    // response(success): {user details}
    // response(failure): {error validational details}
    const response = await API.get("/posts");
    // below return is ur success response
    console.log(response);
    localStorage.setItem("token", response.data.token);
    return { data: response.data, status: response.status };
  } catch (error) {}
};