/**
 * CHALLENGE # 1: Fizzbuzz Challenge
 * 
 * Instructions:
 * Print/log the numbers from 1 to 100
 * For multiples of three print "Fizz" instead of the number
 * For multiples of five print "Buzz"
 * For numbers which are multiples of both three and five print "FizzBuzz".
 */
for (let i = 1; i<=100; i++) {
    if ( (i % 3 === 0) && (i % 5 === 0)) {          // Or just use (i % 15 === 0)
        console.log('FizzBuzz');
        continue;
    }
    if ( i % 3 === 0 ) {
        console.log('Fizz');
        continue;
    }
    if ( i % 5 === 0 ) {
        console.log('Buzz');
        continue;
    }
    console.log(i);
}