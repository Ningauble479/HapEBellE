import React, { useState } from 'react'
import { Grid, Box, Typography } from '@material-ui/core'
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_SESSION, EMPTY_CART, GET_CART } from '../../Graphql/queries/productQueries'
import { useEffect } from 'react';
import {Redirect} from 'react-router-dom'




export default (props) => {

    let [redirect, handleRedirect] = useState(false)


    let {id} = useParams()


    let {data} = useQuery(GET_SESSION, {variables: {id: id}})
    let [emptyCart] = useMutation(EMPTY_CART, {refetchQueries: [{query: GET_CART, variables: {guestId: localStorage.getItem('_id')}}], variables: {guestID: localStorage.getItem('_id')},onCompleted: (data)=>{
        if(data.emptyCart === false){
            alert("Something went wrong")
        }
        else if(data.emptyCart === true){
            console.log(data)
            setTimeout(()=>{handleRedirect(true)}, 2000)
            
        }
    }})
    useEffect(()=>{
        emptyCart()
    },[])

    console.log({mySession: data})
    if(redirect === true){
        return(
            <Redirect to='/'/>
        )
    }
    return(
        <Grid style={{padding: '100px'}}>
            <Box color='black' textAlign='center'>
                <Typography variant='h4'>Processing payment... for {id}</Typography>
            </Box>
        </Grid>
    )
}