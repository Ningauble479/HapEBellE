import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCTS } from '../../Graphql/queries/productQueries'
import { Box } from '@material-ui/core'

export default (props) => {
    let { data } = useQuery(GET_PRODUCTS, {variables: { topBox: props.topBox }})
    console.log(data)
    if(data === undefined || data === null) {return(<h1>Loading...</h1>)}
    return (
    <Box height='100%' width='100%' style={{backgroundImage: `url(${data.getProduct[0].images[0]})`, backgroundSize: 'cover', borderRadius: '10px'}}>
        <Box height='100%' width='100%' borderRadius= '10px' textAlign='center' display='flex' alignItems='center' bgcolor='rgba(8,8,8,0.3)' justifyContent='center'>
            <h1 style={{color: 'white'}}>{data.getProduct[0].description}</h1>
        </Box>
    </Box>

    )


}