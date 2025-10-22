import React, 
{ useState } from 'react'; import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEducationAction } from '../../redux/action/profile.action';
const emptyForm = {
school: '',
degree: '',
fieldofstudy: '',
from: '',
to: '',
current: false,
description: ''
};
const AddEducation = () => {
const [formState, setFormState] = useState(emptyForm);
const [toDateDisabled, setToDateDisabled] = useState(false);
const navigate = useNavigate();
const dispatch = useDispatch();
const { school, degree, fieldofstudy, from, to, current, description } = formState;
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
'' : to
    });
setToDateDisabled(!toDateDisabled);
};
const onSubmit = (e) => {
e.preventDefault();
dispatch(addEducationAction(formState)).
unwrap();
navigate('/dashboard');
};
  return (
<>
<section className="container">
<h1 className="large text-primary">Add Your Education</h1>
<p className="lead">
<i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc.
that
you have attended
</p>
<small>* = required field</small>
<form className="form" onSubmit={onSubmit}>
<div className="form-group">
<input
type="text"
placeholder="* School or Bootcamp"
name="school"
value={school}
onChange={onChange}
required
            />
</div>
<div className="form-group">
<input
type="text"
placeholder="* Degree or Certificate"
name="degree"
value={degree}
onChange={onChange}
              required
/>
</div>
<div className="form-group">
<input
type="text"
placeholder="* Field of Study"
name="fieldofstudy"
value={fieldofstudy}
onChange={onChange}
required
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
Current School
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
placeholder="Program Description"
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
export default AddEducation;