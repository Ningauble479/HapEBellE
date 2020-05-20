import React from "react";
import Query from "../StrapiQueries/QueryBuilder";
import { Card, CardHeader, CardContent } from '@material-ui/core'
import { useParams } from "react-router-dom";

import ONE_RECIPE from "../StrapiQueries/OneRecipeQuery";



const cardStyle = {
    marginTop: '50px',
    height: '300px',
    width: '400px'
  }

const RecipeCard = () => {
    let {id} = useParams()
    console.log(id)
    return (
        <Query query={ONE_RECIPE} id={id}>
            {({ data: { recipe } }) => {
                if(!recipe){return(<h1>No Result</h1>)}
                else{
                return (
                    <Card item style={cardStyle}>
                        <CardHeader title={recipe.Recipe_Name}/>
                        <CardContent>{recipe.Recipe_Time} {recipe.id}</CardContent>
                    </Card>
                );
            }}}
        </Query>
    );
};

export default RecipeCard;  