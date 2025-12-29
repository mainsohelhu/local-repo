// question 1-6
let a = 5;
let b = 5;
let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let rem = a % b;
let remCheck = rem === 0 ? "even" : "odd";
console.log(sum, sub, mul, div, rem, remCheck);
// question - 7
let num = a > b ? "greter" : "less";
console.log(num);
// question - 8
let number = 2;
if (number < 0) {
    console.log("negetive");


} else if (number > 0) {
    console.log("positive");

} else if (number === 0) {
    console.log(0);

}
// question - 9
let age = 18;
if (age < 18) {
    console.log("not eligible");

} else {
    console.log("eligible");

}
// question 11
let x = 5;
let y = 6;
let z = 7;
let bigNumber;
if (x > y && x > z) {
    bigNumber = x;

} else if (y > x && y > z) {
    bigNumber = y;
} else if (z > x && z > y) {
    bigNumber = z;
}
console.log(bigNumber);

// question 11
let value1 = 5;
let value2 = "5";
console.log(value1 == value2);
console.log(value1 === value2);
// question 12
let iAmAlive = true;
let amIBreathing = true;
console.log(iAmAlive && amIBreathing);
console.log(!iAmAlive && amIBreathing);
//question 13
iAmAlive = false;
amIBreathing = true;
console.log(iAmAlive || amIBreathing);
console.log(iAmAlive || !amIBreathing);
// question 14
let day = 1;
if (day == 1) {
    console.log("monday");

} else if (day == 2) {
    console.log("tuseday");

} else if (day == 3) {
    console.log("wndnesday");

} else if (day == 4) {
    console.log("thursday");

} else if (day == 5) {
    console.log("friday");

} else if (day == 6) {
    console.log("saturday");

} else if (day == 7) {
    console.log("sunday");

}
// question 15
let num1 = 4;
let oprator = "*";
let num2 = 4;
let result;
switch (oprator) {
    case "+":
        result = num1 + num2
        break;
    case "-":
        result = num1 - num2
        break;
    case "*":
        result = num1 * num2
        break
    case "/":
        result = num1 / num2
        break;
    default:
        console.log("invalid oprator");
        break;
}
console.log(result);
// question 16
for (let i = 0; i <= 10; i++) {
    console.log(i);

}
// question 17
let even;
for (g = 0; g <= 50; g++) {
    if (g % 2 === 0) {
        console.log(g);

    }
}
// question 18 
let r = 1;
while (r <= 10) {
    console.log(5 * r);
    r++
}
// question 19
let s = 0;
for (let i = 0; i <= 10; i++) {
    s = s + i;

}
console.log(s);
// question 20
let m = 4;
let factorial;
for(let i = 0; i <= m; i++){
     factorial = m * i;
}
console.log(factorial);
// question 21
let array = []
for(i = 1 ; i <= 5; i++){
    array.push(i)
}
console.log(array);
// question 22
console.log(array.length);
// question 23
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    
    
}
// questiion 24
let numb = [1, 2, 3, 4, 50]
let numbsum = 0;
for (let i = 0; i < numb.length; i++) {
    numbsum = numbsum + numb[i] 
}
console.log(numbsum);
//question 25
let max = numb[0]
for (let i = 0; i < numb.length; i++) {
    if (max < numb[i]){
        max = numb[i]
    }
    
}
console.log(max);
// question 26
let fruits = ['apple','banana','mango']
console.log(fruits.includes('banana'));
// question 27 + 29
let numbers = [1,2,5,3,5,4,8,9,10]
let evennum = [];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
        evennum.push(numbers[i])
    }
}
console.log(evennum);
console.log(evennum.length);
// question 28 
numbers.reverse()
console.log(numbers)

let some =  11211;
let srt = some.toString();
let reverse = srt.split("").reverse().join("");
let rev = Number(reverse)
if(rev === some){
    console.log("yes it is ");
    
}else {
    console.log("they are not ");
    
}
function cheker(h) {
    let str = h.toString();
    let reverse = str.split("").reverse().join("");
    let rev = Number(reverse)
    if (rev === h) {
        console.log("it is what it is ");
        
        
    }else{
        console.log("no it is not");
        
    }
}
let h = 121;
cheker(h)

