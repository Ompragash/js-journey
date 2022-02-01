// Convert Kelvin to Celsius, then to Fahrenheit.
// For example, 283 K converts to 10 °C which converts to 50 °F.

// Declared a constant variable kelvin with value 293
const kelvin = 0;

// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
// Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.
let celsius = kelvin - 273;

//Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
// Fahrenheit = Celsius * (9/5) + 32
let fahrenheit;
fahrenheit = celsius *(9/5) + 32;

// Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);

// Calculating Newton Scale with formula "Newton = Celsius * (33/100)"
let newton;
newton = celsius * (33/100);
Round down the Newton temperature using the .floor() method
newton = Math.floor(newton);

console.log(newton);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
