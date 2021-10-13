//Vlaue to be converted to celsius and fahrenheit
const kelvin = 0;
console.log(`Todays temperature forcase is ${kelvin} degrees Kelvin`);

// converting kelvin value to celcius
let celsius  = kelvin - 273;
console.log(`The temperature is ${celsius} degrees Celsius.`);

// converting kelvin value to fahrenheit
let fahrenheit =  celsius * (9/5) + 32;
// Rounding out fahrenheit value to a whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)


// to convert celsius value to newton scale...
let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees in the Newton scale`)