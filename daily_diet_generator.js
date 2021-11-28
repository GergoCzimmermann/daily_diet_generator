

// choose a random element from an array
const randomArrayElement = array =>
{
    return array[Math.floor(Math.random()*array.length)];
}
//let trialArray = ["alma", "béta","gamma","kappa"];
//console.log(randomArrayElement(trialArray)); // check if we can select a random element

//------------------------------------------------------------------------------------------
// List all the foods
const foodsObject = {
    breakfast: ["tojásrántotta", "zabkása"],
    tenHourLunch: ["alma","keksz"],
    lunch: ["rántotthús bulgurral","csilisbab"],
    snack: ["sajtos zabkeksz", "kókuszos zabkeksz"],
    dinner: ["tonhalsaláta", "virsli"]
}
//console.log(foodsObject.breakfast);

//------------------------------------------------------------------------------------------
// creat a random daily diet based on the input food list
const randomDietGenerator= foods => {
    const dailyDietObj = {
        breakfast: "",
        tenHourLunch: "",
        lunch: "",
        snack: "",
        dinner: ""
    }

    dailyDietObj.breakfast = randomArrayElement(foods.breakfast);
    dailyDietObj.tenHourLunch = randomArrayElement(foods.tenHourLunch);
    dailyDietObj.lunch = randomArrayElement(foods.lunch);
    dailyDietObj.snack = randomArrayElement(foods.snack);
    dailyDietObj.dinner = randomArrayElement(foods.dinner);

    return dailyDietObj;
}

//------------------------------------------------------------------------------------------
// console.log(randomDietGenerator(foodsObject)); // test the diet generator

const dailyDiet= randomDietGenerator(foodsObject);
console.log("Szia! Örülök, hogy látlak! A napi étrend a következő:")
console.log("Reggeli: " + dailyDiet.breakfast);
console.log("Tízórai: " + dailyDiet.tenHourLunch);
console.log("Ebéd: " + dailyDiet.lunch);
console.log("Uzsonna: " + dailyDiet.snack);
console.log("Vacsora: " + dailyDiet.dinner);