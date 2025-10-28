import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box, 
Typography, Avatar, Card, CardContent,
  TextField, 
Button, Divider, Paper, Grid
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { getPostByIdAction, addCommentAction} from '../redux/action/post.action';
const PostDetail = () => {
const { id } = useParams();
const dispatch = useDispatch();
const { post, loading } = useSelector(state => state.post);
const { user } = useSelector(state => state.
auth);
const [commentText, setCommentText] = useState('');
useEffect(() => {
dispatch(getPostByIdAction(id));
}, [dispatch, id]);
const handleSubmitComment = (e) => {
  e.preventDefault();
  if(commentText.trim()){
    dispatch(addCommentAction({id:id,commentData:{text:commentText}}))
    .then(()=>{
      dispatch(getPostByIdAction(id));
      setCommentText('')
    })
  }
}
if (loading) return <Typography>Loading...</Typography>;
if (!post) return <Typography>Post not found</Typography>;
return (
<Box sx={{ maxWidth: 900, mx: 'auto', p: 2 }}>
{/* Original Post Card */} <Card variant="outlined" sx={{ mb: 4 }}>
<CardContent>
<Grid container spacing={2}>
<Grid item xs={12} sm={2} sx={{ textAlign: 'center' }}>
<Avatar
src={post.avatar || "https://www.gravatar.com/avatar/000?s=200"}
alt={post.name}
sx={{ width: 60, height: 60, mx: 'auto' }}
/>
<Typography variant="subtitle2">{post.name}</Typography>
</Grid>
<Grid item xs={12} sm={10}>
<Typography variant="body1" paragraph sx={{ whiteSpace: 'pre-line' }}>
{post.text} </Typography>
<Typography variant="caption" color="text.secondary">
Posted on {new Date(post.
date).toLocaleDateString()}
</Typography>
</Grid>
</Grid>
</CardContent>
</Card>
{/* Comment Form */} <Paper sx={{ p: 2, mb: 4 }}>
<Typography variant="h6" gutterBottom>
Leave a Comment
</Typography>
<Box component="form" onSubmit={handleSubmitComment}>
<TextField
fullWidth
            multiline
rows={3}
placeholder="What are your thoughts?"
value={commentText}
onChange={(e) => setCommentText(e.target.value)}
sx={{ mb: 2 }}
/>
<Button
type="submit"
variant="contained"
color="primary"
endIcon={<SendIcon />}
disabled={!commentText.
trim()}
>
Post Comment
</Button>
</Box>
</Paper>
{/* Comments List */} <Typography variant="h6" gutterBottom>
Comments ({post.comments?.length || 0})
</Typography>
{post.comments && post.comments.length > 0 ? (
post.comments.map(comment => (
<Card key={comment._id} variant="outlined" sx={{ mb: 2 }}>
<CardContent>
<Grid container spacing={2}>
<Grid item xs={12} sm={2} sx={{ textAlign: 'center' }}>
<Avatar
src={comment.avatar || "https://www.gravatar.com/avatar/000?s=200"}
alt={comment.name}
sx={{ width: 40, height: 40, mx: 'auto' }}
/>
<Typography variant="body2">{comment.
name}</Typography>
</Grid>
<Grid item xs={12} sm={10}>
<Typography variant="body2" paragraph>
{comment.text} </Typography>
<Typography variant="caption" color="text.secondary">
Posted on {new Date(comment.
date).toLocaleDateString()}
</Typography>
</Grid>
</Grid>
</CardContent>
</Card>
        ))
) : (
<Typography color="text.secondary">No comments yet.
Be the first to comment!</Typography>
)}
</Box>
);
};
export default PostDetail;