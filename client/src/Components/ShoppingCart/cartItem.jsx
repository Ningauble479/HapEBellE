import React from 'react'
import { Box, Typography, Grid } from '@material-ui/core'


export default (props) => {

    return(
        <Box width='100%' height='200px' p={3}>
            <Grid>
                <Box>
            <Typography variant='h4'>
                {props.row.name}
            </Typography>
            </Box>
            <Box>
                <Typography>
                    amount: {props.row.amount}
                </Typography>
            </Box>
            </Grid>
        </Box>
    )


}