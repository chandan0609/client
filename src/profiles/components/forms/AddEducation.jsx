import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
import SchoolIcon from '@mui/icons-material/School';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
[e.target.name]: e.
target.value
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
dispatch(addEducationAction(formState)).unwrap();
navigate('/dashboard');
  };
return (
<Container maxWidth="md" sx={{ py: 4 }}>
<Paper elevation={3} sx={{ p: 4 }}>
<Typography variant="h4" color="primary" gutterBottom>
Add Your Education
</Typography>
<Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
<SchoolIcon color="primary" sx={{ mr: 1 }} />
<Typography variant="subtitle1">
Add any school, bootcamp, etc.
that you have attended
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
label="School or Bootcamp"
name="school"
value={school}
onChange={onChange}
placeholder="* School or Bootcamp"
variant="outlined"
/>
</Grid>
<Grid item xs={12}>
<TextField
fullWidth
                required
label="Degree or Certificate"
name="degree"
value={degree}
onChange={onChange}
placeholder="* Degree or Certificate"
variant="outlined"
/>
</Grid>
<Grid item xs={12}>
<TextField
                fullWidth
required
label="Field of Study"
name="fieldofstudy"
value={fieldofstudy}
onChange={onChange}
placeholder="* Field of Study"
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
label="Current School"
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
label="Program Description"
name="description"
value={description}
onChange={onChange}
placeholder="Program Description"
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
export default AddEducation;