import React from "react";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { loginUserAction } from "../redux/action/auth.action";
import { Link } from "react-router-dom";
const Login = () => {
// Fix: add () to useDispatch
const dispatch = useDispatch();
const [formData, setFormData] = useState({
email: "",
password: "",
name: ""
});
const onChange = (e) => {
setFormData({...formData, [e.target.name]: e.target.
value});
  };
const onSubmit = (e) => {
e.preventDefault();
dispatch(loginUserAction(formData));
};
const {name, email, password} = formData;
return (
<>
<section className="container">
<h1 className="large text-primary">Sign In</h1>
<p className="lead">
<i className="fas fa-user"></i> Sign Into Your Account
</p>
<form className="form" onSubmit={onSubmit}>
<div className="form-group">
<input
type="text"
placeholder="Name"
name="name"
value={name || ""}
required
onChange={onChange}
/>
</div>
<div className="form-group">
            <input
type="email"
placeholder="Email Address"
name="email"
value={email || ""}
required
onChange={onChange}
/>
</div>
<div className="form-group">
<input
type="password"
placeholder="Password"
name="password"
minLength="6"
value={password || ""}
required
onChange={onChange}
/>
</div>
<input type="submit" className="btn btn-primary" value="Login" />
</form>
<p className="my-1">
Don't have an account?
<a href="register.html">Sign Up</a>
</p>
</section>
</>
  );
};
export default Login;