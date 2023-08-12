import clbClass from "./clbClass.js";
import crsClass from "./crsClass.js";
import ExtraInfoClass from "./extraInfoClass.js";
import SuggestedPnpClass from "./suggestedpnpClass.js";

// scraping data from website
// let tabDraw = {}
// async function scrapeData() {
//     try {
//         // Fetch the HTML content from the target website
//         const response = await fetch('https://moving2canada.com/immigration/express-entry/express-entry-draw/');
//         const html = await response.text();
//         // Parse the HTML using DOMParser
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, 'text/html');
//         // Find the table on the page (in this case, it's the first table)
//         for (let i = 1; i < 12; i++) {
//             let nbDraw = doc.querySelector('.m2c-block--tabs').querySelectorAll('tr')[i].querySelectorAll('td')[0].textContent.split(' ')[1];
//             let date = doc.querySelector('.m2c-block--tabs').querySelectorAll('tr')[i].querySelectorAll('td')[1].textContent;
//             let nbInvitations = doc.querySelector('.m2c-block--tabs').querySelectorAll('tr')[i].querySelectorAll('td')[2].textContent;
//             let crsScore = doc.querySelector('.m2c-block--tabs').querySelectorAll('tr')[i].querySelectorAll('td')[3].textContent.split(' ')[0];
//             let program = doc.querySelector('.m2c-block--tabs').querySelectorAll('tr')[i].querySelectorAll('td')[4].textContent;
//             crsScore > 560 ? program = 'PNP' : program = program;
//             program == '--' ? program = 'NPS' : program = program;
//             let draws = {
//                 nbDraw,
//                 date,
//                 nbInvitations,
//                 crsScore,
//                 program
//             }
//             tabDraw[i] = draws;
//         }
//     } catch (error) {
//         console.error('Error scraping data:', error);
//     }
// }

// let temperature;
// async function getWeather(town) {
//     town = 'montreal';
//     try {
//         const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ottawa?unitGroup=metric&key=HVUCRCFGA393TYXXTAT6Z5774&contentType=json`);
//         const json = await response.json();
//         temperature = json.days[0]
//         console.log(temperature);
//     } catch (error) {
//         console.error('Please try again later', error);
//     }
// }
// getWeather();




// Call the scrapeData function when the page loads
window.onload = new ExtraInfoClass().scrapeData();;


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
let count = 0;
let educationScore = 0;
let ageScore = 0;
let firstLangScore = 0;
let firstLangScoresArray = [0, 0, 0, 0];
let secondLangScore = 0;
let secondLangScoresArray = [0, 0, 0, 0];
let workExpeCanScore = 0;
let workExpeScore = 0;
let jobOfferScore = 0;
let qualificationScore = 0;
let nominationScore = 0;
let reservedJobScore = 0;
let studyScore = 0;
let workExpInCanadaScore = 0;
let relativesScore = 0;
let spouseLangScore = 0;
let spouseLangScoresArray = [0, 0, 0, 0];
let spouseEducationScore = 0;
let spouseWorkExpScore = 0;
let adaptabilityScore = 0;
let skillTransferabilityScore = 0;
let additionalPointsScore = 0;
let navbar = document.querySelector('.navBig');
let burger = document.querySelector('#labelburger');
let logo = document.querySelector('#logo');
let title = document.querySelector('#title');
const select = document.querySelectorAll('.currencySelect');
const input = document.querySelectorAll('.currencyInput');
const currencyResult = document.querySelector('.currencyResult');
const API_URL = 'https://api.exchangerate-api.com/v4/latest/CAD';
let html = '';
let robotBtn = document.querySelector('.robotBtn');
let messageBot = document.querySelector('.messageBot');
let chatDiv = document.querySelector('.mainChatWindow');
let chatArea = document.querySelector('.chatArea');
let discussion = document.querySelector('.discussion');
let suggestionUser = document.querySelector('.suggestionUser');
let reduceBtn = document.querySelector('.reduceChatBtn');
let closeChatBtn = document.querySelector('.closeChatBtn');
let answers = document.querySelectorAll('.answer');
let spinner = document.querySelector('.spinner');
let heyMessage = document.querySelector('.hey');
let helloMessages = [
    "Hello! I'm here to help you with your questions about Express Entry system. I can answer questions about eligibility, Express Entry pool, Post-ITA, Post-AoR, PPR and settlement. What would you like to know?",
    "Hello! I'm Medy, your dedicated assistant.",
    "Greetings! I'm Medy, here to assist you.",
    "Hi there! I'm Medy, at your service.",
    "Hey! It's Medy, your very own assistant.",
    "Howdy! I'm Medy, your personal aide.",
    "Salutations! Medy reporting in as your assistant.",
    "Yo! Medy here, your trusty personal helper.",
    "Hiya! I'm Medy, here as your assistant.",
    "Hey, it's Medy! Ready to assist you.",
    "Hello, it's me, Medy, your personal assistant extraordinaire!"
]

let masculinePronoun = document.querySelector('.masculinePronoun');
let whatLang = document.querySelector('.whatLang');
let robotIcon = document.querySelector('.robotIcon');
let chatTime, chatMonth, chatDay, chatHour, chatMinute;
let questionInvitationFr = [
    "Si vous avez d'autres questions plus spécifiques, n'hésitez pas à me demander.",
    "Si vous avez des interrogations plus ciblées, n'hésitez pas à me les poser.",
    "Si vous avez d'autres questions liées à ce sujet, n'hésitez pas à me les poser. Je suis là pour fournir des réponses précises et détaillées.",
    "Si vous souhaitez obtenir des réponses à d'autres questions connexes, je suis là pour répondre à vos questions spécifiques. N'hésitez pas à me les poser.",
    "Vous pouvez compter sur moi pour répondre à toutes vos questions pertinentes sur ce sujet. N'hésitez pas à poser vos questions pour obtenir des éclaircissements supplémentaires.",
    "Si vous souhaitez en savoir plus, je suis là pour répondre à vos questions supplémentaires.",
    "Si vous avez d'autres questions, n'hésitez pas à me les poser.",
    "Si d'autres interrogations vous viennent à l'esprit, je suis prêt à y répondre.",
    "Pour toute autre question que vous pourriez avoir, je suis à votre disposition.",
    "Si d'autres points nécessitent des éclaircissements, je suis là pour vous fournir les réponses.",
    "N'hésitez pas à me poser d'autres questions si vous en avez."
]
let questionInvitationEn = [
    "If you have other more specific questions, feel free to ask me.",
    "If you have more targeted questions, feel free to ask them.",
    "If you have other questions related to this topic, feel free to ask them. I am here to provide accurate and detailed answers.",
    "If you want answers to other related questions, I am here to answer your specific questions. Feel free to ask them.",
    "You can count on me to answer all your relevant questions on this topic. Feel free to ask your questions for further clarification.",
    "If you want to know more, I am here to answer your additional questions.",
    "If you have other questions, feel free to ask me.",
    "If other questions come to mind, I am ready to answer them.",
    "For any other questions you may have, I am at your disposal.",
    "If other points require clarification, I am here to provide you with the answers.",
    "Feel free to ask me other questions if you have any."
]
let admins = [
    "Medy",
    "Fiona"
];


adaptabilityScore > 10 ? adaptabilityScore = 10 : adaptabilityScore = adaptabilityScore;

burger.addEventListener('change', () => {
    if (burger.checked === true) {
        burger.innerHTML = '<i class="fa-solid fa-times"></i>';
    } else {
        burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});



// ######################################################
// ######################################################
// ######################################################

robotBtn.addEventListener('click', () => {
    chatDiv.style.height = '400px';
    chatDiv.style.display = 'block';
    chatDiv.style.opacity = '1';
    chatDiv.style.visibility = 'visible';
    chatDiv.style.zIndex = '1000';
    robotBtn.style.display = 'none';
    spinner.style.display = 'block';
    startConversation();
    let frLang = document.querySelectorAll('.frBtn');
    let engLang = document.querySelectorAll('.engBtn');

    frLang.forEach(btn => {
        btn.addEventListener('click', () => {
            answerUser('French');
            questionType('french');
        })
    })

    engLang.forEach(btn => {
        btn.addEventListener('click', () => {
            answerUser('English');
            questionType('english');
        })
    })
})

reduceBtn.addEventListener('click', () => {
    chatDiv.style.height = '40px';
    if (window.innerWidth < 650) {
        chatDiv.style.opacity = '0.5';
        chatDiv.style.right = '-65%';
    }
    chatArea.style.display = 'none';
    reduceBtn.style.display = 'none';
})

closeChatBtn.addEventListener('click', () => {
    chatDiv.style.display = 'none';
    robotBtn.style.display = 'block';
    chatArea.style.display = 'block';
    reduceBtn.style.display = 'block';
    discussion.innerHTML = ''
    robotIcon.style.display = 'none';
    heyMessage.style.display = 'none';
    masculinePronoun.style.display = 'none';
    whatLang.style.display = 'none';
    suggestionUser.innerHTML = `
    <li><button class="answer engBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg">English</button></li>
                        <li><button class="answer frBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">French</button></li>`

    let engBtn = document.querySelectorAll('.engBtn');
    let frBtn = document.querySelectorAll('.frBtn');

    frBtn.forEach(btn => {
        btn.disabled = false;
    })

    engBtn.forEach(btn => {
        btn.disabled = false;
    })
})

chatDiv.querySelector('span').addEventListener('click', () => {
    chatDiv.style.height = '400px';
    if (window.innerWidth < 650) {
        chatDiv.style.opacity = '1';
        chatDiv.style.right = '0';
        chatDiv.style.transition = 'all 0.5s ease-in-out';
    }
    chatDiv.style.display = 'block';
    chatArea.style.display = 'block';
    reduceBtn.style.display = 'block';
    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
})

function startConversation() {
    chatTime = new Date();
    chatDay = chatTime.getDate();
    chatMonth = chatTime.getMonth() + 1;
    chatHour = chatTime.getHours();
    chatMinute = chatTime.getMinutes();
    heyMessage.innerHTML = helloMessages[Math.floor(Math.random() * helloMessages.length)];
    setTimeout(() => {
        robotIcon.style.display = 'block';
        heyMessage.style.display = 'block';
        playAudioInbox();
    }, 800)
    setTimeout(() => {
        masculinePronoun.style.display = 'block';
        playAudioInbox();
    }, 2500)
    setTimeout(() => {
        whatLang.style.display = 'block';
        suggestionUser.style.display = 'block';
        spinner.style.display = 'none';
        playAudioInbox();
    }, 3200)
}

function refreshing(lang) {
    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
    let refreshBtn = document.querySelectorAll('.resetBtn');
    refreshBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            questionType(lang);
        })
    })
}

function answerUser(response) {
    discussion.innerHTML += `<div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
    <i class="fa-solid fa-user ml-2 mb-1"></i>
            <div>
                <h3 class="rounded-lg p-1 my-1 ml-1 pl-2 text-sm md:text-md bg-blue-200 w-full">${response}</h3>
            </div>
        </div>`
    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function questionType(lang) {
    let engBtn = document.querySelector('.engBtn');
    let frBtn = document.querySelector('.frBtn');
    frBtn.disabled = true;
    engBtn.disabled = true;
    spinner.style.display = 'block';
    if (lang == 'english') {
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
        <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
            <i class="fa-solid fa-robot ml-1 mb-1"></i>
            <div>
                <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">Great! I can help you with all Express Entry system topics listed below. Select one of them to get started.
                <ul class="suggestionUser pt-2">
                        <li><button class="answer eligibilityBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg">Eligibility</button></li>
                        <li><button class="answer poolBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">E.E. Pool</button></li>
                        <li><button class="answer postItaEnBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Post-ITA</button></li>
                        <li><button class="answer postAorEnBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Post-AoR</button></li>
                        <li><button class="answer pprEnBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">PPR</button></li>
                        <li><button class="answer settlementBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Settlement</button></li>
                        <li><button class="answer anotherQuestionBtn bg-red-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-red-400 rounded-lg mt-1">The topic is not listed</button></li>
                    </ul>
                </h3>
            </div>
        </div>
    `;
            questionSubType(lang);
        }, 2000);

    } else {
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
            <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                <i class="fa-solid fa-robot ml-1 mb-1"></i>
                <div>
                    <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                    Excellent! Je peux vous aider avec les sujets énumérés ci-dessous concernant le système d'immigration Entrée Express. Sélectionnez-en un pour commencer.
                    <ul class="suggestionUser pt-2">
                            <li><button class="answer admissibiliteBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg">Admissibilité</button></li>
                            <li><button class="answer bassinBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Bassin E.E.</button></li>
                            <li><button class="answer postItaFrBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Post-ITA</button></li>
                            <li><button class="answer postAorFrBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Post-AoR</button></li>
                            <li><button class="answer pprFrBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">PPR</button></li>
                            <li><button class="answer installationBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Installation</button></li>
                            <li><button class="answer anotherQuestionBtn bg-red-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-red-400 rounded-lg mt-1">Le sujet n'est pas listé</button></li>
                        </ul>
                    </h3>
                </div>
            </div>
        `;
            questionSubType(lang);
        }, 2000);
    }
}

