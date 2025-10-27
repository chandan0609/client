import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
Container,
Typography,
TextField,
Button,
FormControlLabel,
  Checkbox, 
Paper,
Box,
Grid,
Divider
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
e.preventDefault();
dispatch(addExperienceAction(formState)).unwrap();
navigate('/dashboard');
};
return (
<Container maxWidth="md" sx={{ py: 4 }}>
<Paper elevation={3} sx={{ p: 4 }}>
<Typography variant="h4" color="primary" gutterBottom>
Add An Experience
</Typography>
<Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
<WorkIcon color="primary" sx={{ mr: 1 }} />
<Typography variant="subtitle1">
Add any developer/programming positions that you have had in the past
</Typography>
</Box>
<Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 3 }}>
* = required field
</Typography>
<Box component="form" onSubmit={onSubmit} noValidate>
<Grid container spacing={3}>
<Grid item xs={12}>
<TextField
fullWidth
required
label="Job Title"
name="title"
value={title}
onChange={onChange}
placeholder="* Job Title"
variant="outlined"
/>
</Grid>
<Grid item xs={12}>
<TextField
fullWidth
                required
label="Company"
name="company"
value={company}
onChange={onChange}
placeholder="* Company"
variant="outlined"
              />
</Grid>
<Grid item xs={12}>
              <TextField
fullWidth
label="Location"
name="location"
value={location}
onChange={onChange}
placeholder="Location"
variant="outlined"
/>
</Grid>
<Grid item xs={12} md={6}>
<Typography variant="subtitle2" gutterBottom>
From Date
</Typography>
<TextField
fullWidth
type="date"
name="from"
value={from}
onChange={onChange}
InputLabelProps={{ shrink: true }}
variant="outlined"
/>
</Grid>
<Grid item xs={12}>
<FormControlLabel
control={
<Checkbox
checked={current}
onChange={onCheckboxChange}
name="current"
color="primary"
/>
}
label="Current Job"
/>
</Grid>
<Grid item xs={12} md={6}>
<Typography variant="subtitle2" gutterBottom>
                To Date
</Typography>
<TextField
fullWidth
type="date"
name="to"
value={to}
onChange={onChange}
disabled={toDateDisabled}
InputLabelProps={{ shrink: true }}
variant="outlined"
/>
</Grid>
<Grid item xs={12}>
<TextField
fullWidth
multiline
rows={5}
label="Job Description"
name="description"
value={description}
onChange={onChange}
placeholder="Job Description"
variant="outlined"
              />
</Grid>
</Grid>
<Divider sx={{ my: 4 }} />
<Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
<Button
type="submit"
variant="contained"
color="primary"
sx={{ textTransform: 'none', fontWeight: 600 }}
>
Submit
</Button>
<Button
variant="outlined"
color="secondary"
startIcon={<ArrowBackIcon />}
onClick={() => navigate('/dashboard')}
sx={{ textTransform: 'none' }}
>
              Go Back
</Button>
</Box>
</Box>
</Paper>
</Container>
);
};
export default AddExperience;