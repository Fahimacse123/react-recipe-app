import React  from 'react';
import css from '../components/recipe.module.css'

const Recipe = ({tittle,calories,image,ingredients}) => {
     
    return(
        <div className={css.recipe}>
            <h1 >{tittle}</h1>
            <ol>
                {ingredients.map(ingredient=>(
               <li>{ingredient.text}</li> 
                ))}
            </ol>
            <p>Calories: {Math.ceil(calories)}</p>
            <img src={image} alt=""/>
        </div>
    );
};


export default Recipe;