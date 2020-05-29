import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom' 

export default () => {
    return (
        <Grid container direction='column' style={{height: '100vh', width: '100vw'}}>
            <Box color='black' height='8%' mt={10} pt={2} borderBottom='1px solid black' borderTop='1px solid black'>
                <Grid container >
                    <Box pl={12} pt={1}>
                        <Typography variant='h4' style={{fontWeight:'bolder'}}>Ranchers Best</Typography>
                    </Box>
                    <Box width='60%' display='flex' pl={12} justifyContent='center'>
                        <Grid container style={{ width:'80%',paddingTop: '5px'}} pl={10} justify='space-around'>
                            <Link item style={{paddingRight:'55px'}}> <Typography color='black' className='linkCleaner hoverEffect' variant='h4'>Small Boxes</Typography></Link>
                            <Link item style={{paddingRight:'55px'}}> <Typography color='black' className='linkCleaner hoverEffect' variant='h4'>Medium Boxes</Typography></Link>
                            <Link item> <Typography color='black' className='linkCleaner hoverEffect' variant='h4'>Large Boxes</Typography></Link>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <Box color='black' alignItems='center' justifyContent='center' height='20%' borderBottom='1px solid black' display='flex'>
                <Box maxWidth='15%' textAlign='center'><Typography variant='h4'>Strong Man Boxes Are 10% Off For A Limited Time</Typography></Box>
            </Box>
            <Box color='black'>
            <Typography variant='h1'>t</Typography>
            </Box>
        </Grid>
    )
}