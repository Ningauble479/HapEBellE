import gql from "graphql-tag";

const RECIPE_QUERY = gql`  
query OneRecipe($id: ID!){
	recipe(id: $id) {
	    Recipe_Name
        RecipeTime
        Feeds
        id
        MeatTypes
        ExtraTags
        Ingredients
        Steps
  }
}
`;

export default RECIPE_QUERY;  