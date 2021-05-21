'use strict';



const checkYuGiOh = num => {
    //check if the parameter is a number or is convertible
    let N = Number(num);
    if(N == N) {
        //push numbers from 1 to n
        let numArr = [];
        for (let i = 1 ; i <= num ; i++){
            numArr.push(i);
        }
        //output the initial array
        console.log(`initial array is: ${numArr}`);
        
        //replace multiples with yu, gi and oh
        for (let i = 0; i <=numArr.length; i++){
            if (numArr[i]%2 == 0 && numArr[i]%3 == 0 && numArr[i]%5 == 0) {
                numArr[i] = `"yu-gi-oh"`;
            }
    
            else if (numArr[i]%2 == 0 && numArr[i]%3 == 0) {
                numArr[i] = `"yu-gi"`;
            }
    
            else if (numArr[i]%2 == 0 && numArr[i]%5 == 0) {
                numArr[i] = `"yu-oh"`;
            }
    
            else if ([i]%3 == 0 && numArr[i]%5 == 0) {
                numArr[i] = `"gi-oh"`;
            }
    
            else if (numArr[i]%2 == 0) {
                numArr[i] = `"yu"`;
            } 
            
            else if (numArr[i]%3 == 0) {
                numArr[i] = `"gi"`;
            } 
            
            else if (numArr[i]%5 == 0) {
                numArr[i] = `"oh"`;
            }
        }
        console.log(`final array is: ${numArr}`);
    }
    
    //error message for invalid parameter
    else {
        console.log(`invalid parameter: "${num}"`);
    }
    
}

//TESTING THE FUNCTION
checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh("Fizzbuzz is meh");








//if a number is divisible by 2, 3 and ; replace it with yugioh