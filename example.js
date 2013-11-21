
// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// // Store a celsius temperature into a variable.
// var celsius = 27;
// // Convert it to fahrenheit and output "NN°C is NN°F".
// var fahrenheit = celsius * (9/5) + 32;

// document.write(celsius + " celsius is " + fahrenheit + " fahrenheit! ");

// // Now store a fahrenheit temperature into a variable.
// var fahrenheit = 84;
// // Convert it to celsius and output "NN°F is NN°C."
// var celsius = (fahrenheit - 32) * (5/9);

// document.write(fahrenheit + "fahrenheit is " + celsius + " celsius!");

// The Geometrizer Function




// // The Geometrizer

// var radius = 12;

// var circumference = 2 * radius * 3.142;

// document.write("The circumference is " + circumference + ".");

// var area = 3.142 * (radius * radius);

// document.write(" The area is " + area + ".");

// The Lifetime Supply Function


// function calculateSupply(age, amountPerDay) {
//   var maxAge = 80;
//   var daysAlive = (maxAge - age) * 365;
//   var whatYouNeed = amountPerDay * daysAlive
//   var lifetimeSupply = "You will need " + whatYouNeed + " to last you until the ripe old age of " + maxAge + "! ";
//   return lifetimeSupply
// };

// document.write(calculateSupply(32, 50))
// document.write(calculateSupply(50, 50))
// document.write(calculateSupply(20, 100))


// The Lifetime Supply Calculator

// var currentAge = 32;
// var maxAge = 50;
// var snacksPerDay = 20;

// var daysAlive = (maxAge - currentAge) * 365;

// var lifetimeSupply = snacksPerDay * daysAlive;

// document.write("You will need " + lifetimeSupply + " snacks to last you until the ripe old age of " + maxAge + ".");

// The Age Calculator Function

// function calculateAge2(birthYear, currentYear) {

//     var age2 = currentYear - birthYear + -1;
//     return age2;

// };

// document.write("You are either " + calculateAge2("1983", "2013") + " or ");

// function calculateAge1(birthYear, currentYear) {

//     var age1 = currentYear - birthYear;
//     return age1;

// };

// document.write(calculateAge1("1983", "2013"));



// // The Age Calculator

// function age1(currentYear, birthYear) {

//   var age1;
//   var age1 = (currentYear - birthYear);
//   return age1;

// }

// (age1(2013, 1983));

// function age2(currentYear, birthYear) {

//   var age2;
//   var age2 = (currentYear - birthYear);
//   return age2;

// }

// (age2((2013+1), 1983));

// DOESN'T WORK
// document.write("You are either " + age1 + " or " + age2)

// The Fortune Teller Function

// function tellFortune(jobTitle, location, partner, numKids) {

//   var future = "You will be a " + jobTitle + " in " + location + " married to " + partner + " with " + numKids + " kids.";

//   return future;

// };

// document.write(tellFortune("Rapper", "Compton", "The Game", "12"));

// In Javascript you can pass functions as an argument
// You have named functions and anonymous functions
/*
var myFunction = function(greeting) {

  return greeting;

// must be explicit to return a value... also does break

};

var x = myFunction("hello!");
console.log(x);
*/

/* If Statement
for (var i = 0; i <= 20; i++) {

  var evenOrOdd;

  if (i % 2 === 0) {
    evenOrOdd = "even";
  } else {
    evenOrOdd = "odd";
  }
  document.write(i + "is " + evenOrOdd)
};
*/

/* Do and while loop
var num = 1;
  do {
    num++;
    console.log(num);
  } while (num < 10);
*/

/*var time = 11;

if (time < 10) {
  var x;
  x = "Good morning!";
} else if (time < 20) {
  x = "Good day!";
}
else {
  x = "Good evening!";
}
;

document.write("<h1>" + x + "</h1>")
*/

/* CASE
var day = new Date().getDay();
var x;
switch (day) {
  case 0:
    x = "Today is Sunday.";
    break;
  
  case 1:
    x = "Today is Monday.";
    break;

  case 2:
    x = "Today is Tuesday.";
    break;

  case 3:
    x = "Today is Wednesday.";
    break;

  case 4:
    x = "Today is Thursday.";
    break;

  case 5:
    x = "Today is Friday.";
    break;

  case 6:
    x = "Today is Saturday.";
    break;

}

document.write("<h1>"+ x +"</h1>");
*/