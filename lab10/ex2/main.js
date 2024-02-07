const dwButton = document.getElementById("dwBtn");
const dvData = document.getElementById("data");
const tabs = document.querySelectorAll(".usersTab")
const content = document.getElementById("userInfoContent");
const tabelInfo = document.querySelectorAll(".user-data");
const dvPosts = document.getElementById("userInfoContent");
const dvPostContent =  document.getElementById("postsContainer");

let temp = "";
let users = [];
let selectedUserIndex = 0;


window.onload = getUserData();

async function getUserData()
{
    users = await loadData("https://jsonplaceholder.typicode.com/users");

    tabs.forEach((tab,index)=>{
        tab.textContent = users[index].name;
    })
}

async function loadData(sours)
{
    try
    {
        const response = await fetch(sours)           
        if(!response.ok)
          throw new Error(response.statusText);
      
        const data = await response.json();

        let obj = JSONToArray(data);
        return obj;
    }

    catch(err)
    {
        alert(err);
        return;
    }

}

function JSONToArray(json)
{
    let result = [];
    let keys = Object.keys(json);
    keys.forEach((item) =>{     
        result[item]=(json[item]);
    });

    return result;
}

tabs.forEach((tab, index)=>{
    tab.addEventListener('click', function(){ selectedUserIndex = index;selectTab(index)})
});

function selectTab(i)
{
    if(tabs[i].id == "selectedTab")
        return;
    
    clearPosts();
    
    if(temp!=="") 
        document.getElementById("selectedTab").id = temp;

    temp = tabs[i].id;
    
    tabs[i].id = "selectedTab";

    setUserTabl(users[i]);
}

function setUserTabl(arr)
{
    content.style.display = "block";

    tabelInfo[0].textContent = arr.name;
    tabelInfo[1].textContent = arr.username;
    tabelInfo[2].textContent = `${arr.address.city}, ${arr.address.street} ${arr.address.suite} `;
    tabelInfo[3].textContent = arr.email;
    tabelInfo[4].textContent = arr.phone;
    tabelInfo[5].textContent = arr.website;
}


async function getPostsData(userId)
{
    console.log(userId);
    let usersPosts = await loadData("https://jsonplaceholder.typicode.com/posts")
    usersPosts = usersPosts.filter((post)=>{
        return (post.userId == userId + 1);
    })

    usersPosts.forEach((post)=>{createPost(post);});
    console.log(usersPosts);
}

async function showPosts()
{

   await getPostsData(selectedUserIndex);
}

function createPost(post)
{
    const newDiv = document.createElement('div');
    newDiv.className = "user-post";
    
    const newTitle = document.createElement('h4')
    newTitle.style.textAlign ="center";
    newTitle.textContent = post.title;
    
    const newText = document.createElement('p')
    newText.textContent = post.body

    newDiv.appendChild(newTitle);
    newDiv.appendChild(newText);

    dvPostContent.appendChild(newDiv);

}

function clearPosts()
{
    const posts = document.querySelectorAll(".user-post");
    posts.forEach((post)=>{post.remove()})
}

function recursion(value)
{
    for(let item in value)
        isObject(value[item])?  recursion(value[item]) : console.log(`${item}: ${value[item]}\n`) ;
}

function isObject(value)
{
    return value !== null && typeof value === 'object';
}
