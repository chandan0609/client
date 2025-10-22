import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addExperienceAction } from "../../redux/action/profile.action";
const emptyForm = {
title: "",
company: "",
location: "",
from: "",
to: "",
current: false,
description: ""
};
const AddExperience = () => {
const [formState, setFormState] = useState(emptyForm);
const [toDateDisabled, setToDateDisabled] = useState(false);
const navigate = useNavigate();
const dispatch = useDispatch();
const { title, company, location, from, to, current, description } = formState;
const onChange = (e) => {
setFormState({
...formState,
[e.target.name]: e.target.value
    });
};
const onCheckboxChange = () => {
setFormState({
...formState,
current: !current,
to: current ?
"" : to
    });
setToDateDisabled(!toDateDisabled);
  };
const onSubmit = (e) => {
    e.
preventDefault();
dispatch(addExperienceAction(formState)).
unwrap();
navigate('/dashboard');
};
return (
<>
<section className="container">
<h1 className="large text-primary"> Add An Experience </h1>
<p className="lead">
<i className="fas fa-code-branch"></i> Add any developer/programming
positions that you have had in the past
</p>
<small>* = required field</small>
<form className="form" onSubmit={onSubmit}>
<div className="form-group">
<input
type="text"
placeholder="* Job Title"
name="title"
value={title}
onChange={onChange}
              required
/>
</div>
<div className="form-group">
<input
type="text"
placeholder="* Company"
name="company"
value={company}
onChange={onChange}
              required
/>
</div>
<div className="form-group">
<input
type="text"
placeholder="Location"
name="location"
value={location}
onChange={onChange}
            />
</div>
<div className="form-group">
<h4>From Date</h4>
<input
type="date"
name="from"
value={from}
onChange={onChange}
/>
</div>
<div className="form-group">
<p>
<input
type="checkbox"
name="current"
checked={current}
onChange={onCheckboxChange}
/>{' '}
Current Job
</p>
</div>
<div className="form-group">
<h4>To Date</h4>
<input
type="date"
name="to"
value={to}
onChange={onChange}
disabled={toDateDisabled}
/>
</div>
<div className="form-group">
<textarea
name="description"
cols="30"
rows="5"
placeholder="Job Description"
value={description}
onChange={onChange}
></textarea>
</div>
<input type="submit" className="btn btn-primary my-1" />
<button
className="btn btn-light my-1"
type="button"
onClick={() => navigate('/dashboard')}
>
Go Back
</button>
</form>
</section>
    </>
);
};
export default AddExperience;