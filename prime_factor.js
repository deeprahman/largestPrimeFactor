"use strict"
/*******************************************************
*******Function for finding prime numbers**************/

function primeFunc(num) {
  var prime_list = [2];
  var prime_factor;
  var last_prime = prime_list[0];
  var new_number;
  var index = 1;

  var i;          //For loop index
  var is_prime;
  prime_factor=[];
  if (num%2==0) {
    prime_factor[0]=2;
    new_number = num/2;
  }else {
    new_number=num;
  }
  while (last_prime  <= new_number) {

    last_prime = last_prime + 1;

    for (var i = 0; i < index; i++) {

      if (last_prime % prime_list[i] == 0) { //tests whether the last_prime is a prime or not.
        is_prime = 0;

        break;                                // if last_prime is not a prime, break out from the loop.
      }
      is_prime = 1;
    }
    if (is_prime == 1){                      // is_prime is set to 1 iff the last_prime is a prime
      prime_list[index] = last_prime;
        if (new_number%last_prime==0) {
          prime_factor.push(last_prime);
          new_number = new_number/last_prime;
        }
      index++;
    }
  }
  return prime_factor;
}
/******************************************************************************
***********Call the function**************************************************/

var num = 600851475143;

console.log(primeFunc(num));
