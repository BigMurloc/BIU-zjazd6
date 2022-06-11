import {MealData} from "./dto/meal-data";
import './Meal.css';
import {useState} from "react";

export function Meal(meal: MealData) {
    const ingredients: string = meal.ingredients?.map(ingredient => ingredient.name).join(', ');

    const [showMealInstructions, setShowMealInstructions] = useState(false);

    const onClick = () => setShowMealInstructions(!showMealInstructions);

    return (
        <div>
            <div className={'meal'}>
                <img onClick={onClick} src={meal.thumbnail}/>
                <div className={'meal-details'}>
                    <div>{meal.name}</div>
                    <div>Category: {meal.category}</div>
                    <div>Ingredients: {ingredients}</div>
                    <a href={meal.tutorialURL}>Video tutorial!</a>
                </div>
            </div>
            {showMealInstructions ? <MealInstructions {...meal}/> : null}
        </div>
    )
}

const MealInstructions = (meal: MealData) => (
    <div>
        {meal.instructions}
    </div>
);
