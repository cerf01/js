const colorCode = document.getElementById("colorCode");
const colorName = document.getElementById("colorName");
const colorType = document.getElementById("type");
let usedColorsNames = []; 

function addNewColor()
{
    if(!isValidColor(type))
    {
          console.log("1");
          return;
    }
    
    if(isColorNameUsed())
    {         
        console.log("2");
        return;
    }
        addNewBlock()
}
const regexRGB = /^\(s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)s*,\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)s*,\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)s*?\s*\)/;
const regexRGBA = /^\(s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)s*,\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)s*,\s*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)s*,?\s*([01\.]\.?\d?)?\s*\)/;
const regexHEX = /#[0-9a-fA-F]{6}/;

function isValidObj(obj,regex)
{
    let isValid;

    obj.value.match(regex)? isValid = true :  isValid = false;

    return isValid;
}

function isValidColor(type)
{
    let regexType =""
    switch(type.value)
    {
        case"RGB":regexType = regexRGB;
        break;
        case"RGBA":regexType = regexRGBA;
        break;
        case"HEX":regexType = regexHEX;
        break;
    }
    return isValidObj(colorCode,regexType);
    
}

function isColorNameUsed()
{
    let s =colorName.value;
    let flag = false;
    if(usedColorsNames.find((usedName)=> usedName == s))
        flag= true;
    console.log(flag);
   return flag;
}

function addNewBlock()
{
    const container = document.getElementById("colorsContainers")

    const newItem = document.createElement('div');        
    newItem.className = 'color-container';        

    const newColor = document.createElement('div');        
    newColor.className = 'color';
    usedColorsNames.push(colorName.value)
    let bgColorValue = colorType.value =="HEX"?colorCode.value:colorType.value+colorCode.value;


    newColor.style.backgroundColor = bgColorValue;
    
    const newColorText = document.createElement('p');
    newColorText.textContent=`${bgColorValue}`

    const newTypeText = document.createElement('p');
    newTypeText.textContent= colorType.value

    const newNameText = document.createElement('p');
    newTypeText.textContent= colorName.value

    newItem.appendChild(newColor); 
    newItem.appendChild(newColorText); 
    newItem.appendChild(newTypeText); 
    newItem.appendChild(newNameText); 
    container.appendChild(newItem);
}