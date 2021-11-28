

// choose a random element from an array
const randomArrayElement = array =>
{
    return array[Math.floor(Math.random()*array.length)];
}
//let trialArray = ["alma", "béta","gamma","kappa"];
//console.log(randomArrayElement(trialArray)); // check if we can select a random element

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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
// List all the greetings:
const greetingArray = ["Örülök, hogy látlak!", "De jó újra találkozni!", "Hát újabb nap érkezett el!"]

//------------------------------------------------------------------------------------------
// List all the motivations:
const motivationArray = ["Még egy erős nap", "Kitartást a mai naphoz is", "Fogod tudni tartani ma is a diétát látom!", "No pain, no Gain!", "Dig deeper!"]

//------------------------------------------------------------------------------------------
// List all the smileis:
const smileis = [":)", ":D", ":P", "XD", ";D", ";)"]

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// console.log(randomDietGenerator(foodsObject)); // test the diet generator

const dailyDiet= randomDietGenerator(foodsObject);
console.log("Szia! "+ randomArrayElement(greetingArray)+ " " + randomArrayElement(motivationArray) + " " + randomArrayElement(smileis));
console.log("A napi étrended a következő:");
console.log("Reggeli: " + dailyDiet.breakfast);
console.log("Tízórai: " + dailyDiet.tenHourLunch);
console.log("Ebéd: " + dailyDiet.lunch);
console.log("Uzsonna: " + dailyDiet.snack);
console.log("Vacsora: " + dailyDiet.dinner);