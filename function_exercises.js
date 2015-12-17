// Problem 1
function average(a, b, c) {
  return (a + b + c) / 3;
}
console.log(average(3, 5, 7));

// Problem 2
function sum(a, b, c) {
  return a + b + c;
}

function average(a, b, c) {
  return sum(a, b, c) / 3;
}

// Problem 3
function average(values) {
  var total = 0,
      items = values.length;

  for (var i = 0; i < items; i++) {
    total += values[i];
  }
  return total / items;
}
var sample_array = [3, 7, 5, 12, 15];
console.log(average(sample_array));

// Problem 4
function sum(values) {
  var total = 0,
      items = values.length;

  for (var i = 0; i < items; i++) {
    total += values[i];
  }
  return total;
}

function average(values) {
  return sum(values) / values.length;
}
var sample_array = [3, 7, 5, 12, 15];
console.log(sum(sample_array));

// Problem 5
var temperatures = [72, 80, 85, 100, 75];
console.log(average(temperatures));

// Problem 6
function fizzBuzz(amount) {
  var output;

  for (var i = 1; i <= amount; i++) {
    output = "";
    if (i % 3 === 0) { output = "Fizz" }
    if (i % 5 === 0) { output += "Buzz" }
    console.log(output || i);
  }
}
fizzBuzz(100);

// Problem 7
function randomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}
console.log(randomNumber(76));
