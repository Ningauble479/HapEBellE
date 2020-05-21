import React, { useState } from 'react'
import { Card, Box, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default (props) => {
    let [hovered, handleHover] = useState(false)
    let recipe = props.recipe
    return (
        <Box item>
        <Link style={{maxWidth: '400px', maxHeight: '300px'}} to={`/recipes/${recipe.id}`}>
            <Card onMouseEnter={() => { handleHover(true) }} onMouseLeave={() => { handleHover(false) }} item 
            style={{
                    marginTop: '50px',
                    height: '300px',
                    width: '400px',
                    backgroundImage: `url(http://localhost:1337${recipe.Pictures[0].url})`,
                    backgroundSize: 'contain',
                    borderRadius: '25px',
                    color: 'white'
                }}>
                <Box textAlign='center' width='100%' height='100%' style={hovered === true ? {cursor: 'pointer',backgroundColor: 'rgba(0, 0, 0, 0.6)', visibility: 'visible', display: 'flex', alignItems: 'center', justifyContent: 'center'} : {visibility: 'hidden'}}>
                    <Typography variant='h3'>{recipe.Recipe_Name}</Typography>
                </Box>
            </Card>
        </Link>
        </Box>
    )
}