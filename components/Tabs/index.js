// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



function tabs(data) {
    
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = data;
    const topicBox = document.querySelector('.topics');
    topicBox.appendChild(tab);
    return tab;
}
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(data=>{
    return data.data.topics;
})
.then(topics =>{
    topics.forEach((topic)=>{
        return tabs(topic);
    })
})