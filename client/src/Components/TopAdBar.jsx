import React, {useState, useEffect} from 'react';
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
import { LOGGED_IN, SHOW_USER } from '../Graphql/queries/profileQueries'
import { useQuery } from '@apollo/react-hooks'



export default function TopAdBar() {
  const {data} = useQuery(SHOW_USER)
  // const {data} = useQuery(LOGGED_IN);
  let [user, setUser] = useState({myid: null, myemail: null, myusername: null})
  console.log({theUser: user})
  useEffect(()=>{
    setUser(data)
    console.log('user Updated')
  },[data])
  console.log({data:data})

  return (
    <div className="top-nav">
      { user != null && user.myemail != null ? 
      <h3>Welcome {user.myusername} </h3>
      :
      <h3>sign up today and get 10% off your first order</h3>
}
      
      {/* We need to put 3 input section here for email, First name, Last name */}
    </div>
  );
}