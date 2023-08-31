import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate, useLocation } from 'react-router-dom';

import { googleLogout } from '@react-oauth/google';

import { useDispatch } from 'react-redux';

import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';

import decode from 'jwt-decode';

const Navbar = () => {
  const classes = useStyles();
  // const user = null;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logout = () => {
    googleLogout();
    dispatch({ type: 'LOGOUT' });
    navigate('/auth');
    // navigate("/post");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    // console.log(token);
    if (token) {
      const decodedToken = decode(token);
      // console.log(decodedToken);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  // useEffect(() => {
  //   const token = user?.token;

  //   if (token) {
  //     const decodedToken = decode(token);

  //     if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  //   }

  //   setUser(JSON.parse(localStorage.getItem('profile')));
  // }, [location]);
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        <Typography component={Link} to='/' className={classes.heading} variant='h1' align='left'>
          Memoriae{' '}
        </Typography>
        {/* <img className={classes.image} alt='memories' height='60' /> */}
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} margin='20px' alt={user.result.name} src={user.result.picture}>
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName}>{user.result.name}</Typography>
            <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>
              Log Out
            </Button>
          </div>
        ) : (
          <Button component={Link} to='/auth' variant='contained' color='primary'>
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
