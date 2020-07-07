import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom' 
import { useParams } from 'react-router-dom'
import ItemBox from '../../Components/Boxes/FloatingBoxBasic'
import {getQuery, useQuery} from '@apollo/react-hooks'
import {GET_PRODUCTS} from '../../Graphql/queries/productQueries'


export default () => {
    let {size} = useParams()
    let {data} = useQuery(GET_PRODUCTS)
    console.log({storePage: data})
    return (
        <Grid container direction='column' style={{height: '100vh', width: '100vw', flexWrap: 'nowrap'}}>
            <Box color='black' height='8%' mt={10} pt={2} borderBottom='1px solid black' borderTop='1px solid black'>
                <Grid container >
                    <Box pl={12} pt={1}>
                        <Typography variant='h4' style={{fontWeight:'bolder'}}>Ranchers Best</Typography>
                    </Box>
                    <Box width='60%' display='flex' pl={12} justifyContent='center'>
                        <Grid container style={{ width:'80%',paddingTop: '5px'}} pl={10} justify='space-around'>
                            <Link to='/shop/smallBoxes' item style={{paddingRight:'55px'}}> <Typography color='black' className='linkCleaner hoverEffect' variant='h4'>Small Boxes</Typography></Link>
                            <Link to='/shop/mediumBoxes' item style={{paddingRight:'55px'}}> <Typography color='black' className='linkCleaner hoverEffect' variant='h4'>Medium Boxes</Typography></Link>
                            <Link to='/shop/largeBoxes' item> <Typography color='black' className='linkCleaner hoverEffect' variant='h4'>Large Boxes</Typography></Link>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <Box color='black' alignItems='center' justifyContent='center' height='20%' borderBottom='1px solid black' display='flex'>
                <Box maxWidth='15%' textAlign='center'><Typography variant='h4'>Strong Man Boxes Are 10% Off For A Limited Time</Typography></Box>
            </Box>
            <Box color='black' flexGrow='1'>
                <Grid container style={{height: '100%'}}>
                    <Box width='20%' borderRight='1px solid black'>
                        <Box color='white' height='10%' bgcolor='lightgray' pr={3} style={{display: 'flex', justifyContent:'flex-end', alignItems:'center'}}>
                            <Typography variant='h4'>Small Boxes</Typography>
                        </Box>
                        <Grid container spacing={12} direction='column' style={{textAlign:'right', paddingRight: '20px'}}>
                            <Typography item>
                                Fitness
                            </Typography>
                            <Typography item>
                                Couples
                            </Typography>
                            <Typography item>
                                Weight Loss
                            </Typography>
                            <Typography item>
                                On Sale
                            </Typography>
                        </Grid>
                    </Box>
                    <Box pl={5} pt={5} flexGrow='1'>
                        <Grid style={{width: '100%', height: '100%'}} container justify='space-around'>
                        {
                            data != null && data != undefined ?
                            data.getProduct.map((row)=>(
                                <ItemBox item={row}/>
                            ))
                            :
                            (<h2>loading...</h2>)
                        }
                        </Grid>

                        
                    </Box>
                </Grid>
            
            </Box>
        </Grid>
    )
}