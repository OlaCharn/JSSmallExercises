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

//5 определить четное или нечетное число
function EvenOrOddNumber(x){
    if(x%2===0){
        console.log("Even!")
    }
    else{
        console.log("Odd!")
    }

}
EvenOrOddNumber(5) //Odd!
EvenOrOddNumber(2) //Even!
EvenOrOddNumber(10) //Even!

//Факториал числа определить
//Факториал это произведение всех натуральных чисел от данного числа к 1
//Например 5!= 5*4*3*2*1 = 120
//При этом факториал 1 или 0 всегда = 1
//Это важный пример для собеседования
//Так как на нем можно показать рекурсивную функцию-
//вызов функции внутри себя до тех пор, пока не исполнится некое условие

function factorial(n){
    if(n<=1){
        return 1;
    }
    else {
        return n * factorial(n-1)
    }
}
console.log(factorial(5))


//7. cумма чисел в массиве

function sumAllMembers(a){
    let result = 0
    for(let i=0; i<a.length; i++){
        result+= a[i]
    }
    return result
}

let a = [1,2,3,4]
let result = sumAllMembers(a)
console.log(result) //10

//8. Поиск элемента в массиве

function findElement(arr8,e){
    return arr8.includes(e)
}
let arr8 = [1,2,3,6,7]
let e = 1
console.log(findElement(arr8,e)) //true


//9. Реверс строки

function letReverseString(str){
    return str.split("").reverse().join("")
}
let str9 = "abc"

console.log(letReverseString(str9)) //cba

