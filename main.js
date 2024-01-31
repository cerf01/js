function task1_1()
{
    let num = prompt("Enter number");
    alert(`${num} ^ 2 = ${Math.pow(num, 2)}`);
}

function task1_2()
{
    let num1 = parseInt(prompt("Enter num1"));
    let num2 =parseInt(prompt("Enter num2"));

    alert(`Avg = ${(num1+num2)/2}`)
}

function task1_3()
{
    let num = prompt("Enter one side lenth:");
    alert(`Ares is: ${Math.pow(num, 2)}`);
}

function task1_4()
{
    let kilometres = parseFloat(prompt("Enter kilometres"));
    const mile = 0.621371;

    alert(kilometres*mile);
}

function task1_5()
{
    let num1 = parseInt(prompt("Enter num1"));
    let num2 =parseInt(prompt("Enter num2"));

    alert(`${num1} + ${num2} = ${num1+num2}\n
    ${num1} - ${num2} = ${num1-num2}\n
    ${num1} * ${num2} = ${num1*num2}\n
    ${num1} / ${num2} = ${num1/num2}\n`);
}

function task1_6()
{
    let a = parseInt(prompt("Enter a"));
    let b =parseInt(prompt("Enter b"));

    alert(`x = ${-b/a}`);
}
function task1_7()
{
    let hours = parseInt(prompt("Enter curr hour"));
    let minutes = parseInt(prompt("Enter curr minute"));

    alert(`${23-hours}: ${60-minutes}`);
}

function task1_8()
{
    let num = parseInt(prompt("Enter 3 digit num"));

    num %=100;
    num /=10;
    alert(`${parseInt(num)}`);
}

function task1_9()
{
    let num = prompt("Enter 5 digit num");
    let last = num%10;
    num /=10;
    alert((last*10000)+parseInt(num));
}

function task1_10()
{
    const baseSalaty = 250;
    let salesAmount = parseInt(prompt("Enter sales"));

    alert(`Salary is ${baseSalaty+((salesAmount/100)*10)}$`);
}

function task2_1_1()
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

function task2_1_2()
{
    let age = parseInt(prompt("Enter age"));

    if(age <= 0 || age >=120)
    {
        alert("Wrong age");
        return;
    }

    alert("All correct");
}

function task2_1_3()
{
    let num = parseInt(prompt("Enter number"));

    if(num < 0)
    {
        alert(Math.abs(num));
        return;
    }
    
    alert(num)
}

function task2_1_4()
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

function task2_1_5()
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

function task2_2_1() 
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

function task2_2_2()
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

function task2_3_1()
{
    let num1 = parseInt(prompt("Enter num1"));
    let num2 =parseInt(prompt("Enter num2"));
    num1>num2?alert(num1):alert(num2);
}

function task2_3_2()
{
    let num = parseInt(prompt("Enter num"));
    num%5==0?alert("true"):alert("fasle");
}

function task2_3_3()
{
    let word = prompt("Enter word");
    word.toLowerCase()=="земля"? alert("Привіт, землянине!"):alert("Привіт, інопланетянине!");
}

function task3_1_1()
{
    let num = parseInt(prompt("Enter number"));
    let string= "";

    while(num!=0)
    {
        string += "#  ";
        --num;
    }
    
    alert(string);

}


function task3_1_2()
{
    let num = parseInt(prompt("Enter number"));

    while(num!=0)
        alert(num--);

    alert(num);
}

function task3_1_3()
{
    let num = parseInt(prompt("Enter number"));
    const root = num;
    let mult = parseInt(prompt("Enter mult"));

    while(mult!=1)
    {
        num*=root;
        --mult;
    }

    alert(num);
}

function task3_1_4()
{
    let num1 = parseInt(prompt("Enter number1"));
    let num2 = parseInt(prompt("Enter number2"));
    let step = 2;
    let max = Math.max(num1,num2);

    while(step < max)
    {
        if(num1%step ==0  &&num2%step==0)
            alert(step);
        ++step;
    }
}

function task3_1_5()
{
    let num = parseInt(prompt("Enter number"));
    let factorial = 1;

    while(num!=0)
        factorial *= num--;

    alert(factorial);
}

function task3_2_1()
{
    let num = 0;
    do
     {
        num = parseInt(prompt("Enter number"));

        if(num!=(2 + 2 * 2))
            alert("wrong");

     }while(num != (2 + 2 * 2));

    alert("correct");

}