function questionSubType(lang) {
    if (lang == 'french') {
        let admissibiliteBtn = document.querySelectorAll('.admissibiliteBtn');
        let bassinBtn = document.querySelectorAll('.bassinBtn');
        let postItaFrBtn = document.querySelectorAll('.postItaFrBtn');
        let postAorFrBtn = document.querySelectorAll('.postAorFrBtn');
        let pprFrBtn = document.querySelectorAll('.pprFrBtn');
        let installationBtn = document.querySelectorAll('.installationBtn');
        let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');

        admissibiliteBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                spinner.style.display = 'block';
                answerUser('Admissibilité');
                setTimeout(() => {
                    spinner.style.display = 'none';
                    discussion.innerHTML += `
                    <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                        <i class="fa-solid fa-robot ml-1 mb-1"></i>
                        <div>
                            <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                            Je crains que je ne puisse pas rédiger tout un article sur l'admissibilité. Mais j'ai une meilleure idée! Je peux vous donner un lien vers un article qui explique tout cela. <a href="https://www.facebook.com/groups/hellocanada25/posts/185945916030094/?__cft__[0]=AZWHjGSQcxo-zmxuyvWErV-o7FE00vXQxghw2Op3EoitY7dH-Ia0vE4gGNmjKIrb9V9tYC3Ntd9_-HnHKEbVhm6HVWKHF3jbHU5VFIC8f_iTHqaj19wWR2M-LT_M5SfB1z3FRJSx0nvO-N0t5AKCk0Ph&__tn__=%2CO%2CP-R" target="_blank" class="text-blue-600">Cliquez ici</a> pour lire l'article.<br><br>
                            ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                            <ul class="suggestionUser pt-2">
                                    <li><button class="answer ageBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg">Age</button></li>
                                    <li><button class="answer educationBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Etudes</button></li>
                                    <li><button class="answer languagesBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Langues</button></li>
                                    <li><button class="answer workExpBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Expérience professionnelle</button></li>
                                    <li><button class="answer reservedJobBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Offre d'emploi</button></li>
                                    <li><button class="answer adaptabiliteBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Adaptabilité</button></li>
                                    <li><button class="answer anotherQuestionBtn bg-red-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-red-400 rounded-lg mt-1">Le sujet n'est pas listé</button></li>
                                </ul>
                            </h3>
                        </div>
                    </div>
                `; fromAdmissibilite(lang);
                }, 2000);
            })
        })

        bassinBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                spinner.style.display = 'block';
                answerUser('Bassin Entrée Express');
                setTimeout(() => {
                    spinner.style.display = 'none';
                    discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Le "bassin du système Entrée express" fait référence à un groupe de candidats potentiels à l'immigration économique au Canada qui soumettent une "expression d'intérêt" (expression of interest, en anglais) dans le cadre du programme Entrée express. Ces candidats sont évalués en fonction de certains critères tels que l'âge, les compétences linguistiques, l'éducation, l'expérience de travail et d'autres facteurs. Par la suite, des invitations à présenter une demande de résidence permanente peuvent être envoyées aux candidats sélectionnés à partir de ce bassin. Cela signifie que les candidats qui se qualifient davantage et qui répondent aux besoins du marché du travail canadien ont plus de chances de recevoir une invitation. <br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer etatCivilBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg">Etat civil</button></li>
                                <li><button class="answer ageBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Age</button></li>
                                <li><button class="answer educationBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Etudes</button></li>
                                <li><button class="answer languagesBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Langues</button></li>
                                <li><button class="answer workExpBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Expérience professionnelle</button></li>
                                <li><button class="answer spouseBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Conjoint</button></li>
                                <li><button class="answer transferabiliteBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Transférabilité de compétences</button></li>
                                <li><button class="answer nominationBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Nomination provinciale</button></li>
                                <li><button class="answer drawsBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Les sélections fédérales</button></li>
                                <li><button class="answer fundsBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Preuve de fonds</button></li>
                                <li><button class="answer pnpBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Programme des Candidats des Provinces (PCP)</button></li>
                                <li><button class="answer anotherQuestionBtn bg-red-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-red-400 rounded-lg mt-1">Le sujet n'est pas listé</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromBassin(lang);
                }, 2000);
            })
        })

        postItaFrBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                spinner.style.display = 'block';
                answerUser('Post-ITA');
                setTimeout(() => {
                    spinner.style.display = 'none';
                    discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Après avoir reçu une invitation à présenter une demande de résidence permanente dans le cadre du programme Entrée express, la prochaine étape consiste généralement à soumettre une demande complète auprès d'Immigration, Réfugiés et Citoyenneté Canada (IRCC). Voici une explication détaillée de cette étape :
                        <ol>
                        <li><b>Acceptation de l'invitation:</b> Une fois que vous avez reçu une invitation à présenter une demande (ITA), vous devez l'accepter dans un délai précisé (15 jours généralement). Cela démontrera votre intention de poursuivre le processus d'immigration.</li><br>

                        <li><b>Accès au portail en ligne:</b> Après avoir accepté l'invitation, vous aurez accès au portail en ligne de l'IRCC, où vous pourrez commencer à remplir et préparer votre demande de résidence permanente.</li><br>

                        <li><b>Préparation des documents:</b> Vous devrez rassembler et télécharger les documents requis pour votre demande, tels que des preuves d'identité, des relevés de compétences linguistiques, des relevés bancaires, des antécédents médicaux, etc.</li><br>

                        <li><b>Remplissage des formulaires:</b> À l'intérieur du portail en ligne, vous devrez remplir les formulaires appropriés pour votre programme d'immigration. Assurez-vous de fournir des informations précises et véridiques.</li><br>

                        <li><b>Paiement des frais:</b> Vous devrez payer les frais de traitement de votre demande. Les montants varient en fonction du type de programme et du nombre de membres de votre famille inclus dans la demande.</li><br>

                        <li><b>Soumission de la demande:</b> Une fois que vous avez téléchargé tous les documents et rempli les formulaires, vous pourrez soumettre électroniquement votre demande via le portail en ligne. Assurez-vous de bien vérifier toutes les informations avant de soumettre.</li><br>

                        <li><b>Réception d'une confirmation:</b> Après la soumission, vous recevrez une confirmation de réception de votre demande. Cela peut inclure un accusé de réception et un numéro de suivi pour votre dossier.</li></ol><br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer docsListBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg">Liste de documents</button></li>
                                <li><button class="answer personalBgBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Antécédents personnels</button></li>
                                <li><button class="answer profesionalBgBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Antécédents professionnels</button></li>
                                <li><button class="answer referenceLetterBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Lettre de référence</button></li>
                                <li><button class="answer giftDeedBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Lettre de don d'argent</button></li>
                                <li><button class="answer feesBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Frais à payer</button></li>
                                <li><button class="answer vmBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Visite médicale</button></li>
                                <li><button class="answer anotherQuestionBtn bg-red-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-red-400 rounded-lg mt-1">Le sujet n'est pas listé</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromPostItaFr(lang);
                }, 2000);
            })
        })

        postAorFrBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                spinner.style.display = 'block';
                answerUser('Post-AoR');
                setTimeout(() => {
                    spinner.style.display = 'none';
                    discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Après avoir soumis votre demande de résidence permanente, l'étape suivante implique le traitement et l'évaluation approfondie de votre dossier par Immigration, Réfugiés et Citoyenneté Canada (IRCC). Voici une brève explication de cette étape:<br>
                        <ol>
                        <li><b>Réception et vérification des documents:</b> L'IRCC recevra votre demande et commencera par vérifier que tous les documents requis ont été soumis correctement. Cela inclut les formulaires, les preuves d'identité, les relevés de compétences linguistiques, les antécédents médicaux, et d'autres pièces justificatives spécifiques à votre programme d'immigration.</li><br>

                        <li><b>Vérifications de sécurité et de fond:</b> L'IRCC effectuera des vérifications approfondies de sécurité et de fond pour s'assurer que vous ne présentez pas de risques pour la sécurité nationale du Canada. Cela peut inclure des enquêtes sur vos antécédents criminels, vos affiliations et vos activités.</li><br>

                        <li><b>Vérifications médicales:</b> Dans certains cas, des vérifications médicales seront nécessaires pour confirmer que vous êtes en bonne santé et que vous ne présentez pas de risques pour la santé publique canadienne. Des examens médicaux peuvent être demandés à vous et à votre famille.</li><br>

                        <li><b>Évaluation des critères de sélection:</b> Votre demande sera évaluée en fonction des critères spécifiques de votre programme d'immigration. Cela peut inclure des facteurs tels que votre âge, vos compétences linguistiques, votre expérience de travail, votre éducation et d'autres éléments.</li><br>

                        <li><b>Prise de décision:</b> Après avoir examiné tous les aspects de votre dossier, l'IRCC prendra une décision concernant l'approbation ou le rejet de votre demande. Si votre demande est approuvée, vous recevrez une confirmation de résidence permanente et des instructions sur la manière de procéder. Si elle est refusée, vous serez informé des raisons du refus.</li><br>
                        
                        <li>Si vous voulez en savoir davantage, vous pouvez <a href="https://www.facebook.com/groups/hellocanada25/posts/379422516682432/?__cft__[0]=AZWAlOYBdFzpoWFG0cOGeUkRZ5OlZedEoYIwvWSBhxq3DlgIlmS88ytBihh2z1Te0dIpXqRkezsgXtw0J7pB0a_eoO06pWw9AS8F3sglNNeT7esoh1FWCauWPQ7W4nUYmgLx8byyjAPt412ZNDUkJB3R&__tn__=%2CO%2CP-R" target="_blank" class="text-blue-600">lire cet article bien détaillé</a>.</li></ol><br><br>

                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}

                        <ul class="suggestionUser pt-2">
                                <li><button class="answer bioBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg">Données biométriques</button></li>
                                <li><button class="answer processingTimeBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Délai de traitement</button></li>
                                <li><button class="answer adrBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Additional Document Request</button></li>
                                <li><button class="answer anotherQuestionBtn bg-red-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-red-400 rounded-lg mt-1">Le sujet n'est pas listé</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromPostAorFr(lang);
                }, 2000);
            })
        })

        pprFrBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                spinner.style.display = 'block';
                answerUser('Demande de Passeport');
                setTimeout(() => {
                    spinner.style.display = 'none';
                    discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        L'approbation de votre demande de résidence permanente signifie que vous avez satisfait aux critères d'immigration. Vous recevrez une Confirmation de Résidence Permanente (CRP) ou une lettre d'approbation. Déposez votre passeport pour obtenir le visa de résident permanent, puis voyagez au Canada avant la date d'expiration indiquée.<br><br>

                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}

                        <ul class="suggestionUser pt-2">
                                <li><button class="answer visaBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg">Visa IMMIGRANT</button></li>
                                <li><button class="answer coprBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Confirmation de la résidence permanente</button></li>
                                <li><button class="answer anotherQuestionBtn bg-red-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-red-400 rounded-lg mt-1">Le sujet n'est pas listé</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromPprFr(lang);
                }, 2000);
            })
        })

        installationBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                spinner.style.display = 'block';
                answerUser('Voyage et Installation');
                setTimeout(() => {
                    spinner.style.display = 'none';
                    discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Une fois que vous avez reçu votre visa d'immigrant pour le Canada, le voyage et l'installation se profilent. Voici un aperçu de ces étapes clés:<br>
                        <ol>
                        <li><b>Voyage au Canada:</b> Avec votre visa d'immigrant dans votre passeport, vous pouvez voyager au Canada. Assurez-vous de conserver vos documents de voyage, y compris votre Confirmation de Résidence Permanente (CRP), en lieu sûr pendant votre voyage.</li><br>

                        <li><b>Contrôle à la frontière:</b> À votre arrivée au Canada, vous serez soumis à un contrôle à la frontière. Présentez vos documents, y compris votre CRP et votre passeport avec le visa, pour confirmer votre statut de résident permanent.</li><br>

                        <li><b>Carte de Résident Permanent (CRP):</b> Si vous avez demandé une CRP, vous la recevrez après votre arrivée. Cette carte officielle confirme votre statut de résident permanent et est nécessaire pour les voyages internationaux.</li><br>

                        <li><b>Établissement au Canada:</b> Une fois au Canada, préparez-vous à vous installer. Cherchez un logement, ouvrez un compte bancaire, obtenez une assurance santé et explorez les services locaux.</li><br>

                        <li><b>Intégration et Emploi:</b> Familiarisez-vous avec la vie canadienne, la culture et les opportunités. Si vous cherchez un emploi, mettez à jour votre CV et explorez les options de carrière.</li><br>

                        <li><b>Soutien aux nouveaux arrivants:</b> Le Canada offre des programmes et des ressources pour aider les nouveaux arrivants à s'intégrer. Profitez des ateliers, des cours de langue et des services d'orientation.</li><br>

                        <li><b>Démarches administratives:</b> Effectuez les démarches nécessaires pour obtenir un numéro d'assurance sociale (NAS), une carte d'assurance maladie provinciale et d'autres documents essentiels.</li><br>

                        <li><b>Communauté et Réseautage:</b> Impliquez-vous dans la communauté locale, établissez des liens et élargissez votre réseau social.</li><br>

                        <li><b>Planification Financière:</b> Gérez vos finances judicieusement en tenant compte des coûts de la vie, des dépenses et des économies.</li><br>
                        </ol><br><br>

                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}

                        <ul class="suggestionUser pt-2">
                                <li><button class="answer nasBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg">Numéro d'Assurance Sociale</button></li>
                                <li><button class="answer bankBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Compte bancaire</button></li>
                                <li><button class="answer anotherQuestionBtn bg-red-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-red-400 rounded-lg mt-1">Le sujet n'est pas listé</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromInstallation(lang);
                }, 2000);
            })
        })

        anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))
    } else {
        let eligibilityBtn = document.querySelectorAll('.eligibilityBtn');
        let poolBtn = document.querySelectorAll('.poolBtn');
        let postItaEnBtn = document.querySelectorAll('.postItaEnBtn');
        let postAorEnBtn = document.querySelectorAll('.postAorEnBtn');
        let pprEnBtn = document.querySelectorAll('.pprEnBtn');
        let settlementBtn = document.querySelectorAll('.settlementBtn');
        let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');

        eligibilityBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                spinner.style.display = 'block';
                answerUser('Eligibility');
                setTimeout(() => {
                    spinner.style.display = 'none';
                    discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        I'm afraid I cannot write a whole article on eligibility. But I have a better idea! I can provide you with a link to an article that explains all of that. <a href="https://www.facebook.com/groups/hellocanada25/posts/185945916030094/?__cft__[0]=AZWHjGSQcxo-zmxuyvWErV-o7FE00vXQxghw2Op3EoitY7dH-Ia0vE4gGNmjKIrb9V9tYC3Ntd9_-HnHKEbVhm6HVWKHF3jbHU5VFIC8f_iTHqaj19wWR2M-LT_M5SfB1z3FRJSx0nvO-N0t5AKCk0Ph&__tn__=%2CO%2CP-R" target="_blank" class="text-blue-500 underline">Click here</a> to read the article. (French only)<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer ageBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg">Age</button></li>
                                <li><button class="answer educationBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Education</button></li>
                                <li><button class="answer languagesBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Languages</button></li>
                                <li><button class="answer workExpBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Work Experience</button></li>
                                <li><button class="answer reservedJobBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Reserved job</button></li>
                                <li><button class="answer adaptabiliteBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Adaptability</button></li>
                                <li><button class="answer anotherQuestionBtn bg-red-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-red-400 rounded-lg mt-1">The topic is not listed</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromEligibility(lang);
                }, 2000);
            })
        })

        poolBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                spinner.style.display = 'block';
                answerUser('Express Entry Pool');
                setTimeout(() => {
                    spinner.style.display = 'none';
                    discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The "Express Entry pool" refers to a group of potential candidates for economic immigration to Canada who submit an "expression of interest" within the framework of the Express Entry program. These candidates are evaluated based on certain criteria such as age, language skills, education, work experience, and other factors. Subsequently, invitations to apply for permanent residency may be sent to selected candidates from this pool. This means that candidates who qualify more and meet the needs of the Canadian job market have a higher chance of receiving an invitation. <br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer etatCivilBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg">Marital status</button></li>
                                <li><button class="answer ageBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Age</button></li>
                                <li><button class="answer educationBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Education</button></li>
                                <li><button class="answer languagesBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Languages</button></li>
                                <li><button class="answer workExpBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Work Experience</button></li>
                                <li><button class="answer spouseBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Spouse / Partner</button></li>
                                <li><button class="answer transferabiliteBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Skill Transferability</button></li>
                                <li><button class="answer nominationBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Provincial Nomination Certificate</button></li>
                                <li><button class="answer drawsBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Federal draws</button></li>
                                <li><button class="answer fundsBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Proof of funds</button></li>
                                <li><button class="answer pnpBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Provincial Nominee Program (PNP)</button></li>
                                <li><button class="answer anotherQuestionBtn bg-red-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-red-400 rounded-lg mt-1">The topic is not listed</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromPool(lang);
                }, 2000);
            })
        })

        postItaEnBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                spinner.style.display = 'block';
                answerUser('Post-ITA');
                setTimeout(() => {
                    spinner.style.display = 'none';
                    discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        After receiving an invitation to apply for permanent residency through the Express Entry program, the next step usually involves submitting a complete application to Immigration, Refugees and Citizenship Canada (IRCC). Here's a detailed explanation of this step:<br>
                        <ol>
                        <li><b>Acceptance of the invitation:</b> Once you receive an Invitation to Apply (ITA), you need to accept it within a specified timeframe (usually 15 days). This demonstrates your intention to continue with the immigration process.</li><br>
                        <li><b>Access to the online portal:</b> After accepting the invitation, you'll gain access to IRCC's online portal, where you can begin to fill out and prepare your permanent residency application.</li><br>
                        <li><b>Document preparation:</b> You'll need to gather and upload the required documents for your application, such as proof of identity, language test results, bank statements, medical records, etc.</li><br>
                        <li><b>Form filling:</b> Within the online portal, you'll need to complete the relevant forms for your immigration program. Ensure you provide accurate and truthful information.</li><br>
                        <li><b>Fee payment:</b> You'll need to pay the processing fees for your application. The amounts vary depending on the program type and the number of family members included in the application.</li><br>
                        <li><b>Application submission:</b> Once you've uploaded all documents and completed the forms, you can electronically submit your application through the online portal. Double-check all information before submitting.</li><br>
                        <li><b>Receipt of confirmation:</b> After submission, you'll receive a confirmation of receipt for your application. This may include an acknowledgment of receipt and a tracking number for your file.</li></ol><br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer docsListBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg">Documents List</button></li>
                                <li><button class="answer personalBgBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Personal background</button></li>
                                <li><button class="answer profesionalBgBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Profesional background</button></li>
                                <li><button class="answer referenceLetterBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Reference Letter</button></li>
                                <li><button class="answer giftDeedBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Gift Deed</button></li>
                                <li><button class="answer feesBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Fees to pay</button></li>
                                <li><button class="answer vmBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Medical examination</button></li>
                                <li><button class="answer anotherQuestionBtn bg-red-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-red-400 rounded-lg mt-1">The topic is not listed</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromPostItaEn(lang);
                }, 2000);
            })
        })

        postAorEnBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                spinner.style.display = 'block';
                answerUser('Post-AoR');
                setTimeout(() => {
                    spinner.style.display = 'none';
                    discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        After submitting your application for permanent residency, the next step involves the thorough processing and evaluation of your file by Immigration, Refugees and Citizenship Canada (IRCC). Here's a brief explanation of this step:<br>
                        <ol>
                        <li><b>Receipt and verification of documents:</b> IRCC will receive your application and begin by verifying that all required documents have been correctly submitted. This includes forms, proof of identity, language test results, medical records, and other specific supporting documents for your immigration program.</li><br>
                        <li><b>Security and background checks:</b> IRCC will conduct comprehensive security and background checks to ensure you do not pose a risk to Canada's national security. This may involve inquiries into your criminal history, affiliations, and activities.</li><br>
                        <li><b>Medical examinations:</b> In some cases, medical examinations will be required to confirm your good health and that you do not pose a risk to public health in Canada. Medical assessments may be requested for you and your family.</li><br>
                        <li><b>Evaluation of selection criteria:</b> Your application will be assessed based on the specific criteria of your immigration program. This may include factors such as age, language skills, work experience, education, and other elements.</li><br>
                        <li><b>Decision-making:</b> After reviewing all aspects of your file, IRCC will make a decision regarding the approval or rejection of your application. If approved, you'll receive confirmation of permanent residency and instructions on next steps. If rejected, you'll be informed of the reasons for the refusal.</li><br>
                        <li>If you'd like to learn more, you can <a href="https://www.facebook.com/groups/hellocanada25/posts/379422516682432/?__cft__[0]=AZWAlOYBdFzpoWFG0cOGeUkRZ5OlZedEoYIwvWSBhxq3DlgIlmS88ytBihh2z1Te0dIpXqRkezsgXtw0J7pB0a_eoO06pWw9AS8F3sglNNeT7esoh1FWCauWPQ7W4nUYmgLx8byyjAPt412ZNDUkJB3R&__tn__=%2CO%2CP-R" target="_blank" class="text-blue-600">read this detailed article</a>. (French only)</li></ol><br><br>

                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}

                        <ul class="suggestionUser pt-2">
                                <li><button class="answer bioBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg">Biometrics</button></li>
                                <li><button class="answer processingTimeBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Processing time</button></li>
                                <li><button class="answer adrBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Additional Document Request</button></li>
                                <li><button class="answer anotherQuestionBtn bg-red-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-red-400 rounded-lg mt-1">The topic is not listed</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromPostAorEn(lang);
                }, 2000);
            })
        })

        pprEnBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                spinner.style.display = 'block';
                answerUser('Passport Request');
                setTimeout(() => {
                    spinner.style.display = 'none';
                    discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Approval of your permanent residency application signifies that you have met the immigration criteria. You'll receive a Confirmation of Permanent Residence (CPR) or an approval letter. Submit your passport to obtain the permanent resident visa, then travel to Canada before the indicated expiry date.<br><br>

                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}

                        <ul class="suggestionUser pt-2">
                                <li><button class="answer visaBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg">IMMIGRANT Visa</button></li>
                                <li><button class="answer coprBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Confirmation of Permanent Residence</button></li>
                                <li><button class="answer anotherQuestionBtn bg-red-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-red-400 rounded-lg mt-1">The topic is not listed</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromPprEn(lang);
                }, 2000);
            })
        })

        settlementBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                spinner.style.display = 'block';
                answerUser('Travel and Settlement');
                setTimeout(() => {
                    spinner.style.display = 'none';
                    discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Une fois que vous avez reçu votre visa d'immigrant pour le Canada, le voyage et l'installation se profilent. Voici un aperçu de ces étapes clés:<br>
                        <ol>
                        <li><b>Travel to Canada:</b> With your immigrant visa in your passport, you can travel to Canada. Make sure to keep your travel documents, including your Confirmation of Permanent Residence (CPR), safely during your journey.</li><br>
                        <li><b>Border Control:</b> Upon arrival in Canada, you'll undergo border control. Present your documents, including your CPR and passport with the visa, to confirm your permanent resident status.</li><br>
                        <li><b>Permanent Resident Card (PRC):</b> If you applied for a PRC, you'll receive it after your arrival. This official card confirms your permanent resident status and is necessary for international travel.</li><br>
                        <li><b>Settlement in Canada:</b> Once in Canada, prepare to settle down. Look for housing, open a bank account, obtain health insurance, and explore local services.</li><br>
                        <li><b>Integration and Employment:</b> Familiarize yourself with Canadian life, culture, and opportunities. If you're seeking employment, update your resume and explore career options.</li><br>
                        <li><b>Newcomer Support:</b> Canada offers programs and resources to help newcomers integrate. Take advantage of workshops, language courses, and orientation services.</li><br>
                        <li><b>Administrative Steps:</b> Complete the necessary steps to obtain a Social Insurance Number (SIN), provincial health insurance card, and other essential documents.</li><br>
                        <li><b>Community and Networking:</b> Get involved in the local community, build connections, and expand your social network.</li><br>
                        <li><b>Financial Planning:</b> Manage your finances wisely, considering the cost of living, expenses, and savings.</li><br>
                        </ol><br><br>

                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}

                        <ul class="suggestionUser pt-2">
                                <li><button class="answer nasBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg">Social Insurance Number</button></li>
                                <li><button class="answer bankBtn bg-teal-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-teal-400 rounded-lg mt-1">Bank account</button></li>
                                <li><button class="answer anotherQuestionBtn bg-red-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-red-400 rounded-lg mt-1">The topic is not listed</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromSettlement(lang);
                }, 2000);
            })
        })

        anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))
    }
    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' });
    playAudioInbox();
}

function questionFromWebsite(lang) {
    let admin = admins[Math.floor(Math.random() * admins.length)];
    let anotherQuestionBtn = document.querySelectorAll('.anotherQuestionBtn');
    if (lang == 'english') {
        anotherQuestionBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                spinner.style.display = 'block';
                answerUser('I want to ask another question');
                setTimeout(() => {
                    spinner.style.display = 'none';
                    discussion.innerHTML += `
                    <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                        <i class="fa-solid fa-robot ml-1 mb-1"></i>
                        <div>
                            <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                            Need help with a topic not listed? You can navigate to our Facebook group where you can ask your question with the appropriate hashtag. We're here to assist you!<br><br>
                            
                            Please copy this hashtag <b>#to${admin}_${chatMonth}${chatDay}__${chatHour}_${chatMinute}</b> and this tag <b>@${admin}</b>, then paste them into your post in <a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25" target="_blank" rel="noreferrer">our Facebook group</a>.
                            <br><br>

                            ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}

                            <ul class="suggestionUser pt-2">
                                    <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                                </ul>
                            </h3>
                        </div>
                    </div>
                `; discussion.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    playAudioInbox();
                    refreshing(lang);
                }, 2000);
            })
        })
    } else {
        anotherQuestionBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                spinner.style.display = 'block';
                answerUser('Je veux poser une autre question');
                setTimeout(() => {
                    spinner.style.display = 'none';
                    discussion.innerHTML += `
                    <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                        <i class="fa-solid fa-robot ml-1 mb-1"></i>
                        <div>
                            <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                            Besoin d'aide sur un sujet qui n'est pas dans la liste ? Vous pouvez vous diriger vers notre groupe Facebook où vous pourrez poser votre question avec le hashtag approprié. Nous sommes là pour vous aider!<br><br>
                            
                            Prière de copier cet hashtag <b>#to${admin}_${chatMonth}${chatDay}__${chatHour}_${chatMinute}</b> et ce tag <b>@${admin}</b>, puis collez-les dans votre publication dans <a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25" target="_blank" rel="noreferrer">notre groupe Facebook</a>.<br>
                            <br><br>

                            ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}

                            <ul class="suggestionUser pt-2">
                                    <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                                </ul>
                            </h3>
                        </div>
                    </div>
                `;
                    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    playAudioInbox();
                    refreshing(lang);
                }, 2000);
            })
        })
    }
}

function playAudioInbox() {
    let audio = new Audio('assets/sounds/messageSound.mp3');
    audio.play();
}

function showHaveQuestionsMark() {
    let haveQuestionsMark = document.querySelector('.haveQuestions');
    if (window.innerWidth > 650) {
        haveQuestionsMark.style.display = 'block';
    }

    haveQuestionsMark.addEventListener('click', () => {
        haveQuestionsMark.style.display = 'none';
    })
}
// setTimeout(showHaveQuestionsMark, 60000); // show for the first time after 60 seconds
// setInterval(showHaveQuestionsMark, 420000); // show every 7 minutes

// ######################################################
// ######################################################
// ######################################################
// answers.forEach(answer => {
//     answer.addEventListener('click', () => {
//         answerUser(answer);
//         answer.textContent == 'English' ? questionType('english') : questionType('french');
//     })
// })


// add event listeners to APIs buttons
// weatherBtn.addEventListener('click', () => {
//     let overlay = document.querySelector('#overlay');
//     let modalResult = document.querySelector('#modalResult');

