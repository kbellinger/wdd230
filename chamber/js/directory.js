const requestURL = 'https://kbellinger.github.io/wdd230/chamber/data/businesses.json';
const cards = document.querySelector('.cards');
const list = document.querySelector('.list');

function displayBusinessCards(business) {
    // creating elements for the cards
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let busName = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let web = document.createElement('a');
    
    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `Logo for ${business.name}.`);
    
    web.setAttribute('href', business.website);
    web.setAttribute('target', 'blank');

    // assigning data to elements within cards
    busName.textContent = `${business.name}`;
    address.textContent = `${business.address}`;
    phone.textContent = `${business.phone}`;
    web.textContent = `${business.website}`;

    card.appendChild(logo);
    card.appendChild(busName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(web);

    cards.appendChild(card);

};

function displayList(business) {
    let listItem = document.createElement('section');
    let busName = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let web = document.createElement('a');

    web.setAttribute('href', business.website);
    web.setAttribute('target', 'blank');

    busName.textContent = `${business.name}`;
    address.textContent = `${business.address}`;
    phone.textContent = `${business.phone}`;
    web.textContent = `${business.website}`;

     // adding to listview
    listItem.appendChild(busName);
    listItem.appendChild(address);
    listItem.appendChild(phone);
    listItem.appendChild(web);

    list.appendChild(listItem);
}

// toggle list view
function viewSwitch(show, hide) {
    if (show.classList.contains('view')){
        show.classList.remove('view');
    }
    if(!hide.classList.contains('view')){
        hide.classList.add('view');
    }
};
const gridBtn = document.getElementById('gridviewbtn');
const listBtn = document.getElementById('listviewbtn');
gridBtn.onclick = function () {viewSwitch(cards, list)};
listBtn.onclick = function () {viewSwitch(list, cards)};

// fetching json file
fetch(requestURL)
.then (function (response) {
    return response.json();
})
.then(function(jsonObject){
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinessCards);
    businesses.forEach(displayList);
});