function task3_2_2()
{
    let num = 1000;
    let coumt = 0;

    do
    {
        num/=2;
        coumt++;
    }while(num > 50)

    alert(`${num} count: ${coumt}`)
    
}

function task3_3_1()
{
    let num = parseInt(prompt("Enter number"));
    for(let i =1; i < 100; i++)
    {
        if( i%num== 0)
         alert(i);
    }
}

function task3_3_2()
{
    let min = parseInt(prompt("Enter min"));
    let max = parseInt(prompt("Enter max"));

    for(min; min < max; min+=4)
        alert(min);
}

function task3_3_3()
{
    let num = parseInt(prompt("Enter number"));
    let count = 0;
    for(let i = 1; i < num; i++)
    {
        if(num%i==0)
        {  
              count++;
            if(count > 2)
            {
                alert("is not prime")
                return;
            }
        }
    }
    alert("is prime")
}

function task4_1()
{
    let num = parseInt(prompt("Enter number"));
    forTask4_1(1,num);

}
function forTask4_1(step, number)
{
    number *= number-step;
    if(number <= 0)
     {
        alert(number);
           return;
     }
    forTask4_1(step, number);
    
}

function task4_2()
{
    const constMin = parseInt(prompt("Enter min"));
    const constMax = parseInt(prompt("Enter max"));

    let min = constMin;
    let max = constMax;

    forTask4_2_1(min, max);

     min = constMin;
     max = constMax;

    forTask4_2_2(min, max);
}

function forTask4_2_1(min, max)
{ 
    alert(min);
     min++;
    if(min > max)
        return;  
    forTask4_2_1(min, max);
    
}

function forTask4_2_2(min, max)
{ 
    alert(max);
    max--;
    if(min > max )
        return;  
    forTask4_2_2(min, max);
}

function  task4_3()
{
    let num = parseInt(prompt("Enter number"));
    forTask4_3(num, 0)
}

function forTask4_3(number, n)
{
    n+= number%10;
    number = parseInt(number/10); 
    n*=10;

    if(number <= 0)
     {
        alert(parseInt(n/10)); 
        return;
    }
    forTask4_3(number, n);
}

function task4_4()
{
    let num = parseInt(prompt("Enter number"));
    forTask4_4(num, 0)
}

function forTask4_4(number, n)
{
    n+= number%10;
    number = parseInt(number/10); 
    if(number <= 0)
     {
        alert(n); 
        return;
    }
    forTask4_4(number, n);
}

function task4_5()
{
    let num = parseInt(prompt("Enter number"));
    forTask4_5(num, "")

}

function forTask4_5(number, str)
{
    str.length>=number? str+=")":str+="(";
    if(str.length >= number*2)
    {
        alert(str);
            return;
    }
    forTask4_5(number, str);
}

function hwTask1_1()
{
    let name = prompt("Enter name");

    alert(`Hello ${name}`);
}

function hwTask1_2()
{
    let birthYear = parseInt(prompt("Enter year of your birth"));
    const currYear = 2023;
    
    alert(`Your age is ${currYear-birthYear}`);
}

function hwTask1_3()
{
     let side = parseInt(prompt("Enter the size of the side of the square"));

     alert(side*4);
}

function hwTask1_4()
{
    let r = parseInt(prompt("Enter radius"));

    const p = 3.14

    alert( p*Math.pow(r,2));
}

function hwTask1_5()
{
    let distance = parseInt(prompt("Enter distance(in km)"));
    let timeInRoad = parseInt(prompt("Enter time(in h)"));

    alert(`${distance/timeInRoad} km/h`);

}

function hwTask1_6()
{
    let dollar = parseFloat(prompt("Enter sum($)"));
    
    const evro = 0.92;

    alert(dollar*evro);
}

function hwTask1_7()
{
    let cardSize = parseInt(prompt("Enter size (in Gb)"));

    const fileSize = 820;

    const GbInMb = 1024;

    alert(parseInt(parseInt(cardSize*GbInMb)/fileSize))
}

function hwTask1_8()
{
    let balance = parseInt(prompt("Enter your balance"));
    let price = parseInt(prompt("Enter price"));
 
    alert(`${parseInt(balance/price)}   ${balance%price}`);
}

