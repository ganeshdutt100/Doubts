//----- . Write a program to print all natural numbers from 1 to n

// let a = Number(prompt("Enter your first Number :  "));
// let b = Number(prompt("Enter your last Number : "));

// for(let i = a; i<=b;  i++) {
//     console.log(i);  // prints numbers from 1 to n
// }

// ---------------------------------------------------------------------------------------

// 2. Write a program to print all natural numbers in reverse
// let a = Number(prompt("Enter your first Number :  "));
// let b = Number(prompt("Enter your last Number : "));

// for(let i = a; i>=b;  i--) {
//     console.log(i);  // prints numbers from 1 to n
// }


// ---------------------------------------------------------------------------------------
//    3. Write a program to print tables
    //   let a = Number(prompt("your Table number  :  "));
    //     for(let i = 1; i<=10;  i++) {
    //       console.log(a +  " * " +  i  +  " =  " + a * i  );  
    //   }




// ---------------------------------------------------------------------------------------
//    4. Write a program to print all alphabets from a to z
// let a = parseInt(prompt("Enter your ASCII number: "));
// let b = parseInt(prompt("Enter your ASCII number: "));
// for (let i = a; i <= b; i++) {
//     console.log(String.fromCharCode(i));  
// }



// ---------------------------------------------------------------------------------------
//    5. Write a program to print all even numbers between 1 to 100
// let a = parseInt(prompt("Enter your first even number: "));
// let b = parseInt(prompt("Enter your last even number: "));
// for (let i = a; i <= b; i++) {
//      if( i % 2 == 0){
//          console.log(i);
//      }
     
// }




// ---------------------------------------------------------------------------------------
//    6. Write a program to find sum of all even  numbers between 1 to n
// let a = parseInt(prompt("Enter your first even number: "));
// let b = parseInt(prompt("Enter your last even number: "));
// let sum =0;
// for (let i = a; i <= b; i++) {
//      if( i % 2 == 0){
//          sum+=i;
//      }
     
// }
// console.log(sum);


// ---------------------------------------------------------------------------------------
//    7.  Write a program to find the factorial value of any number
// let number = parseInt(prompt("Enter your factorial number number: "));

// let factorial =1;
// for (let i = 1; i <= number; i++) {
//        factorial *= i;     
// }
// console.log(factorial);



// ---------------------------------------------------------------------------------------
//    8.   write a program to reverse the given Digits
let number = parseInt(prompt("Enter a number: "));
let reversedNumber = 0;

while (number > 0) {
    let digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = Math.floor(number / 10);
}

console.log(reversedNumber);
;













