export const  JSONToArray = (json) =>
{
    let result = [];
    let keys = Object.keys(json);
    keys.forEach((item) =>{     
        result[item]=(json[item]);
    });

    return result;
}