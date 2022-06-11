console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i = 0; i <100; i++){
    if(i % 2 == 0) {
        continue
    } else {
        console.log(i)
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i < 100; i++){
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(`FIZZBUZZ, current number is ${i}`)
    } else {
        if(i % 3 == 0 ) {
            console.log(`FIZZ, current number is ${i}`)
        } if ( i % 5 == 0) {
            console.log(`BUZZ, current number is ${i}`)
        }
    }
}

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
console.log(value)
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
console.log(n)

for(i=1; i<= n; i++){
    if(i == value){
        console.log(`Found value! ${i}`)
        break
    } 
    else {
        if(i == n){
            console.log(`Did not find value ${i}`)
        }
    }
}


let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
console.log(fizzDivisor)
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
console.log(buzzDivisor)
let nn = Math.round(Math.random() * (1000 - 1) + 1);
console.log(nn)
let start = Math.round(Math.random() * (10 - 1) + 1);
console.log(start)

for (let i = start; i <= nn; i++) {
    let output = "";
  
    if (i % fizzDivisor == 0) {
      output += "FIZZ";
    }
  
    if (i % buzzDivisor == 0) {
      output += "BUZZ";
    }
  
    console.log(`${i} ${output}`);
  }
  
  console.log(fizzDivisor, buzzDivisor);