function hwTask1_9()
{
    let num = parseInt(prompt("Enter a 3 digit number"));

    let numPalindrom = (num%10)*100;
    num/=10;
    numPalindrom +=parseInt((num%10))*10;
    numPalindrom += parseInt(num/=10);
    alert(numPalindrom ) ;
}

function hwTask1_10()
{
    let num = parseInt(prompt("Enter number"));

   alert( num%2==0);
}


function hwTask2_1()
{
    let age = parseInt(prompt('Enter age'));

    if(age < 12)
    {
        alert("A chaild");
        return;
    }
    if(age >=12 && age <18)
    {
        alert("A teen");
        return;
    }
    if(age >= 18 && age < 60)
    {
        alert("An adult");
        return;
    }
    if(age >= 60)
    {
        alert("A elderly");
        return;
    }
}

function hwTask2_2()
{
    let num = parseInt(prompt("Enter a number between 0 and 9"));

    switch(num)
    {
        case 0: alert(")");
            break;

        case 1: alert("!");
            break;

        case 2: alert("@");
            break;

        case 3: alert("#");
            break;

         case 4: alert("$");
            break;

        case 5: alert("%");
            break;

        case 6: alert("^");
            break;    

        case 7: alert("&");
            break;

        case 8: alert("*");
            break;

        case 9: alert("(");
            break;

        default: alert("error");
            break;
    }
}

function  hwTask2_3()
{
    let num = parseInt(prompt("Enter a 3 digit number"));
    let num1 = parseInt(num%10);
        num/=10;
    let num2 = parseInt(num%10);
        num/=10;
    let num3 = parseInt(num);

    if(num1 == num2 || num1 == num3|| num2 == num3)
    {
        alert("Have same numbers");
        return;
    }
   
    alert("Nothing wrong");
}

function  hwTask2_4()
{
    let year = parseInt(prompt("Enter year"));

    if(year%400 == 0|| (year%4 == 0 && year%100!=0))
    {
        alert("Leap year");
        return;    
    }
    alert("not leap year")
}

function  hwTask2_5()
{
    let num = prompt("Enter a 5 digit number"); 
    if(num.length!=5)
        return;
    
    const constNum = parseInt(num);

    let num2 = parseInt(num%10)*10000;

    num/=10;
    num2 += parseInt(num%10)*1000;

    num/=10;
    num2 +=parseInt (num%10)*100;

    num/=10;
    num2 += parseInt(num%10)*10;

    num/=10;
    num2 += parseInt(num)

    constNum == num2 ? alert(`${constNum} is palendrom`):alert(`${constNum} isn't palendrom`)

}

function  hwTask2_6()
{
    let dollar = parseFloat(prompt("Enter sum($)"));
    let exchRate = 0 
    let q = parseInt(prompt("Choose currency: 1 - EUR, 2 - UAN, 3 - AZN"))

    switch(q)
    {
        case 1: exchRate = 0.92;
        break;

        case 2: exchRate =  7.19;
            break;

        case 3: exchRate = 1.69;
            break;

        default: {
            alert("error")
            return;
        };
    }
    alert(dollar*exchRate);
}

function hwTask2_7()
{
    let sum  = parseInt(prompt("Enter sum")); 
    if(sum >=200 && sum < 300)
    {
        alert(sum-((sum*3)/100))
        return;
    }
    if(sum >=300 && sum < 500)
    {
        alert(sum-((sum*5)/100))
        return;
    }
    if(sum >=500)
    {
        alert(sum-((sum*7)/100))
        return;
    }
    alert(sum);
}

function hwTask2_8()
{
    let P = parseInt(prompt("Enter perim of square:"));
    let C = parseInt(prompt("Enter circle length:"));

    const p = 3.14;

    let rCircle = C/2*p;

    let rSquare = P/8;

    rCircle <= rSquare? alert("true"):alert("false")

}

function hwTask2_9()
{
        let points = 0;

        let userInput = prompt("2 + 2 x 2 = ...\n1) - 2\t2) - 6\t 3) - 8")
        userInput == 2? points+=2: points+=0;

        userInput = prompt("5 x 10 / 1 = ...\n1) - 50\t2) - -50\t 3) - 49")
        userInput == 1? points+=2: points+=0;

        userInput = prompt("1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1 = ...\n1) - 1234\t2) - 11111\t 3) - 115");
        
        userInput == 3? points+=2: points+=0;

        switch(points)
        {
            case 0: 
                alert("U sooooooooooooo bad...");
                break;
            
            case 2: 
                alert("Bra, u didn't try...");
                break;

            case 4: 
                alert("Great! But u can better");
                break;
            
            case 6: 
                alert("Wow, are u not lazy or lucky?");
                break;
            default:
                alert("something got wrong");
            break;
        }

}

