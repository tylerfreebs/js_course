/*
Mark and John are trying to compare their BMI (body mass index), which is calulated using the formula:

BMI = mass / height ** 2 = mass / (height * height)
(mass in KG and height in meter)

1. Store Mark and John's mass and height in variables.
2. Calculate both their BMIs using the formula.
3. Create a boolean varible 'markHigherBMI' containing information about whether mark has a higher BMI then John.

TEST DATA 1: Mark weights 78 kg and is 1.69 m tall.
             John weights 92 kg and is 1.95 m tall.
             TURNS OUT TRUE.
TEST DATA 2: Mark weights 95 kg and is 1.88 m tall.
             John weights 85 kg and is 1.76 m tall.
             TURNS OUT FALSE
*/

let markMass;
let markHeight;
let johnMass;
let johnHeight;

markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;

let bmiMark = markMass / markHeight ** 2;
let bmiJohn = johnMass / johnHeight ** 2;

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

//Solution shown:

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI2 = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI2);
