import React from 'react'
import { Grid, Box, TextField, Radio, FormControl, RadioGroup, FormLabel, FormControlLabel, FormGroup, Checkbox } from '@material-ui/core'
import { useState } from 'react'
import { ALL_RECIPE_QUERY, MODIFIED_RECIPE_QUERY, NAME_RECIPE_QUERY, MEAT_RECIPE_QUERY, TIME_RECIPE_QUERY, NAME_AND_TIME_RECIPE_QUERY, NAME_AND_MEAT_RECIPE_QUERY, NAME_TIME_AND_MEAT_RECIPE_QUERY } from "../StrapiQueries/RecipeQuery";
import Query from "../StrapiQueries/QueryBuilder";
import RecipeCard from './RecipeCard'
import moment from 'moment'


function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}

function QueryDecider(props) {
    console.log(props)
    return(
    <Query query={MODIFIED_RECIPE_QUERY} name={props.name} meat={props.meat} times={props.times}>
                 {({ data: { recipes } }) => {
                     return (
                         recipes.map((recipe, i) => {
                             return (
                                 <RecipeCard recipe={recipe} />
                             );
                         })
                     );
                 }}
             </Query>)
    // if ((props.name === null || props.name === "") && (props.meat === null || props.meat === "" ) && (props.times === null || props.times.length === 0) ) {
    //     console.log(1)
    //     return (
    //         <Query query={ALL_RECIPE_QUERY} id={null}>
    //             {({ data: { recipes } }) => {
    //                 return (
    //                     recipes.map((recipe, i) => {
    //                         return (
    //                             <RecipeCard recipe={recipe} />
    //                         );
    //                     })
    //                 );
    //             }}
    //         </Query>
    //     )
    // }
    // else if((props.name !== null && props.name !== "") && (props.times !== null && props.times.length !== 0)){
        
    //     return(
    //         <Query query={NAME_AND_TIME_RECIPE_QUERY} name={props.name} times={props.times}>
    //             {({ data: { recipes } }) => {
    //                 return (
    //                     recipes.map((recipe, i) => {
    //                         return (
    //                             <RecipeCard recipe={recipe} />
    //                         );
    //                     })
    //                 );
    //             }}
    //         </Query>
    //     )

    // }
    // else if((props.name !== null && props.name !== "") && (props.meat !== null && props.meat !== "")) {
    //     return (
    //         <Query query={NAME_AND_MEAT_RECIPE_QUERY} name={props.name} meat={props.meat}>
    //             {({ data: { recipes } }) => {
    //                 return (
    //                     recipes.map((recipe, i) => {
    //                         return (
    //                             <RecipeCard recipe={recipe} />
    //                         );
    //                     })
    //                 );
    //             }}
    //         </Query>
    //     )
    // }
    // else if ((props.name !== null && props.name !== "") && (props.meat !== null && props.meat !== "") && (props.times !== null && props.times.length !== 0)){
    //     return(
    //     <Query query={NAME_TIME_AND_MEAT_RECIPE_QUERY} name={props.name} meat={props.meat} times={props.times}>
    //         {({ data: { recipes } }) => {
    //             return (
    //                 recipes.map((recipe, i) => {
    //                     return (
    //                         <RecipeCard recipe={recipe} />
    //                     );
    //                 })
    //             );
    //         }}
    //     </Query>)
    // }
    // else if ((props.name === null || props.name === "") && (props.times === null || props.times.length === 0)) {
    //     console.log(2)
    //     return (
    //         <Query query={MEAT_RECIPE_QUERY} meat={props.meat}>
    //             {({ data: { recipes } }) => {
    //                 return (
    //                     recipes.map((recipe, i) => {
    //                         return (
    //                             <RecipeCard recipe={recipe} />
    //                         );
    //                     })
    //                 );
    //             }}
    //         </Query>
    //     )
    // }
    // else if ((props.meat === null || props.meat === "" ) && (props.times === null || props.times.length === 0)) {
    //     console.log(3)
    //     return (
    //         <Query query={NAME_RECIPE_QUERY} name={props.name}>
    //             {({ data: { recipes } }) => {
    //                 return (
    //                     recipes.map((recipe, i) => {
    //                         return (
    //                             <RecipeCard recipe={recipe} />
    //                         );
    //                     })
    //                 );
    //             }}
    //         </Query>)
    // }
    // else if ((props.meat === "" || props.meat === null) && (props.name === null || props.name === "")) {
    //     console.log(4)
    //     return(
    //     <Query query={TIME_RECIPE_QUERY} times={props.times}>
    //             {({ data: { recipes } }) => {
    //                 return (
    //                     recipes.map((recipe, i) => {
    //                         return (
    //                             <RecipeCard recipe={recipe} />
    //                         );
    //                     })
    //                 );
    //             }}
    //         </Query>
    // )}
    // else if (props.updating === true){
    //     return(<h1>updating</h1>)
    // }
    // else {
    //     return (
    //         <h1>Error</h1>
    //     )
    // }
}


