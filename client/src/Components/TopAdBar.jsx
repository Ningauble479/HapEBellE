import React from 'react';
import '../styles/TopAdBar.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import Input from '@material-ui/core/Input';



export default function TopAdBar() {

  return (
    <div className="top-nav">
      <h3>sign up today and get 10% off your first order</h3>
      {/* We need to put 3 input section here for email, First name, Last name */}
    </div>
  );
}