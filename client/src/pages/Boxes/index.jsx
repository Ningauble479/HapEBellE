import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Grid, Box, Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { GET_PRODUCTS } from '../../Graphql/queries/productQueries'

import ItemInfo from './itemInfo'
import PurchaseInfo from './purchaseInfo'

export default (props) => {
    let {id} = useParams()
    let {data} = useQuery(GET_PRODUCTS, {variables: {id: id}})
    let item = null
    data != null || data != undefined ? item = data.getProduct[0] : console.log('null')
    return(
        <Grid style={{
            paddingTop:'100px',
            paddingLeft:'150px',
            paddingRight:'150px'
        }}>
            <Box color='black'>
                {
                    item === null ?
                    <h1>Loading...</h1>
                    :
                    (   
                    <React.Fragment>
                        <ItemInfo item={item}/>
                        <PurchaseInfo item={item}/>
                    </React.Fragment>
                        

                    )
                }
                
            </Box>
        </Grid>
    )
}