//     overlay.style.display = 'block';
//     overlay.style.opacity = '0.8';
//     overlay.style.visibility = 'visible';
//     modalResult.style.transform = 'translate(-50%, -50%) scale(1)';
//     console.log(temperature);
//     modalResult.innerHTML += `
//     ${temperature}
//     `;
//     const cancelBtn = modalResult.querySelectorAll('.cancel');

//     cancelBtn.forEach(element => {
//         element.addEventListener('click', () => {
//             overlay.style.display = 'none';
//             overlay.style.opacity = '0';
//             overlay.style.visibility = 'hidden';
//             modalResult.style.transform = 'translate(-50%, -50%) scale(0)';
//             modalResult.innerHTML = `
//             <button id="cancel" class="cancel absolute top-2 right-3 px-2 text-white bg-red-500 rounded hover:bg-red-600">
//                 <i class="fa-solid fa-xmark"></i>
//             </button>
//             `;
//         });
//     })
// })

// newsBtn.addEventListener('click', () => {
//     console.log('news');
// })
// ######################################################
// ######################################################
// ######################################################



// eligibility
function fromAdmissibilite(lang) {
    let ageBtn = document.querySelectorAll('.ageBtn');
    let educationBtn = document.querySelectorAll('.educationBtn');
    let languagesBtn = document.querySelectorAll('.languagesBtn');
    let workExpBtn = document.querySelectorAll('.workExpBtn');
    let reservedJobBtn = document.querySelectorAll('.reservedJobBtn');
    let adaptabiliteBtn = document.querySelectorAll('.adaptabiliteBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');
    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' });
    playAudioInbox();

    ageBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Le critère de l'âge");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Le critère de l'âge dans le score d'admissibilité de l'Entrée express mesure l'impact de l'âge sur la capacité d'adaptation et de contribution du candidat à l'économie canadienne. Des points sont attribués en fonction de l'âge, avec un maximum pour les candidats âgés de 18 à 35 ans, reflétant leur potentiel d'intégration et de productivité à long terme. A savoir que le candidat perd 1 point par année à partir de 36 ans et n'a aucun point à partir de 47 ans ou moins de 18 ans.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
                playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    educationBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Le critère des études');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Le critère des études dans le système Entrée express évalue le niveau d'éducation du candidat et attribue des points en fonction de ce niveau. Cela reflète comment l'éducation du candidat peut contribuer positivement à l'économie canadienne. Les diplômes de divers niveaux, allant des certificats aux diplômes avancés, peuvent donner droit à des points, encourageant ainsi les candidats ayant une variété de compétences à postuler et à contribuer à la société canadienne.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
                playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    languagesBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Les deux langues officielles du Canada');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Les compétences linguistiques sont un critère important dans le système Entrée express, évaluant la capacité d'un candidat à communiquer et à s'intégrer dans la société canadienne. Les candidats peuvent obtenir des points en fonction de leurs résultats aux examens de langue approuvés, tels que l'IELTS, le CELPIP, le TEF Canada et le TCF Canada. Chaque examen évalue la maîtrise de l'anglais et/ou du français, en évaluant la compréhension écrite et orale, ainsi que l'expression écrite et orale. Les points attribués varient en fonction du score obtenu (sachant que le score minimal requis est de NCLC7), ce qui reflète l'importance de la communication fluide et de la compréhension dans le processus d'immigration au Canada.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    workExpBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Le critère de l\'expérience de travail');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        L'expérience professionnelle acquise à l'étranger est un critère important dans le système Entrée express. Pour être admissible, un candidat doit avoir au moins une année d'expérience de travail continue à temps plein (ou l'équivalent à temps partiel) dans une profession qualifiée, acquise en dehors du Canada. Cette exigence de continuité garantit que le candidat possède une solide expérience professionnelle à l'étranger.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    reservedJobBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Le critère de l\'offre d\'emploi réservé');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Une offre d'emploi réservé est une proposition d'emploi émise par un employeur canadien spécifiquement en faveur d'un travailleur étranger. Cela signifie que l'employeur a choisi ce travailleur pour combler un poste vacant, et cette offre est généralement liée à une demande d'immigration. L'offre d'emploi réservé peut faciliter le processus d'immigration en offrant un soutien supplémentaire au candidat. Cependant, elle peut être soumise à certaines exigences et conditions définies par les autorités de l'immigration au Canada.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    adaptabiliteBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Faculté d\'adaptation');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Le score d'adaptabilité dans le système Entrée express évalue la capacité du candidat et de son conjoint à s'intégrer dans la société canadienne. Il prend en compte plusieurs facteurs liés à l'adaptabilité:<br>
                        <ol>
                        <li><b>Niveau linguistique du conjoint:</b> Les compétences linguistiques du conjoint en anglais ou en français sont évaluées. Un niveau élevé peut améliorer l'adaptabilité.</li><br>

                        <li><b>Études au Canada:</b> Si le conjoint a fait ses études au Canada, cela indique une familiarité avec le système éducatif canadien, ce qui peut favoriser l'adaptabilité.</li><br>

                        <li><b>Expérience professionnelle au Canada:</b> De même, si le conjoint a une expérience professionnelle au Canada, cela peut faciliter l'intégration sur le marché du travail.</li><br>

                        <li><b>Études du requérant principal au Canada:</b> Les études du candidat principal au Canada démontrent une connaissance du système éducatif local et peuvent contribuer à l'adaptabilité.</li><br>

                        <li><b>Expérience professionnelle au Canada:</b> Une expérience professionnelle du candidat principal au Canada peut faciliter la transition vers le marché du travail canadien.</li><br>

                        <li><b>Membre de la famille vivant au Canada:</b> La présence de membres de la famille au Canada, tels que frères, sœurs, parents, grands-parents, enfants, petits-enfants, tantes, oncles, nièces ou neveux, peut renforcer les liens sociaux et le soutien, contribuant ainsi à l'adaptabilité.</li></ol><br><br>

                        L'ensemble de ces facteurs est évalué pour déterminer le score d'adaptabilité global du candidat et de son conjoint, influençant ainsi leur admissibilité au programme Entrée express.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))
}

function fromEligibility(lang) {
    let ageBtn = document.querySelectorAll('.ageBtn');
    let educationBtn = document.querySelectorAll('.educationBtn');
    let languagesBtn = document.querySelectorAll('.languagesBtn');
    let workExpBtn = document.querySelectorAll('.workExpBtn');
    let reservedJobBtn = document.querySelectorAll('.reservedJobBtn');
    let adaptabiliteBtn = document.querySelectorAll('.adaptabiliteBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');
    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' });
    playAudioInbox();

    ageBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Age criterion");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The age criterion in the Express Entry eligibility score measures the impact of age on the candidate's ability to adapt and contribute to the Canadian economy. Points are awarded based on age, with a maximum for candidates aged 18 to 35, reflecting their potential for long-term integration and productivity. It's worth noting that the candidate loses 1 point per year starting from age 36 and receives no points at age 47 or below 18.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
                refreshing(lang);
            }, 2000);
        })
    })

    educationBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Education criterion');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The education criterion in the Express Entry system assesses the candidate's level of education and awards points based on this level. This reflects how the candidate's education can positively contribute to the Canadian economy. Degrees of various levels, ranging from certificates to advanced diplomas, can earn points, thereby encouraging candidates with a variety of skills to apply and contribute to Canadian society.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    languagesBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Canada\'s two official languages');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Linguistic skills are a crucial criterion in the Express Entry system, assessing a candidate's ability to communicate and integrate into Canadian society. Candidates can earn points based on their results in approved language exams such as IELTS, CELPIP, TEF Canada, and TCF Canada. Each exam evaluates proficiency in English and/or French, assessing listening, speaking, reading, and writing skills. Points awarded vary based on the achieved score (with a minimum required score of CLB 7), reflecting the significance of effective communication and comprehension in the Canadian immigration process.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    workExpBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Work experience criterion');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Foreign work experience is a significant criterion in the Express Entry system. To be eligible, a candidate must have a minimum of one year of continuous full-time work experience (or part-time equivalent) in a qualified occupation gained outside of Canada. This requirement of continuity ensures that the candidate possesses robust professional experience gained abroad.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    reservedJobBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Reserved job offer criterion');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        A reserved job offer is an employment proposal extended by a Canadian employer specifically in favor of a foreign worker. This signifies that the employer has selected this worker to fill a vacant position, and the offer is typically tied to an immigration application. The reserved job offer can streamline the immigration process by providing additional support to the candidate. However, it may be subject to certain requirements and conditions set forth by Canadian immigration authorities.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    adaptabiliteBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Adaptability');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The adaptability score in the Express Entry system assesses the candidate and their spouse's ability to integrate into Canadian society. It takes into account various factors related to adaptability:<br>

                        <ol>
                        <li><b>Spouse's Language Proficiency:</b> The spouse's proficiency in English or French is evaluated. A high level can enhance adaptability.</li><br>
                        <li><b>Studies in Canada:</b> If the spouse has studied in Canada, it indicates familiarity with the Canadian education system, which can promote adaptability.</li><br>
                        <li><b>Canadian Work Experience:</b> Similarly, if the spouse has Canadian work experience, it can facilitate integration into the job market.</li><br>
                        <li><b>Principal Applicant's Studies in Canada:</b> The principal applicant's studies in Canada demonstrate knowledge of the local education system and can contribute to adaptability.</li><br>
                        <li><b>Canadian Work Experience:</b> The principal applicant's work experience in Canada can ease the transition into the Canadian job market.</li><br>
                        <li><b>Family Member in Canada:</b> The presence of family members in Canada, such as siblings, parents, grandparents, children, grandchildren, aunts, uncles, nieces, or nephews, can strengthen social ties and support, thus contributing to adaptability.</li></ol><br><br>
                        All these factors are evaluated to determine the overall adaptability score of the candidate and their spouse, thereby influencing their eligibility for the Express Entry program<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))
}