function hwTask2_10()
{
    let date = prompt("Enter date(dd:mm:yy)").split(":");
    if(date[0] > 31 && date[0] < 1 )
    {
        alert("wrong date 1!")
        return;
    }
    if(date[1] > 12 && date[1] < 1 )
    {
        alert("wrong date 2!")
        return;
    }
    if(date[2] > 2024 && date[2] < 1970 )
    {
        alert("wrong date 32!")
        return;
    }
    if(date[0] > 30 &&(date[1] == 1 &&date[1] >= 3&&  date[1] <=7 && date[1]%2==0))
    {
        alert("wrong date 4!")
        return;
    }
    if(date[0] > 30 && date[1] >=8 &&  date[1] <=12 && date[1]%2!=0)
    {
        alert("wrong date 4.5!")
        return;
    }
    if(date[0]>28 &&  date[2]%4 != 0 && date[2]%100==0)
    {
        alert("wrong date 5!")
        return;
    }
    if(date[1] == 2 && date[0]>29)
    {
        alert("wrong date 6!")
        return;
    }
    alert("all correct!")
}

function hwTask3_1()
{
    let num1 = parseInt(prompt("Enter number1"));
    let num2 = parseInt(prompt("Enter number2"));
    let max = Math.max(num1,num2);
    let i = Math.min(num1,num2);
    let count =0;
    for(i; i <= max;i++)
        count+=i;
    alert(count);
}
function hwTask3_2()
{
    let num1 = parseInt(prompt("Enter number1"));
    let num2 = parseInt(prompt("Enter number2"));
    let step = 2;
    let max = Math.max(num1,num2);
    let maxNum = 0;
    while(step < max)
    {
        if(num1%step ==0 && num2%step==0)
            maxNum = step;
        ++step;
    }
    alert(maxNum)
}

function hwTask3_3()
{
    let num1 = parseInt(prompt("Enter number1"));
    let num2 = parseInt(prompt("Enter number2"));
    let step = 2;
    let max = Math.max(num1,num2);

    while(step < max)
    {
        if(num1%step ==0  &&num2%step==0)
            alert(step);
        ++step;
    }
}

function hwTask3_4()
{
    let num = parseInt(prompt("Enter number"));
    let count = 0;
    while(true)
    {
            count++;
            num/=10;
            if(num<=0)
                break;
    }
    alert(count);
}

function hwTask3_5()
{
   
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    let arr = []; 
    arr = forHwTask3_5_2(arr);


    for(let i = 0; i < arr.length; i++)
    {

        switch( forHwTask3_5(arr[i]))
        {
            case 1:
                count1++;
            break;
            case 2:
                count2++;
            break;
            case 3:
                count3++;
            break;
            default:alert("error");
                break;
        }
        
        if(arr[i]%2==0)
            count4++;
        else
            count5++;
    }


    alert(`${count1} \n${count2} \n${count3} \n${count4} \n${count5}`);
}

function forHwTask3_5(num)
{
    if(num>0)
        return 1;
    if(num===0)
        return 2;
    if(num<0)
       return 3;
}

function forHwTask3_5_2(arr)
{
    let num = 0;
   for(let i=0;i<10;i++)
    {
        num =  prompt("Enter number");   
        if(num=="")
            break;
        arr[i]  = parseInt(num);
    }
    return arr;
}

function hwTask3_6()
{   
    let q ="";

    while(true)
    {
        task2_2_2();

        q = prompt("Try again? y(Yes) n(No)")
        if(q ==="n"||q==="No")
           return;
    }

}



function hwTask3_7()
{
    let num = prompt("Enter a 5 digit number"); 
    let count = parseInt(prompt("Enter number"));
    let arr = [];
  
    for(let i = 0; i < num.length;i++)
        arr[i] = parseInt(num[i]);
    

    forHwTask3_7(arr, count);
   
    let str = ""

    for(let item of arr)
        str+=item;

    alert(str);

}
function forHwTask3_7(arr, counter)
{
    for(counter; counter > 0; counter--){
        for(let j = 0; j < arr.length-1;j++)
        {
            temp = arr[j];
            arr[j] = arr[j+1]
            arr[j+1] = temp;
        }

        counter--;
    }
}

