 /*Start by creating the variables for the data recorded
32°F, 25°C, 70°F, 18°C, 80°F, 15°C, 72°F, 28°C, 68°F, 20°C, 75°F, 23°C, 82°F, 30°C, 
65°F, 22°C, 77°F, 26°C, 78°F, 24°C, 73°F, 21°C, 79°F, 27°C, 71°F, 19°C, 74°F, 17°C, 76°F, 29°C
*/

const day1TempF = 32

const day2TempC = 25

const day3TempF = 70

const day4TempC = 18

const day5TempF = 80

const day6TempC = 15

const day7TempF = 72

const day8TempC = 28

const day9TempF = 68

const day10TempC = 20

const day11TempF = 75

const day12TempC = 23

const day13TempF = 82

const day14TempC = 30

const day15TempF = 65 

const day16TempC = 22

const day17TempF = 77

const day18TempC = 26

const day19TempF = 78

const day20TempC = 24

const day21TempF = 73

const day22TempC = 21

const day23TempF = 79

const day24TempC = 27

const day25TempF = 71

const day26TempC = 19

const day27TempF = 74

const day28TempC = 17

const day29TempF = 76

const day30TempC = 29


//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

//create an array of temperatures in F and in C

const tempeInF =[day1TempF,day3TempF,day5TempF,day7TempF,day9TempF,day11TempF,day13TempF,day15TempF,day17TempF,day19TempF,day21TempF,day23TempF,day25TempF,day27TempF,day29TempF];

const tempeInC = [day2TempC,day4TempC,day6TempC,day8TempC,day10TempC,day12TempC,day14TempC,day16TempC,day18TempC,day20TempC,day22TempC,day24TempC,day26TempC,day28TempC,day30TempC];

//convert temp from C to F: (tempInCelsius * 9 / 5) + 32

function celsiusToFahrenheit(celsius) {

  const fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

const temperaturesInFahrenheit = tempeInC.map(celsiusToFahrenheit);

console.log(temperaturesInFahrenheit); 

//convert temp from F to C: (tempInFahrenheit - 32) * 5 / 9
function fahrenheitToCelsius(fahrenheit1) {

  const celsius1 = (fahrenheit1 - 32) * 5 / 9;
  let celsius2=celsius1.toFixed(2);
  return celsius2;
}

const temperaturesInCelsius = tempeInF.map(fahrenheitToCelsius);

console.log(temperaturesInCelsius);

//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

let tot_temperature_in_fahrenheit = 0;

for (let i = 0; i < tempeInF.length; i++) {
  tot_temperature_in_fahrenheit += tempeInF[i];
}

console.log(tot_temperature_in_fahrenheit);

//
let tot_temperature_in_celsius = 0;

for (let i = 0; i < tempeInC.length; i++) {
  tot_temperature_in_celsius += tempeInC[i];
}

console.log(tot_temperature_in_celsius);


//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

let nF =tempeInF.length;

const avg_temperature_in_fahrenheit = (tot_temperature_in_fahrenheit/ nF).toFixed(2);

console.log(`Average Temperature in Fahrenheit: ${avg_temperature_in_fahrenheit}`);

//
let nC = tempeInC.length;

const avg_temperature_in_celsius =(tot_temperature_in_celsius/nC).toFixed(2);

console.log(`Average Temperature in Celsius: ${avg_temperature_in_celsius}`);


//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};