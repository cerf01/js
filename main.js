function task1()
{
    let num = prompt("Enter number");
    alert(`${num} ^ 2 = ${Math.pow(num, 2)}`);
}

function task2()
{
    let num1 = parseInt(prompt("Enter num1"));
    let num2 =parseInt(prompt("Enter num2"));

    alert(`Avg = ${(num1+num2)/2}`)
}

function task3()
{
    let num = prompt("Enter one side lenth:");
    alert(`Ares is: ${Math.pow(num, 2)}`);
}

function task4()
{
    let kilometres = parseFloat(prompt("Enter kilometres"));
    const mile = 0.621371;

    alert(kilometres*mile);
}

function task5()
{
    let num1 = parseInt(prompt("Enter num1"));
    let num2 =parseInt(prompt("Enter num2"));

    alert(`${num1} + ${num2} = ${num1+num2}\n
    ${num1} - ${num2} = ${num1-num2}\n
    ${num1} * ${num2} = ${num1*num2}\n
    ${num1} / ${num2} = ${num1/num2}\n`);
}

function task6()
{
    let a = parseInt(prompt("Enter a"));
    let b =parseInt(prompt("Enter b"));

    alert(`x = ${-b/a}`);
}
function task7()
{
    let hours = parseInt(prompt("Enter curr hour"));
    let minutes = parseInt(prompt("Enter curr minute"));

    alert(`${23-hours}: ${60-minutes}`);
}

function task8()
{
    let num = parseInt(prompt("Enter 3 digit num"));

    num %=100;
    num /=10;
    alert(`${parseInt(num)}`);
}

function task9()
{
    let num = prompt("Enter 5 digit num");
    let last = num%10;
    num /=10;
    alert((last*10000)+parseInt(num));
}

function task10()
{
    const baseSalaty = 250;
    let salesAmount = parseInt(prompt("Enter sales"));

    alert(`Salary is ${baseSalaty+((salesAmount/100)*10)}$`);
}

function task1_1()
{
    let num = prompt("Enter number");
    if(num == 0)
    {
        alert("is zero");
        return;
    }

    if(num < 0)
    {
        alert("is negative");
        return;
    } 

    alert("is positive");
}

function task1_2()
{
    let age = parseInt(prompt("Enter age"));

    if(age <= 0 || age >=120)
    {
        alert("Wrong age");
        return;
    }

    alert("All correct");
}

function task1_3()
{
    let num = parseInt(prompt("Enter number"));

    if(num < 0)
    {
        alert(Math.abs(num));
        return;
    }
    
    alert(num)
}

function task1_4()
{
  
    let hours = prompt("Enter hours");
    let minutes = prompt("Enter minutes");
    let seconds = prompt("Enter seconds");

    if(hours < 1|| hours > 13)
    {
        alert("Wrong hours");
        return; 
    }
    
    if(minutes < 1|| minutes > 59)
    {
        alert("Wrong minutes");
        return; 
    }
    if(seconds < 1|| seconds > 59)
    {
        alert("Wrong seconds");
        return; 
    }
    alert("All correct");
}

function task1_5()
{
    let X = parseInt(prompt("Enter X"));
    let Y = parseInt(prompt("Enter Y"));

    if(X > 0 && Y > 0)
    {
        alert("I");
        return;
    }

    if(X > 0 && Y < 0)
    {
        alert("II");
        return;
    }

    if(X < 0 && Y < 0)
    {
        alert("III");
        return;
    }

    if(X < 0 && Y > 0)
    {
        alert("IV");
        return;
    }

    alert("zero coordinate");
}

function task2_1()
{
    let numOfMonth = prompt("Enter num of month");
    switch (numOfMonth)
    {
        case "1":
            alert("January");
        break;
        
        case "2":
            alert("February");
        break;
        case "3":
            alert("March");
        break;
        
        case "4":
            alert("April");
        break;
        case "5":
            alert("May");
        break;
        
        case "6":
            alert("June");
        break;
        case "7":
            alert("July");
        break;
        
        case "8":
            alert("August");
        break;
        case "9":
        alert("September");
        break;
        
        case "10":
            alert("October");
        break;
        case "11":
            alert("November");
        break;
        
        case "12":
            alert("December");
        break;
        default:
            alert("Wrong input");

    }
}

function task2_2()
{
    let num1 = parseInt(prompt("Enter num1"));
    let symbol = prompt("Enter symbol").charAt(0)
    let num2 =parseInt(prompt("Enter num2"));
    switch (symbol)
    {
        case '+':
            alert(`${num1} + ${num2} = ${num1+num2}`);
        break;

        case '-':
            alert(`${num1} - ${num2} = ${num1-num2}`);
        break;

        case '*':
            alert(`${num1} * ${num2} = ${num1*num2}`);
        break;

        case '/':
            alert(`${num1} / ${num2} = ${num1/num2}`);
        break;
        default:
            alert("Wrong input");
    }
   
}


function task3_1()
{
    let num1 = parseInt(prompt("Enter num1"));
    let num2 =parseInt(prompt("Enter num2"));
    num1>num2?alert(num1):alert(num2);
}

function task3_2()
{
    let num = parseInt(prompt("Enter num"));
    num%5==0?alert("true"):alert("fasle");
}
function task3_3()
{
    let word = prompt("Enter word");
    word.toLowerCase()=="земля"? alert("Привіт, землянине!"):alert("Привіт, інопланетянине!");
}