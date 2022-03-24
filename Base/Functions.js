function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
let x=toCelsius(70);
console.log(   `Current Temperature is ${x}`);