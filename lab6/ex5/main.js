

function Remove(n)
{
    const items = document.querySelectorAll(".someDiv");
    console.log(`is ${items.length} element`);
    items[n].remove();

}   
const item = document.getElementById("cont");
const textArr = ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis quasi autem, aspernatur dolor nostrum voluptates harum facere asperiores cumque, alias distinctio, consequatur dolores quia ullam numquam nihil debitis illo deleniti',"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit dolor ullam nostrum minus. Debitis, modi distinctio quis in, est facilis autem laboriosam optio animi explicabo odio fugit, nam veniam consequatur.","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus laboriosam ipsum consequatur. Quaerat amet impedit sit reiciendis iste iure consectetur iusto fugiat voluptates. Quibusdam adipisci neque ratione, corrupti perferendis blanditiis!"];
function AddElements()
{
   
    for(let i = 0; i < 3; i++)    
    {
        const div = document.createElement("div");
        div.className="someDiv";
        item.appendChild(div);

        let tag = document.createElement("p");
        tag.textContent = textArr[i];

        div.appendChild(tag);

        tag = document.createElement("button");
        tag.textContent ="Remove object";
        tag.addEventListener('click',function(){Remove(i)});
        div.appendChild(tag);

        tag = document.createElement("hr");
        div.appendChild(tag);
        
        delete textArr[i];
    }
        
}

function saveNews() { 
       localStorage.setItem('newsTitles', JSON.stringify(newsTitles)); 
          localStorage.setItem('newsTexts', JSON.stringify(newsTexts));
        }
function renderNews() {    
    const newsList = document.getElementById('news-list');    
    newsList.innerHTML = '';    
    newsTitles.forEach((title, index) => {        
        const newsItem = document.createElement('div');        
        newsItem.className = 'news-item';        
        const newsTitle = document.createElement('div');        
        newsTitle.className = 'news-title';        
        newsTitle.textContent = title;        
        const newsContent = document.createElement('div');        
        newsContent.textContent = newsTexts[index];        
        const deleteButton = document.createElement('button');        
        
        deleteButton.textContent = 'Видалити';        
        deleteButton.className = 'delete-btn';        
        deleteButton.onclick = () => { deleteNews(index); };        

        newsItem.appendChild(newsTitle);        
        newsItem.appendChild(newsContent);        
        newsItem.appendChild(deleteButton);        
        newsList.appendChild(newsItem);    
    });
}
function deleteNews(index) {    
     newsTitles.splice(index, 1);    
     newsTexts.splice(index, 1);    
    saveNews();    
    renderNews();
}

saveNews();
renderNews();
  
