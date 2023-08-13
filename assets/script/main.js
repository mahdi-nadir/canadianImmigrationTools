import ChatBotClass from "./chatBotClass.js";
import clbClass from "./clbClass.js";
import crsClass from "./crsClass.js";
import CurrencyClass from "./currencyClass.js";
import eligibilityClass from "./eligibilityClass.js";
import ExtraInfoClass from "./extraInfoClass.js";
import SuggestedPnpClass from "./suggestedpnpClass.js";

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
let burger = document.querySelector('#labelburger');
// const select = document.querySelectorAll('.currencySelect');
// const input = document.querySelectorAll('.currencyInput');
// const currencyResult = document.querySelector('.currencyResult');
// const API_URL = 'https://api.exchangerate-api.com/v4/latest/CAD';
// let html = '';
// let robotBtn = document.querySelector('.robotBtn');
// let messageBot = document.querySelector('.messageBot');
// let chatDiv = document.querySelector('.mainChatWindow');
// let chatArea = document.querySelector('.chatArea');
// let discussion = document.querySelector('.discussion');
// let suggestionUser = document.querySelector('.suggestionUser');
// let reduceBtn = document.querySelector('.reduceChatBtn');
// let closeChatBtn = document.querySelector('.closeChatBtn');
// let answers = document.querySelectorAll('.answer');
// let spinner = document.querySelector('.spinner');
// let heyMessage = document.querySelector('.hey');
// let helloMessages = [
//     "Hello! I'm here to help you with your questions about Express Entry system. I can answer questions about eligibility, Express Entry pool, Post-ITA, Post-AoR, PPR and settlement. What would you like to know?",
//     "Hello! I'm Medy, your dedicated assistant.",
//     "Greetings! I'm Medy, here to assist you.",
//     "Hi there! I'm Medy, at your service.",
//     "Hey! It's Medy, your very own assistant.",
//     "Howdy! I'm Medy, your personal aide.",
//     "Salutations! Medy reporting in as your assistant.",
//     "Yo! Medy here, your trusty personal helper.",
//     "Hiya! I'm Medy, here as your assistant.",
//     "Hey, it's Medy! Ready to assist you.",
//     "Hello, it's me, Medy, your personal assistant extraordinaire!"
// ]

// let masculinePronoun = document.querySelector('.masculinePronoun');
// let whatLang = document.querySelector('.whatLang');
// let robotIcon = document.querySelector('.robotIcon');
// let chatTime, chatMonth, chatDay, chatHour, chatMinute;
// let questionInvitationFr = [
//     "Si vous avez d'autres questions plus spécifiques, n'hésitez pas à me demander.",
//     "Si vous avez des interrogations plus ciblées, n'hésitez pas à me les poser.",
//     "Si vous avez d'autres questions liées à ce sujet, n'hésitez pas à me les poser. Je suis là pour fournir des réponses précises et détaillées.",
//     "Si vous souhaitez obtenir des réponses à d'autres questions connexes, je suis là pour répondre à vos questions spécifiques. N'hésitez pas à me les poser.",
//     "Vous pouvez compter sur moi pour répondre à toutes vos questions pertinentes sur ce sujet. N'hésitez pas à poser vos questions pour obtenir des éclaircissements supplémentaires.",
//     "Si vous souhaitez en savoir plus, je suis là pour répondre à vos questions supplémentaires.",
//     "Si vous avez d'autres questions, n'hésitez pas à me les poser.",
//     "Si d'autres interrogations vous viennent à l'esprit, je suis prêt à y répondre.",
//     "Pour toute autre question que vous pourriez avoir, je suis à votre disposition.",
//     "Si d'autres points nécessitent des éclaircissements, je suis là pour vous fournir les réponses.",
//     "N'hésitez pas à me poser d'autres questions si vous en avez."
// ]
// let questionInvitationEn = [
//     "If you have other more specific questions, feel free to ask me.",
//     "If you have more targeted questions, feel free to ask them.",
//     "If you have other questions related to this topic, feel free to ask them. I am here to provide accurate and detailed answers.",
//     "If you want answers to other related questions, I am here to answer your specific questions. Feel free to ask them.",
//     "You can count on me to answer all your relevant questions on this topic. Feel free to ask your questions for further clarification.",
//     "If you want to know more, I am here to answer your additional questions.",
//     "If you have other questions, feel free to ask me.",
//     "If other questions come to mind, I am ready to answer them.",
//     "For any other questions you may have, I am at your disposal.",
//     "If other points require clarification, I am here to provide you with the answers.",
//     "Feel free to ask me other questions if you have any."
// ]
// let admins = [
//     "Medy",
//     "Fiona"
// ];


// adaptabilityScore > 10 ? adaptabilityScore = 10 : adaptabilityScore = adaptabilityScore;

