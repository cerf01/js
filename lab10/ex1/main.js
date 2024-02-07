const dwButton = document.getElementById("dwBtn");
const dvData = document.getElementById("data");
const inputedJSON = document.getElementById("inputText");
const outputJSON = document.getElementById("outputText");

async function loadData()
{
 
    try
    {
        let newsTexts = JSON.parse(inputedJSON.value)
        outputJSON.textContent= JSON.stringify(newsTexts,null, 4);
    }

    catch(err)
    {
        alert(err);
        outputJSON.textContent="";
        return;
    }
    
}
dwButton.addEventListener('click', loadData);
