import React from "react";
import Query from "../StrapiQueries/QueryBuilder";
import RecipeCard from './RecipeCard'

import {ALL_RECIPE_QUERY} from "../StrapiQueries/RecipeQuery";

const RecipeCardStruc = () => {
    return (
        <Query query={ALL_RECIPE_QUERY} id={null}>
            {({ data: { recipes } }) => {
                return (
                    recipes.map((recipe, i) => {
                        return (
                            <RecipeCard recipe={recipe}/>
                        );
                    })
                );
            }}
        </Query>
    );
};

export default RecipeCardStruc;  