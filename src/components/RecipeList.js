import React from "react";

import './RecipeList.css';

import HomeItem from "./HomeItem";

const RecipeList = (props) => {

    return ( <ul className="recipes-list">
           
           {props.items.map(recipe => (<HomeItem 
           key={recipe.id}
           id={recipe.id}
           image={recipe.image}
           title={recipe.title}
           ingredients={recipe.ingredients}
           instructions={recipe.instructions}
           />
           ))}
    </ul>
    );
};

export default RecipeList;

