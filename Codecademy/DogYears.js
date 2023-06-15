const myAge = 21;  // My current age in human years

let earlyYears = 2;  // Early years variable used for the dog age calculation
earlyYears *= 10.5;  // Multiply early years by 10.5 to account for the faster aging rate during this period

let laterYears = myAge - 2;  // Calculate the later years by subtracting the early years from myAge
laterYears *= 4;  // Multiply the later years by 4 to account for the slower aging rate during this period

let myAgeInDogYears = earlyYears + laterYears;  // Add the early years and later years to get the total dog age

const myName = 'Moh Yusuf'.toLowerCase();  // My name in lowercase letters

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
// Output the final statement with interpolated variables representing my name, human age, and dog age
