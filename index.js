const product = {
  title: "Parker Jotter Standard Ball pen",
  colour: "Black",
  rating: "7 star",
  price: 270,
};

console.log(product);

let user = Number(prompt("Enter a Number"));

if (user % 5) {
  console.log("Multiple of 5");
} else {
  console.log("Not a Multiple of 5");
}

let score = 45 ;
if (score >= 95) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 65) {
  console.log("Grade C");
} else if (score >= 50) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}


