import React from 'react'
import { createContext, useState } from 'react';
import Axios from 'axios';
import './drinkscontext.css';

export const DrinksContext = createContext();

export function DrinksProvider(props) {

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

    const [resultDrinks, setResultDrinks] = useState([]);
    const [drink, setDrink] = useState('');
    const [drinkId, setDrinkId] = useState('');

    const getDrinks = () => {
        Axios.get(`${url + drink}`).then((response) => {
            setResultDrinks(response.data.drinks);
        })
    }

    return (
        <DrinksContext.Provider value={{ result: [resultDrinks, setResultDrinks], id: [drinkId, setDrinkId], getDrinks: getDrinks, drinks: [drink, setDrink] }}>
            {props.children}
        </DrinksContext.Provider>
    )
}