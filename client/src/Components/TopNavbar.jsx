import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import { Grid, Modal, Box } from '@material-ui/core';
import gql from 'graphql-tag'
import { useMutation, useQuery } from '@apollo/react-hooks'
import CreateAccount from './createAccount'

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

const SHOW_USER = gql`
  query getID{
      myid @client
      myemail @client
      myusername @client
  }
`

const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $email: String!, $username: String!) {
    updateUser(id: $id, email: $email, username: $username) @client
  }
`;

const CHECK_USER = gql`
  query currentUser {
    currentUser {
    _id
    userName
    email
    }
  }
`

const SET_USER = gql`
mutation SetUser($email: String!, $userName: String!){
  setUser @client(email: $email, userName: $userName){
    _id
    userName
    email
  }
}`

const LOGIN = gql`
mutation Login($email: String!, $password: String!){
  login(email: $email, password: $password){
    user {
      _id
      userName
      email
    }
  }
}
`;

function ShowUser(user){
  const {data} = useQuery(SHOW_USER);

  return(
  <React.Fragment>
  <Typography variant="h6" style={{ paddingRight: '50px' }}>
            { data === null || data === undefined ?
              (null)
              :
            `Welcome ${data.myusername}`
            }
            </Typography>
  </React.Fragment>
  )
}

export default function ButtonAppBar() {

  const classes = useStyles();
  let [loggedIn, checkLogin] = useState(false)
  let [showModal, handleModal] = useState(false)
  const [login] = useMutation(LOGIN)
  let [email, changeEmail] = useState(null)
  let [password, changePassword] = useState(null)
  const {data} = useQuery(CHECK_USER)
  const [update] = useMutation(UPDATE_USER)
  const {theUser} = useQuery(SHOW_USER);
  useEffect(()=>{
    if(data !== null && data !== undefined){
      if(data.currentUser != null && data.currentUser != undefined){
        console.log(data)
      update({ variables: { 
        id: data.currentUser._id,
        email: data.currentUser.email,
        username: data.currentUser.userName
       }})
      checkLogin(true)
    }
  }
  },[data])
  // const [setUser] = useMutation(SET_USER)
  console.log({yesdad: theUser})


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Grid container className={classes.title}>
            <ShowUser/>
            <Typography variant="h6" style={{ paddingRight: '50px' }}>
              <Link className='linkCleaner' to='/'>RoshiBox</Link>
            </Typography>

            <Typography variant="h6" style={{ paddingRight: '50px' }}>
              <Link className='linkCleaner' to='/recipes'>Recipes</Link>
            </Typography>
            <Typography variant="h6" >
              <Link className='linkCleaner' to='/Boxes'>Shop Boxes</Link>
            </Typography>
          </Grid>
          {
            loggedIn === true ?
              (<Button color="inherit">Logout</Button>)
              :
              (<Button onClick={() => { handleModal(true) }} color="inherit">Login</Button>)
          }
          <Modal open={showModal}>
            <Grid style={{ width: '100vw', height: '100vh' }} justify='center' container>
              <Box width='500px' height='500px' alignSelf='center' textAlign='center' bgcolor='whitesmoke'>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    login({ variables: { email: email, password: password } })
                    changeEmail('');
                    changePassword('');
                  }}
                >
                  <input placeholder='email' value={email} onChange={(e) => changeEmail(e.target.value)} />
                  <input placeholder='password' value={password} onChange={(e) => changePassword(e.target.value)} />
                  <button type="submit">Login</button>
                </form>
                <CreateAccount />
                <ShowUser user={data}/>
              </Box>
            </Grid>
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
}



function storeDD() {

}