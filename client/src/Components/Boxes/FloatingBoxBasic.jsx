import React from 'react'
import {useMutation} from '@apollo/react-hooks'
import {Link} from 'react-router-dom'
import { Box, Typography, Button, Grid } from '@material-ui/core'
import priceFixer from '../../reusableLogic/PriceFixer'

import {ADD_TO_CART, GET_CART} from '../../Graphql/queries/productQueries'

export default (props) => {

    let [addToCart] = useMutation(ADD_TO_CART, {refetchQueries: [{query: GET_CART, variables: {guestId: localStorage.getItem('_id')}}],onCompleted: (data)=>{
        console.log(data)
        if(localStorage.getItem('_id')){return}
        if(data.addToCart.guest === true){
            localStorage.setItem('_id', data.addToCart._id)
        }
    }})

    let showPrice = 'Loading...'
    if(props.item.price){
    showPrice = priceFixer(props.item.price)}
    return(
        <Box width={props.width ? props.width : '350px'} height={props.height ? props.height : '400px'} >
            <Grid style={{height: '100%', width: '100%'}}>
            <Link to={`/boxes/${props.item.id}`}>
                <Box height='50%' style={{
                            backgroundImage: `url(${props.item.images[0]})`, 
                            backgroundSize: 'cover'}}>></Box>
            </Link>
            <Box p={2} height='40%'>
                <Typography variant='h6'>
                    {props.item.name} - {props.item.description}
                </Typography>
                <Typography>
                    ${showPrice}
                </Typography>
            </Box>
                <Box width='100%' display='flex' justifyContent='center'>
                    <Button onClick={()=>addToCart({variables: {id: props.item.id, price: props.item.price, guestID: localStorage.getItem('_id') ? localStorage.getItem('_id') : null}})} style={{color:'white', backgroundColor:'green', width:'90%', borderRadius:'25px'}}>Add To Cart</Button>
                </Box>
            </Grid>
        </Box>
    )
}