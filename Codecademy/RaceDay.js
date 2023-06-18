// Generate a random race number
const raceNumber = Math.floor(Math.random() * 1000);

// Runner's age
const runnerAge = 123;

// Check if the runner is early
let early = false;

if (runnerAge > 18 && early) {
  // Increase the race number for early adult runners
  raceNumber += 1000;
}

if (runnerAge > 18 && early) {
  // Race time and assigned race number for early adult runners
  console.log(`Your race time is 9:30 AM and your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !early) {
  // Race time and assigned race number for adult runners (not early)
  console.log(`Your race time is 11:30 AM and your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  // Race time and assigned race number for underage runners
  console.log(`Your race time is 12:30 PM and your race number is ${raceNumber}.`);
} else {
  // Runner doesn't meet any criteria, proceed to registration desk
  console.log('Please proceed to the registration desk for assistance.');
}