function hwTask3_8()
{
    let daysOfWeek =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let count = 0;

    while(true)
    {
        alert(daysOfWeek[count]);

        count++;

        if(count >6)
            count=0;
    }
}

function hwTask3_9()
{
let num = 2;
let str ="";
for(num; num <=9;num++)
  { 
     for(let i = 1; i <=10;i++ )
        str+=`${num} * ${i} = ${num*i}\n`;

    alert(str);
    str ="";
 } 
}

function hwTask3_10()
{
    let min = 0;
    let max = 100;
    let N =0;

    let answer = ""
    while(true)
    {
        N = Math.floor((min+max)/2);
        answer=prompt(`Your num is:${N}? ([y] - Yes [n] - No)`).charAt(0);
        if(answer === 'y')
            {
                alert("i'm guessed!")
                return;   
            }
        answer = prompt("is this number [m] - more or [l] - less?")
        switch(answer)
        {
            case 'l':
                max = N;
            break;

            case 'm':
                min = N+1;
            break;          
        }
    }
}

/*
let student = {
    name: "name",
    adr: {
        houseNumber: 12,
        street: "street",
        city: "city",
        country: "country",
        test: {
            test: "test",
            test1: "test2",
            test2: "test3",
            test3: "test4",
        }
    },
    nameTwo: "nameTwo",
    adrTwo: {
        houseNumber: 34,
        street: "streetTwo",
        city: "cityTwo",
        country: "countryTwo",
        adrThree: {
            houseNumber: 44,
            street: "streetThree",
            city: "cityThree",
            country: "countryThree"
        }
    }
};

function test()
{
     recursion(student);
}

function recursion(value)
{
    for(let item in value)
        isObject(value[item])?  recursion(value[item]) : alert(`${item}: ${value[item]}`) ;
}


function isObject(value){
    console.log(value);
    return value !== null && typeof value === 'object';
} */

    let rectangle = 
    {
        height: 20,
        weight: 60,
        X: 3,
        Y: 6
    }

function task5_1_2_3(object)
{
    let str = "";

    for(let item in object)
        str+=`${item}: ${object[item]}\n`;

    alert(str);
}

function task5_4(object)
{
    if("height" in object && "weight" in object)
         alert(object.height*object.weight);
     else 
         return;
}

function task5_5(object)
{
    if("height" in object && "weight" in object)
         alert((object.height*2)+(object.weight*2));
     else 
         return;
}
function task5_6(object)
{
    let addWeight = prompt("Enter numer");

    if("weight" in object)
        object.weight += parseInt(addWeight);
    else 
        return;

    alert(`New weight is ${object.weight}`);
}

function task5_7(object)
{
    let addHeight = prompt("Enter numer");

    if("height" in object)
        object.height += parseInt(addHeight);
    else 
        return;

    alert(`New height is ${object.height}`);
}


function task5_8(object)
{
    let addWeight = prompt("Enter numer");
    let addHeight = prompt("Enter numer");

      if("height" in object && "weight" in object)
        { 
            object.weight += parseInt(addWeight);
            object.height += parseInt(addHeight);
        }
       else 
            return;

     alert(`New size is ${object.weight}\t ${object.height}`);

}

function task5_9(object)
{
    let newX = prompt("Enter X");

    if("X" in object)
        object.X+= parseInt(newX);
    else 
        return;

    alert(`New location X is :${object.X}`);
}

function task5_10(object)
{
    let newY = prompt("Enter Y");

    if("Y" in object)
        object.Y+= parseInt(newY);
    else 
        return;

    alert(`New location Y is :${object.Y}`);
}

function task5_11(object)
{
    let newX = prompt("Enter X");
    let newY = prompt("Enter Y");

    if("X" in object && "Y" in object)
    { 
        object.X+= parseInt(newX);
        object.Y+= parseInt(newY);
    }
    else 
        return;
    
    alert(`New location is :${object.X};${object.X}`);
}

function task5_12(object)
{
    let pointX = prompt("Enter X");
    let pointY = prompt("Enter Y");

    if("X" in object && "Y" in object)
        if(object.X+object.weight <= pointX && object.Y+object.height <= pointY)
            alert("point is crossing this rectangle");
        else 
            alert("point isn't crossing this rectangle");
    else 
        return;

}