// pool  
function fromBassin(lang) {
    let etatCivilBtn = document.querySelectorAll('.etatCivilBtn');
    let ageBtn = document.querySelectorAll('.ageBtn');
    let educationBtn = document.querySelectorAll('.educationBtn');
    let languagesBtn = document.querySelectorAll('.languagesBtn');
    let workExpBtn = document.querySelectorAll('.workExpBtn');
    let spouseBtn = document.querySelectorAll('.spouseBtn');
    let transferabiliteBtn = document.querySelectorAll('.transferabiliteBtn');
    let nominationBtn = document.querySelectorAll('.nominationBtn');
    let drawsBtn = document.querySelectorAll('.drawsBtn');
    let fundsBtn = document.querySelectorAll('.fundsBtn');
    let pnpBtn = document.querySelectorAll('.pnpBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');
    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' });
    playAudioInbox();

    etatCivilBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("L'état civil du candidat");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        L'état civil du candidat, qu'il soit célibataire ou marié, joue un rôle dans le système Entrée express.<br>
                        <ol>
                        <li><b>Célibataire:</b> Le statut de célibataire peut avoir une incidence sur le score d'admissibilité. Les candidats célibataires peuvent bénéficier de points supplémentaires, ce qui reflète leur flexibilité potentielle pour s'établir au Canada et s'intégrer dans la société.</li><br>

                        <li><b>Marié:</b> Si le candidat est marié, le score peut également être influencé. Les compétences linguistiques, l'éducation et l'expérience professionnelle du conjoint sont pris en compte pour déterminer le score global. Cette approche reconnaît l'importance du soutien familial et de l'adaptation conjointe à la vie au Canada.</li></ol><br><br>

                        En somme, l'état civil du candidat, qu'il soit célibataire ou marié, peut jouer un rôle dans l'évaluation de l'admissibilité et du score global dans le cadre du programme Entrée express.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    ageBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Le critère de l'âge dans le bassin");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Le critère de l'âge dans le bassin de l'Entrée express est un élément essentiel de l'évaluation des candidats potentiels à l'immigration économique au Canada. Il se réfère à la manière dont l'âge du candidat est pris en compte lors de l'inscription dans le bassin, où les candidats sont classés en fonction de divers facteurs. Plus précisément, le critère de l'âge attribue des points aux candidats en fonction de leur âge au moment de leur inscription.<br>

                        Les candidats âgés de 20 à 29 ans obtiennent généralement le nombre maximum de points dans cette catégorie, ce qui reflète leur potentiel élevé d'adaptation, de contribution économique et de participation active à la vie canadienne. À mesure que l'âge augmente au-delà de cette tranche, le nombre de points diminue progressivement. Cette approche reconnaît l'importance de la jeunesse dans la perspective de l'intégration à long terme et du soutien au marché du travail canadien.<br>

                        En somme, le critère de l'âge dans le bassin de l'Entrée express vise à évaluer comment l'âge du candidat peut influencer sa contribution potentielle à l'économie canadienne et à la société dans son ensemble.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    educationBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Les études dans le bassin");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Le critère des études dans le bassin de l'Entrée express est un facteur central qui détermine la position des candidats potentiels dans le processus d'immigration économique au Canada. Il met l'accent sur le niveau d'éducation du candidat au moment de son inscription dans le bassin. Concrètement, ce critère attribue des points en fonction du degré d'accomplissement académique.<br>

                        Les candidats détenant des niveaux d'éducation plus élevés, tels que des diplômes universitaires obtiennent généralement un nombre supérieur de points. Cette approche reflète la reconnaissance du Canada envers l'importance de l'expertise et des compétences spécialisées pour l'enrichissement de l'économie et de la société canadienne. Elle vise à attirer des individus dotés d'un bagage éducatif qui peut contribuer de manière significative au développement du marché du travail et à l'innovation dans le pays.<br>

                        En somme, le critère des études dans le bassin de l'Entrée express évalue comment le niveau d'éducation du candidat peut influencer positivement sa capacité à apporter une contribution durable et bénéfique à l'économie et à la société du Canada.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    languagesBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Les langues dans le bassin");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Le critère des langues dans le bassin de l'Entrée express tient une place cruciale dans l'évaluation des candidats en vue de leur éventuelle immigration économique au Canada. Il met en lumière les compétences linguistiques du candidat au moment de son inscription dans le bassin. En pratique, ce critère octroie des points en fonction des résultats obtenus lors des évaluations linguistiques approuvées.<br>

                        Notons que depuis 2021, une attention particulière est portée au français, qui est devenu encore plus prisé. Les candidats démontrant une maîtrise linguistique élevée en anglais et/ou en français obtiennent généralement un nombre accru de points. Cette démarche traduit l'importance d'une communication fluide au quotidien et dans le contexte professionnel au Canada. Elle aspire à attirer des individus aptes à s'intégrer de manière rapide et effective dans la société canadienne, tout en contribuant activement au marché du travail et aux échanges interculturels.<br>

                        Finalement, le critère des langues dans le bassin de l'Entrée express évalue comment les compétences linguistiques du candidat peuvent non seulement favoriser une intégration réussie, mais également souligne la pertinence grandissante de la maîtrise du français depuis 2021, en témoignant de la capacité à communiquer de manière efficace et à jouer un rôle actif au sein de la vie sociale et économique du Canada.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    workExpBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("L'expérience de travail dans le bassin");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Dans le contexte du bassin de l'Entrée express, l'expérience professionnelle acquise en dehors du Canada revêt une importance significative. Bien qu'elle n'octroie pas de points indépendants, elle peut être harmonieusement associée à d'autres éléments pour maximiser le score global du candidat.<br>

                        Plus spécifiquement, cette expérience acquise à l'étranger peut être combinée avec les résultats de l'évaluation de la première langue ainsi qu'avec l'expérience professionnelle accumulée au Canada. Cette combinaison stratégique peut générer jusqu'à 100 points additionnels, un concept reconnu sous le nom de « transférabilité des compétences ».<br>

                        Cette approche permet de mettre en avant la valeur des compétences professionnelles développées en dehors du Canada, en les intégrant harmonieusement avec d'autres aspects du profil du candidat. Elle renforce également la notion de « transfert » des compétences acquises ailleurs vers le marché du travail canadien, favorisant ainsi une transition réussie et une contribution économique positive à la société canadienne.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    spouseBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Contribution du conjoint");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Le conjoint d'un candidat au programme Entrée express peut apporter une contribution significative à son score global dans le bassin. Plus précisément, le conjoint peut influencer positivement le score d'admissibilité grâce à trois principaux éléments:<br>
                        <ol>
                        <li><b>Compétences linguistiques du conjoint:</b> Les compétences linguistiques du conjoint en anglais ou en français peuvent ajouter des points au score global du candidat principal. Des évaluations linguistiques, telles que l'IELTS, le CELPIP, le TEF Canada ou le TCF Canada, sont utilisées pour évaluer ces compétences. De meilleurs résultats linguistiques du conjoint peuvent se traduire par une bonification du score.</li><br>

                        <li><b>Études du conjoint au Canada:</b> Si le conjoint a suivi des études postsecondaires au Canada et a obtenu un diplôme, cela peut également ajouter des points au score d'admissibilité du candidat principal. Cette réalisation académique du conjoint est prise en compte dans l'évaluation.</li><br>

                        <li><b>Expérience professionnelle du conjoint au Canada:</b> Si le conjoint possède une expérience de travail au Canada, cela peut également contribuer positivement au score du candidat principal. Les années d'expérience professionnelle du conjoint sont prises en compte, renforçant ainsi la position du candidat dans le bassin.</li></ol><br><br>

                        En conclusion, la participation du conjoint dans le processus d'Entrée express peut jouer un rôle essentiel en ajoutant des points au score global du candidat principal. Les compétences linguistiques, les études et l'expérience professionnelle du conjoint sont autant d'éléments qui peuvent augmenter les chances d'admissibilité et améliorer la position du candidat dans le bassin.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    transferabiliteBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("La transférabilité des compétences");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        La notion de transférabilité des compétences au sein du programme Entrée express se révèle comme une voie astucieuse pour optimiser votre score d'admissibilité. En combinant habilement différents éléments de votre parcours, vous avez la possibilité de gagner jusqu'à 100 points supplémentaires, renforçant ainsi votre position dans le processus d'immigration économique au Canada.<br>

                        Cette stratégie perspicace implique des associations précises. Par exemple, l'association d'un diplôme postsecondaire avec des résultats élevés en compétences linguistiques ou l'obtention d'un certificat de compétences peut chacune conférer un gain de 50 points. De même, un diplôme postsecondaire en tandem avec une expérience professionnelle canadienne peut offrir une bonification équivalente. L'expérience de travail à l'étranger, associée à une expérience similaire au Canada ou à des compétences linguistiques probantes, ou encore à l'obtention du certificat, ouvre la possibilité d'une augmentation de 50 points.<br>

                        En résumé, la transférabilité des compétences se présente comme une démarche dynamique pour accumuler jusqu'à 100 points, illustrant votre capacité à optimiser vos atouts et à mettre en avant votre polyvalence et votre adaptabilité. Ce concept témoigne de l'importance de la planification stratégique dans le cadre de l'Entrée express, vous permettant de jouer judicieusement avec différents éléments pour atteindre un score d'admissibilité optimal.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    nominationBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("La nomination provinciale");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        La nomination provinciale constitue un élément déterminant au sein du programme Entrée express. Lorsqu'un candidat reçoit une nomination d'une province ou d'un territoire canadien, il obtient un avantage significatif en termes de points dans son score d'admissibilité. Concrètement, cette nomination octroie un impressionnant total de 600 points, ce qui peut propulser le candidat vers le haut du bassin et augmenter considérablement ses chances d'obtenir une invitation à présenter une demande de résidence permanente.<br>

                        Cet avantage substantiel reflète l'importance accordée par les provinces et les territoires canadiens à certains candidats qui répondent aux besoins spécifiques de leur marché du travail et de leur économie locale. En accordant une nomination, une province ou un territoire reconnaît la valeur et le potentiel du candidat pour contribuer de manière significative à sa communauté et à son développement économique.<br>

                        Ainsi, la nomination provinciale se distingue comme un catalyseur majeur dans le processus d'Entrée express, conférant au candidat une excellente opportunité d'atteindre un score élevé, favorisant ainsi son accession à la résidence permanente au Canada.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    drawsBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Les sélections fédérales");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Les sélections, également appelées tirages ou extractions, au sein du programme Entrée express représentent des moments cruciaux où IRCC sélectionne des candidats potentiels à l'immigration économique. Ces sélections périodiques (généralement chaque 15 jours, les mercredis) ont lieu à intervalles réguliers et visent à inviter les candidats ayant les scores d'admissibilité les plus élevés à présenter une demande de résidence permanente.<br>

                        Lors de chaque extraction, les candidats dans le bassin de l'Entrée express sont classés en fonction de leurs scores globaux. Ceux qui dépassent le seuil prédéfini pour cette extraction reçoivent une invitation à présenter une demande de résidence permanente. Les candidats qui ne sont pas invités lors d'une extraction particulière demeurent dans le bassin pour les extractions ultérieures.<br>

                        Les extractions reflètent l'engagement du Canada à sélectionner des candidats hautement qualifiés et capables de contribuer à l'économie canadienne. Elles offrent aux candidats les plus compétitifs l'opportunité de concrétiser leur projet d'immigration et de devenir résidents permanents du Canada, participant ainsi à la diversité et à la croissance du pays.<br>
                        
                        Pour consulter la dernière sélection qui a été faites, <a class="text-blue-600" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express/soumettre-profil/selections-candidats.html" target="_blank" rel="noreferrer">cliquez ici</a>.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    fundsBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Les fonds requis (POF)");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Les fonds requis dans le cadre du système Entrée express font référence aux ressources financières que les candidats doivent démontrer qu'ils possèdent afin de soutenir leur installation au Canada. Cette exigence vise à s'assurer que les nouveaux arrivants ont les moyens nécessaires pour subvenir à leurs besoins essentiels pendant leur période d'adaptation initiale.<br>

                        Les montants spécifiques requis varient en fonction de la taille de la famille du candidat. Ils sont évalués en fonction du nombre de membres de la famille qui accompagnent -ou pas- le candidat, ainsi que de la taille de la famille elle-même. Ces fonds peuvent couvrir des dépenses telles que le logement, la nourriture, les vêtements et les autres dépenses de base.<br>

                        Les candidats doivent fournir des preuves de ces fonds requis lorsqu'ils présentent leur demande de résidence permanente. Cela peut se faire en montrant des relevés bancaires ou en fournissant une déclaration de revenus. L'objectif est de garantir que les nouveaux arrivants ont la stabilité financière nécessaire pour réussir leur intégration au Canada et pour éviter d'ajouter un fardeau excessif aux services sociaux du pays.<br>

                        En conclusion, les fonds requis dans le système Entrée express sont une mesure visant à s'assurer que les candidats ont les ressources financières nécessaires pour bien démarrer leur vie au Canada et pour contribuer positivement à la société canadienne.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    pnpBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Le programme des candidats des provinces (PCP)");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Le programme des candidats des provinces (PCP) est une initiative clé au sein du système d'immigration canadien qui permet aux provinces et aux territoires de sélectionner des candidats qualifiés et adaptés à leurs besoins spécifiques en matière d'économie et de main-d'œuvre. Ce programme offre aux provinces et aux territoires la flexibilité de choisir des candidats qui répondent à leurs priorités en matière de développement économique et de croissance.<br>

                        Dans le cadre du PCP, les provinces et les territoires peuvent émettre des nominations en faveur de candidats qui ont démontré leur aptitude à s'établir et à contribuer de manière significative à la société et à l'économie locales. Ces nominations accordent aux candidats une bonification importante de leur score d'admissibilité au sein du programme Entrée express, ce qui augmente considérablement leurs chances d'être invités à présenter une demande de résidence permanente.<br>

                        Le PCP reflète l'engagement du Canada envers la collaboration et la décentralisation de l'immigration. Il permet aux provinces et aux territoires de jouer un rôle actif dans la sélection des nouveaux arrivants et de mieux aligner l'immigration sur leurs besoins particuliers. En conséquence, le programme des candidats des provinces contribue à une distribution équilibrée des talents et des compétences à travers le pays, favorisant ainsi le développement économique et social à l'échelle nationale.<br>
                        
                        <ul>
                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408807183743965/?__cft__[0]=AZX2Yvuq3sLOgjvEcb7uIVG2eeOQLXPZuXd_Y7lEgNIM08fKBmKooVCltk1w0Atcz_NFmILGvQqyym6T5SYpBz7H1ttIzGdXgBVQPZtByiDPAp2sXA0iMMa61roGzACfi2yJui2rGyHVwHcu4-sEEvkz&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">PCP Ontario</a></li><br>

                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408809047077112/?__cft__[0]=AZVtFL_UweRUWY1hp6a31S07C_t8m0de_qVjsJFKYhAcnGHnVH-OTj3u9ddaKchgKoOWTBcy5hSjevnsLxTjMBwiuzIVNJFAoZPASkdOhSo-St5bxGeeGrv2v2gUoTfmQa0eP1R9JPpUVYA4spSMZeyz&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">PCP Alberta</a></li><br>

                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408810603743623/?__cft__[0]=AZUMjuk_lT2U6aUPRwC6TYTSyNGAxGEZ4PeycjaX2gX4XPHYOFCGBiQ0Yj_k9IBhqXGpnzBh-hc4pff65wFkASvXJFS90aMNmqqon73QqZOE0ukjiCPLCgz0FCdgeRDvYUliGwn7O7oiKlljlp4gbye9&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">PCP Nouveau Brunswick</a></li><br>

                            <li><a class="text-blue-600" href="https://novascotiaimmigration.com/move-here/" target="_blank" rel="noreferrer">PCP Nouvelle Ecosse</a></li><br>

                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408809737077043/?__cft__[0]=AZWNgOI9yneS5u-ry70jTr5WeLRTuZa-3dJYoqf46YTxCQKIkMJkyT86C0jSy7Bn1lWrw67jLbUx6fdvnu6FIncxXAhuCKupUu2h7Do5l9WBBWDgeZiOD98oHRB95rYL7KsaerPNUMn4zyEIcuYnS6vi&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">PCP Saskatchewan</a></li><br>

                            <li><a class="text-blue-600" href="https://www.welcomebc.ca/Immigrate-to-B-C/About-The-BC-PNP" target="_blank" rel="noreferrer">PCP Colombie Britannique</a></li><br>

                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408808063743877/" target="_blank" rel="noreferrer">PCP Manitoba</a></li><br>

                            <li><a class="text-blue-600" href="https://www.princeedwardisland.ca/fr/information/bureau-limmigration/entree-express-ile-du-prince-edouard" target="_blank" rel="noreferrer">PCP Île-du-Prince-Édouard</a></li>
                        </ul><br>
                        <br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                            <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                        </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function fromPool(lang) {
    let etatCivilBtn = document.querySelectorAll('.etatCivilBtn');
    let ageBtn = document.querySelectorAll('.ageBtn');
    let educationBtn = document.querySelectorAll('.educationBtn');
    let languagesBtn = document.querySelectorAll('.languagesBtn');
    let workExpBtn = document.querySelectorAll('.workExpBtn');
    let spouseBtn = document.querySelectorAll('.spouseBtn');
    let transferabiliteBtn = document.querySelectorAll('.transferabiliteBtn');
    let nominationBtn = document.querySelectorAll('.nominationBtn');
    let drawsBtn = document.querySelectorAll('.drawsBtn');
    let fundsBtn = document.querySelectorAll('.fundsBtn');
    let pnpBtn = document.querySelectorAll('.pnpBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');
    playAudioInbox();

    etatCivilBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Marital status");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The marital status of the candidate, whether single or married, plays a role in the Express Entry system.<br>
                        <ol>
                        <li><b>Single:</b> The single status can impact the eligibility score. Single candidates may receive additional points, reflecting their potential flexibility to settle in Canada and integrate into society.</li><br>

                        <li><b>Married:</b> If the candidate is married, the score can also be influenced. The spouse's language skills, education, and work experience are taken into account to determine the overall score. This approach recognizes the importance of family support and joint adaptation to life in Canada.</li></ol><br><br>

                        In summary, the marital status of the candidate, whether single or married, can play a role in evaluating eligibility and the overall score within the framework of the Express Entry program.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    ageBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Age in the pool");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The age criterion in the Express Entry pool is a crucial element in evaluating potential candidates for economic immigration to Canada. It pertains to how the candidate's age is considered during registration in the pool, where candidates are ranked based on various factors. Specifically, the age criterion awards points to candidates based on their age at the time of registration.<br>

                        Candidates aged 20 to 29 generally receive the maximum number of points in this category, reflecting their high potential for adaptability, economic contribution, and active participation in Canadian life. As age increases beyond this range, the number of points gradually decreases. This approach recognizes the significance of youth in terms of long-term integration and support for the Canadian job market.<br>

                        In summary, the age criterion in the Express Entry pool aims to assess how the candidate's age can influence their potential contribution to the Canadian economy and society as a whole.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    educationBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Education criterion in the pool");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The education criterion in the Express Entry pool is a central factor that determines the position of potential candidates in the Canadian economic immigration process. It emphasizes the candidate's level of education at the time of registration in the pool. Specifically, this criterion awards points based on the degree of academic achievement.<br>

                        Candidates with higher levels of education, such as university degrees, generally receive a higher number of points. This approach reflects Canada's recognition of the importance of expertise and specialized skills for enriching the Canadian economy and society. It aims to attract individuals with an educational background that can contribute significantly to the development of the job market and innovation in the country.<br>

                        To sum up, the education criterion in the Express Entry pool evaluates how the candidate's level of education can positively influence their ability to make a lasting and beneficial contribution to the economy and society of Canada.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    languagesBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Language criterion in the pool");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The language criterion in the Express Entry pool holds a pivotal role in evaluating candidates for potential economic immigration to Canada. It sheds light on the candidate's linguistic skills at the time of their pool entry. In practice, this criterion awards points based on the results achieved in approved language assessments.<br>

                        It's worth noting that since 2021, particular emphasis has been placed on French, which has become even more highly regarded. Candidates demonstrating high proficiency in English and/or French typically earn an increased number of points. This approach underscores the importance of smooth communication in both daily life and the professional context in Canada. It aims to attract individuals capable of swift and effective integration into Canadian society, while actively contributing to the labor market and intercultural exchanges.<br>

                        In conclusion, the language criterion in the Express Entry pool evaluates how a candidate's language skills can not only facilitate successful integration but also highlights the growing relevance of French proficiency since 2021. This demonstrates the ability to communicate effectively and play an active role within Canada's social and economic spheres.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    workExpBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Work experience criterion");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        In the context of the Express Entry pool, the experience gained outside of Canada holds significant importance. Although it does not award standalone points, it can be seamlessly combined with other elements to maximize the candidate's overall score.<br>

                        More specifically, this foreign-acquired experience can be blended with the results of the first language assessment as well as the professional experience accumulated in Canada. This strategic combination can yield up to 100 additional points, a concept known as "skill transferability."<br>

                        This approach highlights the value of professional skills developed outside of Canada by seamlessly integrating them with other aspects of the candidate's profile. It also reinforces the notion of transferring skills acquired elsewhere to the Canadian job market, thus promoting a successful transition and a positive economic contribution to Canadian society.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    spouseBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Spouse's contribution");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The spouse of a candidate in the Express Entry program can make a significant contribution to their overall score in the pool. More specifically, the spouse can positively influence the eligibility score through three key elements:<br>
                        <ol>
                        <li><b>Spouse's language skills:</b> The spouse's language proficiency in English or French can add points to the overall score of the primary candidate. Language assessments such as IELTS, CELPIP, TEF Canada, or TCF Canada are used to evaluate these skills. Better language results from the spouse can lead to an increase in the score.</li><br>

                        <li><b>Spouse's education in Canada:</b> If the spouse has pursued post-secondary studies in Canada and obtained a degree, this can also add points to the eligibility score of the primary candidate. The spouse's academic achievement is considered in the evaluation.</li><br>

                        <li><b>Spouse's work experience in Canada:</b> If the spouse has work experience in Canada, this can also positively contribute to the score of the primary candidate. The years of the spouse's work experience are taken into account, thereby strengthening the candidate's position in the pool.</li></ol><br><br>

                        In conclusion, the participation of the spouse in the Express Entry process can play an essential role in adding points to the overall score of the primary candidate. The spouse's language skills, education, and work experience are all factors that can increase eligibility chances and enhance the candidate's position in the pool.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    transferabiliteBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Skill transferability");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The concept of skills transferability within the Express Entry program proves to be a clever way to optimize your eligibility score. By skillfully combining various aspects of your journey, you have the opportunity to gain up to 100 additional points, thereby strengthening your position in the Canadian economic immigration process.<br>

                        This insightful strategy involves specific combinations. For instance, pairing a post-secondary degree with high language proficiency results or obtaining a certificate of skills can each provide a gain of 50 points. Similarly, a post-secondary degree coupled with Canadian work experience can offer an equivalent bonus. Foreign work experience, combined with similar experience in Canada or strong language skills, as well as obtaining the certificate, opens the possibility of a 50-point increase.<br>

                        In brief, skills transferability presents a dynamic approach to accumulate up to 100 points, showcasing your ability to maximize your strengths and highlight your versatility and adaptability. This concept underscores the importance of strategic planning within the Express Entry framework, enabling you to skillfully play with various elements to achieve an optimal eligibility score.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    nominationBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Provincial nomination certificate");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Provincial nomination stands as a pivotal factor within the Express Entry program. When a candidate receives a nomination from a Canadian province or territory, they gain a significant advantage in terms of points in their eligibility score. Specifically, this nomination grants an impressive total of 600 points, which can propel the candidate towards the top of the pool and greatly enhance their chances of receiving an invitation to apply for permanent residency.<br>

                        This substantial advantage reflects the importance that Canadian provinces and territories place on certain candidates who meet the specific needs of their local labor market and economy. By granting a nomination, a province or territory acknowledges the value and potential of the candidate to make a significant contribution to its community and economic development.<br>

                        Thus, provincial nomination stands out as a major catalyst in the Express Entry process, providing the candidate with an excellent opportunity to achieve a high score and thereby facilitating their path to permanent residence in Canada.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    drawsBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Federal draws");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Draws, also known as selections or extractions, within the Express Entry program represent crucial moments where IRCC chooses potential candidates for economic immigration. These periodic selections (usually every 15 days, on Wednesdays) take place at regular intervals and aim to invite candidates with the highest eligibility scores to apply for permanent residence.<br>

                        During each extraction, candidates in the Express Entry pool are ranked based on their overall scores. Those surpassing the predefined threshold for that extraction receive an invitation to apply for permanent residence. Candidates who are not invited in a particular draw remain in the pool for subsequent draws.<br>

                        These extractions reflect Canada's commitment to selecting highly skilled candidates capable of contributing to the Canadian economy. They provide the most competitive candidates with the opportunity to realize their immigration goals and become permanent residents of Canada, thereby contributing to the country's diversity and growth.<br>

                        To view the latest selection that has been made, <a class="text-blue-600" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html" target="_blank" rel="noreferrer">click here</a>.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    fundsBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Required funds (POF)");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The required funds within the framework of the Express Entry system refer to the financial resources that candidates must demonstrate they possess to support their settlement in Canada. This requirement aims to ensure that newcomers have the necessary means to meet their essential needs during their initial period of adaptation.<br>

                        The specific amounts required vary based on the candidate's family size. They are assessed based on the number of accompanying family members and the size of the family itself. These funds can cover expenses such as housing, food, clothing, and other basic necessities.<br>

                        Candidates must provide evidence of these required funds when applying for permanent residence. This can be done by showing bank statements or providing an income declaration. The goal is to ensure that newcomers have the financial stability needed to succeed in their integration into Canada and to avoid placing an excessive burden on the country's social services.<br>

                        To put it briefly, the required funds in the Express Entry system are a measure aimed at ensuring that candidates have the necessary financial resources to start their lives in Canada on a solid footing and to make a positive contribution to Canadian society.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    pnpBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Provincial Nominee Program (PNP)");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The Provincial Nominee Program (PNP) is a key initiative within the Canadian immigration system that allows provinces and territories to select qualified candidates who are suited to their specific economic and labor market needs. This program provides provinces and territories with the flexibility to choose candidates who align with their priorities for economic development and growth.<br>

                        Under the PNP, provinces and territories can issue nominations for candidates who have demonstrated their ability to settle and make a significant contribution to the local society and economy. These nominations provide candidates with a significant boost to their eligibility score within the Express Entry program, greatly enhancing their chances of being invited to apply for permanent residence.<br>

                        The PNP reflects Canada's commitment to collaboration and the decentralization of immigration. It empowers provinces and territories to play an active role in selecting new arrivals and better align immigration with their specific needs. As a result, the Provincial Nominee Program contributes to a balanced distribution of talents and skills across the country, thereby promoting economic and social development on a national scale.<br>
                        
                        <ul>
                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408807183743965/?__cft__[0]=AZX2Yvuq3sLOgjvEcb7uIVG2eeOQLXPZuXd_Y7lEgNIM08fKBmKooVCltk1w0Atcz_NFmILGvQqyym6T5SYpBz7H1ttIzGdXgBVQPZtByiDPAp2sXA0iMMa61roGzACfi2yJui2rGyHVwHcu4-sEEvkz&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">Ontario (OINP)</a></li><br>

                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408809047077112/?__cft__[0]=AZVtFL_UweRUWY1hp6a31S07C_t8m0de_qVjsJFKYhAcnGHnVH-OTj3u9ddaKchgKoOWTBcy5hSjevnsLxTjMBwiuzIVNJFAoZPASkdOhSo-St5bxGeeGrv2v2gUoTfmQa0eP1R9JPpUVYA4spSMZeyz&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">Alberta (AINP)</a></li><br>

                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408810603743623/?__cft__[0]=AZUMjuk_lT2U6aUPRwC6TYTSyNGAxGEZ4PeycjaX2gX4XPHYOFCGBiQ0Yj_k9IBhqXGpnzBh-hc4pff65wFkASvXJFS90aMNmqqon73QqZOE0ukjiCPLCgz0FCdgeRDvYUliGwn7O7oiKlljlp4gbye9&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">New Brunswick (NBPNP)</a></li><br>

                            <li><a class="text-blue-600" href="https://novascotiaimmigration.com/move-here/" target="_blank" rel="noreferrer">Nova Scotia (NSNP)</a></li>

                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408809737077043/?__cft__[0]=AZWNgOI9yneS5u-ry70jTr5WeLRTuZa-3dJYoqf46YTxCQKIkMJkyT86C0jSy7Bn1lWrw67jLbUx6fdvnu6FIncxXAhuCKupUu2h7Do5l9WBBWDgeZiOD98oHRB95rYL7KsaerPNUMn4zyEIcuYnS6vi&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">Saskatchewan (SINP)</a></li><br>

                            <li><a class="text-blue-600" href="https://www.welcomebc.ca/Immigrate-to-B-C/About-The-BC-PNP" target="_blank" rel="noreferrer">British Columbia (BC PNP)</a></li><br>

                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408808063743877/" target="_blank" rel="noreferrer">Manitoba (MPNP)</a></li><br>

                            <li><a class="text-blue-600" href="https://www.princeedwardisland.ca/en/information/office-of-immigration/pei-express-entry" target="_blank" rel="noreferrer">PCP Prince Edward Island (PEI PNP)</a></li>
                        </ul>
                        <br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                            <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                        </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

