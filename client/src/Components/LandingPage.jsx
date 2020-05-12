import React from 'react'
import Recipes from '../strapiStructures/recipeCardStructure'
import { Grid, Box, Typography } from '@material-ui/core'

export default () => {
    return (
        <Grid container alignItems='center' direction='column' wrap='nowrap' style={{ height: '100vh', overflow: 'auto', paddingBottom: '50px' }}>
            <Box mt={5} item>
                <Typography variant='h1'>Welcome to Roshi Farms</Typography>
            </Box>
            <Box item mt={5}>
                <Typography variant='h4'>A healthy meal leads to a healthy life</Typography>
            </Box>
            <Box mt={2}>
                <Typography>We value your health and your gains. Lead a healthy meatier life with farm to table meats month to month and recipes to help you find out what to eat. Keep your meals yummy and your brain and body healthy.</Typography>
            </Box>
            <Box item>
                <Grid container style={{ width: '100vw' }} wrap='no-wrap' justify='space-around'>
                    <Recipes />
                </Grid>
            </Box>
        </Grid>
    )
}