import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
Container,
Typography,
TextField,
Button,
Box,
Paper,
Divider,
CircularProgress,
Grid,
Card,
CardContent
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import { submitPostAction, loadPostsAction } from "../redux/action/post.action";
import PostItem from "./PostItem";
const Posts = () => {
const dispatch = useDispatch();
const [postData, setPostData] = useState({ text: "" });
const { posts, loading } = useSelector((state) => {
return state.post; // This returns the post slice that contains posts array
});
useEffect(() => {
// Asynchronous function inside useEffect
const fetchPosts = async () => {
await dispatch(loadPostsAction());
};
fetchPosts();
  }, 
[dispatch]);
const onChange = (e) => {
setPostData({ ...
postData, [e.target.name]: e.target.value });
};
const onSubmit = async (e) => {
e.preventDefault();
await dispatch(submitPostAction(postData));
setPostData({ text: "" });
dispatch(loadPostsAction());
};
return (
<Container maxWidth="md" sx={{ py: 4 }}>
<Typography variant="h4" color="primary" gutterBottom>
Posts
</Typography>
<Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
<PersonIcon color="primary" sx={{ mr: 1 }} />
<Typography variant="subtitle1">
Welcome to the community!
        </Typography>
</Box>
<Paper elevation={3} sx={{ mb: 4 }}>
<Box sx={{
bgcolor: 'primary.main',
color: 'white',
p: 2,
borderTopLeftRadius: 4,
borderTopRightRadius: 4
}}>
<Typography variant="h6">Say Something...</Typography>
</Box>
<Box component="form" onSubmit={onSubmit} sx={{ p: 3 }} noValidate>
<TextField
fullWidth
            multiline
rows={5}
name="text"
placeholder="Create a post"
value={postData.text}
onChange={onChange}
required
variant="outlined"
sx={{ mb: 2 }}
/>
<Button
type="submit"
variant="contained"
color="secondary"
endIcon={<SendIcon />}
sx={{ textTransform: 'none', fontWeight: 600 }}
>
Submit
</Button>
</Box>
</Paper>
<Box sx={{ mt: 4 }}>
{loading ? (
<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
flexDirection: 'column', my: 4 }}>
<CircularProgress size={40} />
<Typography variant="body1" sx={{ mt: 2 }}>
Loading posts...
            </Typography>
</Box>
) : (
<Box>
{Array.isArray(posts) && posts. length > 0 ?
(
              <>
<Typography variant="subtitle2" color="text.secondary" sx={{ mb: 3 }}>
Posts count: {Array.isArray(posts) ?
posts.length : 'Not an array'}
</Typography>
<Grid container spacing={3}>
{posts.map((post) => post && post._id ?
(
<Grid item xs={12} key={post._id}>
<PostItem post={post} />
</Grid>
) : null
)}
</Grid>
</>
) : (
<Card variant="outlined" sx={{ p: 2, textAlign: 'center' }}>
<CardContent>
<Typography variant="body1" color="text.secondary">
No posts found.
                  </Typography>
</CardContent>
</Card>
            )}
</Box>
)}
</Box>
</Container>
  );
};
export default Posts;