// From Post Ita
function fromPostItaFr(lang) {
    let docsListBtn = document.querySelectorAll('.docsListBtn');
    let personalBgBtn = document.querySelectorAll('.personalBgBtn');
    let profesionalBgBtn = document.querySelectorAll('.profesionalBgBtn');
    let referenceLetterBtn = document.querySelectorAll('.referenceLetterBtn');
    let giftDeedBtn = document.querySelectorAll('.giftDeedBtn');
    let feesBtn = document.querySelectorAll('.feesBtn');
    let vmBtn = document.querySelectorAll('.vmBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');
    playAudioInbox();

    docsListBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("La liste des documents à déposer");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        La liste des documents à déposer fait référence à la compilation essentielle de pièces justificatives et de dossiers requis lors de la soumission d'une demande de résidence permanente dans le cadre du programme Entrée express. Cette liste est conçue pour démontrer votre éligibilité et soutenir les informations que vous avez fournies dans votre demande.<br>

                        Les documents à déposer peuvent varier en fonction de votre situation personnelle, de votre expérience professionnelle, de vos antécédents académiques et de tout autre critère spécifique à votre programme d'immigration. Ils peuvent inclure des éléments tels que des copies de diplômes, des relevés de notes, des évaluations linguistiques, des relevés bancaires, des antécédents médicaux, des preuves d'expérience de travail, des références professionnelles, et d'autres documents de soutien.<br>

                        La compilation minutieuse de ces documents est cruciale pour étayer votre demande et garantir sa conformité aux exigences. Il est conseillé de lire attentivement la liste des documents à déposer fournie par les autorités d'immigration, de rassembler les éléments nécessaires et de soumettre une demande complète et précise.<br>

                        En somme, la liste des documents à déposer constitue une étape essentielle dans le processus d'immigration, garantissant que votre demande est appuyée par des preuves tangibles et complètes de votre éligibilité et de votre aptitude à contribuer positivement à la société canadienne.<br>
                        
                        Pour avoir une idée sur la liste des documents à déposer, <a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/454628579161825/?__cft__[0]=AZW5OUMLLaUQXGN1Hn6KWs7Wm4jzVjriUKPC-ypWFLiVlDRCmZDrdgqCLzpmKTpRtzkg8oQiwV3AR6pymGISI4-1il7a4SCXnUu7jzuRqJto4wgk4mziBq3lvENd52K0sdnrhJNSAZ4xeepm3P9KtAHc&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">cliquez ici</a>.
                        <br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    personalBgBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Les antécédents personnels");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Après avoir reçu une invitation à déposer une demande de résidence permanente dans le cadre du système Entrée express, vous devrez fournir des informations sur vos antécédents personnels pour les dix années précédant la date de dépôt de la demande OU sinon, et c'est très recommandé, depuis l'âge de 18 ans. Cette étape implique de documenter vos activités et statuts au cours de cette période.<br>

                        L'objectif des antécédents personnels est de donner un aperçu clair de votre historique pendant cette période. Vous indiquerez les principales activités que vous avez entreprises, comme l'éducation, l'emploi, le chômage, le service militaire ou d'autres engagements significatifs. Cette démarche permet aux autorités d'évaluer votre parcours et votre cohérence dans les informations fournies.<br>

                        Chaque activité que vous mentionnez devrait être accompagnée de détails tels que les dates, les noms des employeurs ou des établissements éducatifs, les titres des postes occupés ou des programmes d'études suivis. Il est essentiel de présenter des informations complètes et exactes pour que votre demande soit traitée en toute intégrité.<br>

                        Enfin, les antécédents personnels dans le cadre de l'Entrée express vous offrent l'opportunité de démontrer votre parcours au cours des dix dernières années, contribuant ainsi à une évaluation complète de votre admissibilité à la résidence permanente au Canada.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    profesionalBgBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Les antécédents professionnels");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Les antécédents professionnels dans le contexte de l'Entrée express revêtent une importance capitale dans la démonstration de votre admissibilité à la résidence permanente au Canada. Cette étape requiert la déclaration précise et détaillée de votre expérience de travail au cours des dix dernières années OU à partir du 18ème anniversaire, mettant l'accent sur une expérience continue d'au moins une année dans un emploi éligible.<br>

                        Vous avez la possibilité de déclarer plusieurs expériences professionnelles, ce qui peut influencer le calcul de votre nombre total d'années d'expérience. Par exemple, si vous avez travaillé pendant une année dans un emploi qualifié, puis une autre année dans un autre emploi admissible, vous pourrez cumuler deux années d'expérience professionnelle. <b>Il est important de noter que les emplois admissibles doivent être à temps plein (au moins 30 heures par semaine).</b><br>

                        Les emplois admissibles sont catégorisés en fonction des niveaux de compétences de la Classification nationale des professions (CNP) du Canada, identifiés par les codes NOC 0, 1, 2 ou 3. Ces emplois sont évalués en fonction de leur pertinence et de leur contribution à l'économie canadienne.<br>

                        Si vous ne pouvez pas fournir les documents nécessaires pour appuyer une expérience professionnelle spécifique, vous avez l'option de la déclarer dans les antécédents personnels. Cela permet de mettre en évidence des périodes d'activité qui pourraient ne pas être directement liées à un emploi éligible, mais qui contribuent néanmoins à votre parcours et à votre admissibilité globale.<br>

                        Pour conclure, les antécédents professionnels offrent la possibilité de démontrer votre expérience de travail continue et admissible, tout en valorisant vos compétences et votre contribution potentielle à l'économie canadienne. Cette étape joue un rôle crucial dans la détermination de votre admissibilité à la résidence permanente au Canada à travers le système Entrée express.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    referenceLetterBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("La lettre de référence professionnelle");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        La lettre de référence professionnelle est un document important lors de la soumission d'une demande de résidence permanente dans le cadre du système Entrée express. Elle vise à fournir une évaluation objective de vos compétences, de votre expérience de travail et de votre caractère professionnel de la part d'une personne ayant supervisé ou travaillé en étroite collaboration avec vous.<br>

                        Cette lettre est généralement rédigée par un employeur, un superviseur direct ou un collègue de confiance avec qui vous avez travaillé pendant une période significative. Elle devrait inclure des informations détaillées sur vos responsabilités professionnelles, vos accomplissements, vos compétences spécifiques et tout autre élément pertinent lié à votre expérience de travail.<br>

                        L'objectif de la lettre de référence professionnelle est de renforcer votre profil en fournissant des preuves tangibles de vos compétences et de votre contribution au sein de votre milieu de travail. Elle contribue également à la crédibilité de votre demande en attestant de votre adéquation aux normes professionnelles et aux exigences du marché du travail canadien.<br>
        
                        En résumé, la lettre de référence professionnelle est un témoignage écrit qui met en avant vos compétences et votre expérience de travail, renforçant ainsi votre candidature pour la résidence permanente au Canada à travers le système Entrée express.<br>
                        
                        <a class="text-blue-600" href="https://drive.google.com/file/d/1Z3W7dTGRcwQBRERC3OU6EU3ldXLtah3H/view?fbclid=IwAR3JxeiY7DW0eXdoHhu832ed1BJDGUcg3dy1jCqG7CVpBY81kEESZvjA6d4" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir un exemple de lettre de référence professionnelle.<br>
                        <br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    giftDeedBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("L'attestation de don d'argent");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        L'attestation de don d'argent est une démarche permettant à un candidat à la résidence permanente au Canada, qui ne dispose pas de la totalité des fonds requis, de recevoir une contribution financière d'un membre de sa famille proche. Cette contribution vise à compléter le montant nécessaire pour répondre aux exigences financières du programme d'immigration.<br>

                        L'attestation de don d'argent consiste en une déclaration officielle de la part du membre de la famille proche, attestant qu'il s'engage à fournir les fonds nécessaires au candidat pour couvrir la différence manquante. Cette déclaration doit être appuyée par des documents probants, tels que des relevés bancaires ou des preuves de transfert d'argent.<br>

                        Cette démarche offre une option aux candidats qui bénéficient du soutien financier de leurs proches pour répondre aux exigences financières du programme. Cependant, il est crucial de se conformer aux directives officielles et de fournir des preuves solides pour garantir la validité et la transparence de l'attestation de don d'argent.<br>
    
                        En un mot, l'attestation de don d'argent permet aux candidats de recevoir un soutien financier de la part de membres de leur famille proche afin de répondre aux critères financiers nécessaires pour leur demande de résidence permanente au Canada.<br>
                        
                        <a class="text-blue-600" href="https://drive.google.com/file/d/1_UqlPCrwc7xYcXLiCXq_4m2QojY7Vfmy/view?fbclid=IwAR0ZlqOZQWDMQO-ltvs7Cwmxxl2sN0s6nKhYSulK6T3xE51U-uITL4roVXU" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir un exemple d'attestation de don d'argent.<br>
                        <br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    feesBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Les frais à acquitter");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        En tant que candidat à l'immigration via le système Entrée express, il est essentiel d'être conscient des frais associés à ce processus. Ces frais englobent différentes étapes, telles que les frais de présentation de la demande, les frais biométriques pour la collecte des empreintes digitales et la photographie, ainsi que les frais de droit de résidence permanente. Il est important de bien comprendre la structure tarifaire en fonction de votre situation, du nombre de membres de votre famille inclus dans la demande et de la catégorie d'immigration à laquelle vous postulez. Veiller à s'acquitter de ces frais dans les délais requis est un élément crucial pour garantir le traitement de votre demande et poursuivre votre parcours vers la résidence permanente au Canada.<br><br>
                        <ol>
                            <li><b>Frais de traitement de la demande:</b> 850$</li>
                            <li><b>Frais relatifs au droit de RP:</b> 515$</li>
                            <li><b>Enfant à charge:</b> 230$</li>
                            <li><b>Frais de la biométrie:</b> 85$</li>
                            <li><b>TOTAL 1 PERSONNE CELIBATAIRE:</b> 1450$</li>
                            <li><b>TOTAL 2 PERSONNE SANS ENFANTS:</b> 2900$</li>
                            <li><b>TOTAL 2 PERSONNE AVEC ENFANT:</b> 3130$</li>
                        </ol><br>
    
                        <a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/321111072513577/?__cft__[0]=AZVwmw321Tz5-XLh6Cce3PaUVGx1YrPtJ6NRVB4N9ryDI4bLGbhjULVH6WYE4xgtx4C_LL-ukFVEzrtBloTO44uZ4WajEsb4_l5qFWX8gdjo8dEwRYepzDtEPx2ts7D9Yhm_KvTVflLsdsJK_68_C3sZ&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir avoir une idée sur les frais à acquitter.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    vmBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("La visite médicale");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        La visite médicale exigée par Immigration, Réfugiés et Citoyenneté Canada (IRCC) est une étape importante du processus d'immigration, notamment dans le cadre du système Entrée express. Cette visite médicale vise à évaluer votre état de santé afin de garantir que vous ne présentez pas de risques pour la santé publique au Canada et que vous ne nécessiterez pas de soins de santé intensifs à votre arrivée.<br>

                        Un médecin désigné par IRCC effectuera un examen médical complet, incluant des tests de dépistage de maladies contagieuses et d'autres évaluations médicales. Les résultats de cette visite médicale seront pris en compte dans le processus d'admissibilité à la résidence permanente.<br>

                        Il est important de noter que la visite médicale doit être effectuée uniquement par un médecin agréé par IRCC (<a class="text-blue-600" href="https://secure.cic.gc.ca/PanelPhysicianMedecinDesigne/fr/Accueil" target="_blank" rel="noreferrer">Trouver un médecin agréé</a>). Les résultats de l'examen médical seront transmis directement à IRCC et ne seront pas divulgués au candidat.<br>

                        Pour récapituler, la visite médicale exigée par IRCC dans le cadre de l'Entrée express vise à garantir que les candidats à la résidence permanente sont en bonne santé et ne représentent pas de risques pour la santé publique canadienne.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function fromPostItaEn(lang) {
    let docsListBtn = document.querySelectorAll('.docsListBtn');
    let personalBgBtn = document.querySelectorAll('.personalBgBtn');
    let profesionalBgBtn = document.querySelectorAll('.profesionalBgBtn');
    let referenceLetterBtn = document.querySelectorAll('.referenceLetterBtn');
    let giftDeedBtn = document.querySelectorAll('.giftDeedBtn');
    let feesBtn = document.querySelectorAll('.feesBtn');
    let vmBtn = document.querySelectorAll('.vmBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');
    playAudioInbox();

    docsListBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("The documents checklist");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The list of documents to be submitted refers to the essential compilation of supporting documents and required records when submitting an application for permanent residence under the Express Entry program. This list is designed to demonstrate your eligibility and support the information you have provided in your application.<br>

                        The documents to be submitted may vary based on your personal situation, professional experience, academic background, and any other criteria specific to your immigration program. They may include items such as copies of diplomas, transcripts, language assessments, bank statements, medical records, proof of work experience, professional references, and other supporting documents.<br>

                        Thoroughly compiling these documents is crucial to substantiate your application and ensure its compliance with requirements. It is advisable to carefully review the list of documents to be submitted provided by immigration authorities, gather the necessary elements, and submit a complete and accurate application.<br>

                        In summary, the list of documents to be submitted is an essential step in the immigration process, ensuring that your application is backed by tangible and comprehensive evidence of your eligibility and ability to contribute positively to Canadian society.<br>

                        To get an idea of the list of documents to be submitted, <a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/454628579161825/?__cft__[0]=AZW5OUMLLaUQXGN1Hn6KWs7Wm4jzVjriUKPC-ypWFLiVlDRCmZDrdgqCLzpmKTpRtzkg8oQiwV3AR6pymGISI4-1il7a4SCXnUu7jzuRqJto4wgk4mziBq3lvENd52K0sdnrhJNSAZ4xeepm3P9KtAHc&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">click here</a>.
                        <br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    personalBgBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Personal background");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        After receiving an invitation to apply for permanent residence under the Express Entry system, you will need to provide information about your personal history for the ten years preceding the date of application OR, if recommended, since the age of 18. This step involves documenting your activities and statuses during this period.<br>

                        The purpose of providing your personal history is to give a clear overview of your background during this timeframe. You will indicate the main activities you have undertaken, such as education, employment, unemployment, military service, or other significant engagements. This process allows authorities to assess your journey and the consistency of the information provided.<br>

                        Each activity you mention should be accompanied by details such as dates, names of employers or educational institutions, job titles held, or programs of study pursued. It is essential to provide comprehensive and accurate information for your application to be processed with integrity.<br>

                        Ultimately, providing your personal history within the context of Express Entry offers you the opportunity to showcase your journey over the past ten years, thereby contributing to a comprehensive evaluation of your eligibility for permanent residence in Canada.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    profesionalBgBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Professional background");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Professional backgrounds within the context of Express Entry hold paramount importance in demonstrating your eligibility for permanent residence in Canada. This step requires the precise and detailed declaration of your work experience over the past ten years OR from your 18th birthday onwards, with an emphasis on continuous experience of at least one year in an eligible job.<br>

                        You have the option to declare multiple work experiences, which can influence the calculation of your total years of experience. For instance, if you worked for one year in a qualified job and then another year in a different eligible job, you can accumulate two years of professional experience. <b>It is important to note that eligible jobs must be full-time (at least 30 hours per week).</b><br>

                        Eligible jobs are categorized based on the skill levels of the National Occupational Classification (NOC) of Canada, identified by NOC codes 0, 1, 2, or 3. These jobs are assessed for their relevance and contribution to the Canadian economy.<br>

                        If you are unable to provide the necessary documents to support a specific work experience, you have the option to declare it in your personal history. This allows you to highlight periods of activity that may not be directly related to an eligible job but still contribute to your overall journey and eligibility.<br>

                        In conclusion, professional backgrounds provide an opportunity to demonstrate your continuous and eligible work experience, while showcasing your skills and potential contribution to the Canadian economy. This step plays a crucial role in determining your eligibility for permanent residence in Canada through the Express Entry system.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    referenceLetterBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("The professional reference letter");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The professional reference letter is a crucial document when submitting an application for permanent residence through the Express Entry system. Its purpose is to provide an objective assessment of your skills, work experience, and professional character from someone who has supervised or closely worked with you.<br>

                        Usually written by an employer, direct supervisor, or trusted colleague with whom you have worked for a significant period, the letter should include detailed information about your job responsibilities, achievements, specific skills, and any other relevant aspects of your work experience.<br>

                        The aim of the professional reference letter is to enhance your profile by offering tangible evidence of your skills and contributions within your work environment. It also adds credibility to your application by confirming your alignment with professional standards and requirements of the Canadian job market.<br>

                        In summary, the professional reference letter is a written testimony that highlights your skills and work experience, thereby strengthening your candidacy for permanent residence in Canada through the Express Entry system.<br>

                        You can <a class="text-blue-600" href="https://drive.google.com/file/d/1Z3W7dTGRcwQBRERC3OU6EU3ldXLtah3H/view?fbclid=IwAR3JxeiY7DW0eXdoHhu832ed1BJDGUcg3dy1jCqG7CVpBY81kEESZvjA6d4" target="_blank" rel="noreferrer">click here</a> to view an example of a professional reference letter.
                        <br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    giftDeedBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("The gift deed");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The gift deed is a process that allows a candidate for permanent residence in Canada, who does not have the full required funds, to receive a financial contribution from a close family member. This contribution aims to supplement the required amount to meet the financial requirements of the immigration program.<br>

                        The gift deed involves an official declaration from the close family member, stating their commitment to provide the necessary funds to the candidate to cover the shortfall. This declaration must be supported by supporting documents, such as bank statements or proof of money transfer.<br>

                        This process offers an option for candidates who receive financial support from their close relatives to meet the financial requirements of the program. However, it is crucial to comply with official guidelines and provide solid evidence to ensure the validity and transparency of the gift deed.<br>

                        In short, the gift deed allows candidates to receive financial support from close family members to meet the necessary financial criteria for their application for permanent residence in Canada.<br>

                        You can <a class="text-blue-600" href="https://drive.google.com/file/d/1_UqlPCrwc7xYcXLiCXq_4m2QojY7Vfmy/view?fbclid=IwAR0ZlqOZQWDMQO-ltvs7Cwmxxl2sN0s6nKhYSulK6T3xE51U-uITL4roVXU" target="_blank" rel="noreferrer">click here</a> to view an example of a gift deed.<br>
                        <br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    feesBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("The fees");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        As an immigration candidate through the Express Entry system, it's crucial to be aware of the fees associated with this process. These fees cover various stages, including application fees, biometric fees for fingerprinting and photography, as well as permanent residence fees. It's important to understand the fee structure based on your situation, the number of family members included in the application, and the immigration category you're applying for. Ensuring timely payment of these fees is a crucial element to ensure the processing of your application and continue your journey towards permanent residence in Canada.<br><br>
                        <ol>
                            <li><b>Application processing fee:</b> 850$</li>
                            <li><b>Permanent residence fee:</b> 515$</li>
                            <li><b>Dependent child:</b> 230$</li>
                            <li><b>Biometric fee:</b> 85$</li>
                            <li><b>TOTAL FOR A SINGLE APPLICANT:</b> 1450$</li>
                            <li><b>TOTAL FOR 2 ADULTS WITHOUT CHILDREN:</b> 2900$</li>
                            <li><b>TOTAL FOR 2 ADULTS WITH ONE CHILD:</b> 3130$</li>
                        </ol><br>
    
                        <a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/321111072513577/?__cft__[0]=AZVwmw321Tz5-XLh6Cce3PaUVGx1YrPtJ6NRVB4N9ryDI4bLGbhjULVH6WYE4xgtx4C_LL-ukFVEzrtBloTO44uZ4WajEsb4_l5qFWX8gdjo8dEwRYepzDtEPx2ts7D9Yhm_KvTVflLsdsJK_68_C3sZ&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">Click here</a> to get an idea of the fees to be paid.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    vmBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("The medical visit");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The medical examination required by Immigration, Refugees, and Citizenship Canada (IRCC) is a crucial step in the immigration process, particularly within the context of the Express Entry system. This medical examination aims to assess your health status to ensure that you do not pose a risk to public health in Canada and that you will not require intensive healthcare upon arrival.<br>

                        A physician designated by IRCC will conduct a comprehensive medical examination, including screening tests for contagious diseases and other medical assessments. The results of this medical examination will be considered in the eligibility process for permanent residence.<br>

                        It's important to note that the medical examination must be conducted only by a physician authorized by IRCC (<a class="text-blue-600" href="https://secure.cic.gc.ca/PanelPhysicianMedecinDesigne/en/Home" target="_blank" rel="noreferrer">Find an Authorized Physician</a>). The results of the medical examination will be transmitted directly to IRCC and will not be disclosed to the candidate.<br>

                        In a nutshell, the IRCC-required medical examination within the context of Express Entry aims to ensure that candidates for permanent residence are in good health and do not pose a risk to Canadian public health.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

// From Post Aor
function fromPostAorFr(lang) {
    let bioBtn = document.querySelectorAll('.bioBtn');
    let processingTimeBtn = document.querySelectorAll('.processingTimeBtn');
    let adrBtn = document.querySelectorAll('.adrBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');
    playAudioInbox();

    bioBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("La biométrie");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Les données biométriques font référence à des caractéristiques physiques et uniques qui permettent d'identifier de manière précise une personne. Dans le cadre du processus d'immigration, les données biométriques sont collectées pour renforcer la sécurité et l'authenticité des documents d'identification.<br>

                        Lorsqu'un candidat à l'immigration via le système Entrée express est invité à fournir des données biométriques, cela implique la prise de photographies d'empreintes digitales et la capture d'autres caractéristiques distinctives. Ces données sont ensuite enregistrées dans une base de données gouvernementale et utilisées pour vérifier l'identité du candidat tout au long du processus d'immigration.<br>

                        La collecte de données biométriques vise à prévenir la fraude et à garantir que les personnes qui soumettent des demandes d'immigration sont bien celles qu'elles prétendent être. C'est une mesure de sécurité importante pour protéger l'intégrité du système d'immigration et assurer que seules les personnes admissibles et légitimes obtiennent le statut de résidence permanente.<br>

                        En un mot, les données biométriques sont des informations uniques et spécifiques à chaque individu, collectées dans le but de renforcer la sécurité et l'authenticité du processus d'immigration au Canada à travers le système Entrée express.<br>
                        
                        <a class="text-blue-600" href="https://www.cic.gc.ca/francais/visiter/biometrie.asp" target="_blank" rel="noreferrer">Cliquez ici</a> pour savoir si vous avez besoin de faire la biométrie.
                        <br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    processingTimeBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Le délai de traitement de la demande");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Le délai de traitement d'une demande de résidence permanente via le système Entrée express varie en fonction de plusieurs facteurs, notamment le programme d'immigration choisi, le volume de demandes en cours de traitement et la complexité de votre dossier individuel. Les délais peuvent également être influencés par des circonstances externes telles que les contraintes opérationnelles ou les mesures de sécurité renforcées.<br>

                        Il est important de noter que les délais de traitement peuvent différer d'un candidat à l'autre. Généralement, IRCC s'efforce de traiter les demandes de manière efficace et en temps opportun. Certains programmes peuvent bénéficier de délais de traitement accélérés, tandis que d'autres peuvent prendre plus de temps en raison de la vérification détaillée des informations fournies.<br>

                        Pour obtenir une estimation plus précise du délai de traitement de votre demande spécifique, il est recommandé de consulter le site web officiel d'Immigration, Réfugiés et Citoyenneté Canada (IRCC). <a class="text-blue-600" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/verifier-delais-traitement.html" target="_blank" rel="noreferrer">Cliquez ici pour avoir une idée sur le délai de traitement de votre demande</a>.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    adrBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Demande de document additionnel");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        ADR "Additional Document Request", "Demande de document additionnel" en français. Cela fait référence à la situation où Immigration, Réfugiés et Citoyenneté Canada (IRCC) demande des documents ou des informations supplémentaires à un candidat pour approfondir l'évaluation de leur admissibilité au programme Entrée express ou pour vérifier les informations fournies dans leur demande. Les demandes de documents additionnels sont une étape normale du processus de demande, et les candidats doivent fournir les documents demandés dans le délai spécifié afin de poursuivre leur demande.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function fromPostAorEn(lang) {
    let bioBtn = document.querySelectorAll('.bioBtn');
    let processingTimeBtn = document.querySelectorAll('.processingTimeBtn');
    let adrBtn = document.querySelectorAll('.adrBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');
    playAudioInbox();

    bioBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Biometrics");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Biometric data refers to unique and physical characteristics that allow for accurate identification of an individual. In the context of the immigration process, biometric data is collected to enhance the security and authenticity of identification documents.<br>

                        When a candidate for immigration through the Express Entry system is invited to provide biometric data, it involves capturing photographs of fingerprints and other distinctive features. This data is then stored in a government database and used to verify the candidate's identity throughout the immigration process.<br>

                        The collection of biometric data aims to prevent fraud and ensure that individuals submitting immigration applications are indeed who they claim to be. It's an important security measure to protect the integrity of the immigration system and ensure that only eligible and legitimate individuals attain permanent resident status.<br>

                        In essence, biometric data consists of unique and individual-specific information collected to enhance the security and authenticity of the immigration process in Canada through the Express Entry system.<br>

                        <a class="text-blue-600" href="https://www.cic.gc.ca/english/visit/biometrics.asp" target="_blank" rel="noreferrer">Click here</a> to find out if you need to provide biometrics.
                        <br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    processingTimeBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Processing time");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The processing time for a permanent residence application through the Express Entry system varies depending on several factors, including the chosen immigration program, the volume of applications being processed, and the complexity of your individual case. Delays can also be influenced by external circumstances such as operational constraints or enhanced security measures.<br>

                        It is important to note that processing times can differ from one candidate to another. Generally, IRCC strives to process applications efficiently and in a timely manner. Some programs may benefit from accelerated processing times, while others may take longer due to detailed verification of provided information.<br>

                        To obtain a more precise estimate of the processing time for your specific application, it is recommended to consult the official website of Immigration, Refugees and Citizenship Canada (IRCC). <a class="text-blue-600" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/verifier-delais-traitement.html" target="_blank" rel="noreferrer">Click here to get an idea of the processing time for your application</a>.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    adrBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Additional document request");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        After you have submitted your application through the Express Entry system, you may encounter a process known as "Additional Document Request" (ADR). An ADR is a request from Immigration, Refugees and Citizenship Canada (IRCC) for additional supporting documents or information to verify the details provided in your application.<br>

                        Receiving an ADR does not necessarily indicate a problem with your application; it is a routine step to ensure the accuracy and authenticity of the information you've submitted. IRCC may request documents such as educational transcripts, language test results, work experience letters, or other relevant documentation.<br>

                        It's important to respond to the ADR promptly and provide the requested documents within the specified timeframe. Failure to provide the requested documents may lead to delays or even refusal of your application. Timely and accurate submission of the requested documents can help ensure a smooth and efficient processing of your application within the Express Entry system.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

// From Post Ppr
function fromPprFr(lang) {
    let visaBtn = document.querySelectorAll('.visaBtn');
    let coprBtn = document.querySelectorAll('.coprBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');
    playAudioInbox();

    visaBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Le visa IMMIGRANT");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        L'étape de la demande de passeport intervient après avoir reçu l'approbation de votre demande de résidence permanente au Canada. Une fois que vous avez reçu la lettre d'approbation, vous devez déposer votre passeport auprès des autorités compétentes (généralement les <a class="text-blue-600" href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices/find-visa-application-centre.html" target="_blank" rel="noreferrer">CRDV</a>) pour obtenir le visa de résident permanent.<br>

                        Ce visa de résident permanent, également appelé visa immigrant, est apposé dans votre passeport et vous permet de voyager au Canada en tant que résident permanent. Il est important de suivre les instructions fournies par les autorités concernant la procédure de demande de visa de résident permanent, y compris les documents requis, les frais associés et les délais à respecter.<br>

                        Une fois que vous avez obtenu votre visa de résident permanent dans votre passeport, vous pouvez planifier votre voyage au Canada. Assurez-vous de voyager avant la date d'expiration indiquée sur le visa. À votre arrivée au Canada, vous serez soumis à un contrôle à la frontière où vous présenterez votre passeport avec le visa pour confirmer votre statut de résident permanent.<br>

                        En récapitulation, l'étape de la demande de passeport fait suite à l'approbation de votre demande de résidence permanente. Elle implique l'obtention du visa de résident permanent dans votre passeport, vous permettant ainsi de voyager au Canada et de confirmer votre statut de résident permanent à votre arrivée.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    coprBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("La Confirmation de Résidence Permanente");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        La Confirmation de Résidence Permanente (CRP) est un document officiel émis par les autorités canadiennes pour confirmer que votre demande de résidence permanente a été approuvée. Une fois que vous avez reçu la CRP, cela signifie que vous avez satisfait aux critères d'immigration requis et que vous êtes autorisé à devenir un résident permanent du Canada.<br>

                        La CRP contient des informations importantes telles que votre nom, votre photo, votre date de naissance et un numéro d'identification unique (<a class="text-blue-600" href="https://www.cic.gc.ca/francais/centre-aide/reponse.asp?qnum=013&top=4" target="_blank" rel="noreferrer">IUC</a>). Elle atteste de votre statut de résident permanent et peut être utilisée comme preuve officielle de votre droit de vivre et de travailler au Canada de façon permanente.<br>

                        Lorsque vous voyagez au Canada, vous devrez présenter votre CRP aux autorités à votre arrivée pour confirmer votre statut de résident permanent. La CRP est un document essentiel que vous devrez garder en sécurité et avoir avec vous chaque fois que vous voyagez à l'étranger ou lorsque vous interagissez avec les autorités canadiennes.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function fromPprEn(lang) {
    let visaBtn = document.querySelectorAll('.visaBtn');
    let coprBtn = document.querySelectorAll('.coprBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');
    playAudioInbox();

    visaBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("IMMIGRANT visa");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The passport application step comes after receiving approval for your permanent residence application in Canada. Once you've received the approval letter, you need to submit your passport to the relevant authorities (usually the <a class="text-blue-600" href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices/find-visa-application-centre.html" target="_blank" rel="noreferrer">VACs</a>) to obtain the permanent resident visa.<br>

                        This permanent resident visa, also known as an immigrant visa, is stamped in your passport and allows you to travel to Canada as a permanent resident. It's important to follow the instructions provided by the authorities regarding the procedure for applying for the permanent resident visa, including required documents, associated fees, and deadlines.<br>

                        Once you have the permanent resident visa in your passport, you can plan your trip to Canada. Make sure to travel before the expiration date indicated on the visa. Upon arrival in Canada, you will undergo a border control process where you'll present your passport with the visa to confirm your permanent resident status.<br>

                        To recapitulate, the passport application step follows the approval of your permanent residence application. It involves obtaining the permanent resident visa in your passport, allowing you to travel to Canada and confirm your permanent resident status upon arrival.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    coprBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Confirmation of Permanent Residence (CoPR)");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The Confirmation of Permanent Residence (CoPR) is an official document issued by Canadian authorities to confirm the approval of your permanent residence application. Once you receive the CoPR, it signifies that you have met the required immigration criteria and are authorized to become a permanent resident of Canada.<br>

                        The CoPR contains important information such as your name, photo, date of birth, and a unique identification number (<a class="text-blue-600" href="https://www.cic.gc.ca/english/helpcentre/answer.asp?qnum=013&top=4" target="_blank" rel="noreferrer">UCI</a>). It verifies your permanent resident status and can serve as an official proof of your right to live and work in Canada permanently.<br>

                        When you travel to Canada, you will need to present your CoPR to authorities upon arrival to confirm your permanent resident status. The CoPR is an essential document that you should keep secure and have with you whenever you travel abroad or interact with Canadian authorities.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

// From settlement
function fromInstallation(lang) {
    let nasBtn = document.querySelectorAll('.nasBtn');
    let bankBtn = document.querySelectorAll('.bankBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');
    playAudioInbox();

    nasBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Le Numéro d'Assurance Sociale (NAS)");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Le NAS, ou <a class="text-blue-600" href="https://www.canada.ca/fr/emploi-developpement-social/services/numero-assurance-sociale.html" target="_blank" rel="noreferrer">Numéro d'Assurance Sociale</a>, est un numéro unique à neuf chiffres attribué par Service Canada, qui est l'agence responsable des services gouvernementaux liés à l'emploi, aux programmes sociaux et aux prestations au Canada. Le NAS est essentiellement un numéro d'identification fiscale et sociale utilisé pour diverses interactions avec le gouvernement, y compris pour travailler, payer des impôts et accéder à certains programmes et avantages sociaux.<br>

                        Les résidents permanents et temporaires au Canada ont généralement besoin d'un NAS pour travailler et bénéficier des services gouvernementaux. Vous pouvez obtenir un NAS en faisant une demande directement auprès de Service Canada. Généralement, vous devrez fournir des documents d'identification, tels qu'un permis de travail ou une confirmation de résidence permanente, ainsi que des preuves de votre statut d'immigration et de votre identité.<br>

                        Il est important de noter que le NAS est confidentiel et doit être protégé. Ne partagez pas votre NAS avec des personnes non autorisées et évitez de l'utiliser à d'autres fins que celles prévues par les autorités gouvernementales.<br>

                        En gros, le NAS est un numéro d'assurance sociale attribué par Service Canada pour identifier les résidents au Canada et leur permettre d'accéder à divers services gouvernementaux. Vous pouvez l'obtenir en faisant une demande auprès de Service Canada en fournissant les documents requis.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    bankBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Le compte bancaire");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        Pour ouvrir un compte bancaire au Canada en tant que nouvel arrivant et résident permanent, suivez ces étapes générales:<br>
                        <ol>
                        <li><b>Choisissez une banque:</b> Au Canada, il y a plusieurs grandes banques nationales telles que la Banque Royale du Canada (RBC), la Banque Toronto-Dominion (TD), la Banque de Montréal (BMO), la Banque Scotia (Scotiabank) et la CIBC. Vous pouvez également opter pour des banques en ligne comme Tangerine ou des coopératives de crédit.</li><br>

                        <li><b>Rassemblez vos documents:</b> Vous devrez généralement fournir des pièces d'identité telles que votre passeport, votre carte de résident permanent, votre permis de conduire canadien (le cas échéant) et une preuve d'adresse au Canada, comme un contrat de bail ou une facture de services publics.</li><br>

                        <li><b>Visitez la banque:</b> Rendez-vous à la succursale de la banque de votre choix avec vos documents. Le personnel de la banque vous guidera à travers le processus d'ouverture de compte.</li><br>

                        <li><b>Choisissez le type de compte:</b> Discutez avec le conseiller de la banque pour déterminer quel type de compte correspond le mieux à vos besoins. Les options peuvent inclure des comptes courants, des comptes d'épargne, des comptes d'étudiants, etc.</li><br>

                        <li><b>Remplissez les formulaires:</b> Vous devrez remplir des formulaires de demande et fournir vos informations personnelles, telles que votre adresse, votre numéro de téléphone et votre numéro d'assurance sociale (NAS).</li><br>

                        <li><b>Effectuez un dépôt initial:</b> Certaines banques peuvent exiger un dépôt initial pour ouvrir le compte. Vérifiez les exigences de la banque choisie.</li><br>

                        <li><b>Obtenez les cartes et les services:</b> Une fois que votre compte est ouvert, la banque vous fournira généralement une carte de débit et des informations sur les services bancaires en ligne.</li></ol><br>

                        Êtes-vous intéressé à en savoir plus sur quelques banques au Canada? vous les trouvez ci-dessous.
                        <ul>
                            <li><a class="text-blue-600" href="https://www.rbcroyalbank.com/fr/personal.html" target="_blank" rel="noreferrer">Banque Royale du Canada (RBC)</a></li>
                            <li><a class="text-blue-600" href="https://www.td.com/ca/fr/services-bancaires-personnels" target="_blank" rel="noreferrer">Banque Toronto-Dominion (TD)</a></li>
                            <li><a class="text-blue-600" href="https://www.bmo.com/fr-ca/principal/particuliers/" target="_blank" rel="noreferrer">Banque de Montréal (BMO)</a></li>
                            <li><a class="text-blue-600" href="https://www.scotiabank.com/ca/fr/particuliers.html" target="_blank" rel="noreferrer">Banque Scotia (Scotiabank)</a></li>
                            <li><a class="text-blue-600" href="https://www.cibc.com/fr/personal-banking.html" target="_blank" rel="noreferrer">CIBC</a></li>
                            <li><a class="text-blue-600" href="https://www.tangerine.ca/fr" target="_blank" rel="noreferrer">Tangerine</a></li>
                            <li><a class="text-blue-600" href="https://www.desjardins.com/fr.html" target="_blank" rel="noreferrer">Desjardins</a></li>
                            <li><a class="text-blue-600" href="https://www.atb.com/personal/" target="_blank" rel="noreferrer">ATB</a></li>
                        </ul>

                        N'oubliez pas de prendre en compte les frais, les taux d'intérêt, les services en ligne, la disponibilité des succursales et d'autres facteurs importants lors de votre décision.<br><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                            <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Actualiser</button></li>
                        </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function fromSettlement(lang) {
    let nasBtn = document.querySelectorAll('.nasBtn');
    let bankBtn = document.querySelectorAll('.bankBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');
    playAudioInbox();

    nasBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("Social Insurance Number (SIN)");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        The SIN, or <a class="text-blue-600" href="https://www.canada.ca/en/employment-social-development/services/social-insurance-number.html" target="_blank" rel="noreferrer">Social Insurance Number</a>, is a unique nine-digit number issued by Service Canada, which is the agency responsible for government services related to employment, social programs, and benefits in Canada. The SIN is essentially a tax and social identification number used for various interactions with the government, including working, paying taxes, and accessing certain social programs and benefits.<br>

                        Both permanent and temporary residents in Canada generally require a SIN to work and access government services. You can obtain a SIN by applying directly to Service Canada. Typically, you will need to provide identification documents such as a work permit or confirmation of permanent residence, as well as proof of your immigration status and identity.<br>

                        It's important to note that the SIN is confidential and should be safeguarded. Do not share your SIN with unauthorized individuals and avoid using it for purposes other than those intended by government authorities.<br>

                        All in all, the SIN is a social insurance number issued by Service Canada to identify residents in Canada and allow them to access various government services. You can obtain it by applying to Service Canada and providing the required documents.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    bankBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser("The bank account");
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-end gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mb-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 px-2 text-sm md:text-md bg-teal-100 w-5/6 text-justify">
                        To open a bank account in Canada as a newcomer and permanent resident, follow these general steps:<br>
                        <ol>
                        <li><b>Choose a bank:</b> In Canada, there are several major national banks such as the Royal Bank of Canada (RBC), Toronto-Dominion Bank (TD), Bank of Montreal (BMO), Scotiabank, and CIBC. You can also consider online banks like Tangerine or credit unions.</li><br>
                        <li><b>Gather your documents:</b> You will typically need to provide identification documents such as your passport, permanent resident card, Canadian driver's license (if applicable), and proof of address in Canada, such as a lease agreement or utility bill.</li><br>
                        <li><b>Visit the bank:</b> Go to the branch of the bank of your choice with your documents. The bank staff will guide you through the account opening process.</li><br>
                        <li><b>Choose the account type:</b> Discuss with the bank advisor to determine the account type that best suits your needs. Options may include checking accounts, savings accounts, student accounts, etc.</li><br>
                        <li><b>Fill out the forms:</b> You will need to complete application forms and provide your personal information, such as your address, phone number, and Social Insurance Number (SIN).</li><br>
                        <li><b>Make an initial deposit:</b> Some banks may require an initial deposit to open the account. Check the requirements of the chosen bank.</li><br>
                        <li><b>Get cards and services:</b> Once your account is open, the bank will usually provide you with a debit card and information about online banking services.</li></ol><br>

                        Are you interested in knowing about some banks in Canada? You can find them below.
                        <ul>
                            <li><a class="text-blue-600" href="https://www.rbcroyalbank.com/personal.html" target="_blank" rel="noreferrer">Royal Bank of Canada (RBC)</a></li>
                            <li><a class="text-blue-600" href="https://www.td.com/ca/en/personal-banking/" target="_blank" rel="noreferrer">Toronto-Dominion Bank (TD)</a></li>
                            <li><a class="text-blue-600" href="https://www.bmo.com/main/personal" target="_blank" rel="noreferrer">Bank of Montreal (BMO)</a></li>
                            <li><a class="text-blue-600" href="https://www.scotiabank.com/ca/en/personal.html" target="_blank" rel="noreferrer">Scotiabank</a></li>
                            <li><a class="text-blue-600" href="https://www.cibc.com/en/personal-banking.html" target="_blank" rel="noreferrer">CIBC</a></li>
                            <li><a class="text-blue-600" href="https://www.tangerine.ca/en" target="_blank" rel="noreferrer">Tangerine</a></li>
                            <li><a class="text-blue-600" href="https://www.desjardins.com/ca/personal/" target="_blank" rel="noreferrer">Desjardins</a></li>
                            <li><a class="text-blue-600" href="https://www.atb.com/personal-banking/" target="_blank" rel="noreferrer">ATB</a></li>
                        </ul>

                        Remember to consider fees, interest rates, online services, branch availability, and other important factors when making your decision.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                            <li><button class="answer resetBtn bg-blue-300 w-3/4 text-start px-2 ml-2 py-1 hover:bg-blue-400 rounded-lg">Refresh</button></li>
                        </ul>
                        </h3>
                    </div>
                </div>
            `; playAudioInbox();
                refreshing(lang);
            }, 2000);
        })
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

// ######################################################
// ######################################################
// ######################################################









// ######################################################
// ######################################################
// ######################################################

currencyBtn.addEventListener('click', () => {
    let modalResult = document.querySelector('#modalResult');
    const cancelBtn = modalResult.querySelectorAll('.cancel');
    let currencyTemplate = document.querySelector('#currencyTemplate');
    let clone = currencyTemplate.content.cloneNode(true);
    modalResult.appendChild(clone);

    overlay.style.display = 'block';
    overlay.style.opacity = '0.8';
    overlay.style.visibility = 'visible';
    modalResult.style.transform = 'translate(-50%, -50%) scale(1)';
    let convertBtn = document.querySelector('#convertBtn');

    let familyMembers = document.querySelector('#familyMembers');
    let localCurrencyDiv = document.querySelector('.localCurrencyDiv');
    let localCurrencyValue = document.querySelector('#localCurrency');
    let amountDiv = document.querySelector('.amountDiv');
    let amount = document.querySelector('#amount');
    let canadianFunds = 0;
    let result = document.querySelector('#result');

    familyMembers.addEventListener('change', () => {
        if (familyMembers.value != '') {
            localCurrencyDiv.style.display = 'block';
        } else {
            localCurrencyDiv.style.display = 'none';
        }

        switch (familyMembers.value) {
            case "1":
                canadianFunds = 13757;
                break;
            case "2":
                canadianFunds = 17127;
                break;
            case "3":
                canadianFunds = 21055;
                break;
            case "4":
                canadianFunds = 25564;
                break;
            case "5":
                canadianFunds = 28994;
                break;
            case "6":
                canadianFunds = 32700;
                break;
            case "7":
                canadianFunds = 36407;
                break;
            case "8":
                canadianFunds = 40113;
                break;
            case "9":
                canadianFunds = 43819;
                break;
            case "10":
                canadianFunds = 47525;
                break;
            case "11":
                canadianFunds = 51231;
                break;
            case "12":
                canadianFunds = 54937;
                break;
            case "13":
                canadianFunds = 58643;
                break;
            case "14":
                canadianFunds = 62349;
                break;
            default:
                canadianFunds = 66055;
                break;
        }
    })

    localCurrencyValue.addEventListener('change', () => {
        if (localCurrencyValue.value != '') {
            convertBtn.disabled = false;
        } else {
            convertBtn.disabled = true;
        }
    })

    async function getCurrencyData() {
        const currencyType = document.querySelector('#localCurrency');

        const res = await fetch(API_URL);
        const data = await res.json();
        const rates = data.rates;
        const keys = Object.keys(rates);
        html = '';
        keys.forEach(key => {
            html += `<option value="${key}">${key}</option>`;
        })

        currencyType.innerHTML = html;
    }
    getCurrencyData();

    convertBtn.addEventListener('click', async () => {
        if (localCurrencyValue.value === '') {
            result.textContent = 'Please select a local currency.';
            return;
        }

        const selectedCurrency = localCurrencyValue.value;

        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            const exchangeRates = data.rates;

            if (exchangeRates[selectedCurrency]) {
                const equivalentInLocalCurrency = (canadianFunds * exchangeRates[selectedCurrency]).toFixed(2);
                const formattedNumber = equivalentInLocalCurrency.replace(/\d(?=(\d{3})+\.)/g, '$&,');

                selectedCurrency === 'CAD' ? result.innerHTML = `Required funds in Canadian dollars (CAD) for ${familyMembers.value} person${familyMembers.value > 1 ? 's' : ''} are: <b>${canadianFunds}$</b>, that's what you need to have in your bank account.` : result.innerHTML = `Required funds in Canadian dollars (CAD) for ${familyMembers.value} person${familyMembers.value > 1 ? 's' : ''}: <b>${canadianFunds}$</b>.<br/>
                In your local currency (${selectedCurrency}), you should have approximately: <b>${formattedNumber} ${selectedCurrency}</b>`;
            } else {
                result.textContent = 'Currency not found in exchange rates data.';
            }
        } catch (error) {
            result.textContent = 'An error occurred during currency conversion.';
        }
    })

    cancelBtn.forEach(element => {
        element.addEventListener('click', () => {
            overlay.style.display = 'none';
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
            modalResult.style.transform = 'translate(-50%, -50%) scale(0)';
            modalResult.innerHTML = `
            <button id="cancel" class="cancel absolute top-2 right-3 px-2 text-white bg-red-500 rounded hover:bg-red-600">
                <i class="fa-solid fa-xmark"></i>
            </button>
            `;
        });
    })
})
// ######################################################
// ######################################################
// ######################################################


// add event listeners to buttons and display the right component when clicked
homeBtn.addEventListener('click', () => {
    document.title = 'Maple Tools - Home';
    burger.checked = true;
    main.innerHTML = '';
    let clone = homeTemplate.content.cloneNode(true);
    main.appendChild(clone);
})
// ######################################################
// ######################################################
// ######################################################

eligibilityCalculatorBtn.addEventListener('click', () => {
    document.title = 'Maple Tools - Eligibility Calculator';
    let count = 0;
    main.innerHTML = '';
    let clone = eligibilityCalculatorTemplate.content.cloneNode(true);
    main.appendChild(clone);

    // declare variables for the form
    let eligibilityComponentDiv = document.querySelector('#eligibility_calculator');
    let eligibilityDiv = document.querySelector('.eligibility-div');
    let explanations = document.querySelectorAll('.fa-solid')

    let martialStatus = document.querySelector('.marital-status');

    let ageDiv = document.querySelector('.ageDiv');
    let ageInput = document.querySelector('[name="age"]');

    let educationDiv = document.querySelector('.educationDiv');
    let educationInput = document.querySelector('[name="education"]');

    let firstLangDiv = document.querySelector('.first-language-div');
    let firstLangInput = document.querySelector('[name="first-language-availability"]');
    let firstLangTypeDiv = document.querySelector('.first-language-typeDiv');
    let firstLangTypeInput = document.querySelector('[name="first-language-type"]');
    let firstLangScoresDiv = document.querySelector('.first-language-scoresDiv');
    let firstLangReadingInput = document.querySelector('[name="first-language-reading"]');
    let firstLangWritingInput = document.querySelector('[name="first-language-writing"]');
    let firstLangListeningInput = document.querySelector('[name="first-language-listening"]');
    let firstLangSpeakingInput = document.querySelector('[name="first-language-speaking"]');

    let secondLangDiv = document.querySelector('.second-language-div');
    let secondLangInput = document.querySelector('[name="second-language-availability"]');
    let secondLangTypeDiv = document.querySelector('.second-language-typeDiv');
    let secondLangTypeInput = document.querySelector('[name="second-language-type"]');
    let secondLangScoresDiv = document.querySelector('.second-language-scoresDiv');
    let secondLangScoresInput = document.querySelector('[name="second-language-scores"]');

    let workExpDiv = document.querySelector('.work-experience-div');
    let workExpInput = document.querySelector('[name="work-experience"]');

    let reservedJobDiv = document.querySelector('.reserved-job-position-in-canada-div');
    let reservedJobInput = document.querySelector('[name="reserved-job-position-in-canada"]');

    let studyDiv = document.querySelector('.study-canada-div');
    let studyInput = document.querySelector('[name="study-canada"]');

    let workExpInCanadaDiv = document.querySelector('.work-experience-canada-div');
    let workExpInCanadaInput = document.querySelector('[name="work-experience-canada"]');

    let jobOfferDiv = document.querySelector('.job-offer-div');
    let jobOfferInput = document.querySelector('[name="job-offer"]');

    let relativesDiv = document.querySelector('.relatives-div');
    let relativesInput = document.querySelector('[name="relatives"]');

    let spouseLangDiv = document.querySelector('.spouse-language-div');
    let spouseLangInput = document.querySelector('[name="spouse-language-availability"]');

    let spouseEducationDiv = document.querySelector('.spouse-education-div');
    let spouseEducationInput = document.querySelector('[name="spouse-education"]');

    let spouseWorkExpDiv = document.querySelector('.spouse-work-experience-div');
    let spouseWorkExpInput = document.querySelector('[name="spouse-work-experience"]');

    let overlay = document.querySelector('#overlay');
    let modal = document.querySelector('#modal');
    let modalResult = document.querySelector('#modalResult');
    let modalConfirmation = document.querySelector('#modalConfirmation');
    let btnReset = document.querySelector('.btn-reset');
    let btnCalculate = document.querySelector('.btn-calculate');
    let noticeDiv = document.querySelector('.noticeEligibility');


    martialStatus.addEventListener('change', () => {
        let spanMarried = document.querySelector('#marriedOrNot');
        if (martialStatus.value == 'married') {
            spanMarried.textContent = 'or your spouse';
        } else {
            spanMarried.textContent = '';
        }
        ageDiv.style.display = 'block';
        ageInput.scrollIntoView({ behavior: 'smooth' })
        btnReset.disabled = false;
    })

    ageInput.addEventListener('change', () => {
        if (ageInput.value >= 18 && ageInput.value <= 35) {
            ageScore = 12;
        } else if (ageInput.value == 36) {
            ageScore = 11;
        } else if (ageInput.value == 37) {
            ageScore = 10;
        } else if (ageInput.value == 38) {
            ageScore = 9;
        } else if (ageInput.value == 39) {
            ageScore = 8;
        } else if (ageInput.value == 40) {
            ageScore = 7;
        } else if (ageInput.value == 41) {
            ageScore = 6;
        } else if (ageInput.value == 42) {
            ageScore = 5;
        } else if (ageInput.value == 43) {
            ageScore = 4;
        } else if (ageInput.value == 44) {
            ageScore = 3;
        } else if (ageInput.value == 45) {
            ageScore = 2;
        } else if (ageInput.value == 46) {
            ageScore = 1;
        } else if (ageInput.value >= 47) {
            ageScore = 0;
        }

        educationDiv.style.display = 'block';
        educationInput.scrollIntoView({ behavior: 'smooth' })
        noticeDiv.style.display = 'none';

        if (ageInput.value == 17) {
            ageScore = 0;
            educationDiv.style.display = 'none';
            noticeDiv.style.display = 'block';
            noticeDiv.innerHTML += `
                You cannot create a profile if you are 17 years old or less
                `;
            noticeDiv.scrollIntoView({ behavior: 'smooth' })
        } else if (ageInput.value == '') {
            noticeDiv.style.display = 'none';
            educationDiv.style.display = 'none';
            noticeDiv.innerHTML = '';
        }
    })

    educationInput.addEventListener('change', () => {
        if (educationInput.value == 'secondary') {
            educationScore = 5;
        } else if (educationInput.value == 'one-year') {
            educationScore = 15;
        } else if (educationInput.value == 'two-year') {
            educationScore = 19;
        } else if (educationInput.value == 'bachelors') {
            educationScore = 21;
        } else if (educationInput.value == 'two-or-more') {
            educationScore = 22;
        } else if (educationInput.value == 'masters') {
            educationScore = 23;
        } else if (educationInput.value == 'doctoral') {
            educationScore = 25;
        } else {
            educationScore = 0;
        }
        firstLangDiv.style.display = 'block';
        firstLangInput.scrollIntoView({ behavior: 'smooth' })
    })

    firstLangInput.addEventListener('change', () => {
        if (firstLangInput.value == 'yes') {
            firstLangTypeDiv.style.display = 'block';
            firstLangTypeInput.scrollIntoView({ behavior: 'smooth' })
            noticeDiv.style.display = 'none';
            noticeDiv.innerHTML = '';

        } else {
            firstLangTypeDiv.style.display = 'none';
            firstLangScoresDiv.style.display = 'none';
            noticeDiv.style.display = 'block';
            noticeDiv.innerHTML = `
                You should have a language test to be eligible to Express Entry
                `;
            noticeDiv.scrollIntoView({ behavior: 'smooth' })
        }
    })

    firstLangTypeInput.addEventListener('change', () => {
        secondLangTypeInput.querySelector('option[value="ielts"]').style.display = 'block';
        secondLangTypeInput.querySelector('option[value="celpip"]').style.display = 'block';
        secondLangTypeInput.querySelector('option[value="tef-canada"]').style.display = 'block';
        secondLangTypeInput.querySelector('option[value="tcf-canada"]').style.display = 'block';

        if (firstLangTypeInput.value == 'ielts' || firstLangTypeInput.value == 'celpip') {
            firstLangScoresDiv.style.display = 'block';
            firstLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
            secondLangTypeInput.querySelector('option[value="ielts"]').style.display = 'none';
            secondLangTypeInput.querySelector('option[value="celpip"]').style.display = 'none';
        } else if (firstLangTypeInput.value == 'tef-canada' || firstLangTypeInput.value == 'tcf-canada') {
            firstLangScoresDiv.style.display = 'block';
            firstLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
            secondLangTypeInput.querySelector('option[value="tef-canada"]').style.display = 'none';
            secondLangTypeInput.querySelector('option[value="tcf-canada"]').style.display = 'none';
        } else {
            firstLangScoresDiv.style.display = 'none';
        }
        firstLangReadingInput.value = '';
        firstLangWritingInput.value = '';
        firstLangListeningInput.value = '';
        firstLangSpeakingInput.value = '';
    })

    firstLangReadingInput.addEventListener('change', () => {
        getScoreOfFirstLangSkill(0, 'reading', firstLangReadingInput);
        firstLangScore = calculateLanguageScore(firstLangScoresArray);
        errorLanguageSkill(firstLangReadingInput, 'reading');
        hideError();
        triggerSecondLangDiv(firstLangReadingInput, firstLangWritingInput, firstLangListeningInput, firstLangSpeakingInput, secondLangDiv);
    })

    firstLangWritingInput.addEventListener('change', () => {
        getScoreOfFirstLangSkill(1, 'writing', firstLangWritingInput);
        firstLangScore = calculateLanguageScore(firstLangScoresArray);
        errorLanguageSkill(firstLangWritingInput, 'writing');
        hideError();
        triggerSecondLangDiv(firstLangReadingInput, firstLangWritingInput, firstLangListeningInput, firstLangSpeakingInput, secondLangDiv);
    })

    firstLangListeningInput.addEventListener('change', () => {
        getScoreOfFirstLangSkill(2, 'listening', firstLangListeningInput);
        firstLangScore = calculateLanguageScore(firstLangScoresArray);
        errorLanguageSkill(firstLangListeningInput, 'listening');
        hideError();
        triggerSecondLangDiv(firstLangReadingInput, firstLangWritingInput, firstLangListeningInput, firstLangSpeakingInput, secondLangDiv);
    })

    firstLangSpeakingInput.addEventListener('change', () => {
        getScoreOfFirstLangSkill(3, 'speaking', firstLangSpeakingInput);
        firstLangScore = calculateLanguageScore(firstLangScoresArray);
        errorLanguageSkill(firstLangSpeakingInput, 'speaking');
        hideError();
        triggerSecondLangDiv(firstLangReadingInput, firstLangWritingInput, firstLangListeningInput, firstLangSpeakingInput, secondLangDiv);
    })

    function errorLanguageSkill(input, skill) {
        const existingMessage = `You should get at least "CLB 7" in ${skill} skill to be eligible to Express Entry`;
        const listElements = noticeDiv.getElementsByClassName('listElement');
        let messageExists = false;

        for (let i = 0; i < listElements.length; i++) {
            if (listElements[i].textContent == existingMessage) {
                messageExists = true;
            }
        }

        if (input.value == '' || input.value == 'first-language-' + skill + '-clb6') {
            if (!messageExists) {
                noticeDiv.style.display = 'block';
                noticeDiv.innerHTML += `
                <li class="listElement">You should get at least "CLB 7" in ${skill} skill to be eligible to Express Entry</li>
                `;
            }
        } else {
            if (messageExists) {
                for (let i = 0; i < listElements.length; i++) {
                    if (listElements[i].textContent == existingMessage) {
                        listElements[i].remove();
                    }
                }
                if (listElements.length == 0) {
                    noticeDiv.style.display = 'none';
                }
            }
        }
    }

    function hideError() {
        if ((firstLangReadingInput.value != '' && firstLangReadingInput.value != 'first-language-reading-clb6') && (firstLangWritingInput.value != '' && firstLangWritingInput.value != 'first-language-writing-clb6') && (firstLangListeningInput.value != '' && firstLangListeningInput.value != 'first-language-listening-clb6') && (firstLangSpeakingInput.value != '' && firstLangSpeakingInput.value != 'first-language-speaking-clb6')) {
            noticeDiv.style.display = 'none';
        }
    }

    secondLangInput.addEventListener('change', () => {
        if (secondLangInput.value == 'yes') {
            secondLangTypeDiv.style.display = 'block';
            secondLangTypeDiv.scrollIntoView({ behavior: 'smooth' })
            secondLangTypeInput.value = '';
            workExpDiv.style.display = 'none';
        } else {
            secondLangTypeDiv.style.display = 'none';
            secondLangScoresDiv.style.display = 'none';
            workExpDiv.style.display = 'block';
            workExpDiv.scrollIntoView({ behavior: 'smooth' })
        }
    })

    secondLangTypeInput.addEventListener('change', () => {
        if (secondLangTypeInput.value == 'ielts' || secondLangTypeInput.value == 'celpip') {
            secondLangScoresDiv.style.display = 'block';
            secondLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
        } else if (secondLangTypeInput.value == 'tef-canada' || secondLangTypeInput.value == 'tcf-canada') {
            secondLangScoresDiv.style.display = 'block';
            secondLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
        } else {
            secondLangScoresDiv.style.display = 'none';
        }
    })

    secondLangScoresInput.addEventListener('change', () => {
        secondLangScoresInput.value == 'yes' ? secondLangScore = 4 : secondLangScore = 0;
        workExpDiv.style.display = 'block';
        workExpDiv.scrollIntoView({ behavior: 'smooth' })
    })

    workExpInput.addEventListener('change', () => {
        if (workExpInput.value === '1') {
            workExpeScore = 9;
        } else if (workExpInput.value === '2-3') {
            workExpeScore = 11;
        } else if (workExpInput.value === '4-5') {
            workExpeScore = 13;
        } else if (workExpInput.value === '6') {
            workExpeScore = 15;
        }
        reservedJobDiv.style.display = 'block';
        reservedJobDiv.scrollIntoView({ behavior: 'smooth' })
        if (workExpInput.value === '') {
            workExpeScore = 0;
            reservedJobDiv.style.display = 'none';
        }
    })

    reservedJobInput.addEventListener('change', () => {
        if (reservedJobInput.value == 'yes') {
            reservedJobScore = 10;
        } else if (reservedJobInput.value == 'no') {
            reservedJobScore = 0;
        }

        studyDiv.style.display = 'block';
        studyDiv.scrollIntoView({ behavior: 'smooth' })

        if (reservedJobInput.value == '') {
            reservedJobScore = 0;
            studyDiv.style.display = 'none';
        }
    })

    studyInput.addEventListener('change', () => {
        if (studyInput.value == 'yes') {
            studyScore = 5;
        } else if (studyInput.value == 'no') {
            studyScore = 0;
        }

        workExpInCanadaDiv.style.display = 'block';
        workExpInCanadaDiv.scrollIntoView({ behavior: 'smooth' })

        if (studyInput.value == '') {
            studyScore = 0;
            workExpInCanadaDiv.style.display = 'none';
        }

        adaptabilityScore += studyScore;
    })

    workExpInCanadaInput.addEventListener('change', () => {
        if (workExpInCanadaInput.value == 'yes') {
            workExpInCanadaScore = 10;
        } else if (workExpInCanadaInput.value == 'no') {
            workExpInCanadaScore = 0;
        }

        jobOfferDiv.style.display = 'block';
        jobOfferDiv.scrollIntoView({ behavior: 'smooth' })

        if (workExpInCanadaInput.value == '') {
            workExpInCanadaScore = 0;
            jobOfferDiv.style.display = 'none';
        }

        adaptabilityScore += workExpInCanadaScore;
    })

    jobOfferInput.addEventListener('change', () => {
        if (jobOfferInput.value == 'yes') {
            jobOfferScore = 5;
        } else if (jobOfferInput.value == 'no') {
            jobOfferScore = 0;
        }

        relativesDiv.style.display = 'block';
        relativesDiv.scrollIntoView({ behavior: 'smooth' })

        if (jobOfferInput.value == '') {
            jobOfferScore = 0;
            relativesDiv.style.display = 'none';
        }

        adaptabilityScore += jobOfferScore;
    })

    relativesInput.addEventListener('change', () => {
        if (relativesInput.value == 'yes') {
            relativesScore = 5;
        } else if (relativesInput.value == 'no') {
            relativesScore = 0;
        }

        if (martialStatus.value == 'married') {
            spouseLangDiv.style.display = 'block';
            spouseLangDiv.scrollIntoView({ behavior: 'smooth' })
        } else {
            spouseLangDiv.style.display = 'none';
            btnCalculate.disabled = false;
        }

        if (relativesInput.value == '') {
            relativesScore = 0;
            spouseLangDiv.style.display = 'none';
        }

        adaptabilityScore += relativesScore;
    })

    spouseLangInput.addEventListener('change', () => {
        if (spouseLangInput.value == 'yes') {
            spouseLangScore = 5;
        } else if (spouseLangInput.value == 'no') {
            spouseLangScore = 0;
        }

        spouseEducationDiv.style.display = 'block';
        spouseEducationDiv.scrollIntoView({ behavior: 'smooth' })

        if (spouseLangInput.value == '') {
            spouseLangScore = 0;
            spouseEducationDiv.style.display = 'none';
        }

        adaptabilityScore += spouseLangScore;
    })

    spouseEducationInput.addEventListener('change', () => {
        if (spouseEducationInput.value == 'yes') {
            spouseEducationScore = 5;
        } else if (spouseEducationInput.value == 'no') {
            spouseEducationScore = 0;
        }

        spouseWorkExpDiv.style.display = 'block';
        spouseWorkExpDiv.scrollIntoView({ behavior: 'smooth' })

        if (spouseEducationInput.value == '') {
            spouseEducationScore = 0;
            spouseWorkExpDiv.style.display = 'none';
        }

        adaptabilityScore += spouseEducationScore;
    })

    spouseWorkExpInput.addEventListener('change', () => {
        if (spouseWorkExpInput.value == 'yes') {
            spouseWorkExpScore = 5;
        } else if (spouseWorkExpInput.value == 'no') {
            spouseWorkExpScore = 0;
        }

        if (spouseWorkExpInput.value == '') {
            spouseWorkExpScore = 0;
        }

        adaptabilityScore += spouseWorkExpScore;
        btnCalculate.disabled = false;
        btnCalculate.scrollIntoView({ behavior: 'smooth' })
    })

    function showResultModal(count) {
        adaptabilityScore > 10 ? adaptabilityScore = 10 : adaptabilityScore = adaptabilityScore;
        count = educationScore + ageScore + firstLangScore + secondLangScore + workExpeScore + reservedJobScore + adaptabilityScore;

        let modalResult = document.querySelector('#modalResult');

        if (count >= 67) {
            modalResult.style.backgroundColor = '#c3ffc3';
            let audio = new Audio('assets/sounds/success.mp3');
            audio.play();
        } else {
            modalResult.style.backgroundColor = '#fcc2c2';
            let audio = new Audio('assets/sounds/failure.mp3');
            audio.play();
        }

        modalResult.innerHTML += `
        <div class="mt-5 flex flex-col items-around justify-between gap-10">
        <h1 class="text-center text-3xl font-bold underline md:text-4xl">${count >= 67 ? 'Congratulations <i class="fa-solid fa-face-smile mb-3"></i>' : 'Condolences <i class="fa-solid fa-face-sad-tear mb-3"></i>'}</h1>
        <div class="indent-8 text-2xl md:text-3xl mt-2">
        <li><b>Age:</b> ${ageScore}</li>
        <li><b>Education:</b> ${educationScore}</li>
        <li><b>First Language:</b> ${firstLangScore}</li>
        <li><b>Second Language:</b> ${secondLangScore}</li>
        <li><b>Work Experience:</b> ${workExpeScore}</li>
        <li><b>Reserved Job:</b> ${reservedJobScore}</li>
        <li><b>Adaptability:</b> ${adaptabilityScore}</li>
        </div>
        <h2 class="text-center text-xl mt-3 md:text-3xl">Your score is <b>${count}</b></h2>
        </div>
        `;

        overlay.style.display = 'block';
        overlay.style.opacity = '0.8';
        overlay.style.visibility = 'visible';
        modalResult.style.transform = 'translate(-50%, -50%) scale(1)';

        function hideResultModal() {
            modalResult.style.transform = 'translate(-50%, -50%) scale(0)';
            overlay.style.display = 'none';
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
            modalResult.querySelector('div').remove(); // Clear the modal content for the next time
            cancelButton.removeEventListener('click', hideResultModal);
            resetAll();
        }

        let cancelButton = document.querySelector('#cancel');
        cancelButton.addEventListener('click', hideResultModal);
    }

    btnCalculate.addEventListener('click', showResultModal);

    btnReset.addEventListener('click', resetAll)

    for (let explanation of explanations) {
        explanation.addEventListener('click', () => {
            if (explanation.classList.contains('fa-question')) {
                overlay.style.display = 'block';
                overlay.style.opacity = '0.8';
                overlay.style.visibility = 'visible';
                modal.style.transform = 'translate(-50%, -50%) scale(1)';
                modal.innerHTML = explanation.parentElement.nextElementSibling.innerHTML;
            } else {
                return;
            }

            const cancelBtn = modal.querySelectorAll('.cancelButton');

            cancelBtn.forEach(element => {
                element.addEventListener('click', () => {
                    overlay.style.display = 'none';
                    overlay.style.opacity = '0';
                    overlay.style.visibility = 'hidden';
                    modal.style.transform = 'translate(-50%, -50%) scale(0)';
                });
            })
        });
    }

    function resetAll() {
        count = 0;
        educationScore = 0;
        ageScore = 0;
        firstLangScore = 0;
        firstLangScoresArray = [0, 0, 0, 0];
        secondLangScore = 0;
        secondLangScoresArray = [0, 0, 0, 0];
        workExpeScore = 0;
        reservedJobScore = 0;
        studyScore = 0;
        workExpInCanadaScore = 0;
        relativesScore = 0;
        spouseLangScore = 0;
        spouseEducationScore = 0;
        spouseWorkExpScore = 0;
        adaptabilityScore = 0;
        martialStatus.value = '';
        ageDiv.style.display = 'none';
        ageInput.value = '';
        educationDiv.style.display = 'none';
        educationInput.value = '';
        firstLangDiv.style.display = 'none';
        firstLangInput.value = '';
        firstLangTypeDiv.style.display = 'none';
        firstLangTypeInput.value = '';
        firstLangScoresDiv.style.display = 'none';
        firstLangReadingInput.value = 'first-language-reading-clb6';
        firstLangWritingInput.value = 'first-language-writing-clb6';
        firstLangListeningInput.value = 'first-language-listening-clb6';
        firstLangSpeakingInput.value = 'first-language-speaking-clb6';
        secondLangDiv.style.display = 'none';
        secondLangInput.value = '';
        secondLangTypeDiv.style.display = 'none';
        secondLangTypeInput.value = '';
        secondLangScoresDiv.style.display = 'none';
        secondLangScoresInput.value = '';
        workExpDiv.style.display = 'none';
        workExpInput.value = '';
        reservedJobDiv.style.display = 'none';
        reservedJobInput.value = '';
        studyDiv.style.display = 'none';
        studyInput.value = '';
        workExpInCanadaDiv.style.display = 'none';
        workExpInCanadaInput.value = '';
        jobOfferDiv.style.display = 'none';
        jobOfferInput.value = '';
        relativesDiv.style.display = 'none';
        relativesInput.value = '';
        spouseLangDiv.style.display = 'none';
        spouseLangInput.value = '';
        spouseEducationDiv.style.display = 'none';
        spouseEducationInput.value = '';
        spouseWorkExpDiv.style.display = 'none';
        spouseWorkExpInput.value = '';
        btnReset.disabled = true;
        btnCalculate.disabled = true;
        eligibilityDiv.style.backgroundColor = '#e2e8f0';
        modalResult.style.backgroundColor = '#f7e6e6';
    }
})
// ######################################################
// ######################################################
// ######################################################



for (let btn of navButtons) {
    btn.addEventListener('click', () => {
        let current = document.getElementsByClassName('active');
        current[0].disabled = false;
        current[0].classList.remove('active');
        btn.classList.add('active');
        btn.disabled = true;
    })
}


// function triggerSecondLangDiv(reading, writing, listening, speaking, divSecondLang) {
//     if ((reading.value == '' || reading.value == 'first-language-reading-clb6') || (writing.value == '' || writing.value == 'first-language-writing-clb6') || (listening.value == '' || listening.value == 'first-language-listening-clb6') || (speaking.value == '' || speaking.value == 'first-language-speaking-clb6')) {
//         divSecondLang.style.display = 'none';
//     } else {
//         divSecondLang.style.display = 'block';
//         divSecondLang.scrollIntoView({ behavior: 'smooth' })
//     }
// }

// function getScoreOfFirstLangSkill(index, skill, langSkillInput) {
//     if (langSkillInput.value == '') {
//         firstLangScoresArray[index] = 0;
//     } else if (langSkillInput.value == `first-language-${skill}-clb6`) {
//         firstLangScoresArray[index] = 0;
//     } else if (langSkillInput.value == `first-language-${skill}-clb7`) {
//         firstLangScoresArray[index] = 4;
//     } else if (langSkillInput.value == `first-language-${skill}-clb8`) {
//         firstLangScoresArray[index] = 5;
//     } else if (langSkillInput.value == `first-language-${skill}-clb9`) {
//         firstLangScoresArray[index] = 6;
//     }
// }


// function calculateLanguageScore(langArray) {
//     let langScore = langArray[0] + langArray[1] + langArray[2] + langArray[3];
//     return langScore;
// }



// ######################################################
// ######################################################
// ######################################################

crsBtn.addEventListener('click', () => {
    document.title = 'Maple Tools - CRS Calculator';
    let count = 0;
    main.innerHTML = '';
    let clone = crsTemplate.content.cloneNode(true);
    main.appendChild(clone);

    new crsClass();
})
// ######################################################
// ######################################################
// ######################################################




// function fillLanguageReading(language, readingInput) {
//     if (language == 'ielts') {
//         readingInput.options[1].innerHTML = '8.0 - 9.0';
//         readingInput.options[2].innerHTML = '7.0 - 7.5';
//         readingInput.options[3].innerHTML = '6.5';
//         readingInput.options[4].innerHTML = '6.0';
//         readingInput.options[5].innerHTML = '5.0 - 5.5';
//         readingInput.options[6].innerHTML = '4.0 - 4.5';
//         readingInput.options[7].innerHTML = '3.5';
//         readingInput.options[8].innerHTML = '0 - 3.0';
//     } else if (language == 'tef-canada') {
//         readingInput.options[1].innerHTML = '263 - 300';
//         readingInput.options[2].innerHTML = '248 - 262';
//         readingInput.options[3].innerHTML = '233 - 247';
//         readingInput.options[4].innerHTML = '207 - 232';
//         readingInput.options[5].innerHTML = '181 - 206';
//         readingInput.options[6].innerHTML = '151 - 180';
//         readingInput.options[7].innerHTML = '121 - 150';
//         readingInput.options[8].innerHTML = '0 - 120';
//     } else if (language == 'tcf-canada') {
//         readingInput.options[1].innerHTML = '549 - 699';
//         readingInput.options[2].innerHTML = '524 - 548';
//         readingInput.options[3].innerHTML = '499 - 523';
//         readingInput.options[4].innerHTML = '453 - 498';
//         readingInput.options[5].innerHTML = '406 - 452';
//         readingInput.options[6].innerHTML = '375 - 405';
//         readingInput.options[7].innerHTML = '342 - 374';
//         readingInput.options[8].innerHTML = '0 - 341';
//     } else if (language == 'celpip') {
//         readingInput.options[1].innerHTML = '10 - 12';
//         readingInput.options[2].innerHTML = '9';
//         readingInput.options[3].innerHTML = '8';
//         readingInput.options[4].innerHTML = '7';
//         readingInput.options[5].innerHTML = '6';
//         readingInput.options[6].innerHTML = '5';
//         readingInput.options[7].innerHTML = '4';
//         readingInput.options[8].innerHTML = 'M, 0 - 3';
//     }
// }

// function fillLanguageWriting(language, writingInput) {
//     if (language == 'ielts') {
//         writingInput.options[1].innerHTML = '7.5 - 9.0';
//         writingInput.options[2].innerHTML = '7.0';
//         writingInput.options[3].innerHTML = '6.5';
//         writingInput.options[4].innerHTML = '6.0';
//         writingInput.options[5].innerHTML = '5.5';
//         writingInput.options[6].innerHTML = '5.0';
//         writingInput.options[7].innerHTML = '4.0 - 4.5';
//         writingInput.options[8].innerHTML = '0 - 3.5';
//     } else if (language == 'tef-canada') {
//         writingInput.options[1].innerHTML = '393 - 450';
//         writingInput.options[2].innerHTML = '371 - 392';
//         writingInput.options[3].innerHTML = '349 - 370';
//         writingInput.options[4].innerHTML = '310 - 348';
//         writingInput.options[5].innerHTML = '271 - 309';
//         writingInput.options[6].innerHTML = '226 - 270';
//         writingInput.options[7].innerHTML = '181 - 225';
//         writingInput.options[8].innerHTML = '0 - 180';
//     } else if (language == 'tcf-canada') {
//         writingInput.options[1].innerHTML = '16 - 20';
//         writingInput.options[2].innerHTML = '14 - 15';
//         writingInput.options[3].innerHTML = '12 - 13';
//         writingInput.options[4].innerHTML = '10 - 11';
//         writingInput.options[5].innerHTML = '7 - 9';
//         writingInput.options[6].innerHTML = '6';
//         writingInput.options[7].innerHTML = '4 - 5';
//         writingInput.options[8].innerHTML = '0 - 3';
//     } else if (language == 'celpip') {
//         writingInput.options[1].innerHTML = '10 - 12';
//         writingInput.options[2].innerHTML = '9';
//         writingInput.options[3].innerHTML = '8';
//         writingInput.options[4].innerHTML = '7';
//         writingInput.options[5].innerHTML = '6';
//         writingInput.options[6].innerHTML = '5';
//         writingInput.options[7].innerHTML = '4';
//         writingInput.options[8].innerHTML = 'M, 0 - 3';
//     }
// }

// function fillLanguageListening(language, listeningInput) {
//     if (language == 'ielts') {
//         listeningInput.options[1].innerHTML = '8.5 - 9.0';
//         listeningInput.options[2].innerHTML = '8.0';
//         listeningInput.options[3].innerHTML = '7.5';
//         listeningInput.options[4].innerHTML = '6.0 - 7.0';
//         listeningInput.options[5].innerHTML = '5.5';
//         listeningInput.options[6].innerHTML = '5.0';
//         listeningInput.options[7].innerHTML = '4.5';
//         listeningInput.options[8].innerHTML = '0 - 4.0';
//     } else if (language == 'tef-canada') {
//         listeningInput.options[1].innerHTML = '316 - 360';
//         listeningInput.options[2].innerHTML = '298 - 315';
//         listeningInput.options[3].innerHTML = '280 - 297';
//         listeningInput.options[4].innerHTML = '249 - 279';
//         listeningInput.options[5].innerHTML = '217 - 248';
//         listeningInput.options[6].innerHTML = '181 - 216';
//         listeningInput.options[7].innerHTML = '145 - 180';
//         listeningInput.options[8].innerHTML = '0 - 144';
//     } else if (language == 'tcf-canada') {
//         listeningInput.options[1].innerHTML = '549 - 699';
//         listeningInput.options[2].innerHTML = '523 - 548';
//         listeningInput.options[3].innerHTML = '503 - 522';
//         listeningInput.options[4].innerHTML = '458 - 502';
//         listeningInput.options[5].innerHTML = '398 - 457';
//         listeningInput.options[6].innerHTML = '369 - 397';
//         listeningInput.options[7].innerHTML = '331 - 368';
//         listeningInput.options[8].innerHTML = '0 - 330';
//     } else if (language == 'celpip') {
//         listeningInput.options[1].innerHTML = '10 - 12';
//         listeningInput.options[2].innerHTML = '9';
//         listeningInput.options[3].innerHTML = '8';
//         listeningInput.options[4].innerHTML = '7';
//         listeningInput.options[5].innerHTML = '6';
//         listeningInput.options[6].innerHTML = '5';
//         listeningInput.options[7].innerHTML = '4';
//         listeningInput.options[8].innerHTML = 'M, 0 - 3';
//     }
// }

// function fillLanguageSpeaking(language, speakingInput) {
//     if (language == 'ielts') {
//         speakingInput.options[1].innerHTML = '7.5 - 9.0';
//         speakingInput.options[2].innerHTML = '7.0';
//         speakingInput.options[3].innerHTML = '6.5';
//         speakingInput.options[4].innerHTML = '6.0';
//         speakingInput.options[5].innerHTML = '5.5';
//         speakingInput.options[6].innerHTML = '5.0';
//         speakingInput.options[7].innerHTML = '4.0 - 4.5';
//         speakingInput.options[8].innerHTML = '0 - 3.5';
//     } else if (language == 'tef-canada') {
//         speakingInput.options[1].innerHTML = '393 - 450';
//         speakingInput.options[2].innerHTML = '371 - 392';
//         speakingInput.options[3].innerHTML = '349 - 370';
//         speakingInput.options[4].innerHTML = '310 - 348';
//         speakingInput.options[5].innerHTML = '271 - 309';
//         speakingInput.options[6].innerHTML = '226 - 270';
//         speakingInput.options[7].innerHTML = '181 - 225';
//         speakingInput.options[8].innerHTML = '0 - 180';
//     } else if (language == 'tcf-canada') {
//         speakingInput.options[1].innerHTML = '16 - 20';
//         speakingInput.options[2].innerHTML = '14 - 15';
//         speakingInput.options[3].innerHTML = '12 - 13';
//         speakingInput.options[4].innerHTML = '10 - 11';
//         speakingInput.options[5].innerHTML = '7 - 9';
//         speakingInput.options[6].innerHTML = '6';
//         speakingInput.options[7].innerHTML = '4 - 5';
//         speakingInput.options[8].innerHTML = '0 - 3';
//     } else if (language == 'celpip') {
//         speakingInput.options[1].innerHTML = '10 - 12';
//         speakingInput.options[2].innerHTML = '9';
//         speakingInput.options[3].innerHTML = '8';
//         speakingInput.options[4].innerHTML = '7';
//         speakingInput.options[5].innerHTML = '6';
//         speakingInput.options[6].innerHTML = '5';
//         speakingInput.options[7].innerHTML = '4';
//         speakingInput.options[8].innerHTML = 'M, 0 - 3';
//     }
// }

// function getPointsFirstLanguage(statusMarital, singleOrMarried, languageSkill, langArray, index) {
//     if (statusMarital == 'married' && singleOrMarried == false) {
//         if (languageSkill == 'clb10') {
//             langArray[index] = 32;
//         } else if (languageSkill == 'clb9') {
//             langArray[index] = 29;
//         } else if (languageSkill == 'clb8') {
//             langArray[index] = 22;
//         } else if (languageSkill == 'clb7') {
//             langArray[index] = 16;
//         } else if (languageSkill == 'clb6') {
//             langArray[index] = 8;
//         } else if (languageSkill == 'clb5' || languageSkill == 'clb4') {
//             langArray[index] = 6;
//         } else {
//             langArray[index] = 0;
//         }
//     } else if ((statusMarital == 'married' && singleOrMarried == true) || statusMarital == 'single') {
//         if (languageSkill == 'clb10') {
//             langArray[index] = 34;
//         } else if (languageSkill == 'clb9') {
//             langArray[index] = 31;
//         } else if (languageSkill == 'clb8') {
//             langArray[index] = 23;
//         } else if (languageSkill == 'clb7') {
//             langArray[index] = 17;
//         } else if (languageSkill == 'clb6') {
//             langArray[index] = 9;
//         } else if (languageSkill == 'clb5' || languageSkill == 'clb4') {
//             langArray[index] = 6;
//         } else {
//             langArray[index] = 0;
//         }
//     }
// }

// function getPointsSecondLanguage(languageSkill, langArray, index) {
//     if (languageSkill == 'clb9' || languageSkill == 'clb10') {
//         langArray[index] = 6;
//     } else if (languageSkill == 'clb7' || languageSkill == 'clb8') {
//         langArray[index] = 3;
//     } else if (languageSkill == 'clb5' || languageSkill == 'clb6') {
//         langArray[index] = 1;
//     } else {
//         langArray[index] = 0;
//     }
// }

// function getPointsLanguageSpouse(languageSkill, langArray, index) {
//     if (languageSkill == 'clb10' || languageSkill == 'clb9') {
//         langArray[index] = 5;
//     } else if (languageSkill == 'clb8' || languageSkill == 'clb7') {
//         langArray[index] = 3;
//     } else if (languageSkill == 'clb6' || languageSkill == 'clb5') {
//         langArray[index] = 1;
//     } else {
//         langArray[index] = 0;
//     }
// }

// ######################################################
// ######################################################
// ######################################################
nclcBtn.addEventListener('click', () => {
    document.title = 'Maple Tools - CLB Calculator';
    main.innerHTML = '';
    let clone = nclcTemplate.content.cloneNode(true);
    main.appendChild(clone);

    new clbClass();
})
// ######################################################
// ######################################################
// ######################################################

// ######################################################
// ######################################################
// ######################################################
suggestedpnpBtn.addEventListener('click', () => {
    document.title = 'Maple Tools - Suggested PNP';
    main.innerHTML = '';
    let clone = suggestedpnpTemplate.content.cloneNode(true);
    main.appendChild(clone);

    new SuggestedPnpClass();
})

// ######################################################
// ######################################################
// ######################################################
ebooksBtn.addEventListener('click', () => {
    document.title = 'Maple Tools - Ebooks';
    main.innerHTML = '';
    let clone = ebooksTemplate.content.cloneNode(true);
    main.appendChild(clone);
})

// ######################################################
// ######################################################
// ######################################################
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