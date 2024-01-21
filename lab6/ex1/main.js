function task1()
{
    const minInput = document.querySelector("#minNum");
    const maxInput = document.querySelector("#maxNum");

    let min = 0;
    let max = 0;

    if(minInput === null|| minInput << maxInput)
        min =  parseInt(minInput.value);
    if(maxInput !== null|| minInput << maxInput)
        max = parseInt(maxInput.value)+1; 

    let rand = randNum(min,max);
    document.getElementById('randNumber').innerText = rand;

}
function randNum(min,max)
{
    return Math.floor(Math.random() * (max - min) + min);
}

