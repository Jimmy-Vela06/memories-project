import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '800px',
    maxHeight: '800px',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '600px',
      maxHeight: '500px',
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '400px',
      maxHeight: '700px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '270px',
      maxHeight: 'auto',
      marginTop: '20px 10px',
    },
  },

  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('xl')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },

  section: {
    borderRadius: '20px',
    margin: '10px',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      // width: '100%',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },

  postMessage: {
    [theme.breakpoints.down('sm')]: {
      marginRight: '20px',
    },
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    // display: 'flex',
    // justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '270px',
    },
  },
  commentSE: {
    width: '700px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '600px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '270px',
    },
  },
}));
