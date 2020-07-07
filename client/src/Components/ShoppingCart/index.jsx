import React from 'react'
import { Grid, Drawer, Box, Typography, Button } from '@material-ui/core'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_CART, CHECKOUT } from '../../Graphql/queries/productQueries'
import { loadStripe } from '@stripe/stripe-js';
import CartItem from './cartItem'

const stripePromise = loadStripe('pk_test_8sQtLxVeWVeUOvLTJwYlZhnS00G85h0vYD');

export default (props) => {
    let {data} = useQuery(GET_CART, {variables: {guestId: localStorage.getItem('_id') ? localStorage.getItem('_id') : null}, pollInterval: 1500})
    let [checkoutMut] = useMutation(CHECKOUT, {variables: {guestID: localStorage.getItem('_id')}, onCompleted: async ({checkout})=>{
        const stripe = await stripePromise

        let sessionId = checkout
        console.log(checkout)
        const { error } = await stripe.redirectToCheckout({
            sessionId,
          });

    }})
    console.log({cartSpot: data})
    return(
        <Drawer
        anchor="right"
        open={props.openCart}
        onClose={()=>{props.handleCartOpen(false)}}
        >
            <Grid
            container
            direction='column'
            style={{
                width: '35vw'
            }}>
                <Box item width='100%' textAlign='center' pt={5} pb={3} borderBottom='1px solid black'>
                    <Typography variant='h1'>
                        Rancher's Best
                    </Typography>
                </Box>
                <Box>
                    <Grid container>
                        {
                            (data === null || data === undefined) || (data.getCart === null || data.getCart === undefined) ?
                            (<h1>Add items to cart</h1>)
                            :
                            data.getCart.map((row)=>(
                            <CartItem row={row}/>
                            ))
                        }
                    </Grid>
                </Box>
                <Box height='50px'>
                    <Button style={{width: '100%', height: '100%'}} onClick={async ()=>{
                        checkoutMut()
                        }}>Checkout</Button>
                </Box>
            </Grid>
        </Drawer>
    )
}