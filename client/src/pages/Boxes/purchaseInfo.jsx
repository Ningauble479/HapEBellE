import React from 'react'
import { Grid, Box, Typography, Button } from '@material-ui/core'
import { useMutation } from '@apollo/react-hooks'
import { ADD_TO_CART, GET_CART } from '../../Graphql/queries/productQueries'

export default (props) => {

    let [addToCart] = useMutation(ADD_TO_CART, {refetchQueries: [{query: GET_CART, variables: {guestId: localStorage.getItem('_id')}}],onCompleted: (data)=>{
        console.log(data)
        if(localStorage.getItem('_id')){return}
        if(data.addToCart.guest === true){
            localStorage.setItem('_id', data.addToCart._id)
        }
    }})

    return(
        <Grid>
            <Box>
                <Button onClick={()=>addToCart({variables: {id: props.item.id, price: props.item.price, guestID: localStorage.getItem('_id') ? localStorage.getItem('_id') : null}})}>Add To Cart</Button>
            </Box>
        </Grid>
    )
}