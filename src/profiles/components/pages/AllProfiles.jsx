import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProfilesAction } from '../../redux/action/profile.action';
import { Link as RouterLink } from 'react-router-dom';
import {
Card,
CardContent,
Typography,
Avatar,
Button,
  Box,
Chip,
Grid,
Container,
CircularProgress,
Divider
} from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CheckIcon from '@mui/icons-material/Check';
import VisibilityIcon from '@mui/icons-material/Visibility';
const AllProfiles = () => {
const dispatch = useDispatch();
const { profiles, loading } = useSelector(state => state.profile);
useEffect(() => {
dispatch(getAllProfilesAction());
}, [dispatch]);
if (loading) {
return (
<Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
<CircularProgress />
</Box>
    );
}
return (
<Container maxWidth="lg" sx={{ py: 4 }}>
<Typography variant="h3" color="primary" gutterBottom>
Developers
</Typography>
<Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
<ConnectWithoutContactIcon sx={{ mr: 1 }} />
<Typography variant="h6" color="text.secondary">
Browse and connect with developers
</Typography>
</Box>
{profiles.data && profiles.data.length > 0 ? (
<Grid container spacing={3}>
{profiles.data.map(profile => ( <Grid item xs={12} key={profile._id}>
<Card variant="outlined" sx={{ mb: 2 }}>
<CardContent sx={{ p: 0 }}>
<Grid container>
{/* Profile Image and Basic Info */} <Grid item xs={12} sm={3} sx={{
borderRight: { xs: 'none', sm: '1px solid #eee' },
borderBottom: { xs: '1px solid #eee', sm: 'none' },
p: 3,
textAlign: 'center',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center'
}}>
<Avatar
src={profile.user.avatar || "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"}
alt={profile.user.name}
sx={{
width: 100,
height: 100,
mb: 2,
boxShadow: '0px 2px 4px rgba(0,0,0,0.1)'
}}
/>
<Typography variant="h6" fontWeight={500}>
{profile.user.name} </Typography>
</Grid>
{/* Profile Details */} <Grid item xs={12} sm={9}>
<Box sx={{ p: 3 }}>
<Typography variant="body1" sx={{ mb: 1 }}>
<strong>{profile.status}</strong>
{profile.company && <span> at {profile.company}</span>} </Typography>
{profile.location && ( <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
{profile.location} </Typography>
)}
<Button
component={RouterLink}
to={`/profile/${profile.
user._id}`}
variant="contained"
color="primary"
startIcon={<VisibilityIcon />}
sx={{ mb: 2 }}
>
View Profile
</Button>
<Divider sx={{ my: 2 }} />
{/* Skills Section */} {profile.skills && profile.skills.length > 0 && ( <Box sx={{ mt: 2 }}>
<Typography variant="subtitle2" color="text.secondary" gutterBottom>
                              Skills
</Typography>
<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
{profile.skills. slice(0, 5).map((skill, index) => (
<Chip
key={index}
label={skill}
color="primary"
size="small"
icon={<CheckIcon />}
sx={{
borderRadius: 1,
'& .MuiChip-icon': { ml: 1 }
}}
/>
))}
{profile.skills. length > 5 && (
<Chip
label={`+${profile.skills.length - 5} more`}
size="small"
variant="outlined"
color="primary"
/>
)}
</Box>
</Box>
)}
</Box>
</Grid>
</Grid>
</CardContent>
</Card>
</Grid>
          ))}
</Grid>
) : (
<Card variant="outlined">
<CardContent sx={{ textAlign: 'center', py: 5 }}>
<Typography variant="h6" color="text.secondary">
No profiles found
</Typography>
</CardContent>
</Card>
)}
</Container>
  );
};
export default AllProfiles;