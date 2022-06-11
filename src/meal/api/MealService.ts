import {fromRequest, MealData} from "../dto/meal-data";
import ky from "ky";
import {useCallback, useEffect, useState} from "react";


function useGet(URL: string, setData: any) {
    return useCallback(() => {
        ky.get(URL)
            .json<any>()
            .then<MealData>(response => fromRequest(response))
            .then(setData)
    }, [URL, setData])
}

function useRandom(): MealData {
    const [meal, setMeal] = useState<MealData>();

    const randomMealFromAPI = useGet('https://www.themealdb.com/api/json/v1/1/random.php', (data: MealData) => setMeal(data));

    useEffect(() => {
        randomMealFromAPI();
    }, []);

    return meal as MealData;
}


const MealService = {
    useRandom
}

export default MealService;
