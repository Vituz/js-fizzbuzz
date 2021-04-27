// Scrivi un programma che stampi i numeri da 1 a 100,

var counter = 0;

var multi_3;

var multi_5;

for (var i = 0; i < 100; i++){

    var number = counter += 1;
    
    

    multi_3 = number%3;

    multi_5 = number%5;

    if (multi_3 == 0 && multi_5 == 0){
        number += " FizzBuzz";

    } else if (multi_3 == 0) {
        number += " Fizz";

    } else if (multi_5 == 0){
        number += " Buzz";
    }

    console.log(number);
}

// outputText = '';
// if (i % 3 == 0) {
//     outputText += 'Fizz';
// }
// console.log(outputText)

// var x = 100;
// var y = 6;

// var number = x%5;

// console.log(number);

// ma per i multipli di 3 stampi “Fizz” al posto del numero 
// e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.