burger.addEventListener('change', () => {
    if (burger.checked === true) {
        burger.innerHTML = '<i class="fa-solid fa-times"></i>';
    } else {
        burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

new ChatBotClass()

currencyBtn.addEventListener('click', () => {
    let modalResult = document.querySelector('#modalResult');
    // const cancelBtn = modalResult.querySelectorAll('.cancel');
    let currencyTemplate = document.querySelector('#currencyTemplate');
    let clone = currencyTemplate.content.cloneNode(true);
    modalResult.appendChild(clone);
    new CurrencyClass();

    // overlay.style.display = 'block';
    // overlay.style.opacity = '0.8';
    // overlay.style.visibility = 'visible';
    // modalResult.style.transform = 'translate(-50%, -50%) scale(1)';
    // let convertBtn = document.querySelector('#convertBtn');

    // let familyMembers = document.querySelector('#familyMembers');
    // let localCurrencyDiv = document.querySelector('.localCurrencyDiv');
    // let localCurrencyValue = document.querySelector('#localCurrency');
    // let amountDiv = document.querySelector('.amountDiv');
    // let amount = document.querySelector('#amount');
    // let canadianFunds = 0;
    // let result = document.querySelector('#result');

    // familyMembers.addEventListener('change', () => {
    //     if (familyMembers.value != '') {
    //         localCurrencyDiv.style.display = 'block';
    //     } else {
    //         localCurrencyDiv.style.display = 'none';
    //     }

    //     switch (familyMembers.value) {
    //         case "1":
    //             canadianFunds = 13757;
    //             break;
    //         case "2":
    //             canadianFunds = 17127;
    //             break;
    //         case "3":
    //             canadianFunds = 21055;
    //             break;
    //         case "4":
    //             canadianFunds = 25564;
    //             break;
    //         case "5":
    //             canadianFunds = 28994;
    //             break;
    //         case "6":
    //             canadianFunds = 32700;
    //             break;
    //         case "7":
    //             canadianFunds = 36407;
    //             break;
    //         case "8":
    //             canadianFunds = 40113;
    //             break;
    //         case "9":
    //             canadianFunds = 43819;
    //             break;
    //         case "10":
    //             canadianFunds = 47525;
    //             break;
    //         case "11":
    //             canadianFunds = 51231;
    //             break;
    //         case "12":
    //             canadianFunds = 54937;
    //             break;
    //         case "13":
    //             canadianFunds = 58643;
    //             break;
    //         case "14":
    //             canadianFunds = 62349;
    //             break;
    //         default:
    //             canadianFunds = 66055;
    //             break;
    //     }
    // })

    // localCurrencyValue.addEventListener('change', () => {
    //     if (localCurrencyValue.value != '') {
    //         convertBtn.disabled = false;
    //     } else {
    //         convertBtn.disabled = true;
    //     }
    // })

    // async function getCurrencyData() {
    //     const currencyType = document.querySelector('#localCurrency');

    //     const res = await fetch(API_URL);
    //     const data = await res.json();
    //     const rates = data.rates;
    //     const keys = Object.keys(rates);
    //     html = '';
    //     keys.forEach(key => {
    //         html += `<option value="${key}">${key}</option>`;
    //     })

    //     currencyType.innerHTML = html;
    // }
    // getCurrencyData();

    // convertBtn.addEventListener('click', async () => {
    //     if (localCurrencyValue.value === '') {
    //         result.textContent = 'Please select a local currency.';
    //         return;
    //     }

    //     const selectedCurrency = localCurrencyValue.value;

    //     try {
    //         const res = await fetch(API_URL);
    //         const data = await res.json();
    //         const exchangeRates = data.rates;

    //         if (exchangeRates[selectedCurrency]) {
    //             const equivalentInLocalCurrency = (canadianFunds * exchangeRates[selectedCurrency]).toFixed(2);
    //             const formattedNumber = equivalentInLocalCurrency.replace(/\d(?=(\d{3})+\.)/g, '$&,');

    //             selectedCurrency === 'CAD' ? result.innerHTML = `Required funds in Canadian dollars (CAD) for ${familyMembers.value} person${familyMembers.value > 1 ? 's' : ''} are: <b>${canadianFunds}$</b>, that's what you need to have in your bank account.` : result.innerHTML = `Required funds in Canadian dollars (CAD) for ${familyMembers.value} person${familyMembers.value > 1 ? 's' : ''}: <b>${canadianFunds}$</b>.<br/>
    //             In your local currency (${selectedCurrency}), you should have approximately: <b>${formattedNumber} ${selectedCurrency}</b>`;
    //         } else {
    //             result.textContent = 'Currency not found in exchange rates data.';
    //         }
    //     } catch (error) {
    //         result.textContent = 'An error occurred during currency conversion.';
    //     }
    // })

    // cancelBtn.forEach(element => {
    //     element.addEventListener('click', () => {
    //         overlay.style.display = 'none';
    //         overlay.style.opacity = '0';
    //         overlay.style.visibility = 'hidden';
    //         modalResult.style.transform = 'translate(-50%, -50%) scale(0)';
    //         modalResult.innerHTML = `
    //         <button id="cancel" class="cancel absolute top-2 right-3 px-2 text-white bg-red-500 rounded hover:bg-red-600">
    //             <i class="fa-solid fa-xmark"></i>
    //         </button>
    //         `;
    //     });
    // })
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