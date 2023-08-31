import React, { useState, useRef } from 'react';
import { Typography, TextField, Button, Divider } from '@material-ui/core/';
import { useDispatch } from 'react-redux';

import { commentPost } from '../../actions/posts';
import useStyles from './styles';

const CommentSection = ({ post }) => {
  const classes = useStyles();
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState('');
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const commentsRef = useRef();

  const handleClick = async () => {
    const newComments = await dispatch(commentPost(`${user.result.name}: ${comment}`, post._id));

    setComment('');
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={classes.commentSE}>
      <div className={classes.commentsOuterContainer}>
        <Typography gutterBottom variant='h6'>
          <strong>Comments</strong>
        </Typography>
        <div className={classes.commentsInnerContainer}>
          {comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant='subtitle1'>
              <strong>{c.split(': ')[0]}</strong>:{c.split(':')[1]}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
      </div>

      <Divider style={{ margin: '20px' }} />
      <div>
        {user?.result?.name && (
          <div className={classes.commentInput}>
            <Typography gutterBottom variant='h6'>
              {' '}
              Write a Comment{' '}
            </Typography>
            <TextField
              fullWidth
              className={classes.commentSE}
              minRows={4}
              variant='outlined'
              label='Comment'
              multiline
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <br />
            <Button style={{ marginTop: '15px' }} disabled={!comment.length} variant='contained' color='primary' onClick={handleClick}>
              + Comment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
