import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Grid container className={classes.title}>
          <Typography variant="h6" style={{paddingRight: '50px'}}>
            <Link className='linkCleaner' to='/'>RoshiBox</Link>
          </Typography>

          <Typography variant="h6" style={{paddingRight: '50px'}}>
            <Link className='linkCleaner' to='/recipes'>Recipes</Link>
          </Typography>
          <Typography variant="h6" >
            <Link className='linkCleaner' to='/Boxes'>Shop Boxes</Link>
          </Typography>
          </Grid>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}