//Initialize the news parameters
let apiKey = "54ef85f0c7e644549cae776abc70c9b6";

//Grab the news container
let newsAccordian = document.getElementById("newsAccordion");

//create a get request
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml="";
        articles.forEach((element,index)=>{
            let news = `<div class="card">
                <h2 class="card-header" id="heading${index}">
                    <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                        aria-expanded="true" aria-controls="collapse${index}">
                        <b>Breaking News ${index+1}</b>
                        ${element["title"]}
                    </button>
                </h2>
                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                    data-bs-parent="#accordionExample">
                    <div class="card-body">${element["content"]}.<a href="${element["url"]}" target="_blank">Read more here</a></div>
                </div>
            </div>`;
            newsHtml+=news;
        });
        newsAccordian.innerHTML=newsHtml;
    }
    else {
        console.log("some error ocurred")
    }
}

xhr.send();
