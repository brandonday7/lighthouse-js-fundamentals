function isOdd(num) {
  var oddness = true;
  if (num%2 == 0)
  {
    oddness = false;
  }return oddness;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));



