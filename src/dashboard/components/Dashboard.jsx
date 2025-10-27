import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box, 
  Typography, 
  Button, 
Container,
CircularProgress,
Paper,
Divider,
Alert
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import DashboardAction from './DashboardAction';
import ExpDetails from './ExpDetails';
import EduDetails from './EduDetails';
import { getCurrentProfileAction } from '../../profiles/redux/action/profile.action';
const Dashboard = () => {
const dispatch = useDispatch();
const { profile, loading, error } = useSelector((state) => state.
profile);
useEffect(() => {
dispatch(getCurrentProfileAction());
}, [dispatch]);
// Show loading indicator while data is being fetched
if (loading) {
return (
<Container sx={{ textAlign: 'center', py: 8 }}>
<CircularProgress size={60} />
<Typography variant="h5" sx={{ mt: 2 }}>Loading profile...</Typography>
</Container>
);
}
// Show create profile option if no profile exists
if (!profile) {
return (
<Container maxWidth="md" sx={{ py: 4 }}>
<Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
<Typography variant="h4" color="primary" gutterBottom>
Dashboard
</Typography>
<Alert severity="info" sx={{ mb: 3 }}>
You have not created a profile yet
</Alert>
<Button
component={RouterLink}
to="/profile/createprofile"
variant="contained"
color="primary"
size="large"
sx={{ textTransform: 'none', fontWeight: 600 }}
          >
Create Profile
</Button>
</Paper>
</Container>
);
  }
// Show dashboard with profile details once data is loaded
return (
<Container maxWidth="lg" sx={{ py: 4 }}>
<Paper elevation={3} sx={{ p: 4 }}>
<Typography variant="h4" color="primary" gutterBottom>
Dashboard
</Typography>
<Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
<PersonIcon color="primary" sx={{ mr: 1 }} />
<Typography variant="h6" component="p">
Welcome {profile.user?.name || "User"}
</Typography>
</Box>
<DashboardAction />
<Box sx={{ my: 4 }}>
<Typography variant="h5" gutterBottom sx={{ borderBottom: '1px solid #eee', pb: 1 }}>
</Typography>
<ExpDetails />
</Box>
<Box sx={{ my: 4 }}>
<Typography variant="h5" gutterBottom sx={{ borderBottom: '1px solid #eee', pb: 1 }}>
Education Credentials
</Typography>
<EduDetails />
</Box>
<Divider sx={{ my: 3 }} />
<Button
variant="contained"
color="error"
startIcon={<PersonRemoveIcon />}
sx={{ textTransform: 'none', fontWeight: 600 }}
>
Delete My Account
</Button>
</Paper>
</Container>
);
};
export default Dashboard;