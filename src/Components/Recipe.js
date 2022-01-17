import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DrinksContext } from '../Contexts/DrinksContext';
import './recipe.css'

function Recipe() {

    const { result, id } = useContext(DrinksContext);
    const [resultDrinks, setResultDrinks] = result;
    const [drinkId, setdrinkId] = id;

    const filteredIds = resultDrinks.filter(drink => {
        if (drink.idDrink === drinkId) {
            return drink;
        }
    })

    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    }

    const ingredientArr = [];
    const instrcutionsArr = [];

    filteredIds.map(drink => {
        for (let i = 1; i <= 15; i++) {
            ingredientArr.push('strIngredient' + i);
        }
    });



    return (
        <div className='divRecipe'>
            <button className='buttonHome' onClick={goHome}>HOME</button>
            <div className='mainDiv'>
                <img className='drinkImg' src={filteredIds[0]['strDrinkThumb']} />
                <div className='divP'>
                    <h2 className='h2ingredients'>Ingredients: </h2>
                    {
                        ingredientArr.map(drink => {
                            if (filteredIds[0][drink] != null) {
                                return (
                                    <div className='ingredients'>
                                        <li>{filteredIds[0][drink]}</li>
                                    </div>
                                );
                            } else {
                                return;
                            }
                        })
                    }
                    <div className='divInstructions'>
                        <h2 className='instructions'>Instructions: </h2>
                        <p className='instructionsP'>{filteredIds[0]['strInstructions']}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe;
