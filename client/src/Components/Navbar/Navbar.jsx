import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useMutation, useQuery} from '@apollo/react-hooks'
import {LOGIN, LOGGED_IN, LOGOUT, CHECK_USER} from '../../Graphql/queries/profileQueries'
import { GET_CART } from '../../Graphql/queries/productQueries'
import Box from '../../Images/boxie.png';
// import logo from '../../reuse/images/HP-Logomark.png'
import './scss/main.scss';
import './navbar.css';
import { Button, Box as MUIBox, Grid, Input, InputLabel, FormControl, FormHelperText } from '@material-ui/core';
import Modal from '@material-ui/core/Modal/index.js'
import ShoppingCart from '../ShoppingCart/index'

const Navbar = props => {

    // const header = document.querySelector
    // ('.desk-main-header');

    // window.addEventListener('scroll', () => {
    //     const scrollPos = window.scrollY;
    //     if(scrollPos > 10) {
    //         header.classList.add('scrolled');
    //     } else {
    //         header.classList.remove('scrolled');
    //     }
    // })

    let [ open, handleOpen ] = useState(false)
    let [ openCart, handleCartOpen ] = useState(false)

    const {data} = useQuery(LOGGED_IN);
    console.log(data)

    const [login] = useMutation(LOGIN, {refetchQueries: [{query: CHECK_USER}, {query: GET_CART}]})
    let [loggedIn, handleLoggedIn] = useState(false)
    useEffect(()=>{handleLoggedIn(data.isLoggedIn)},[data])
    let [email, changeEmail] = useState(null)
    let [password, changePassword] = useState(null)
    let [logout] = useMutation(LOGOUT, {refetchQueries: [{query: LOGGED_IN}]})

    return (

        <nav className="desk-nav-containter">
            <ShoppingCart openCart={openCart} handleCartOpen={handleCartOpen}/>
            <Modal open={open} style={{display: 'flex', justifyContent:'center', alignContent:'center', height:'100vh'}} onEscapeKeyDown={()=>{handleOpen(false)}} onBackdropClick={()=>{handleOpen(false)}}>
                <Grid style={{width:"50vw", height:"50vh", alignSelf:'center'}} container justify='center' alignItems='center'>
                    <MUIBox width='50vw' height='50vh' bgcolor='white' display='flex'>
                        <MUIBox width='50%' height='100%' pl={4} pr={4} pt={5} color='black' borderRight='1px solid black'>
                            <form style={{display:'flex', flexDirection: 'column'}} onSubmit={e => {  e.preventDefault();
                                                                                                      login({ variables: { email: email, password: password } })
                                                                                                      changeEmail('');
                                                                                                      changePassword('');
                                                                                                      handleOpen(false) }}>
                                <h3 style={{paddingBottom:'15px'}}>Login</h3>
                                <FormControl>
                                  <InputLabel htmlFor="my-input">Email address</InputLabel>
                                  <Input id="my-input" aria-describedby="my-helper-text" value={email} onChange={(e) => changeEmail(e.target.value)} />
                                  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                                </FormControl>
                                <FormControl>
                                  <InputLabel htmlFor="my-input">Password</InputLabel>
                                  <Input id="my-input" aria-describedby="my-helper-text" value={password} onChange={(e) => changePassword(e.target.value)} />
                                  <FormHelperText id="my-helper-text">Forgot your password?</FormHelperText>
                                </FormControl>
                                <Button type='submit'>Login</Button>
                            </form>
                        </MUIBox>
                        <MUIBox width='50%' color='black'>
                        Random Marketing BS
                        </MUIBox>

                    </MUIBox>
                </Grid>
            </Modal>
            <div className="desk-main-header">
                <div className="logo">
                    <Link to='/'>LOGO</Link>
                </div>
                <input
                    className="desk-menu-btn"
                    id={`desk-menu-btn`}
                    type="checkbox"
                />
                <label
                    className="desk-menu-icon"
                    htmlFor={`desk-menu-btn`}
                >
                    Menu
                </label>
                <input
                    className="desk-menu-btn"
                    id={`desk-menu-btn`}
                    type="checkbox"
                />
                <label
                    className="desk-menu-icon"
                    htmlFor={`desk-menu-btn`}
                >
                    <span className={`desk-menu-icon__line`} />
                </label>
                {
                    data.isLoggedIn === true ?
                    (<Button variant='outlined' onClick={()=>{logout()}}>Logout</Button>)
                    :
                    (<Button variant='outlined' onClick={()=>{handleOpen(true)}}>Login</Button>)
                }
                <Button variant='outlined' onClick={()=>{handleCartOpen(true)}}>
                    Cart
                </Button>

                <div className="desk-nav-megamenu">

                    <div className="logo">
                        <a href="#">LOGO</a>
                    </div>

                    <ul className="desk-nav-links">
                        <li className="desk-nav-link"
                            htmlFor={`desk-menu-btn`}>
                            <a href="#">Shop</a>
                        </li>
                        <li className="desk-nav-link"
                            htmlFor={`desk-menu-btn`}>
                            <a href="#">How it works</a>
                        </li>
                        <li className="desk-nav-link"
                            htmlFor={`desk-menu-btn`}>
                            <a href="#">Blog</a>
                        </li>
                        <li className="desk-nav-link"
                            htmlFor={`desk-menu-btn`}>
                            <a href="#">Recipes</a>
                        </li>
                        <li className="something-nice"
                            htmlFor={`desk-menu-btn`}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum error nihil atque. Esse officia harum hic nostrum impedit, a vero qui minima enim nobis, cupiditate fugit, modi asperiores neque.</p>
                        </li>
                        <li className="something-nice"
                            htmlFor={`desk-menu-btn`}>
                            <button>Read our Latest Blog</button>
                        </li>


                    </ul>
                    <li className="desk-nav-social"
                        htmlFor={`desk-menu-btn`}>
                        <a href="#">facebook</a> /
                                <a href="#">instagram</a> /
                                <a href="#">Youtube</a>
                    </li>

                    <div className="box-ad-section">
                        
                        <h1>Check out these bad boys!</h1>

                        <div className="nav-boxes">
                        <img src={Box} />
                            <p>Small</p>
                        </div>
                        <div className="nav-boxes">
                        <img src={Box} />
                            <p>Medium</p>
                        </div>
                        <div className="nav-boxes">
                        <img src={Box} />
                            <p>Large</p>
                        </div>
                    </div>

                </div>
            </div>
        </nav >
    );
}

export default Navbar;