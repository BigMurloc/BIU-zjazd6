import React, {useEffect, useState} from 'react';
import './App.css';
import {Meal} from "./meal/Meal";
import MealService from "./meal/api/MealService";

function App() {

    const meal1 = MealService.useRandom();
    const meal2 = MealService.useRandom();
    const meal3 = MealService.useRandom();
    const meal4 = MealService.useRandom();
    const meal5 = MealService.useRandom();

    return (
        <div className="App">
            <Meal {...meal1}/>
            <Meal {...meal2}/>
            <Meal {...meal3}/>
            <Meal {...meal4}/>
            <Meal {...meal5}/>
        </div>
    );
}

export default App;
