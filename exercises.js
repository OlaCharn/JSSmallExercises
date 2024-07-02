console.log("Hi! Olga learns JS!")

//1. Сумма двух чисел
function sumTwoNumbers(x,y){
    let sum = x+y;
    console.log(sum);

    return sum;
}
sumTwoNumbers(5,5) //10


//2. Приветствие пользователя
function greeting(name){
    console.log(`Hi, ${name}`)
}
greeting("Anna")

//3. Приветствие пользователя c prompt и alert
/*
function bigGreeting(){
    let userName = prompt("What is your name?")
    //если userName введено, то покажи alert окно
    if (userName){
        alert(`Hi, ${userName}`)
    } else {
        alert("Enter your name, please")
    }
}
bigGreeting()
*/

//4. Максимум из трех чисел
function maxOfThreeNumbers(a,b,c){
    let numbers = [a,b,c]
    let maxNumber = numbers[0]

    for(let i = 1; i < numbers.length; i++ ){
        //проверяем, является ли текущий элемент numbers[i] больше текущего maxNumber.
        //Если да, то обновляем
        if(numbers[i] > maxNumber) {maxNumber = numbers[i]}; 
    }
    return maxNumber
}
console.log(maxOfThreeNumbers(12,15,5)) //15

//сумма максимума и минимума из 3 чисел
function sumOfMinAndMax(a,b,c){
    let numbers = [a,b,c]
    let minNumber = numbers[0]
    let maxNumber = numbers[0]

    for(let i = 1; i< numbers.length; i++){
        if(numbers[i] > maxNumber) {maxNumber = numbers[i]};
        if(numbers[i] < minNumber) {minNumber = numbers[i]};
    }
    return minNumber+maxNumber;
}
console.log(sumOfMinAndMax(10,20,30))

//показать минимальное и максимальное число из массива
function displayMinAndMax(a,b,c){
    let numbers = [a,b,c]
    let maxNumber = numbers[0]
    let minNumber = numbers[0]

    for(let i =1; i< numbers.length; i++){
        if(numbers[i] > maxNumber){maxNumber = numbers[i]};
        if(numbers[i] < minNumber) {minNumber = numbers[i]};
    }
    return ([minNumber, maxNumber])
}
console.log(displayMinAndMax(10,15,25))