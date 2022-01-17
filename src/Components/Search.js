import React from 'react';
import { useContext } from 'react';
import { DrinksContext } from '../Contexts/DrinksContext';
import './search.css';
import { useNavigate } from 'react-router-dom';

function Search() {

    const { result, id, getDrinks, drinks } = useContext(DrinksContext);
    const [resultDrinks, setResultDrinks] = result;
    const [drinkId, setDrinkId] = id;
    const [drink, setDrink] = drinks;


    const navigate = useNavigate();
    const goRecipe = () => {
        navigate('/recipe');
    }

    const enter = e => {
        if (e.key === 'Enter') {
            getDrinks();
        }
    }

    const grabbingId = (id) => {
        setDrinkId(id);
    }

    return (
        <div>
                <input className='inputSearch' type='text' placeholder='ex: margarita' onChange={e => {
                    setDrink(e.target.value);
                }}  onKeyDown={enter}/>
                <button className='btnSearch' onClick={() => getDrinks()}>SEARCH</button>
            {                
                resultDrinks.map(drink => {
                    return (
                        <div className='divDrink' key={drink.Id}>
                            <p className='pDrink'>{drink.strDrink}</p>
                            <img className='imgDrink' src={drink.strDrinkThumb} onClick={() => {
                                goRecipe();
                                grabbingId(drink.idDrink);
                            }} />
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Search;