export default () => {
    const forceUpdate = useForceUpdate();
    let [name, nameHandler] = useState("")
    let [meat, meatHandler] = useState("")
    let [times, timeHandler] = useState({
        FifteenMins: false,
        ThirtyMins: false,
        FortyFiveMins: false,
        OneHour: false,
        TwoHours: false
    })

    let [timesArray, timeArrayHandler] = useState([])
    let [updating, update] = useState(false)

    const handleChange = (e) => {
        meatHandler(e.target.value)
    }
    const controlTimes = (e) => {
        timeHandler({ ...times, [e.target.value]: e.target.checked })
        setTimeout(handleTimes(e.target.name, e.target.checked), 1000)
    }
    const handleTimes = (name, checked) => {
        update(true)
        
        if(checked === false){
        let removingTimes = null
        removingTimes = timesArray
        let index = removingTimes.indexOf(name)
        removingTimes.splice(index, 1)
        timeArrayHandler(removingTimes)
        forceUpdate()
        }
        else{
        update(true)
        let currentTimes = null
        currentTimes = timesArray
        currentTimes.push(name)
        timeArrayHandler(currentTimes)
        forceUpdate()
        
        }
        
    }

    return (
        <Grid style={{ width: '100%', height: '100%' }} justify='center' container>
            <Box width='90%' height='100%' bgcolor='white'>
                <Grid className='full' container direction='column' wrap='nowrap'>
                    <Box height='10%' width='100%' pt='20px' borderBottom='1px solid black'>
                        <Grid justify='space-around' alignItems='center' container>
                            <Box width='25%'>
                                <TextField fullWidth='true' variant='outlined' placeholder='Recipe Name' width='500px' onChange={(e) => { nameHandler(e.target.value) }} />
                            </Box>
                            <Box color='black'>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Time To Cook</FormLabel>
                                    <FormGroup onChange={controlTimes} style={{flexDirection: 'row'}}>
                                        <FormControlLabel
                                            control={<Checkbox checked={times.FifteenMins} value='FifteenMins' name="15 minutes" />}
                                            label="15 Mins"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={times.ThirtyMins} value='ThirtyMins' name="30 minutes" />}
                                            label="30 Minutes"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={times.FortyFiveMins} value='FortyFiveMins' name="45 minutes" />}
                                            label="45 Minutes"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={times.OneHour} value='OneHour' name="1 hour" />}
                                            label="1 Hour"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={times.TwoHours} value='TwoHours' name="2 hours" />}
                                            label="2 Hours+"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Box>
                            <Box color='black'>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Meat</FormLabel>
                                    <RadioGroup style={{ flexDirection: 'row' }} aria-label="Meat" value={meat} onChange={handleChange}>
                                        <FormControlLabel value="Chicken" control={<Radio />} label="Chicken" />
                                        <FormControlLabel value="Beef" control={<Radio />} label="Beef" />
                                        <FormControlLabel value="Pork" control={<Radio />} label="Pork" />
                                        <FormControlLabel value={""} control={<Radio />} label="All" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Grid>

                    </Box>
                    <Box className='full'>
                        <Grid className='full' container justify='space-around'>
                            <QueryDecider name={name} meat={meat} times={timesArray} updating={updating} />
                        </Grid>
                    </Box>
                </Grid>
            </Box>

        </Grid>
    )
}