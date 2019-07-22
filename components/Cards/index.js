// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function cards(obj){
    const card = document.createElement('div');
    card.classList.add('card');
    const head = document.createElement('div');
    head.classList.add('headline');
    head.textContent = obj.headline;
    const author = document.createElement('div');
    author.classList.add('author');
    const imgBox = document.createElement('div');
    imgBox.classList.add('img-container');
    author.appendChild(imgBox);
    const img = document.createElement('img');
    img.src = obj.authorPhoto;
    imgBox.appendChild(img);
    const name = document.createElement('span');
    name.textContent = `By ${obj.authorName}`
    author.appendChild(name);
    card.appendChild(head);
    card.appendChild(author);
    const container = document.querySelector('.cards-container');
    container.appendChild(card)
    return card;
}
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(data=>{
    console.log(data.data.articles)
    return data.data.articles;
})
.then(attr=>{
    const js = attr.javascript;
    const bs = attr.bootstrap;
    const tech = attr.technology;
    const jq = attr.jquery;
    const node  = attr.node;
    console.log(all)
    node.forEach(art=>{
        return cards(art);
    });
    jq.forEach(art=>{
        return cards(art);
    });
    tech.forEach(art=>{
        return cards(art);
    });
    js.forEach(art=>{
        return cards(art);
    });
    bs.forEach(art=>{
        return cards(art);
    });
    })