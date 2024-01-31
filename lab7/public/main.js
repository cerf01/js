
function getUserInputValue(id, id2, id3)
{
    let inputValue = document.getElementById(id).value;
    let inputValue2 = document.getElementById(id2).checked;  
    let inputValue3 = document.getElementById(id3).value;  
        if(inputValue3=="")
            return; 
       alert(`Hi ${inputValue}, im ${inputValue2?"remembered you":"did not remember you"} `);
}

function checkEmail(id, id2, id3, id4)
{
    let inputValue = document.getElementById(id).value;
    let inputValue2 = document.getElementById(id2).value;  
    let inputValue3 = document.getElementById(id3).value;  
    let inputValue4 = document.getElementById(id4).value;  

    if(inputValue2!=inputValue3)
        return;
    alert(`${inputValue4}, we send a message to  your email:${inputValue} `);
}


function setUserTabl()
{
    const checkboxes = document.querySelectorAll(".skill-checkbox");
    const tabelInfo = document.querySelectorAll(".user-data");

   let skillsStr ="";
   let fname= document.getElementById("firstnameInput");
   let lname= document.getElementById("lastnameInput");
   let birthday = document.getElementById("dateInput");

   let genderM= document.getElementById("M");
   let genderF= document.getElementById("F");

   let gender = genderM.checked?genderM:genderF;
   let country = document.getElementById("countries");
   let city=  document.getElementById("cities");
    
   

    let arr= [fname,lname,birthday,gender,country,city]

    for(let i = 0; i < tabelInfo.length-1; i++)
    {
        tabelInfo[i].textContent = arr[i].value;
    }

    checkboxes.forEach((item)=>{
        if(item.checked)
            skillsStr+=item.value+" ";
    })

    tabelInfo[tabelInfo.length-1].textContent = skillsStr;
   
    arr.forEach((item)=>{
        if(item.checked)
            item.checked = false;
        else
            item.value = "";
    })

    checkboxes.forEach((item)=>{
        if(item.checked)
        item.checked = false;
    })            
}

function addNewColor(RId, GId, BId)
{
    let r = document.getElementById(RId).value;
    let g = document.getElementById(GId).value;
    let b = document.getElementById(BId).value;

    const container = document.getElementById("colorsContainers")

    const newItem = document.createElement('div');        
    newItem.className = 'color-container';        

    const newColor = document.createElement('div');        
    newColor.className = 'color';

    newColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
    const newText = document.createElement('p');
    newText.textContent=`R:${r}, G:${g}, B:${b}`

    newItem.appendChild(newColor); 
    newItem.appendChild(newText); 
    container.appendChild(newItem);
}

function addQuestion()
{

    let question = document.getElementById("question");
    let cAmswer = document.getElementById("correctAnswer");
    let wAmswer = document.getElementById("wrongAnswer");

    const container =  document.getElementById("questionsContainer")

    const newItem = document.createElement("div");
    
    const newQuestion = document.createElement("p")
    newQuestion.textContent = "Question: "+question.value;

    const newCorrAmswer = document.createElement("p")
    newCorrAmswer.textContent = "Corrrect answer is: "+cAmswer.value;

    const newWrAnswer = document.createElement("p")
    newWrAnswer.textContent = "Wrong answer is: "+wAmswer.value;

    const newBr = document.createElement("br");
    
    newItem.appendChild(newQuestion);
    newItem.appendChild(newBr);

    newItem.appendChild(newCorrAmswer);
    newItem.appendChild(newBr);

    newItem.appendChild(newWrAnswer);
    newItem.appendChild(newBr);

    container.appendChild(newItem);
}