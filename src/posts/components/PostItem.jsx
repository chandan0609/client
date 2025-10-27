import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
Card,
CardContent,
Typography,
Avatar,
Button,
Box,
Chip,
Divider,
Grid,
IconButton
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
const PostItem = ({ post }) => {
return (
<Card variant="outlined" sx={{ mb: 3 }}>
<CardContent sx={{ p: 0 }}>
<Grid container>
{/* User profile section */} <Grid item xs={12} sm={3} sx={{
borderRight: { xs: 'none', sm: '1px solid #eee' },
borderBottom: { xs: '1px solid #eee', sm: 'none' },
p: 2,
textAlign: 'center'
}}>
<Box
component={RouterLink}
to={`/profile/${post.user}`}
sx={{
textDecoration: 'none',
color: 'text.primary',
display: 'flex',
flexDirection: 'column',
alignItems: 'center'
              }}
>
<Avatar
                src={post.
avatar || "https://www.gravatar.com/avatar/000?s=200"}
alt={post.name || "Anonymous"}
sx={{
width: 80,
height: 80,
mb: 1,
boxShadow: '0px 2px 4px rgba(0,0,0,0.1)'
                }}
/>
<Typography variant="subtitle1" fontWeight={500}>
                {post.
name || "Anonymous"}
</Typography>
</Box>
</Grid>
{/* Post content section */} <Grid item xs={12} sm={9}>
<Box sx={{ p: 2 }}>
<Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
{post.text} </Typography>
<Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
Posted on {new Date(post.date).
toLocaleDateString()}
</Typography>
<Divider sx={{ my: 1.5 }} />
{/* Post actions */} <Box sx={{
display: 'flex',
flexWrap: 'wrap',
alignItems: 'center',
gap: 1,
mt: 2
}}>
<Button
variant="outlined"
size="small"
startIcon={<ThumbUpIcon fontSize="small" />}
color="primary"
sx={{ mr: 1, textTransform: 'none' }}
>
{post.likes?.length || 0} </Button>
<IconButton
size="small"
color="default"
sx={{
border: '1px solid rgba(0,0,0,0.12)',
mr: 1
                  }}
>
<ThumbDownIcon fontSize="small" />
</IconButton>
<Button
component={RouterLink}
to={`/posts/${post._id}`}
variant="contained"
color="primary"
size="small"
startIcon={<CommentIcon fontSize="small" />}
sx={{
textTransform: 'none',
mr: 1
}}
>
Discussion
<Chip
label={post.comments?.
length || 0}
size="small"
sx={{
ml: 1,
height: 20,
fontSize: '0.75rem',
bgcolor: 'rgba(255,255,255,0.3)'
}}
                  />
</Button>
<Box sx={{ flexGrow: 1 }} />
<IconButton
color="error"
size="small"
sx={{
border: '1px solid rgba(211,47,47,0.5)'
}}
                >
<DeleteIcon fontSize="small" />
</IconButton>
</Box>
</Box>
</Grid>
</Grid>
</CardContent>
</Card>
  );
};
export default PostItem;