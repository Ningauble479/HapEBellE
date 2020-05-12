import gql from "graphql-tag";

export const ALL_RECIPE_QUERY = gql`  
query {
	recipes {
	      Recipe_Name
        RecipeTime
        Feeds
        id
        MeatTypes
        ExtraTags
        Ingredients
        Steps
        Pictures {
          url
        }
  }
}
`;

export const MODIFIED_RECIPE_QUERY = gql`
query Time_Recipe($times: [String!]!, $meat: String!, $name: String!) {
	recipes(where: {RecipeTime_contains: $times, Recipe_Name_contains: $name, MeatTypes_contains: $meat})  {
	      Recipe_Name
        RecipeTime
        Feeds
        id
        MeatTypes
        ExtraTags
        Ingredients
        Steps
        Pictures {
          url
        }
  }
}
`

export const TIME_RECIPE_QUERY = gql`
query Time_Recipe($times: [String!]!) {
	recipes(where: {RecipeTime: $times})  {
	      Recipe_Name
        RecipeTime
        Feeds
        id
        MeatTypes
        ExtraTags
        Ingredients
        Steps
        Pictures {
          url
        }
  }
}
`;

export const NAME_RECIPE_QUERY = gql`  
query Name_Recipe($name: String!) {
	recipes(where: {Recipe_Name_contains: $name})  {
	      Recipe_Name
        RecipeTime
        Feeds
        id
        MeatTypes
        ExtraTags
        Ingredients
        Steps
        Pictures {
          url
        }
  }
}
`;

export const MEAT_RECIPE_QUERY = gql`  
query Meat_Recipe($meat: String!) {
	recipes(where: {MeatTypes_contains: $meat})  {
	      Recipe_Name
        RecipeTime
        Feeds
        id
        MeatTypes
        ExtraTags
        Ingredients
        Steps
        Pictures {
          url
        }
  }
}
`;

export const NAME_AND_TIME_RECIPE_QUERY = gql`  
query Name_And_Time_Recipe($times: [String!]!, $name: String!) {
	recipes(where: {Recipe_Name_contains: $name, RecipeTime: $times})  {
	      Recipe_Name
        RecipeTime
        Feeds
        id
        MeatTypes
        ExtraTags
        Ingredients
        Steps
        Pictures {
          url
        }
  }
}
`;

export const NAME_AND_MEAT_RECIPE_QUERY = gql`  
query Name_And_Meat_Recipe($meat: String!, $name: String!) {
	recipes(where: {Recipe_Name_contains: $name, MeatTypes_contains: $meat})  {
	      Recipe_Name
        RecipeTime
        Feeds
        id
        MeatTypes
        ExtraTags
        Ingredients
        Steps
        Pictures {
          url
        }
  }
}
`;

export const NAME_TIME_AND_MEAT_RECIPE_QUERY = gql`  
query Name_Time_And_Meat_Recipe($meat: String!, $name: String!, $times: [String!]!) {
	recipes(where: {Recipe_Name_contains: $name, MeatTypes_contains: $meat, RecipeTime: $times})  {
	      Recipe_Name
        RecipeTime
        Feeds
        id
        MeatTypes
        ExtraTags
        Ingredients
        Steps
        Pictures {
          url
        }
  }
}
`;

