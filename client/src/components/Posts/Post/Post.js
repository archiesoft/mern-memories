import React from 'react'
import useStyles from './styles.js';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts.js';

const Post = ({post, setCurrentId}) =>{
    const classes = useStyles;
    const dispatch = useDispatch();
    return(
        <Card className={classes.card}>
         {/* <img src={post.selectedFile} className={classes.media} /> */}
           <CardMedia component="img" image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} className={classes.media}  />
            <Button  className={classes.cardButton} size="small" onClick={()=>{ setCurrentId(post._id)}} ><MoreHorizIcon fontSize="medium" /></Button>
            <CardContent>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>           
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" >{ (post.tags)?(post.tags.map((tag)=>`#${tag} `) ):'' }</Typography>
            </div>
            <Typography variant="h5" className={classes.title} >{post.title}</Typography>
                <p variant="body2" color="textSecondary" >{post.message}</p>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={()=> dispatch(likePost(post._id))}>
                <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} 
                </Button>
                <Button size="small" color="primary" onClick={()=> dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small"  />
                   Delete
                </Button>
            </CardActions>            
        </Card>
    )
}

export default Post;