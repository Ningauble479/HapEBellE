import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'


export default (props) => {
    return(
        <Grid>
            <Box>
                <Typography variant='h1'>
                    {props.item.name}
                </Typography>
            </Box>
        </Grid>
    )
}