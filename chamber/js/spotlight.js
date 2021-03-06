const requestURL = 'https://kbellinger.github.io/wdd230/chamber/data/businesses.json';
const spotlights = document.querySelector('#spotlights');
let spotlight1 = document.querySelector('.spotlight1');
let spotlight2 = document.querySelector('.spotlight2');
let spotligth3 = document.querySelector('.spotlight3');



function displaySpotlight (business, id = ""){
    let spotlight = document.createElement('div')
    let logo = document.createElement('img');
    let busName = document.createElement('h2');
    let slogan = document.createElement('p');
    let phone = document.createElement('p');
    let web = document.createElement('a');

    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `Logo for ${business.name}.`);

    web.setAttribute('href', business.website);
    web.setAttribute('target', 'blank');

    busName.textContent = `${business.name}`;
    slogan.textContent = `${business.slogan}`
    phone.textContent = `${business.phone}`;
    web.textContent = `${business.website}`;

    spotlight.appendChild(logo);
    spotlight.appendChild(busName);
    spotlight.appendChild(slogan)
    spotlight.appendChild(phone);
    spotlight.appendChild(web);

    if (id != ""){
        spotlight.setAttribute('id', id)
    }

    spotlights.appendChild(spotlight);


};



// fetching json file
fetch(requestURL)
.then (function (response) {
    return response.json();
})
.then(function(jsonObject){
    const businesses = jsonObject['businesses'];
   findBusiness = true
    while (findBusiness) {
        num1 = Math.floor(Math.random() * 12)
        bus1 = businesses[num1]
        num2 = Math.floor(Math.random() * 12)
        bus2 = businesses[num2]
        num3 = Math.floor(Math.random() * 12)
        bus3 = businesses[num3]

        if (bus1.status == 'silver' || bus1.status == 'gold'){
            displaySpotlight(bus1, "spotlight1");
        }

        if (bus2.status == 'silver' || bus2.status == 'gold' && num2 != num1){
            displaySpotlight(bus2, "spotlight2");
        }

        if (bus3.status == 'silver' || bus3.status == 'gold' && num3 != num1 && num3 != num2){
            displaySpotlight(bus3, "spotlight3");
        }

        
        
        

        // stop the loop
        findBusiness = false
    }
});




