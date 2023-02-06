// Problem 1: Let’s play a mind game

// Declared function name mindGame. myMindNumber is input perameter.
function mindGame(myMindNumber){
      // continue the code to be executed if the condition is true and validation for number.
    if( typeof myMindNumber === 'number' && myMindNumber >= 0){
        // 1st operation was multiplying the input number with 3.
        const multiply = myMindNumber * 3;
        // 2nd operation was adding the return value of multiply with 10.
        const add = multiply + 10;
        // 3rd operation was dividing the return value of add with 2.
        const divide = add / 2;
        // 4rd operation was subtracting the return value of divide with 5.
        const subtract = divide - 5;
        // return value subtract operation.
        return subtract;
    }
    else{
        // Show Error message if number is not 'Positive' and 'Number'.
        let errorMsg = 'Please enter a Positive Number.';
        return errorMsg;
    }
}

// Perameter value declaration and output.
// const myMindNumber = 5;
// const gameOutput = mindGame(myMindNumber);
// console.log(gameOutput);


//--------------------------------------------------//



// Problem 2: Finding even or odd

// Declared function name evenOdd. inputSre is input perameter.
function evenOdd(inputSre){
    // continue the code to be executed if the condition is true and validation for string.
    if( typeof (inputSre) === 'string'){
        // Length count of input string.
        let strLen = inputSre.length;
        // Condition of even. If the remainder is zero then the number is even.
        if (strLen % 2  === 0){
            return 'even';
        }
        // Condition of odd.
        else{
            return 'odd';
        }
    }
    else{
        // Show Error message if input string is not valid.
        let errorMsg = 'Please enter a Valid String.';
        return errorMsg;
    }
}

// Perameter value declaration and output.
// const inputSre = 'chatgpt';
// const strOutput = evenOdd(inputSre);
// console.log(strOutput);


//--------------------------------------------------//



// Problem 3: Is Less or Greater than seven

// Declared function name isLGSeven. inputNumber is input perameter.
function isLGSeven(inputNumber){
    // Condition is the inputNumber subtract by 7. With declared a variable.
    let restValue = inputNumber - 7;
    // continue the code to be executed if the condition is true and validation for number.
    if( typeof (inputNumber) === 'number'){
        // if the subtract or restValue 7 or greater than 7 then the value multiply by 2. otherwise retunt the subtract or restValue. 
        if( restValue >= 7){
            const doubleOfTheInput = inputNumber * 2 ;
            return doubleOfTheInput;
            
        }
        else{
        return restValue;
        }
    }

    else{
        // Show Error message if input Number is not valid.
        let errorMsg = 'Please enter a Valid Number.';
        return errorMsg;
    }
}
// Perameter value declaration and output.
// const inputNumber = 15;
// const isLGOutput = isLGSeven(inputNumber);
// console.log(isLGOutput);


//--------------------------------------------------//


// Problem 4: Finding Bad data.

// Declared function name findingBadData. numbers is input perameter.
function findingBadData(numbers){
    // Check thoose inputs are array or not.
    const myArray = Array.isArray(numbers);
        if (myArray) {
            // Initial negetiveNumber value is 0
            let negetiveNumber = 0;
            // Iteration of inputArray and counting negetive values and return the number.
            for (let i = 0; i < numbers.length; i++) {
                if(numbers[i] < 0){
                    negetiveNumber ++;
                }
            }
            return negetiveNumber;
        }
        else{
        // Show Error message if input Array is not valid.
        let errorMsg = 'Please enter a Valid Array.';
        return errorMsg;
        }
}

// Perameter value declaration and output.
// const inputArray = [ -4, -9, -5, -33, -55 ];
// const badData = findingBadData(inputArray);
// console.log(badData);


//--------------------------------------------------//


// Problem 5: Convert your gems into diamond

// Declared function name gemsToDiamond. inputNumber is input aaliaGems, baliaGems, daliaGems.
function gemsToDiamond(aaliaGems, baliaGems, daliaGems) {
    // Sum of all Gems value for check thoose inputs are number or not.
    
    let gemsValue = aaliaGems + baliaGems + daliaGems;
    // continue the code to be executed if the condition is true and validation for number.
    if(typeof gemsValue === 'number'){
        // Declared new variable and add thire value. 
        const aaliaDiamond = aaliaGems * 21;
        const baliaDiamond = baliaGems * 32;
        const daliaDiamond = daliaGems * 43;
        const totalDiamondValue = aaliaDiamond + baliaDiamond + daliaDiamond;

        // First Condition if totalDiamondValue is equal or greater than 1000 * 2 then value return totalDiamondValue - 1000*2. Otherwise return only totalDiamondValue.

        if(totalDiamondValue >= (1000 * 2)){
            let sum = totalDiamondValue - (1000 * 2);
            return sum;
        }
        else{
            return totalDiamondValue;
        }
    }
    else{
        // Show Error message if input Number is not valid.
        let errorMsg = 'Please enter a Valid Number.';
        return errorMsg;
    }
}

// Perameter value declaration and output.

// let aaliaGems = 100;
// let baliaGems = 5;
// let daliaGems = 1;
// const diamondOutput = gemsToDiamond(aaliaGems, baliaGems, daliaGems);
// console.log(diamondOutput);