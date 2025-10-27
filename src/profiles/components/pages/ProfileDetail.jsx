import React, { useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileByIdAction } from '../../redux/action/profile.action';
import {
Container,
Typography,
Box,
Avatar,
Button,
Grid,
Paper,
Divider,
CircularProgress,
List,
ListItem,
ListItemText,
ListItemIcon,
IconButton,
Link
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ForkRightIcon from '@mui/icons-material/ForkRight';
const ProfileDetail = () => {
const { id } = useParams();
const dispatch = useDispatch();
const { profile, loading } = useSelector(state => state.profile);
useEffect(() => {
dispatch(getProfileByIdAction(id));
  }, 
[dispatch, id]);
if (loading) {
return (
<Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
<CircularProgress />
</Box>
    );
}
if (!profile) {
return (
<Container maxWidth="lg" sx={{ py: 4 }}>
<Typography variant="h5" color="error" align="center">
Profile not found
</Typography>
<Box sx={{ textAlign: 'center', mt: 3 }}>
<Button
component={RouterLink}
to="/profiles"
startIcon={<ArrowBackIcon />}
variant="contained"
>
Back To Profiles
</Button>
</Box>
</Container>
);
  }
// Destructure profile data
const {
user: { name, avatar },
status,
company,
location,
website,
social,
skills,
bio,
experience,
education,
githubusername
} = profile;
return (
<Container maxWidth="lg" sx={{ py: 4 }}>
<Button
component={RouterLink}
to="/profiles"
startIcon={<ArrowBackIcon />}
variant="contained"
color="primary"
sx={{ mb: 3 }}
>
Back To Profiles
</Button>
<Grid container spacing={3}>
{/* Profile Top */} <Grid item xs={12}>
<Paper
sx={{
p: 3,
textAlign: 'center',
bgcolor: 'primary.main',
color: 'white',
borderRadius: 2
}}
elevation={3}>
<Avatar
src={avatar || "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"}
alt={name}
sx={{
width: 150,
height: 150,
mx: 'auto',
my: 2,
border: '4px solid white'
              }}
/>
<Typography variant="h3" sx={{ mb: 1 }}>
{name} </Typography>
<Typography variant="h6" sx={{ mb: 1 }}>
{status} {company && `at ${company}`} </Typography>
{location && ( <Typography variant="body1" sx={{ mb: 2 }}>
{location} </Typography>
)}
<Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 2 }}>
{website && ( <IconButton color="inherit" href={website} target="_blank" rel="noopener noreferrer">
<LanguageIcon fontSize="large" />
</IconButton>
)}
{social && social.twitter && ( <IconButton color="inherit" href={social.twitter} target="_blank" rel="noopener noreferrer">
<TwitterIcon fontSize="large" />
</IconButton>
)}
{social && social.facebook && ( <IconButton color="inherit" href={social.facebook} target="_blank" rel="noopener noreferrer">
<FacebookIcon fontSize="large" />
</IconButton>
              )}
{social && social.linkedin && ( <IconButton color="inherit" href={social.
linkedin} target="_blank" rel="noopener noreferrer">
<LinkedInIcon fontSize="large" />
</IconButton>
)}
{social && social.youtube && ( <IconButton color="inherit" href={social.
youtube} target="_blank" rel="noopener noreferrer">
<YouTubeIcon fontSize="large" />
</IconButton>
              )}
{social && social.instagram && ( <IconButton color="inherit" href={social.
instagram} target="_blank" rel="noopener noreferrer">
<InstagramIcon fontSize="large" />
</IconButton>
)}
</Box>
</Paper>
</Grid>
{/* About */} <Grid item xs={12}>
<Paper sx={{ p: 3, borderRadius: 2, bgcolor: '#f8f9fa' }} elevation={1}>
<Typography variant="h4" color="primary.
main" gutterBottom>
{name. split(' ')[0]}'s Bio
</Typography>
{bio ? (
<Typography variant="body1" paragraph>
{bio} </Typography>
) : (
<Typography variant="body1" paragraph>
No bio provided
</Typography>
            )}
<Divider sx={{ my: 2 }} />
<Typography variant="h5" color="primary.
main" gutterBottom>
Skill Set
</Typography>
<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
{skills && skills.map((skill, index) => ( <Box key={index} sx={{
display: 'flex',
alignItems: 'center',
bgcolor: '#e9ecef',
p: 1,
borderRadius: 1,
mr: 1,
mb: 1
}}>
<CheckIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
<Typography variant="body2">{skill}</Typography>
</Box>
))}
</Box>
</Paper>
</Grid>
{/* Experience */} <Grid item xs={12} md={6}>
<Paper sx={{ p: 3, borderRadius: 2 }} elevation={1}>
<Typography variant="h4" color="primary.main" gutterBottom>
              Experience
</Typography>
{experience && experience.length > 0 ? (
experience.map((exp, index) => (
<Box key={index} sx={{ mb: 3 }}>
<Typography variant="h6" color="text.primary">
{exp.company} </Typography>
<Typography variant="body2" color="text.
secondary">
{new Date(exp.from).toLocaleDateString()} - {exp. to
?
new Date(exp.to).toLocaleDateString()
: 'Current'}
</Typography>
<Typography variant="body1" sx={{ mt: 1 }}>
<strong>Position: </strong>{exp.title}
</Typography>
{exp.description && ( <Typography variant="body1" sx={{ mt: 1 }}>
<strong>Description: </strong>{exp.description}
</Typography>
                  )}
{index !== experience.length - 1 && <Divider sx={{ my: 2 }} />} </Box>
))
) : (
<Typography variant="body1">No experience credentials</Typography>
)}
</Paper>
</Grid>
{/* Education */} <Grid item xs={12} md={6}>
<Paper sx={{ p: 3, borderRadius: 2 }} elevation={1}>
<Typography variant="h4" color="primary.
main" gutterBottom>
Education
</Typography>
{education && education.length > 0 ? (
education.map((edu, index) => (
<Box key={index} sx={{ mb: 3 }}>
<Typography variant="h6" color="text.primary">
{edu.school} </Typography>
<Typography variant="body2" color="text.secondary">
{new Date(edu.from).toLocaleDateString()} - {edu.to ?
new Date(edu.to).toLocaleDateString()
: 'Current'}
</Typography>
<Typography variant="body1" sx={{ mt: 1 }}>
<strong>Degree: </strong>{edu.degree}
</Typography>
<Typography variant="body1">
<strong>Field Of Study: </strong>{edu.
fieldofstudy}
</Typography>
{edu.description && ( <Typography variant="body1" sx={{ mt: 1 }}>
<strong>Description: </strong>{edu.description}
</Typography>
                  )}
{index !== education.length - 1 && <Divider sx={{ my: 2 }} />} </Box>
))
) : (
<Typography variant="body1">No education credentials</Typography>
            )}
</Paper>
</Grid>
{/* GitHub Repos */} {githubusername && ( <Grid item xs={12}>
<Paper sx={{ p: 3, borderRadius: 2 }} elevation={1}>
<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
<GitHubIcon color="primary" sx={{ mr: 1 }} />
<Typography variant="h4" color="primary.main">
GitHub Repos
</Typography>
</Box>
{/* You'll need to fetch GitHub repos in your action */} {/* This is a placeholder for the repos UI */} 
<Box sx={{ opacity: 0.7 }}>
<Paper sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between',alignItems: 'center' }}>
<Box>
<Link href="#" target="_blank" rel="noopener noreferrer" underline="hover">
<Typography variant="h6" color="primary.main">Repo One</Typography>
</Link>
<Typography variant="body2">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Repellat, laborum!
</Typography>
</Box>
<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
<Box component="span" sx={{ p: 1, bgcolor: 'primary.main', color: 'white', borderRadius: 1, display: 'flex', alignItems: 'center' }}>
<StarIcon fontSize="small" sx={{ mr: 0.5 }} /> Stars: 44</Box>
<Box component="span" sx={{ p: 1, bgcolor: 'text.primary', color: 'white',
borderRadius: 1, display: 'flex', alignItems: 'center' }}>
<VisibilityIcon fontSize="small" sx={{ mr: 0.5 }} /> Watchers: 21
</Box>
<Box component="span" sx={{ p: 1, bgcolor: '#e9ecef', color: 'text.primary',
borderRadius: 1, display: 'flex', alignItems: 'center' }}>
<ForkRightIcon fontSize="small" sx={{ mr: 0.5 }} /> Forks: 25
</Box>
</Box>
</Paper>
<Paper sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between',
alignItems: 'center' }}>
<Box>
<Link href="#" target="_blank" rel="noopener noreferrer" underline="hover">
<Typography variant="h6" color="primary.main">Repo Two</Typography>
</Link>
<Typography variant="body2">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat, 
laborum!
                    </Typography>
</Box>
<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
<Box component="span" sx={{ p: 1, bgcolor: 'primary.main', color: 'white',
borderRadius: 1, display: 'flex', alignItems: 'center' }}>
<StarIcon fontSize="small" sx={{ mr: 0.5 }} /> Stars: 44
</Box>
<Box component="span" sx={{ p: 1, bgcolor: 'text.primary', color: 'white',
borderRadius: 1, display: 'flex', alignItems: 'center' }}>
<VisibilityIcon fontSize="small" sx={{ mr: 0.5 }} /> Watchers: 21
</Box>
<Box component="span" sx={{ p: 1, bgcolor: '#e9ecef', color: 'text.primary',
borderRadius: 1, display: 'flex', alignItems: 'center' }}>
<ForkRightIcon fontSize="small" sx={{ mr: 0.5 }} /> Forks: 25
</Box>
</Box>
</Paper>
</Box>
</Paper>
</Grid>
)}
</Grid>
</Container>
  );
};
export default ProfileDetail;