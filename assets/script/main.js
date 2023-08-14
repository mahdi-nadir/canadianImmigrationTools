import ChatBotClass from "./chatBotClass.js";
import clbClass from "./clbClass.js";
import crsClass from "./crsClass.js";
import CurrencyClass from "./currencyClass.js";
import eligibilityClass from "./eligibilityClass.js";
import ExtraInfoClass from "./extraInfoClass.js";
import hashtagClass from "./hashtag.js";
import NavbarClass from "./navbarClass.js";
import SuggestedPnpClass from "./suggestedpnpClass.js";
import TranslationClass from "./translationClass.js";

// year for footer
let span = document.querySelector('#year');
span.textContent = new Date().getFullYear();

// declare buttons variables of menu
let homeBtn = document.querySelector('#homeBtn');
let eligibilityCalculatorBtn = document.querySelector('#eligibilityCalculatorBtn');
let crsBtn = document.querySelector('#crsBtn');
let nclcBtn = document.querySelector('#nclcBtn');
let suggestedpnpBtn = document.querySelector('#suggestedpnpBtn');
let ebooksBtn = document.querySelector('#ebooksBtn');
let extraInfoBtn = document.querySelector('#extraInfoBtn');
// let weatherBtn = document.querySelector('.weatherBtn');
// let newsBtn = document.querySelector('.newsBtn');
let currencyBtn = document.querySelector('.currencyBtn');
let hashtagBtn = document.querySelector('.hashtagBtn');
let languageBtn = document.querySelector('#languageBtn');

// templates of components
let homeTemplate = document.querySelector('#homeTemplate');
let eligibilityCalculatorTemplate = document.querySelector('#eligibilityCalculatorTemplate');
let crsTemplate = document.querySelector('#crsTemplate');
let nclcTemplate = document.querySelector('#nclcTemplate');
let suggestedpnpTemplate = document.querySelector('#suggestedpnpTemplate');
let ebooksTemplate = document.querySelector('#ebooksTemplate');
let extraInfoTemplate = document.querySelector('#extraInfoTemplate');
let navButtons = [homeBtn, eligibilityCalculatorBtn, crsBtn, nclcBtn, suggestedpnpBtn, ebooksBtn, extraInfoBtn]

// declare components variables
let main = document.querySelector('main');

new NavbarClass();
new ChatBotClass()


// let language = localStorage.getItem('language') === 'true' || false;

new TranslationClass();
// languageBtn.addEventListener('click', () => {
//     // languageBtn.textContent = language ? 'EN' : 'FR';
//     new translationClass();
// });

currencyBtn.addEventListener('click', () => {
    let modalResult = document.querySelector('#modalResult');
    let currencyTemplate = document.querySelector('#currencyTemplate');
    let clone = currencyTemplate.content.cloneNode(true);
    modalResult.appendChild(clone);
    new CurrencyClass();
})

hashtagBtn.addEventListener('click', () => {
    let modalResult = document.querySelector('#modalResult');
    let hashtagTemplate = document.querySelector('#hashtagTemplate');
    let clone = hashtagTemplate.content.cloneNode(true);
    modalResult.appendChild(clone);
    new hashtagClass();
})

// add event listeners to buttons and display the right component when clicked
homeBtn.addEventListener('click', () => {
    document.title = 'Maple Tools - Home';
    burger.checked = true;
    main.innerHTML = '';
    let clone = homeTemplate.content.cloneNode(true);
    main.appendChild(clone);
})

eligibilityCalculatorBtn.addEventListener('click', () => {
    document.title = 'Maple Tools - Eligibility Calculator';
    let count = 0;
    main.innerHTML = '';
    let clone = eligibilityCalculatorTemplate.content.cloneNode(true);
    main.appendChild(clone);

    new eligibilityClass();
})

for (let btn of navButtons) {
    btn.addEventListener('click', () => {
        let current = document.getElementsByClassName('active');
        current[0].disabled = false;
        current[0].classList.remove('active');
        btn.classList.add('active');
        btn.disabled = true;
    })
}

crsBtn.addEventListener('click', () => {
    document.title = 'Maple Tools - CRS Calculator';
    let count = 0;
    main.innerHTML = '';
    let clone = crsTemplate.content.cloneNode(true);
    main.appendChild(clone);

    new crsClass();
})

nclcBtn.addEventListener('click', () => {
    document.title = 'Maple Tools - CLB Calculator';
    main.innerHTML = '';
    let clone = nclcTemplate.content.cloneNode(true);
    main.appendChild(clone);

    new clbClass();
})

suggestedpnpBtn.addEventListener('click', () => {
    document.title = 'Maple Tools - Suggested PNP';
    main.innerHTML = '';
    let clone = suggestedpnpTemplate.content.cloneNode(true);
    main.appendChild(clone);

    new SuggestedPnpClass();
})

ebooksBtn.addEventListener('click', () => {
    document.title = 'Maple Tools - Ebooks';
    main.innerHTML = '';
    let clone = ebooksTemplate.content.cloneNode(true);
    main.appendChild(clone);
})

extraInfoBtn.addEventListener('click', () => {
    document.title = 'Maple Tools - Extra Info';
    main.innerHTML = '';
    let clone = extraInfoTemplate.content.cloneNode(true);
    main.appendChild(clone);

    new ExtraInfoClass();
})











// function refreshPage(componentTemplate, componentDiv) {
//     if (window.performance.navigation && window.performance.navigation.type === 1) {
//         if (main.innerHTML = componentDiv) {
//             main.innerHTML = '';
//             let clone = componentTemplate.content.cloneNode(true);
//             main.appendChild(clone);
//             console.log('This page is reloaded');
//         }
//     } else {
//         console.info("This page is not reloaded");
//     }
// }