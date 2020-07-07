import React, { useState, useEffect } from 'react'
import { Box, Typography, Grid } from '@material-ui/core'
import { GET_PRICE } from '../../Graphql/queries/productQueries'
import { useQuery } from 'react-apollo'
import fixPrices from '../../reusableLogic/PriceFixer'

const Styles = {
    full: {
        width: '100%',
        height: '100%'
    }
}





export default (props) => {

    let { data } = useQuery(GET_PRICE, { variables: { id: props.row.id } })
    let showPrice = 'Loading...'
    if (data) {
        showPrice = fixPrices(data.getPrice)
    }
    return (
        <Box width='100%' height='300px' p={3} borderBottom='1px solid black'>
            <Grid container style={Styles.full} >
                <Box width='50%'  >
                    <Box style={{ backgroundImage: `url(${props.row.images[0]})`, backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '14px' }} width='100%' height='100%'>
                    </Box>
                </Box>
                <Box width='50%' textAlign='center'>
                    <Grid style={{ height: '100%' }} container justify='center' direction='column'>
                        <Box>
                            <Typography variant='h3'>
                                {props.row.name}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h4'>
                                amount: {props.row.amount}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h4'>
                                Price: ${showPrice}.00
                        </Typography>
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        </Box>
    )


}