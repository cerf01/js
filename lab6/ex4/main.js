const item = document.querySelectorAll(".tab");
const textField = document.getElementById("text-content");

let temp = "";
function a(n)
{
   if(temp!=="") 
        document.getElementById("curr-tab").id = temp;

    temp = item[n-1].id;
    item[n-1].id = "curr-tab";
   switch(n)
   {
        case 1:
            textField.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut neque sed modi ipsam maiores sint quasi consectetur, voluptatum soluta debitis, aliquid necessitatibus? Error id tenetur aut mollitia soluta vitae voluptate!"

        break;

        case 2:
            textField.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laboriosam possimus, aliquid eligendi commodi dicta voluptate a non fugit maxime at voluptas enim iste? Nihil porro eaque recusandae aliquam ducimus!"
            
        break;

        case 3:
            textField.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quam, tempora id quo quaerat inventore earum quidem. Sint pariatur omnis cum autem, itaque nam delectus earum quo nihil iure tenetur?"
        break;
   }
    
}