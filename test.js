var number1 = +prompt("enter your first number : ")
var number2 = +prompt("enter your second number : ")
var sum = number1 + number2
document.writeln(number1 + "+" + number2 + "=" + sum)
document.writeln("<br>" + "<br>")

/////////////////

var even_or_odd = +prompt("check number if even or odd : ")

if (even_or_odd % 2 == 0) {
    document.writeln("your number is : even ")
}
else {
    document.writeln("your number is : odd")
}
document.writeln("<br>" + "<br>")
///////////////////////

var month = prompt("choose the month")
switch (month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        document.writeln("31 days");
        break;
    case 'february':
        document.writeln("28 days")
        break;

    case 'april':
    case 'june':
    case 'september':
    case 'november':
        document.writeln("30 days")
        break;
}
document.writeln("<br>" + "<br>")
//////////////////



var num1=+prompt('enter numbers to choose the max number : ')
var num2=+prompt('enter numbers to choose the max number : ')

if (num1>num2){
    document.writeln("max number is : "+num1)
}
if (num2>num1) {
    document.writeln('max number is : '+num2)
} else {
    document.writeln('max number is : '+num2)
}
document.writeln("<br>" + "<br>")
/////////////////////
var char=prompt("enter the character you want to check : ")


if(char >="a" && char<="z"){
    document.writeln(char+" is VOWEL")
}
else if(char>='A' && char <='Z'){
    document.writeln(char+" is CONSTANT")
}
else{
    document.writeln(char+'is not alphabet')
}