const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let activity =

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (activity2) => {   
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (favMeal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (thingToEat) => {
          rl.question("Which sport is your absolute favourite? ", (favSport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superPower) => {

              console.log(`${name} loves ${activity}  while ${activity2}, devouring ${thingToEat} for ${favMeal}, prefers ${favSport} over any other sport, and is amazing at ${superPower}.`);
              rl.close();
              
            });
          });
        });
      });       
    });
  });
});

