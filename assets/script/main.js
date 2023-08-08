// scraping data from website
let tabDraw = {}
async function scrapeData() {
    try {
        // Fetch the HTML content from the target website
        const response = await fetch('https://moving2canada.com/immigration/express-entry/express-entry-draw/');
        const html = await response.text();
        // Parse the HTML using DOMParser
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        // Find the table on the page (in this case, it's the first table)
        for (let i = 1; i < 12; i++) {
            let nbDraw = doc.querySelector('.m2c-block--tabs').querySelectorAll('tr')[i].querySelectorAll('td')[0].textContent.split(' ')[1];
            let date = doc.querySelector('.m2c-block--tabs').querySelectorAll('tr')[i].querySelectorAll('td')[1].textContent;
            let nbInvitations = doc.querySelector('.m2c-block--tabs').querySelectorAll('tr')[i].querySelectorAll('td')[2].textContent;
            let crsScore = doc.querySelector('.m2c-block--tabs').querySelectorAll('tr')[i].querySelectorAll('td')[3].textContent.split(' ')[0];
            let program = doc.querySelector('.m2c-block--tabs').querySelectorAll('tr')[i].querySelectorAll('td')[4].textContent;
            crsScore > 560 ? program = 'PNP' : program = program;
            program == '--' ? program = 'NPS' : program = program;
            let draws = {
                nbDraw,
                date,
                nbInvitations,
                crsScore,
                program
            }
            tabDraw[i] = draws;
        }
    } catch (error) {
        console.error('Error scraping data:', error);
    }
}

let temperature;
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
window.onload = scrapeData;


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
let weatherBtn = document.querySelector('.weatherBtn');
let newsBtn = document.querySelector('.newsBtn');
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
let chatDiv = document.querySelector('.mainChatWindow');
let chatArea = document.querySelector('.chatArea');
let discussion = document.querySelector('.discussion');
let suggestionUser = document.querySelector('.suggestionUser');
let reduceBtn = document.querySelector('.reduceChatBtn');
let closeChatBtn = document.querySelector('.closeChatBtn');
let answers = document.querySelectorAll('.answer');
let spinner = document.querySelector('.spinner');
let heyMessage = document.querySelector('.hey');
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

adaptabilityScore > 10 ? adaptabilityScore = 10 : adaptabilityScore = adaptabilityScore;

burger.addEventListener('change', () => {
    if (burger.checked === true) {
        burger.innerHTML = '<i class="fa-solid fa-times"></i>';
    } else {
        burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

robotBtn.addEventListener('click', () => {
    chatDiv.style.height = '400px';
    chatDiv.style.display = 'block';
    chatDiv.style.opacity = '1';
    chatDiv.style.visibility = 'visible';
    chatDiv.style.zIndex = '1000';
    robotBtn.style.display = 'none';
    spinner.style.display = 'block';
    startConversation();
    let frLang = document.querySelector('.frBtn');
    let engLang = document.querySelector('.engBtn');
    frLang.addEventListener('click', () => {
        answerUser('French');
        questionType('french');
    })

    engLang.addEventListener('click', () => {
        answerUser('English');
        questionType('english');
    })

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
            <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                <i class="fa-solid fa-robot ml-1 mt-1"></i>
                <div>
                    <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">Great! I can help you with all Express Entry system topics listed below. Select one of them to get started.
                    <ul class="suggestionUser pt-2">
                            <li><button class="answer eligibilityBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Eligibility</button></li>
                            <li><button class="answer poolBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">E.E. Pool</button></li>
                            <li><button class="answer postItaEnBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Post-ITA</button></li>
                            <li><button class="answer postAorEnBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Post-AoR</button></li>
                            <li><button class="answer pprEnBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">PPR</button></li>
                            <li><button class="answer settlementBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Settlement</button></li>
                            <li><button class="answer anotherQuestionBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">The topic is not listed</button></li>
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
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Excellent! Je peux vous aider avec les sujets énumérés ci-dessous concernant le système d'immigration Entrée Express. Sélectionnez-en un pour commencer.
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer admissibiliteBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Admissibilité</button></li>
                                <li><button class="answer bassinBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Bassin E.E.</button></li>
                                <li><button class="answer postItaFrBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Post-ITA</button></li>
                                <li><button class="answer postAorFrBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Post-AoR</button></li>
                                <li><button class="answer pprFrBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">PPR</button></li>
                                <li><button class="answer installationBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Installation</button></li>
                                <li><button class="answer anotherQuestionBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Le sujet n'est pas listé</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
                questionSubType(lang);
            }, 2000);
        }
    }
})

reduceBtn.addEventListener('click', () => {
    chatDiv.style.height = '40px';
    chatArea.style.display = 'none';
    reduceBtn.style.display = 'none';
})

closeChatBtn.addEventListener('click', () => {
    chatDiv.style.display = 'none';
    robotBtn.style.display = 'block';
    chatArea.style.display = 'block';
    reduceBtn.style.display = 'block';
})

chatDiv.querySelector('span').addEventListener('click', () => {
    chatDiv.style.height = '400px';
    chatArea.style.display = 'block';
    reduceBtn.style.display = 'block';
})

function startConversation() {
    chatTime = new Date();
    chatDay = chatTime.getDate();
    chatMonth = chatTime.getMonth() + 1;
    chatHour = chatTime.getHours();
    chatMinute = chatTime.getMinutes();
    setTimeout(() => {
        robotIcon.style.display = 'block';
        heyMessage.style.display = 'block';
    }, 800)
    setTimeout(() => {
        masculinePronoun.style.display = 'block';
    }, 2500)
    setTimeout(() => {
        whatLang.style.display = 'block';
        suggestionUser.style.display = 'block';
        spinner.style.display = 'none';
    }, 3200)
}

function answerUser(response) {
    discussion.innerHTML += `<div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
    <i class="fa-solid fa-user ml-2 mt-2"></i>
            <div>
                <h3 class="rounded-lg p-1 my-1 ml-1 pl-2 text-sm md:text-md bg-blue-200 w-full">${response}</h3>
            </div>
        </div>`
    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function questionSubType(lang) {
    if (lang == 'french') {
        let admissibiliteBtn = document.querySelector('.admissibiliteBtn');
        let bassinBtn = document.querySelector('.bassinBtn');
        let postItaFrBtn = document.querySelector('.postItaFrBtn');
        let postAorFrBtn = document.querySelector('.postAorFrBtn');
        let pprFrBtn = document.querySelector('.pprFrBtn');
        let installationBtn = document.querySelector('.installationBtn');
        let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');

        admissibiliteBtn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Admissibilité');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Je crains que je ne puisse pas rédiger tout un article sur l'admissibilité. Mais j'ai une meilleure idée! Je peux vous donner un lien vers un article qui explique tout cela. <a href="https://www.facebook.com/groups/hellocanada25/posts/185945916030094/?__cft__[0]=AZWHjGSQcxo-zmxuyvWErV-o7FE00vXQxghw2Op3EoitY7dH-Ia0vE4gGNmjKIrb9V9tYC3Ntd9_-HnHKEbVhm6HVWKHF3jbHU5VFIC8f_iTHqaj19wWR2M-LT_M5SfB1z3FRJSx0nvO-N0t5AKCk0Ph&__tn__=%2CO%2CP-R" target="_blank" class="text-blue-500 underline">Cliquez ici</a> pour lire l'article.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer ageBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Age</button></li>
                                <li><button class="answer educationBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Etudes</button></li>
                                <li><button class="answer languagesBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Langues</button></li>
                                <li><button class="answer workExpBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Expérience professionnelle</button></li>
                                <li><button class="answer reservedJobBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Offre d'emploi</button></li>
                                <li><button class="answer adaptabiliteBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Adaptabilité</button></li>
                                <li><button class="answer anotherQuestionBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Le sujet n'est pas listé</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromAdmissibilite(lang);
            }, 2000);
        })

        bassinBtn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Bassin Entrée Express');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Le "bassin du système Entrée express" fait référence à un groupe de candidats potentiels à l'immigration économique au Canada qui soumettent une "expression d'intérêt" (expression of interest, en anglais) dans le cadre du programme Entrée express. Ces candidats sont évalués en fonction de certains critères tels que l'âge, les compétences linguistiques, l'éducation, l'expérience de travail et d'autres facteurs. Par la suite, des invitations à présenter une demande de résidence permanente peuvent être envoyées aux candidats sélectionnés à partir de ce bassin. Cela signifie que les candidats qui se qualifient davantage et qui répondent aux besoins du marché du travail canadien ont plus de chances de recevoir une invitation. <br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer etatCivilBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Etat civil</button></li>
                                <li><button class="answer ageBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Age</button></li>
                                <li><button class="answer educationBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Etudes</button></li>
                                <li><button class="answer languagesBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Langues</button></li>
                                <li><button class="answer workExpBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Expérience professionnelle</button></li>
                                <li><button class="answer spouseBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Conjoint</button></li>
                                <li><button class="answer transferabiliteBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Transférabilité de compétences</button></li>
                                <li><button class="answer nominationBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Nomination provinciale</button></li>
                                <li><button class="answer drawsBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Les sélections fédérales</button></li>
                                <li><button class="answer fundsBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Preuve de fonds</button></li>
                                <li><button class="answer pnpBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Programme des Candidats des Provinces (PCP)</button></li>
                                <li><button class="answer anotherQuestionBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Le sujet n'est pas listé</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromBassin(lang);
            }, 2000);
        })

        postItaFrBtn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Post-ITA');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Après avoir reçu une invitation à présenter une demande de résidence permanente dans le cadre du programme Entrée express, la prochaine étape consiste généralement à soumettre une demande complète auprès d'Immigration, Réfugiés et Citoyenneté Canada (IRCC). Voici une explication détaillée de cette étape :
                        <ol>
                        <li><b>Acceptation de l'invitation:</b> Une fois que vous avez reçu une invitation à présenter une demande (ITA), vous devez l'accepter dans un délai précisé (15 jours généralement). Cela démontrera votre intention de poursuivre le processus d'immigration.</li>

                        <li><b>Accès au portail en ligne:</b> Après avoir accepté l'invitation, vous aurez accès au portail en ligne de l'IRCC, où vous pourrez commencer à remplir et préparer votre demande de résidence permanente.</li>

                        <li><b>Préparation des documents:</b> Vous devrez rassembler et télécharger les documents requis pour votre demande, tels que des preuves d'identité, des relevés de compétences linguistiques, des relevés bancaires, des antécédents médicaux, etc.</li>

                        <li><b>Remplissage des formulaires:</b> À l'intérieur du portail en ligne, vous devrez remplir les formulaires appropriés pour votre programme d'immigration. Assurez-vous de fournir des informations précises et véridiques.</li>

                        <li><b>Paiement des frais:</b> Vous devrez payer les frais de traitement de votre demande. Les montants varient en fonction du type de programme et du nombre de membres de votre famille inclus dans la demande.</li>

                        <li><b>Soumission de la demande:</b> Une fois que vous avez téléchargé tous les documents et rempli les formulaires, vous pourrez soumettre électroniquement votre demande via le portail en ligne. Assurez-vous de bien vérifier toutes les informations avant de soumettre.</li>

                        <li><b>Réception d'une confirmation:</b> Après la soumission, vous recevrez une confirmation de réception de votre demande. Cela peut inclure un accusé de réception et un numéro de suivi pour votre dossier.</li></ol><br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer docsListBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Liste de documents</button></li>
                                <li><button class="answer personalBgBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Antécédents personnels</button></li>
                                <li><button class="answer profesionalBgBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Antécédents professionnels</button></li>
                                <li><button class="answer referenceLetterBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Lettre de référence</button></li>
                                <li><button class="answer giftDeedBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Lettre de don d'argent</button></li>
                                <li><button class="answer feesBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Frais à payer</button></li>
                                <li><button class="answer vmBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Visite médicale</button></li>
                                <li><button class="answer anotherQuestionBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Le sujet n'est pas listé</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromPostItaFr(lang);
            }, 2000);
        })

        postAorFrBtn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Post-AoR');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Après avoir soumis votre demande de résidence permanente, l'étape suivante implique le traitement et l'évaluation approfondie de votre dossier par Immigration, Réfugiés et Citoyenneté Canada (IRCC). Voici une brève explication de cette étape:
                        <ol>
                        <li><b>Réception et vérification des documents:</b> L'IRCC recevra votre demande et commencera par vérifier que tous les documents requis ont été soumis correctement. Cela inclut les formulaires, les preuves d'identité, les relevés de compétences linguistiques, les antécédents médicaux, et d'autres pièces justificatives spécifiques à votre programme d'immigration.</li>

                        <li><b>Vérifications de sécurité et de fond:</b> L'IRCC effectuera des vérifications approfondies de sécurité et de fond pour s'assurer que vous ne présentez pas de risques pour la sécurité nationale du Canada. Cela peut inclure des enquêtes sur vos antécédents criminels, vos affiliations et vos activités.</li>

                        <li><b>Vérifications médicales:</b> Dans certains cas, des vérifications médicales seront nécessaires pour confirmer que vous êtes en bonne santé et que vous ne présentez pas de risques pour la santé publique canadienne. Des examens médicaux peuvent être demandés à vous et à votre famille.</li>

                        <li><b>Évaluation des critères de sélection:</b> Votre demande sera évaluée en fonction des critères spécifiques de votre programme d'immigration. Cela peut inclure des facteurs tels que votre âge, vos compétences linguistiques, votre expérience de travail, votre éducation et d'autres éléments.</li>

                        <li><b>Prise de décision:</b> Après avoir examiné tous les aspects de votre dossier, l'IRCC prendra une décision concernant l'approbation ou le rejet de votre demande. Si votre demande est approuvée, vous recevrez une confirmation de résidence permanente et des instructions sur la manière de procéder. Si elle est refusée, vous serez informé des raisons du refus.</li>
                        
                        <li>Si vous voulez en savoir davantage, vous pouvez <a href="https://www.facebook.com/groups/hellocanada25/posts/379422516682432/?__cft__[0]=AZWAlOYBdFzpoWFG0cOGeUkRZ5OlZedEoYIwvWSBhxq3DlgIlmS88ytBihh2z1Te0dIpXqRkezsgXtw0J7pB0a_eoO06pWw9AS8F3sglNNeT7esoh1FWCauWPQ7W4nUYmgLx8byyjAPt412ZNDUkJB3R&__tn__=%2CO%2CP-R" target="_blank" class="text-blue-600">lire cet article bien détaillé</a>.</li></ol><br>

                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}

                        <ul class="suggestionUser pt-2">
                                <li><button class="answer bioBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Données biométriques</button></li>
                                <li><button class="answer processingTimeBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Délai de traitement</button></li>
                                <li><button class="answer adrBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Additional Document Request</button></li>
                                <li><button class="answer anotherQuestionBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Le sujet n'est pas listé</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromPostAorFr(lang);
            }, 2000);
        })

        pprFrBtn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Demande de Passeport');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        L'approbation de votre demande de résidence permanente signifie que vous avez satisfait aux critères d'immigration. Vous recevrez une Confirmation de Résidence Permanente (CRP) ou une lettre d'approbation. Déposez votre passeport pour obtenir le visa de résident permanent, puis voyagez au Canada avant la date d'expiration indiquée.<br>

                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}

                        <ul class="suggestionUser pt-2">
                                <li><button class="answer visaBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Visa IMMIGRANT</button></li>
                                <li><button class="answer coprBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Confirmation de la résidence permanente</button></li>
                                <li><button class="answer anotherQuestionBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Le sujet n'est pas listé</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromPprFr(lang);
            }, 2000);
        })

        installationBtn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Voyage et Installation');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Une fois que vous avez reçu votre visa d'immigrant pour le Canada, le voyage et l'installation se profilent. Voici un aperçu de ces étapes clés:
                        <ol>
                        <li><b>Voyage au Canada:</b> Avec votre visa d'immigrant dans votre passeport, vous pouvez voyager au Canada. Assurez-vous de conserver vos documents de voyage, y compris votre Confirmation de Résidence Permanente (CRP), en lieu sûr pendant votre voyage.</li>

                        <li><b>Contrôle à la frontière:</b> À votre arrivée au Canada, vous serez soumis à un contrôle à la frontière. Présentez vos documents, y compris votre CRP et votre passeport avec le visa, pour confirmer votre statut de résident permanent.</li>

                        <li><b>Carte de Résident Permanent (CRP):</b> Si vous avez demandé une CRP, vous la recevrez après votre arrivée. Cette carte officielle confirme votre statut de résident permanent et est nécessaire pour les voyages internationaux.</li>

                        <li><b>Établissement au Canada:</b> Une fois au Canada, préparez-vous à vous installer. Cherchez un logement, ouvrez un compte bancaire, obtenez une assurance santé et explorez les services locaux.</li>

                        <li><b>Intégration et Emploi:</b> Familiarisez-vous avec la vie canadienne, la culture et les opportunités. Si vous cherchez un emploi, mettez à jour votre CV et explorez les options de carrière.</li>

                        <li><b>Soutien aux nouveaux arrivants:</b> Le Canada offre des programmes et des ressources pour aider les nouveaux arrivants à s'intégrer. Profitez des ateliers, des cours de langue et des services d'orientation.</li>

                        <li><b>Démarches administratives:</b> Effectuez les démarches nécessaires pour obtenir un numéro d'assurance sociale (NAS), une carte d'assurance maladie provinciale et d'autres documents essentiels.</li>

                        <li><b>Communauté et Réseautage:</b> Impliquez-vous dans la communauté locale, établissez des liens et élargissez votre réseau social.</li>

                        <li><b>Planification Financière:</b> Gérez vos finances judicieusement en tenant compte des coûts de la vie, des dépenses et des économies.</li>
                        </ol><br>

                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}

                        <ul class="suggestionUser pt-2">
                                <li><button class="answer nasBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Numéro d'Assurance Sociale</button></li>
                                <li><button class="answer bankBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Compte bancaire</button></li>
                                <li><button class="answer anotherQuestionBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Le sujet n'est pas listé</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromInstallation(lang);
            }, 2000);
        })

        anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))
    } else {
        let eligibilityBtn = document.querySelector('.eligibilityBtn');
        let poolBtn = document.querySelector('.poolBtn');
        let postItaEnBtn = document.querySelector('.postItaEnBtn');
        let postAorEnBtn = document.querySelector('.postAorEnBtn');
        let pprEnBtn = document.querySelector('.pprEnBtn');
        let settlementBtn = document.querySelector('.settlementBtn');
        let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');

        eligibilityBtn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Eligibility');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        I'm afraid I can't write a whole article on eligibility. But I have a better idea! I can provide you with a link to an article that explains all of that. <a href="https://www.facebook.com/groups/hellocanada25/posts/185945916030094/?__cft__[0]=AZWHjGSQcxo-zmxuyvWErV-o7FE00vXQxghw2Op3EoitY7dH-Ia0vE4gGNmjKIrb9V9tYC3Ntd9_-HnHKEbVhm6HVWKHF3jbHU5VFIC8f_iTHqaj19wWR2M-LT_M5SfB1z3FRJSx0nvO-N0t5AKCk0Ph&__tn__=%2CO%2CP-R" target="_blank" class="text-blue-500 underline">Click here</a> to read the article. (French only)<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer ageBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Age</button></li>
                                <li><button class="answer educationBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Education</button></li>
                                <li><button class="answer languagesBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Languages</button></li>
                                <li><button class="answer workExpBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Work Experience</button></li>
                                <li><button class="answer reservedJobBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Reserved job</button></li>
                                <li><button class="answer adaptabiliteBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Adaptability</button></li>
                                <li><button class="answer anotherQuestionBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">The topic is not listed</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromEligibility(lang);
            }, 2000);
        })

        poolBtn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Express Entry Pool');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The "Express Entry pool" refers to a group of potential candidates for economic immigration to Canada who submit an "expression of interest" within the framework of the Express Entry program. These candidates are evaluated based on certain criteria such as age, language skills, education, work experience, and other factors. Subsequently, invitations to apply for permanent residency may be sent to selected candidates from this pool. This means that candidates who qualify more and meet the needs of the Canadian job market have a higher chance of receiving an invitation. <br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer etatCivilBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Marital status</button></li>
                                <li><button class="answer ageBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Age</button></li>
                                <li><button class="answer educationBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Education</button></li>
                                <li><button class="answer languagesBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Languages</button></li>
                                <li><button class="answer workExpBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Work Experience</button></li>
                                <li><button class="answer spouseBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Spouse / Partner</button></li>
                                <li><button class="answer transferabiliteBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Skill Transferability</button></li>
                                <li><button class="answer nominationBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Provincial Nomination Certificate</button></li>
                                <li><button class="answer drawsBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Federal draws</button></li>
                                <li><button class="answer fundsBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Proof of funds</button></li>
                                <li><button class="answer pnpBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Provincial Nominee Program (PNP)</button></li>
                                <li><button class="answer anotherQuestionBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">The topic is not listed</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromPool(lang);
            }, 2000);
        })

        postItaEnBtn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Post-ITA');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        After receiving an invitation to apply for permanent residency through the Express Entry program, the next step usually involves submitting a complete application to Immigration, Refugees and Citizenship Canada (IRCC). Here's a detailed explanation of this step:
                        <ol>
                        <li><b>Acceptance of the invitation:</b> Once you receive an Invitation to Apply (ITA), you need to accept it within a specified timeframe (usually 15 days). This demonstrates your intention to continue with the immigration process.</li>
                        <li><b>Access to the online portal:</b> After accepting the invitation, you'll gain access to IRCC's online portal, where you can begin to fill out and prepare your permanent residency application.</li>
                        <li><b>Document preparation:</b> You'll need to gather and upload the required documents for your application, such as proof of identity, language test results, bank statements, medical records, etc.</li>
                        <li><b>Form filling:</b> Within the online portal, you'll need to complete the relevant forms for your immigration program. Ensure you provide accurate and truthful information.</li>
                        <li><b>Fee payment:</b> You'll need to pay the processing fees for your application. The amounts vary depending on the program type and the number of family members included in the application.</li>
                        <li><b>Application submission:</b> Once you've uploaded all documents and completed the forms, you can electronically submit your application through the online portal. Double-check all information before submitting.</li>
                        <li><b>Receipt of confirmation:</b> After submission, you'll receive a confirmation of receipt for your application. This may include an acknowledgment of receipt and a tracking number for your file.</li></ol><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer docsListBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Documents List</button></li>
                                <li><button class="answer personalBgBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Personal background</button></li>
                                <li><button class="answer profesionalBgBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Profesional background</button></li>
                                <li><button class="answer referenceLetterBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Reference Letter</button></li>
                                <li><button class="answer giftDeedBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Gift Deed</button></li>
                                <li><button class="answer feesBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Fees to pay</button></li>
                                <li><button class="answer vmBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Medical examination</button></li>
                                <li><button class="answer anotherQuestionBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">The topic is not listed</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromPostItaEn(lang);
            }, 2000);
        })

        postAorEnBtn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Post-AoR');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        After submitting your application for permanent residency, the next step involves the thorough processing and evaluation of your file by Immigration, Refugees and Citizenship Canada (IRCC). Here's a brief explanation of this step:
                        <ol>
                        <li><b>Receipt and verification of documents:</b> IRCC will receive your application and begin by verifying that all required documents have been correctly submitted. This includes forms, proof of identity, language test results, medical records, and other specific supporting documents for your immigration program.</li>
                        <li><b>Security and background checks:</b> IRCC will conduct comprehensive security and background checks to ensure you do not pose a risk to Canada's national security. This may involve inquiries into your criminal history, affiliations, and activities.</li>
                        <li><b>Medical examinations:</b> In some cases, medical examinations will be required to confirm your good health and that you do not pose a risk to public health in Canada. Medical assessments may be requested for you and your family.</li>
                        <li><b>Evaluation of selection criteria:</b> Your application will be assessed based on the specific criteria of your immigration program. This may include factors such as age, language skills, work experience, education, and other elements.</li>
                        <li><b>Decision-making:</b> After reviewing all aspects of your file, IRCC will make a decision regarding the approval or rejection of your application. If approved, you'll receive confirmation of permanent residency and instructions on next steps. If rejected, you'll be informed of the reasons for the refusal.</li>
                        <li>If you'd like to learn more, you can <a href="https://www.facebook.com/groups/hellocanada25/posts/379422516682432/?__cft__[0]=AZWAlOYBdFzpoWFG0cOGeUkRZ5OlZedEoYIwvWSBhxq3DlgIlmS88ytBihh2z1Te0dIpXqRkezsgXtw0J7pB0a_eoO06pWw9AS8F3sglNNeT7esoh1FWCauWPQ7W4nUYmgLx8byyjAPt412ZNDUkJB3R&__tn__=%2CO%2CP-R" target="_blank" class="text-blue-600">read this detailed article</a>. (French only)</li></ol><br>

                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}

                        <ul class="suggestionUser pt-2">
                                <li><button class="answer bioBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Biometrics</button></li>
                                <li><button class="answer processingTimeBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Processing time</button></li>
                                <li><button class="answer adrBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Additional Document Request</button></li>
                                <li><button class="answer anotherQuestionBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">The topic is not listed</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromPostAorEn(lang);
            }, 2000);
        })

        pprEnBtn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Passport Request');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Approval of your permanent residency application signifies that you have met the immigration criteria. You'll receive a Confirmation of Permanent Residence (CPR) or an approval letter. Submit your passport to obtain the permanent resident visa, then travel to Canada before the indicated expiry date.<br>

                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}

                        <ul class="suggestionUser pt-2">
                                <li><button class="answer visaBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">IMMIGRANT Visa</button></li>
                                <li><button class="answer coprBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Confirmation of Permanent Residence</button></li>
                                <li><button class="answer anotherQuestionBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">The topic is not listed</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromPprEn(lang);
            }, 2000);
        })

        settlementBtn.addEventListener('click', () => {
            spinner.style.display = 'block';
            answerUser('Travel and Settlement');
            setTimeout(() => {
                spinner.style.display = 'none';
                discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Une fois que vous avez reçu votre visa d'immigrant pour le Canada, le voyage et l'installation se profilent. Voici un aperçu de ces étapes clés:
                        <ol>
                        <li><b>Travel to Canada:</b> With your immigrant visa in your passport, you can travel to Canada. Make sure to keep your travel documents, including your Confirmation of Permanent Residence (CPR), safely during your journey.</li>
                        <li><b>Border Control:</b> Upon arrival in Canada, you'll undergo border control. Present your documents, including your CPR and passport with the visa, to confirm your permanent resident status.</li>
                        <li><b>Permanent Resident Card (PRC):</b> If you applied for a PRC, you'll receive it after your arrival. This official card confirms your permanent resident status and is necessary for international travel.</li>
                        <li><b>Settlement in Canada:</b> Once in Canada, prepare to settle down. Look for housing, open a bank account, obtain health insurance, and explore local services.</li>
                        <li><b>Integration and Employment:</b> Familiarize yourself with Canadian life, culture, and opportunities. If you're seeking employment, update your resume and explore career options.</li>
                        <li><b>Newcomer Support:</b> Canada offers programs and resources to help newcomers integrate. Take advantage of workshops, language courses, and orientation services.</li>
                        <li><b>Administrative Steps:</b> Complete the necessary steps to obtain a Social Insurance Number (SIN), provincial health insurance card, and other essential documents.</li>
                        <li><b>Community and Networking:</b> Get involved in the local community, build connections, and expand your social network.</li>
                        <li><b>Financial Planning:</b> Manage your finances wisely, considering the cost of living, expenses, and savings.</li>
                        </ol><br>

                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}

                        <ul class="suggestionUser pt-2">
                                <li><button class="answer nasBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Social Insurance Number</button></li>
                                <li><button class="answer bankBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">Bank account</button></li>
                                <li><button class="answer anotherQuestionBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg mt-1">The topic is not listed</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `; fromSettlement(lang);
            }, 2000);
        })

        anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))
    }
    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function questionFromWebsite(lang) {
    let anotherQuestionBtn = document.querySelectorAll('.anotherQuestionBtn');
    if (lang == 'english') {
        anotherQuestionBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                spinner.style.display = 'block';
                answerUser('I want to ask another question');
                setTimeout(() => {
                    spinner.style.display = 'none';
                    discussion.innerHTML += `
                    <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                        <i class="fa-solid fa-robot ml-1 mt-1"></i>
                        <div>
                            <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                            Need help with a topic not listed? You can navigate to our Facebook group where you can ask your question with the appropriate hashtag. We're here to assist you!
                            
                            Please copy this hashtag <b>#toMedy_${chatMonth}${chatDay}_${chatHour}:${chatMinute}</b> and paste it into your post in <a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25" target="_blank" rel="noreferrer">our Facebook group</a>.
                            <br>

                            ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}

                            <ul class="suggestionUser pt-2">
                                    <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                                </ul>
                            </h3>
                        </div>
                    </div>
                `; discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
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
                    <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                        <i class="fa-solid fa-robot ml-1 mt-1"></i>
                        <div>
                            <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                            Besoin d'aide sur un sujet qui n'est pas dans la liste ? Vous pouvez vous diriger vers notre groupe Facebook où vous pourrez poser votre question avec le hashtag approprié. Nous sommes là pour vous aider!
                            
                            Prière de copier cet hashtag <b>#toMedy_${chatMonth}${chatDay}_${chatHour}:${chatMinute}</b> et de le coller dans votre publication dans <a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25" target="_blank" rel="noreferrer">notre groupe Facebook</a>.<br>
                            <br>

                            ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}

                            <ul class="suggestionUser pt-2">
                                    <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                                </ul>
                            </h3>
                        </div>
                    </div>
                `;
                    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
                }, 2000);
            })
        })
    }
}
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


// eligibility
function fromAdmissibilite(lang) {
    let ageBtn = document.querySelector('.ageBtn');
    let educationBtn = document.querySelector('.educationBtn');
    let languagesBtn = document.querySelector('.languagesBtn');
    let workExpBtn = document.querySelector('.workExpBtn');
    let reservedJobBtn = document.querySelector('.reservedJobBtn');
    let adaptabiliteBtn = document.querySelector('.adaptabiliteBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');

    ageBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Le critère de l'âge");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Le critère de l'âge dans le score d'admissibilité de l'Entrée express mesure l'impact de l'âge sur la capacité d'adaptation et de contribution du candidat à l'économie canadienne. Des points sont attribués en fonction de l'âge, avec un maximum pour les candidats âgés de 18 à 35 ans, reflétant leur potentiel d'intégration et de productivité à long terme. A savoir que le candidat perd 1 point par année à partir de 36 ans et n'a aucun point à partir de 47 ans ou moins de 18 ans.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    educationBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser('Le critère des études');
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Le critère des études dans le système Entrée express évalue le niveau d'éducation du candidat et attribue des points en fonction de ce niveau. Cela reflète comment l'éducation du candidat peut contribuer positivement à l'économie canadienne. Les diplômes de divers niveaux, allant des certificats aux diplômes avancés, peuvent donner droit à des points, encourageant ainsi les candidats ayant une variété de compétences à postuler et à contribuer à la société canadienne.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    languagesBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser('Les deux langues officielles du Canada');
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Les compétences linguistiques sont un critère important dans le système Entrée express, évaluant la capacité d'un candidat à communiquer et à s'intégrer dans la société canadienne. Les candidats peuvent obtenir des points en fonction de leurs résultats aux examens de langue approuvés, tels que l'IELTS, le CELPIP, le TEF Canada et le TCF Canada. Chaque examen évalue la maîtrise de l'anglais et/ou du français, en évaluant la compréhension écrite et orale, ainsi que l'expression écrite et orale. Les points attribués varient en fonction du score obtenu (sachant que le score minimal requis est de NCLC7), ce qui reflète l'importance de la communication fluide et de la compréhension dans le processus d'immigration au Canada.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    workExpBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser('Le critère de l\'expérience de travail');
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        L'expérience professionnelle acquise à l'étranger est un critère important dans le système Entrée express. Pour être admissible, un candidat doit avoir au moins une année d'expérience de travail continue à temps plein (ou l'équivalent à temps partiel) dans une profession qualifiée, acquise en dehors du Canada. Cette exigence de continuité garantit que le candidat possède une solide expérience professionnelle à l'étranger.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    reservedJobBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser('Le critère de l\'offre d\'emploi réservé');
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Une offre d'emploi réservé est une proposition d'emploi émise par un employeur canadien spécifiquement en faveur d'un travailleur étranger. Cela signifie que l'employeur a choisi ce travailleur pour combler un poste vacant, et cette offre est généralement liée à une demande d'immigration. L'offre d'emploi réservé peut faciliter le processus d'immigration en offrant un soutien supplémentaire au candidat. Cependant, elle peut être soumise à certaines exigences et conditions définies par les autorités de l'immigration au Canada.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    adaptabiliteBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser('Faculté d\'adaptation');
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Le score d'adaptabilité dans le système Entrée express évalue la capacité du candidat et de son conjoint à s'intégrer dans la société canadienne. Il prend en compte plusieurs facteurs liés à l'adaptabilité :
                        <ol>
                        <li><b>Niveau linguistique du conjoint:</b> Les compétences linguistiques du conjoint en anglais ou en français sont évaluées. Un niveau élevé peut améliorer l'adaptabilité.</li>

                        <li><b>Études au Canada:</b> Si le conjoint a fait ses études au Canada, cela indique une familiarité avec le système éducatif canadien, ce qui peut favoriser l'adaptabilité.</li>

                        <li><b>Expérience professionnelle au Canada:</b> De même, si le conjoint a une expérience professionnelle au Canada, cela peut faciliter l'intégration sur le marché du travail.</li>

                        <li><b>Études du requérant principal au Canada:</b> Les études du candidat principal au Canada démontrent une connaissance du système éducatif local et peuvent contribuer à l'adaptabilité.</li>

                        <li><b>Expérience professionnelle au Canada:</b> Une expérience professionnelle du candidat principal au Canada peut faciliter la transition vers le marché du travail canadien.</li>

                        <li><b>Membre de la famille vivant au Canada:</b> La présence de membres de la famille au Canada, tels que frères, sœurs, parents, grands-parents, enfants, petits-enfants, tantes, oncles, nièces ou neveux, peut renforcer les liens sociaux et le soutien, contribuant ainsi à l'adaptabilité.</li></ol><br>

                        L'ensemble de ces facteurs est évalué pour déterminer le score d'adaptabilité global du candidat et de son conjoint, influençant ainsi leur admissibilité au programme Entrée express.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function fromEligibility(lang) {
    let ageBtn = document.querySelector('.ageBtn');
    let educationBtn = document.querySelector('.educationBtn');
    let languagesBtn = document.querySelector('.languagesBtn');
    let workExpBtn = document.querySelector('.workExpBtn');
    let reservedJobBtn = document.querySelector('.reservedJobBtn');
    let adaptabiliteBtn = document.querySelector('.adaptabiliteBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');

    ageBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Age criterion");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The age criterion in the Express Entry eligibility score measures the impact of age on the candidate's ability to adapt and contribute to the Canadian economy. Points are awarded based on age, with a maximum for candidates aged 18 to 35, reflecting their potential for long-term integration and productivity. It's worth noting that the candidate loses 1 point per year starting from age 36 and receives no points at age 47 or below 18.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    educationBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser('Education criterion');
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The education criterion in the Express Entry system assesses the candidate's level of education and awards points based on this level. This reflects how the candidate's education can positively contribute to the Canadian economy. Degrees of various levels, ranging from certificates to advanced diplomas, can earn points, thereby encouraging candidates with a variety of skills to apply and contribute to Canadian society.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    languagesBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser('Canada\'s two official languages');
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Linguistic skills are a crucial criterion in the Express Entry system, assessing a candidate's ability to communicate and integrate into Canadian society. Candidates can earn points based on their results in approved language exams such as IELTS, CELPIP, TEF Canada, and TCF Canada. Each exam evaluates proficiency in English and/or French, assessing listening, speaking, reading, and writing skills. Points awarded vary based on the achieved score (with a minimum required score of CLB 7), reflecting the significance of effective communication and comprehension in the Canadian immigration process.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    workExpBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser('Work experience criterion');
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Foreign work experience is a significant criterion in the Express Entry system. To be eligible, a candidate must have a minimum of one year of continuous full-time work experience (or part-time equivalent) in a qualified occupation gained outside of Canada. This requirement of continuity ensures that the candidate possesses robust professional experience gained abroad.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    reservedJobBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser('Reserved job offer criterion');
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        A reserved job offer is an employment proposal extended by a Canadian employer specifically in favor of a foreign worker. This signifies that the employer has selected this worker to fill a vacant position, and the offer is typically tied to an immigration application. The reserved job offer can streamline the immigration process by providing additional support to the candidate. However, it may be subject to certain requirements and conditions set forth by Canadian immigration authorities.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    adaptabiliteBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser('Adaptability');
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The adaptability score in the Express Entry system assesses the candidate and their spouse's ability to integrate into Canadian society. It takes into account various factors related to adaptability:

                        <ol>
                        <li><b>Spouse's Language Proficiency:</b> The spouse's proficiency in English or French is evaluated. A high level can enhance adaptability.</li>
                        <li><b>Studies in Canada:</b> If the spouse has studied in Canada, it indicates familiarity with the Canadian education system, which can promote adaptability.</li>
                        <li><b>Canadian Work Experience:</b> Similarly, if the spouse has Canadian work experience, it can facilitate integration into the job market.</li>
                        <li><b>Principal Applicant's Studies in Canada:</b> The principal applicant's studies in Canada demonstrate knowledge of the local education system and can contribute to adaptability.</li>
                        <li><b>Canadian Work Experience:</b> The principal applicant's work experience in Canada can ease the transition into the Canadian job market.</li>
                        <li><b>Family Member in Canada:</b> The presence of family members in Canada, such as siblings, parents, grandparents, children, grandchildren, aunts, uncles, nieces, or nephews, can strengthen social ties and support, thus contributing to adaptability.</li></ol><br>
                        All these factors are evaluated to determine the overall adaptability score of the candidate and their spouse, thereby influencing their eligibility for the Express Entry program<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

// pool  
function fromBassin(lang) {
    let etatCivilBtn = document.querySelector('.etatCivilBtn');
    let ageBtn = document.querySelector('.ageBtn');
    let educationBtn = document.querySelector('.educationBtn');
    let languagesBtn = document.querySelector('.languagesBtn');
    let workExpBtn = document.querySelector('.workExpBtn');
    let spouseBtn = document.querySelector('.spouseBtn');
    let transferabiliteBtn = document.querySelector('.transferabiliteBtn');
    let nominationBtn = document.querySelector('.nominationBtn');
    let drawsBtn = document.querySelector('.drawsBtn');
    let fundsBtn = document.querySelector('.fundsBtn');
    let pnpBtn = document.querySelector('.pnpBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');

    etatCivilBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("L'état civil du candidat");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        L'état civil du candidat, qu'il soit célibataire ou marié, joue un rôle dans le système Entrée express.
                        <ol>
                        <li><b>Célibataire:</b> Le statut de célibataire peut avoir une incidence sur le score d'admissibilité. Les candidats célibataires peuvent bénéficier de points supplémentaires, ce qui reflète leur flexibilité potentielle pour s'établir au Canada et s'intégrer dans la société.</li>

                        <li><b>Marié:</b> Si le candidat est marié, le score peut également être influencé. Les compétences linguistiques, l'éducation et l'expérience professionnelle du conjoint sont pris en compte pour déterminer le score global. Cette approche reconnaît l'importance du soutien familial et de l'adaptation conjointe à la vie au Canada.</li></ol><br>

                        En somme, l'état civil du candidat, qu'il soit célibataire ou marié, peut jouer un rôle dans l'évaluation de l'admissibilité et du score global dans le cadre du programme Entrée express.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    ageBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Le critère de l'âge dans le bassin");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Le critère de l'âge dans le bassin de l'Entrée express est un élément essentiel de l'évaluation des candidats potentiels à l'immigration économique au Canada. Il se réfère à la manière dont l'âge du candidat est pris en compte lors de l'inscription dans le bassin, où les candidats sont classés en fonction de divers facteurs. Plus précisément, le critère de l'âge attribue des points aux candidats en fonction de leur âge au moment de leur inscription.

                        Les candidats âgés de 20 à 29 ans obtiennent généralement le nombre maximum de points dans cette catégorie, ce qui reflète leur potentiel élevé d'adaptation, de contribution économique et de participation active à la vie canadienne. À mesure que l'âge augmente au-delà de cette tranche, le nombre de points diminue progressivement. Cette approche reconnaît l'importance de la jeunesse dans la perspective de l'intégration à long terme et du soutien au marché du travail canadien.

                        En somme, le critère de l'âge dans le bassin de l'Entrée express vise à évaluer comment l'âge du candidat peut influencer sa contribution potentielle à l'économie canadienne et à la société dans son ensemble.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    educationBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Les études dans le bassin");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Le critère des études dans le bassin de l'Entrée express est un facteur central qui détermine la position des candidats potentiels dans le processus d'immigration économique au Canada. Il met l'accent sur le niveau d'éducation du candidat au moment de son inscription dans le bassin. Concrètement, ce critère attribue des points en fonction du degré d'accomplissement académique.

                        Les candidats détenant des niveaux d'éducation plus élevés, tels que des diplômes universitaires obtiennent généralement un nombre supérieur de points. Cette approche reflète la reconnaissance du Canada envers l'importance de l'expertise et des compétences spécialisées pour l'enrichissement de l'économie et de la société canadienne. Elle vise à attirer des individus dotés d'un bagage éducatif qui peut contribuer de manière significative au développement du marché du travail et à l'innovation dans le pays.

                        En somme, le critère des études dans le bassin de l'Entrée express évalue comment le niveau d'éducation du candidat peut influencer positivement sa capacité à apporter une contribution durable et bénéfique à l'économie et à la société du Canada.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    languagesBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Les langues dans le bassin");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Le critère des langues dans le bassin de l'Entrée express tient une place cruciale dans l'évaluation des candidats en vue de leur éventuelle immigration économique au Canada. Il met en lumière les compétences linguistiques du candidat au moment de son inscription dans le bassin. En pratique, ce critère octroie des points en fonction des résultats obtenus lors des évaluations linguistiques approuvées.

                        Notons que depuis 2021, une attention particulière est portée au français, qui est devenu encore plus prisé. Les candidats démontrant une maîtrise linguistique élevée en anglais et/ou en français obtiennent généralement un nombre accru de points. Cette démarche traduit l'importance d'une communication fluide au quotidien et dans le contexte professionnel au Canada. Elle aspire à attirer des individus aptes à s'intégrer de manière rapide et effective dans la société canadienne, tout en contribuant activement au marché du travail et aux échanges interculturels.

                        Finalement, le critère des langues dans le bassin de l'Entrée express évalue comment les compétences linguistiques du candidat peuvent non seulement favoriser une intégration réussie, mais également souligne la pertinence grandissante de la maîtrise du français depuis 2021, en témoignant de la capacité à communiquer de manière efficace et à jouer un rôle actif au sein de la vie sociale et économique du Canada.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    workExpBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("L'expérience de travail dans le bassin");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Dans le contexte du bassin de l'Entrée express, l'expérience professionnelle acquise en dehors du Canada revêt une importance significative. Bien qu'elle n'octroie pas de points indépendants, elle peut être harmonieusement associée à d'autres éléments pour maximiser le score global du candidat.

                        Plus spécifiquement, cette expérience acquise à l'étranger peut être combinée avec les résultats de l'évaluation de la première langue ainsi qu'avec l'expérience professionnelle accumulée au Canada. Cette combinaison stratégique peut générer jusqu'à 100 points additionnels, un concept reconnu sous le nom de « transférabilité des compétences ».

                        Cette approche permet de mettre en avant la valeur des compétences professionnelles développées en dehors du Canada, en les intégrant harmonieusement avec d'autres aspects du profil du candidat. Elle renforce également la notion de « transfert » des compétences acquises ailleurs vers le marché du travail canadien, favorisant ainsi une transition réussie et une contribution économique positive à la société canadienne.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    spouseBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Le conjoint");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Le conjoint d'un candidat au programme Entrée express peut apporter une contribution significative à son score global dans le bassin. Plus précisément, le conjoint peut influencer positivement le score d'admissibilité grâce à trois principaux éléments :
                        <ol>
                        <li><b>Compétences linguistiques du conjoint:</b> Les compétences linguistiques du conjoint en anglais ou en français peuvent ajouter des points au score global du candidat principal. Des évaluations linguistiques, telles que l'IELTS, le CELPIP, le TEF Canada ou le TCF Canada, sont utilisées pour évaluer ces compétences. De meilleurs résultats linguistiques du conjoint peuvent se traduire par une bonification du score.</li>

                        <li><b>Études du conjoint au Canada:</b> Si le conjoint a suivi des études postsecondaires au Canada et a obtenu un diplôme, cela peut également ajouter des points au score d'admissibilité du candidat principal. Cette réalisation académique du conjoint est prise en compte dans l'évaluation.</li>

                        <li><b>Expérience professionnelle du conjoint au Canada:</b> Si le conjoint possède une expérience de travail au Canada, cela peut également contribuer positivement au score du candidat principal. Les années d'expérience professionnelle du conjoint sont prises en compte, renforçant ainsi la position du candidat dans le bassin.</li></ol><br>

                        En conclusion, la participation du conjoint dans le processus d'Entrée express peut jouer un rôle essentiel en ajoutant des points au score global du candidat principal. Les compétences linguistiques, les études et l'expérience professionnelle du conjoint sont autant d'éléments qui peuvent augmenter les chances d'admissibilité et améliorer la position du candidat dans le bassin.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    transferabiliteBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("La transférabilité des compétences");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        La notion de transférabilité des compétences au sein du programme Entrée express se révèle comme une voie astucieuse pour optimiser votre score d'admissibilité. En combinant habilement différents éléments de votre parcours, vous avez la possibilité de gagner jusqu'à 100 points supplémentaires, renforçant ainsi votre position dans le processus d'immigration économique au Canada.

                        Cette stratégie perspicace implique des associations précises. Par exemple, l'association d'un diplôme postsecondaire avec des résultats élevés en compétences linguistiques ou l'obtention d'un certificat de compétences peut chacune conférer un gain de 50 points. De même, un diplôme postsecondaire en tandem avec une expérience professionnelle canadienne peut offrir une bonification équivalente. L'expérience de travail à l'étranger, associée à une expérience similaire au Canada ou à des compétences linguistiques probantes, ou encore à l'obtention du certificat, ouvre la possibilité d'une augmentation de 50 points.

                        En résumé, la transférabilité des compétences se présente comme une démarche dynamique pour accumuler jusqu'à 100 points, illustrant votre capacité à optimiser vos atouts et à mettre en avant votre polyvalence et votre adaptabilité. Ce concept témoigne de l'importance de la planification stratégique dans le cadre de l'Entrée express, vous permettant de jouer judicieusement avec différents éléments pour atteindre un score d'admissibilité optimal.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    nominationBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("La nomination provinciale");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        La nomination provinciale constitue un élément déterminant au sein du programme Entrée express. Lorsqu'un candidat reçoit une nomination d'une province ou d'un territoire canadien, il obtient un avantage significatif en termes de points dans son score d'admissibilité. Concrètement, cette nomination octroie un impressionnant total de 600 points, ce qui peut propulser le candidat vers le haut du bassin et augmenter considérablement ses chances d'obtenir une invitation à présenter une demande de résidence permanente.

                        Cet avantage substantiel reflète l'importance accordée par les provinces et les territoires canadiens à certains candidats qui répondent aux besoins spécifiques de leur marché du travail et de leur économie locale. En accordant une nomination, une province ou un territoire reconnaît la valeur et le potentiel du candidat pour contribuer de manière significative à sa communauté et à son développement économique.

                        Ainsi, la nomination provinciale se distingue comme un catalyseur majeur dans le processus d'Entrée express, conférant au candidat une excellente opportunité d'atteindre un score élevé, favorisant ainsi son accession à la résidence permanente au Canada.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    drawsBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Les sélections");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Les sélections, également appelées tirages ou extractions, au sein du programme Entrée express représentent des moments cruciaux où IRCC sélectionne des candidats potentiels à l'immigration économique. Ces sélections périodiques (généralement chaque 15 jours, les mercredis) ont lieu à intervalles réguliers et visent à inviter les candidats ayant les scores d'admissibilité les plus élevés à présenter une demande de résidence permanente.

                        Lors de chaque extraction, les candidats dans le bassin de l'Entrée express sont classés en fonction de leurs scores globaux. Ceux qui dépassent le seuil prédéfini pour cette extraction reçoivent une invitation à présenter une demande de résidence permanente. Les candidats qui ne sont pas invités lors d'une extraction particulière demeurent dans le bassin pour les extractions ultérieures.

                        Les extractions reflètent l'engagement du Canada à sélectionner des candidats hautement qualifiés et capables de contribuer à l'économie canadienne. Elles offrent aux candidats les plus compétitifs l'opportunité de concrétiser leur projet d'immigration et de devenir résidents permanents du Canada, participant ainsi à la diversité et à la croissance du pays.
                        
                        Pour consulter la dernière sélection qui a été faites, <a class="text-blue-600" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/immigrer-canada/entree-express/soumettre-profil/selections-candidats.html" target="_blank" rel="noreferrer">cliquez ici</a>.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    fundsBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Les fonds requis");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Les fonds requis dans le cadre du système Entrée express font référence aux ressources financières que les candidats doivent démontrer qu'ils possèdent afin de soutenir leur installation au Canada. Cette exigence vise à s'assurer que les nouveaux arrivants ont les moyens nécessaires pour subvenir à leurs besoins essentiels pendant leur période d'adaptation initiale.

                        Les montants spécifiques requis varient en fonction de la taille de la famille du candidat. Ils sont évalués en fonction du nombre de membres de la famille qui accompagnent -ou pas- le candidat, ainsi que de la taille de la famille elle-même. Ces fonds peuvent couvrir des dépenses telles que le logement, la nourriture, les vêtements et les autres dépenses de base.

                        Les candidats doivent fournir des preuves de ces fonds requis lorsqu'ils présentent leur demande de résidence permanente. Cela peut se faire en montrant des relevés bancaires ou en fournissant une déclaration de revenus. L'objectif est de garantir que les nouveaux arrivants ont la stabilité financière nécessaire pour réussir leur intégration au Canada et pour éviter d'ajouter un fardeau excessif aux services sociaux du pays.

                        En conclusion, les fonds requis dans le système Entrée express sont une mesure visant à s'assurer que les candidats ont les ressources financières nécessaires pour bien démarrer leur vie au Canada et pour contribuer positivement à la société canadienne.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    pnpBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Le programme des candidats des provinces (PCP)");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Le programme des candidats des provinces (PCP) est une initiative clé au sein du système d'immigration canadien qui permet aux provinces et aux territoires de sélectionner des candidats qualifiés et adaptés à leurs besoins spécifiques en matière d'économie et de main-d'œuvre. Ce programme offre aux provinces et aux territoires la flexibilité de choisir des candidats qui répondent à leurs priorités en matière de développement économique et de croissance.

                        Dans le cadre du PCP, les provinces et les territoires peuvent émettre des nominations en faveur de candidats qui ont démontré leur aptitude à s'établir et à contribuer de manière significative à la société et à l'économie locales. Ces nominations accordent aux candidats une bonification importante de leur score d'admissibilité au sein du programme Entrée express, ce qui augmente considérablement leurs chances d'être invités à présenter une demande de résidence permanente.

                        Le PCP reflète l'engagement du Canada envers la collaboration et la décentralisation de l'immigration. Il permet aux provinces et aux territoires de jouer un rôle actif dans la sélection des nouveaux arrivants et de mieux aligner l'immigration sur leurs besoins particuliers. En conséquence, le programme des candidats des provinces contribue à une distribution équilibrée des talents et des compétences à travers le pays, favorisant ainsi le développement économique et social à l'échelle nationale.
                        
                        <ul>
                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408807183743965/?__cft__[0]=AZX2Yvuq3sLOgjvEcb7uIVG2eeOQLXPZuXd_Y7lEgNIM08fKBmKooVCltk1w0Atcz_NFmILGvQqyym6T5SYpBz7H1ttIzGdXgBVQPZtByiDPAp2sXA0iMMa61roGzACfi2yJui2rGyHVwHcu4-sEEvkz&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">PCP Ontario</a></li>

                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408809047077112/?__cft__[0]=AZVtFL_UweRUWY1hp6a31S07C_t8m0de_qVjsJFKYhAcnGHnVH-OTj3u9ddaKchgKoOWTBcy5hSjevnsLxTjMBwiuzIVNJFAoZPASkdOhSo-St5bxGeeGrv2v2gUoTfmQa0eP1R9JPpUVYA4spSMZeyz&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">PCP Alberta</a></li>

                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408810603743623/?__cft__[0]=AZUMjuk_lT2U6aUPRwC6TYTSyNGAxGEZ4PeycjaX2gX4XPHYOFCGBiQ0Yj_k9IBhqXGpnzBh-hc4pff65wFkASvXJFS90aMNmqqon73QqZOE0ukjiCPLCgz0FCdgeRDvYUliGwn7O7oiKlljlp4gbye9&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">PCP Nouveau Brunswick</a></li>

                            <li><a class="text-blue-600" href="https://novascotiaimmigration.com/move-here/" target="_blank" rel="noreferrer">PCP Nouvelle Ecosse</a></li>

                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408809737077043/?__cft__[0]=AZWNgOI9yneS5u-ry70jTr5WeLRTuZa-3dJYoqf46YTxCQKIkMJkyT86C0jSy7Bn1lWrw67jLbUx6fdvnu6FIncxXAhuCKupUu2h7Do5l9WBBWDgeZiOD98oHRB95rYL7KsaerPNUMn4zyEIcuYnS6vi&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">PCP Saskatchewan</a></li>

                            <li><a class="text-blue-600" href="https://www.welcomebc.ca/Immigrate-to-B-C/About-The-BC-PNP" target="_blank" rel="noreferrer">PCP Colombie Britannique</a></li>

                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408808063743877/" target="_blank" rel="noreferrer">PCP Manitoba</a></li>

                            <li><a class="text-blue-600" href="https://www.princeedwardisland.ca/fr/information/bureau-limmigration/entree-express-ile-du-prince-edouard" target="_blank" rel="noreferrer">PCP Île-du-Prince-Édouard</a></li>
                        </ul>
                        <br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                            <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                        </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function fromPool(lang) {
    let etatCivilBtn = document.querySelector('.etatCivilBtn');
    let ageBtn = document.querySelector('.ageBtn');
    let educationBtn = document.querySelector('.educationBtn');
    let languagesBtn = document.querySelector('.languagesBtn');
    let workExpBtn = document.querySelector('.workExpBtn');
    let spouseBtn = document.querySelector('.spouseBtn');
    let transferabiliteBtn = document.querySelector('.transferabiliteBtn');
    let nominationBtn = document.querySelector('.nominationBtn');
    let drawsBtn = document.querySelector('.drawsBtn');
    let fundsBtn = document.querySelector('.fundsBtn');
    let pnpBtn = document.querySelector('.pnpBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');

    etatCivilBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Marital status");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The marital status of the candidate, whether single or married, plays a role in the Express Entry system.
                        <ol>
                        <li><b>Single:</b> The single status can impact the eligibility score. Single candidates may receive additional points, reflecting their potential flexibility to settle in Canada and integrate into society.</li>

                        <li><b>Married:</b> If the candidate is married, the score can also be influenced. The spouse's language skills, education, and work experience are taken into account to determine the overall score. This approach recognizes the importance of family support and joint adaptation to life in Canada.</li></ol><br>

                        In summary, the marital status of the candidate, whether single or married, can play a role in evaluating eligibility and the overall score within the framework of the Express Entry program.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    ageBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Age");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The age criterion in the Express Entry pool is a crucial element in evaluating potential candidates for economic immigration to Canada. It pertains to how the candidate's age is considered during registration in the pool, where candidates are ranked based on various factors. Specifically, the age criterion awards points to candidates based on their age at the time of registration.

                        Candidates aged 20 to 29 generally receive the maximum number of points in this category, reflecting their high potential for adaptability, economic contribution, and active participation in Canadian life. As age increases beyond this range, the number of points gradually decreases. This approach recognizes the significance of youth in terms of long-term integration and support for the Canadian job market.

                        In summary, the age criterion in the Express Entry pool aims to assess how the candidate's age can influence their potential contribution to the Canadian economy and society as a whole.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    educationBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Education criterion in the pool");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The education criterion in the Express Entry pool is a central factor that determines the position of potential candidates in the Canadian economic immigration process. It emphasizes the candidate's level of education at the time of registration in the pool. Specifically, this criterion awards points based on the degree of academic achievement.

                        Candidates with higher levels of education, such as university degrees, generally receive a higher number of points. This approach reflects Canada's recognition of the importance of expertise and specialized skills for enriching the Canadian economy and society. It aims to attract individuals with an educational background that can contribute significantly to the development of the job market and innovation in the country.

                        To sum up, the education criterion in the Express Entry pool evaluates how the candidate's level of education can positively influence their ability to make a lasting and beneficial contribution to the economy and society of Canada.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    languagesBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Language criterion in the pool");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The language criterion in the Express Entry pool holds a pivotal role in evaluating candidates for potential economic immigration to Canada. It sheds light on the candidate's linguistic skills at the time of their pool entry. In practice, this criterion awards points based on the results achieved in approved language assessments.

                        It's worth noting that since 2021, particular emphasis has been placed on French, which has become even more highly regarded. Candidates demonstrating high proficiency in English and/or French typically earn an increased number of points. This approach underscores the importance of smooth communication in both daily life and the professional context in Canada. It aims to attract individuals capable of swift and effective integration into Canadian society, while actively contributing to the labor market and intercultural exchanges.

                        In conclusion, the language criterion in the Express Entry pool evaluates how a candidate's language skills can not only facilitate successful integration but also highlights the growing relevance of French proficiency since 2021. This demonstrates the ability to communicate effectively and play an active role within Canada's social and economic spheres.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    workExpBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Work experience criterion");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        In the context of the Express Entry pool, the experience gained outside of Canada holds significant importance. Although it does not award standalone points, it can be seamlessly combined with other elements to maximize the candidate's overall score.

                        More specifically, this foreign-acquired experience can be blended with the results of the first language assessment as well as the professional experience accumulated in Canada. This strategic combination can yield up to 100 additional points, a concept known as "skill transferability."

                        This approach highlights the value of professional skills developed outside of Canada by seamlessly integrating them with other aspects of the candidate's profile. It also reinforces the notion of transferring skills acquired elsewhere to the Canadian job market, thus promoting a successful transition and a positive economic contribution to Canadian society.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    spouseBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Spouse's contribution");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The spouse of a candidate in the Express Entry program can make a significant contribution to their overall score in the pool. More specifically, the spouse can positively influence the eligibility score through three key elements:
                        <ol>
                        <li><b>Spouse's language skills:</b> The spouse's language proficiency in English or French can add points to the overall score of the primary candidate. Language assessments such as IELTS, CELPIP, TEF Canada, or TCF Canada are used to evaluate these skills. Better language results from the spouse can lead to an increase in the score.</li>

                        <li><b>Spouse's education in Canada:</b> If the spouse has pursued post-secondary studies in Canada and obtained a degree, this can also add points to the eligibility score of the primary candidate. The spouse's academic achievement is considered in the evaluation.</li>

                        <li><b>Spouse's work experience in Canada:</b> If the spouse has work experience in Canada, this can also positively contribute to the score of the primary candidate. The years of the spouse's work experience are taken into account, thereby strengthening the candidate's position in the pool.</li></ol><br>

                        In conclusion, the participation of the spouse in the Express Entry process can play an essential role in adding points to the overall score of the primary candidate. The spouse's language skills, education, and work experience are all factors that can increase eligibility chances and enhance the candidate's position in the pool.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    transferabiliteBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Skill transferability");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The concept of skills transferability within the Express Entry program proves to be a clever way to optimize your eligibility score. By skillfully combining various aspects of your journey, you have the opportunity to gain up to 100 additional points, thereby strengthening your position in the Canadian economic immigration process.

                        This insightful strategy involves specific combinations. For instance, pairing a post-secondary degree with high language proficiency results or obtaining a certificate of skills can each provide a gain of 50 points. Similarly, a post-secondary degree coupled with Canadian work experience can offer an equivalent bonus. Foreign work experience, combined with similar experience in Canada or strong language skills, as well as obtaining the certificate, opens the possibility of a 50-point increase.

                        In brief, skills transferability presents a dynamic approach to accumulate up to 100 points, showcasing your ability to maximize your strengths and highlight your versatility and adaptability. This concept underscores the importance of strategic planning within the Express Entry framework, enabling you to skillfully play with various elements to achieve an optimal eligibility score.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    nominationBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Provincial nomination");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Provincial nomination stands as a pivotal factor within the Express Entry program. When a candidate receives a nomination from a Canadian province or territory, they gain a significant advantage in terms of points in their eligibility score. Specifically, this nomination grants an impressive total of 600 points, which can propel the candidate towards the top of the pool and greatly enhance their chances of receiving an invitation to apply for permanent residency.

                        This substantial advantage reflects the importance that Canadian provinces and territories place on certain candidates who meet the specific needs of their local labor market and economy. By granting a nomination, a province or territory acknowledges the value and potential of the candidate to make a significant contribution to its community and economic development.

                        Thus, provincial nomination stands out as a major catalyst in the Express Entry process, providing the candidate with an excellent opportunity to achieve a high score and thereby facilitating their path to permanent residence in Canada.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    drawsBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Federal draws");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Draws, also known as selections or extractions, within the Express Entry program represent crucial moments where IRCC chooses potential candidates for economic immigration. These periodic selections (usually every 15 days, on Wednesdays) take place at regular intervals and aim to invite candidates with the highest eligibility scores to apply for permanent residence.

                        During each extraction, candidates in the Express Entry pool are ranked based on their overall scores. Those surpassing the predefined threshold for that extraction receive an invitation to apply for permanent residence. Candidates who are not invited in a particular draw remain in the pool for subsequent draws.

                        These extractions reflect Canada's commitment to selecting highly skilled candidates capable of contributing to the Canadian economy. They provide the most competitive candidates with the opportunity to realize their immigration goals and become permanent residents of Canada, thereby contributing to the country's diversity and growth.

                        To view the latest selection that has been made, <a class="text-blue-600" href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html" target="_blank" rel="noreferrer">click here</a>.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    fundsBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Funds required");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The required funds within the framework of the Express Entry system refer to the financial resources that candidates must demonstrate they possess to support their settlement in Canada. This requirement aims to ensure that newcomers have the necessary means to meet their essential needs during their initial period of adaptation.

                        The specific amounts required vary based on the candidate's family size. They are assessed based on the number of accompanying family members and the size of the family itself. These funds can cover expenses such as housing, food, clothing, and other basic necessities.

                        Candidates must provide evidence of these required funds when applying for permanent residence. This can be done by showing bank statements or providing an income declaration. The goal is to ensure that newcomers have the financial stability needed to succeed in their integration into Canada and to avoid placing an excessive burden on the country's social services.

                        To put it briefly, the required funds in the Express Entry system are a measure aimed at ensuring that candidates have the necessary financial resources to start their lives in Canada on a solid footing and to make a positive contribution to Canadian society.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    pnpBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Provincial Nominee Program (PNP)");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The Provincial Nominee Program (PNP) is a key initiative within the Canadian immigration system that allows provinces and territories to select qualified candidates who are suited to their specific economic and labor market needs. This program provides provinces and territories with the flexibility to choose candidates who align with their priorities for economic development and growth.

                        Under the PNP, provinces and territories can issue nominations for candidates who have demonstrated their ability to settle and make a significant contribution to the local society and economy. These nominations provide candidates with a significant boost to their eligibility score within the Express Entry program, greatly enhancing their chances of being invited to apply for permanent residence.

                        The PNP reflects Canada's commitment to collaboration and the decentralization of immigration. It empowers provinces and territories to play an active role in selecting new arrivals and better align immigration with their specific needs. As a result, the Provincial Nominee Program contributes to a balanced distribution of talents and skills across the country, thereby promoting economic and social development on a national scale.
                        
                        <ul>
                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408807183743965/?__cft__[0]=AZX2Yvuq3sLOgjvEcb7uIVG2eeOQLXPZuXd_Y7lEgNIM08fKBmKooVCltk1w0Atcz_NFmILGvQqyym6T5SYpBz7H1ttIzGdXgBVQPZtByiDPAp2sXA0iMMa61roGzACfi2yJui2rGyHVwHcu4-sEEvkz&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">Ontario (OINP)</a></li>

                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408809047077112/?__cft__[0]=AZVtFL_UweRUWY1hp6a31S07C_t8m0de_qVjsJFKYhAcnGHnVH-OTj3u9ddaKchgKoOWTBcy5hSjevnsLxTjMBwiuzIVNJFAoZPASkdOhSo-St5bxGeeGrv2v2gUoTfmQa0eP1R9JPpUVYA4spSMZeyz&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">Alberta (AINP)</a></li>

                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408810603743623/?__cft__[0]=AZUMjuk_lT2U6aUPRwC6TYTSyNGAxGEZ4PeycjaX2gX4XPHYOFCGBiQ0Yj_k9IBhqXGpnzBh-hc4pff65wFkASvXJFS90aMNmqqon73QqZOE0ukjiCPLCgz0FCdgeRDvYUliGwn7O7oiKlljlp4gbye9&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">New Brunswick (NBPNP)</a></li>

                            <li><a class="text-blue-600" href="https://novascotiaimmigration.com/move-here/" target="_blank" rel="noreferrer">Nova Scotia (NSNP)</a></li>

                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408809737077043/?__cft__[0]=AZWNgOI9yneS5u-ry70jTr5WeLRTuZa-3dJYoqf46YTxCQKIkMJkyT86C0jSy7Bn1lWrw67jLbUx6fdvnu6FIncxXAhuCKupUu2h7Do5l9WBBWDgeZiOD98oHRB95rYL7KsaerPNUMn4zyEIcuYnS6vi&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">Saskatchewan (SINP)</a></li>

                            <li><a class="text-blue-600" href="https://www.welcomebc.ca/Immigrate-to-B-C/About-The-BC-PNP" target="_blank" rel="noreferrer">British Columbia (BC PNP)</a></li>

                            <li><a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/408808063743877/" target="_blank" rel="noreferrer">Manitoba (MPNP)</a></li>

                            <li><a class="text-blue-600" href="https://www.princeedwardisland.ca/en/information/office-of-immigration/pei-express-entry" target="_blank" rel="noreferrer">PCP Prince Edward Island (PEI PNP)</a></li>
                        </ul>
                        <br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                            <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                        </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

// From Post Ita
function fromPostItaFr(lang) {
    let docsListBtn = document.querySelector('.docsListBtn');
    let personalBgBtn = document.querySelector('.personalBgBtn');
    let profesionalBgBtn = document.querySelector('.profesionalBgBtn');
    let referenceLetterBtn = document.querySelector('.referenceLetterBtn');
    let giftDeedBtn = document.querySelector('.giftDeedBtn');
    let feesBtn = document.querySelector('.feesBtn');
    let vmBtn = document.querySelector('.vmBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');

    docsListBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("La liste des documents à déposer");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        La liste des documents à déposer fait référence à la compilation essentielle de pièces justificatives et de dossiers requis lors de la soumission d'une demande de résidence permanente dans le cadre du programme Entrée express. Cette liste est conçue pour démontrer votre éligibilité et soutenir les informations que vous avez fournies dans votre demande.

                        Les documents à déposer peuvent varier en fonction de votre situation personnelle, de votre expérience professionnelle, de vos antécédents académiques et de tout autre critère spécifique à votre programme d'immigration. Ils peuvent inclure des éléments tels que des copies de diplômes, des relevés de notes, des évaluations linguistiques, des relevés bancaires, des antécédents médicaux, des preuves d'expérience de travail, des références professionnelles, et d'autres documents de soutien.

                        La compilation minutieuse de ces documents est cruciale pour étayer votre demande et garantir sa conformité aux exigences. Il est conseillé de lire attentivement la liste des documents à déposer fournie par les autorités d'immigration, de rassembler les éléments nécessaires et de soumettre une demande complète et précise.

                        En somme, la liste des documents à déposer constitue une étape essentielle dans le processus d'immigration, garantissant que votre demande est appuyée par des preuves tangibles et complètes de votre éligibilité et de votre aptitude à contribuer positivement à la société canadienne.
                        
                        Pour avoir une idée sur la liste des documents à déposer, <a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/454628579161825/?__cft__[0]=AZW5OUMLLaUQXGN1Hn6KWs7Wm4jzVjriUKPC-ypWFLiVlDRCmZDrdgqCLzpmKTpRtzkg8oQiwV3AR6pymGISI4-1il7a4SCXnUu7jzuRqJto4wgk4mziBq3lvENd52K0sdnrhJNSAZ4xeepm3P9KtAHc&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">cliquez ici</a>.
                        <br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    personalBgBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Les antécédents personnels");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Après avoir reçu une invitation à déposer une demande de résidence permanente dans le cadre du système Entrée express, vous devrez fournir des informations sur vos antécédents personnels pour les dix années précédant la date de dépôt de la demande OU sinon, et c'est très recommandé, depuis l'âge de 18 ans. Cette étape implique de documenter vos activités et statuts au cours de cette période.

                        L'objectif des antécédents personnels est de donner un aperçu clair de votre historique pendant cette période. Vous indiquerez les principales activités que vous avez entreprises, comme l'éducation, l'emploi, le chômage, le service militaire ou d'autres engagements significatifs. Cette démarche permet aux autorités d'évaluer votre parcours et votre cohérence dans les informations fournies.

                        Chaque activité que vous mentionnez devrait être accompagnée de détails tels que les dates, les noms des employeurs ou des établissements éducatifs, les titres des postes occupés ou des programmes d'études suivis. Il est essentiel de présenter des informations complètes et exactes pour que votre demande soit traitée en toute intégrité.

                        Enfin, les antécédents personnels dans le cadre de l'Entrée express vous offrent l'opportunité de démontrer votre parcours au cours des dix dernières années, contribuant ainsi à une évaluation complète de votre admissibilité à la résidence permanente au Canada.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    profesionalBgBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Les antécédents professionnels");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Les antécédents professionnels dans le contexte de l'Entrée express revêtent une importance capitale dans la démonstration de votre admissibilité à la résidence permanente au Canada. Cette étape requiert la déclaration précise et détaillée de votre expérience de travail au cours des dix dernières années OU à partir du 18ème anniversaire, mettant l'accent sur une expérience continue d'au moins une année dans un emploi éligible.

                        Vous avez la possibilité de déclarer plusieurs expériences professionnelles, ce qui peut influencer le calcul de votre nombre total d'années d'expérience. Par exemple, si vous avez travaillé pendant une année dans un emploi qualifié, puis une autre année dans un autre emploi admissible, vous pourrez cumuler deux années d'expérience professionnelle. <b>Il est important de noter que les emplois admissibles doivent être à temps plein (au moins 30 heures par semaine).</b>

                        Les emplois admissibles sont catégorisés en fonction des niveaux de compétences de la Classification nationale des professions (CNP) du Canada, identifiés par les codes NOC 0, 1, 2 ou 3. Ces emplois sont évalués en fonction de leur pertinence et de leur contribution à l'économie canadienne.

                        Si vous ne pouvez pas fournir les documents nécessaires pour appuyer une expérience professionnelle spécifique, vous avez l'option de la déclarer dans les antécédents personnels. Cela permet de mettre en évidence des périodes d'activité qui pourraient ne pas être directement liées à un emploi éligible, mais qui contribuent néanmoins à votre parcours et à votre admissibilité globale.

                        Pour conclure, les antécédents professionnels offrent la possibilité de démontrer votre expérience de travail continue et admissible, tout en valorisant vos compétences et votre contribution potentielle à l'économie canadienne. Cette étape joue un rôle crucial dans la détermination de votre admissibilité à la résidence permanente au Canada à travers le système Entrée express.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    referenceLetterBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("La lettre de référence professionnelle");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        La lettre de référence professionnelle est un document important lors de la soumission d'une demande de résidence permanente dans le cadre du système Entrée express. Elle vise à fournir une évaluation objective de vos compétences, de votre expérience de travail et de votre caractère professionnel de la part d'une personne ayant supervisé ou travaillé en étroite collaboration avec vous.

                        Cette lettre est généralement rédigée par un employeur, un superviseur direct ou un collègue de confiance avec qui vous avez travaillé pendant une période significative. Elle devrait inclure des informations détaillées sur vos responsabilités professionnelles, vos accomplissements, vos compétences spécifiques et tout autre élément pertinent lié à votre expérience de travail.

                        L'objectif de la lettre de référence professionnelle est de renforcer votre profil en fournissant des preuves tangibles de vos compétences et de votre contribution au sein de votre milieu de travail. Elle contribue également à la crédibilité de votre demande en attestant de votre adéquation aux normes professionnelles et aux exigences du marché du travail canadien.
        
                        En résumé, la lettre de référence professionnelle est un témoignage écrit qui met en avant vos compétences et votre expérience de travail, renforçant ainsi votre candidature pour la résidence permanente au Canada à travers le système Entrée express.
                        
                        <a class="text-blue-600" href="https://drive.google.com/file/d/1Z3W7dTGRcwQBRERC3OU6EU3ldXLtah3H/view?fbclid=IwAR3JxeiY7DW0eXdoHhu832ed1BJDGUcg3dy1jCqG7CVpBY81kEESZvjA6d4" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir un exemple de lettre de référence professionnelle.<br>
                        <br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    giftDeedBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("L'attestation de don d'argent");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        L'attestation de don d'argent est une démarche permettant à un candidat à la résidence permanente au Canada, qui ne dispose pas de la totalité des fonds requis, de recevoir une contribution financière d'un membre de sa famille proche. Cette contribution vise à compléter le montant nécessaire pour répondre aux exigences financières du programme d'immigration.

                        L'attestation de don d'argent consiste en une déclaration officielle de la part du membre de la famille proche, attestant qu'il s'engage à fournir les fonds nécessaires au candidat pour couvrir la différence manquante. Cette déclaration doit être appuyée par des documents probants, tels que des relevés bancaires ou des preuves de transfert d'argent.

                        Cette démarche offre une option aux candidats qui bénéficient du soutien financier de leurs proches pour répondre aux exigences financières du programme. Cependant, il est crucial de se conformer aux directives officielles et de fournir des preuves solides pour garantir la validité et la transparence de l'attestation de don d'argent.
    
                        En un mot, l'attestation de don d'argent permet aux candidats de recevoir un soutien financier de la part de membres de leur famille proche afin de répondre aux critères financiers nécessaires pour leur demande de résidence permanente au Canada.
                        
                        <a class="text-blue-600" href="https://drive.google.com/file/d/1_UqlPCrwc7xYcXLiCXq_4m2QojY7Vfmy/view?fbclid=IwAR0ZlqOZQWDMQO-ltvs7Cwmxxl2sN0s6nKhYSulK6T3xE51U-uITL4roVXU" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir un exemple d'attestation de don d'argent.<br>
                        <br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    feesBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Le critère de l'âge dans le bassin");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        En tant que candidat à l'immigration via le système Entrée express, il est essentiel d'être conscient des frais associés à ce processus. Ces frais englobent différentes étapes, telles que les frais de présentation de la demande, les frais biométriques pour la collecte des empreintes digitales et la photographie, ainsi que les frais de droit de résidence permanente. Il est important de bien comprendre la structure tarifaire en fonction de votre situation, du nombre de membres de votre famille inclus dans la demande et de la catégorie d'immigration à laquelle vous postulez. Veiller à s'acquitter de ces frais dans les délais requis est un élément crucial pour garantir le traitement de votre demande et poursuivre votre parcours vers la résidence permanente au Canada.<br>
                        <ol>
                            <li><b>Frais de traitement de la demande:</b> 850$</li>
                            <li><b>Frais relatifs au droit de résidence permanente:</b> 515$</li>
                            <li><b>Enfant à charge:</b> 230$</li>
                            <li><b>Frais de la biométrie:</b> 85$</li>
                            <li><b>TOTAL UNE PERSONNE SANS CONJOINT:</b> 1450$</li>
                            <li><b>TOTAL DEUX PERSONNE SANS ENFANTS:</b> 2900$</li>
                            <li><b>TOTAL DEUX PERSONNE AVEC ENFANT:</b> 3130$</li>
                        </ol>
    
                        <a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/321111072513577/?__cft__[0]=AZVwmw321Tz5-XLh6Cce3PaUVGx1YrPtJ6NRVB4N9ryDI4bLGbhjULVH6WYE4xgtx4C_LL-ukFVEzrtBloTO44uZ4WajEsb4_l5qFWX8gdjo8dEwRYepzDtEPx2ts7D9Yhm_KvTVflLsdsJK_68_C3sZ&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">Cliquez ici</a> pour voir avoir une idée sur les frais à acquitter.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    vmBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Le critère de l'âge dans le bassin");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        La visite médicale exigée par Immigration, Réfugiés et Citoyenneté Canada (IRCC) est une étape importante du processus d'immigration, notamment dans le cadre du système Entrée express. Cette visite médicale vise à évaluer votre état de santé afin de garantir que vous ne présentez pas de risques pour la santé publique au Canada et que vous ne nécessiterez pas de soins de santé intensifs à votre arrivée.

                        Un médecin désigné par IRCC effectuera un examen médical complet, incluant des tests de dépistage de maladies contagieuses et d'autres évaluations médicales. Les résultats de cette visite médicale seront pris en compte dans le processus d'admissibilité à la résidence permanente.

                        Il est important de noter que la visite médicale doit être effectuée uniquement par un médecin agréé par IRCC (<a class="text-blue-600" href="https://secure.cic.gc.ca/PanelPhysicianMedecinDesigne/fr/Accueil" target="_blank" rel="noreferrer">Trouver un médecin agréé</a>). Les résultats de l'examen médical seront transmis directement à IRCC et ne seront pas divulgués au candidat.

                        Pour récapituler, la visite médicale exigée par IRCC dans le cadre de l'Entrée express vise à garantir que les candidats à la résidence permanente sont en bonne santé et ne représentent pas de risques pour la santé publique canadienne.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function fromPostItaEn(lang) {
    let docsListBtn = document.querySelector('.docsListBtn');
    let personalBgBtn = document.querySelector('.personalBgBtn');
    let profesionalBgBtn = document.querySelector('.profesionalBgBtn');
    let referenceLetterBtn = document.querySelector('.referenceLetterBtn');
    let giftDeedBtn = document.querySelector('.giftDeedBtn');
    let feesBtn = document.querySelector('.feesBtn');
    let vmBtn = document.querySelector('.vmBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');

    docsListBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("The documents checklist");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The list of documents to be submitted refers to the essential compilation of supporting documents and required records when submitting an application for permanent residence under the Express Entry program. This list is designed to demonstrate your eligibility and support the information you have provided in your application.

                        The documents to be submitted may vary based on your personal situation, professional experience, academic background, and any other criteria specific to your immigration program. They may include items such as copies of diplomas, transcripts, language assessments, bank statements, medical records, proof of work experience, professional references, and other supporting documents.

                        Thoroughly compiling these documents is crucial to substantiate your application and ensure its compliance with requirements. It is advisable to carefully review the list of documents to be submitted provided by immigration authorities, gather the necessary elements, and submit a complete and accurate application.

                        In summary, the list of documents to be submitted is an essential step in the immigration process, ensuring that your application is backed by tangible and comprehensive evidence of your eligibility and ability to contribute positively to Canadian society.

                        To get an idea of the list of documents to be submitted, <a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/454628579161825/?__cft__[0]=AZW5OUMLLaUQXGN1Hn6KWs7Wm4jzVjriUKPC-ypWFLiVlDRCmZDrdgqCLzpmKTpRtzkg8oQiwV3AR6pymGISI4-1il7a4SCXnUu7jzuRqJto4wgk4mziBq3lvENd52K0sdnrhJNSAZ4xeepm3P9KtAHc&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">click here</a>.
                        <br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    personalBgBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Personal background");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        After receiving an invitation to apply for permanent residence under the Express Entry system, you will need to provide information about your personal history for the ten years preceding the date of application OR, if recommended, since the age of 18. This step involves documenting your activities and statuses during this period.

                        The purpose of providing your personal history is to give a clear overview of your background during this timeframe. You will indicate the main activities you have undertaken, such as education, employment, unemployment, military service, or other significant engagements. This process allows authorities to assess your journey and the consistency of the information provided.

                        Each activity you mention should be accompanied by details such as dates, names of employers or educational institutions, job titles held, or programs of study pursued. It is essential to provide comprehensive and accurate information for your application to be processed with integrity.

                        Ultimately, providing your personal history within the context of Express Entry offers you the opportunity to showcase your journey over the past ten years, thereby contributing to a comprehensive evaluation of your eligibility for permanent residence in Canada.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    profesionalBgBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Professional background");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Professional backgrounds within the context of Express Entry hold paramount importance in demonstrating your eligibility for permanent residence in Canada. This step requires the precise and detailed declaration of your work experience over the past ten years OR from your 18th birthday onwards, with an emphasis on continuous experience of at least one year in an eligible job.

                        You have the option to declare multiple work experiences, which can influence the calculation of your total years of experience. For instance, if you worked for one year in a qualified job and then another year in a different eligible job, you can accumulate two years of professional experience. <b>It is important to note that eligible jobs must be full-time (at least 30 hours per week).</b>

                        Eligible jobs are categorized based on the skill levels of the National Occupational Classification (NOC) of Canada, identified by NOC codes 0, 1, 2, or 3. These jobs are assessed for their relevance and contribution to the Canadian economy.

                        If you are unable to provide the necessary documents to support a specific work experience, you have the option to declare it in your personal history. This allows you to highlight periods of activity that may not be directly related to an eligible job but still contribute to your overall journey and eligibility.

                        In conclusion, professional backgrounds provide an opportunity to demonstrate your continuous and eligible work experience, while showcasing your skills and potential contribution to the Canadian economy. This step plays a crucial role in determining your eligibility for permanent residence in Canada through the Express Entry system.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    referenceLetterBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("The professional reference letter");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The professional reference letter is a crucial document when submitting an application for permanent residence through the Express Entry system. Its purpose is to provide an objective assessment of your skills, work experience, and professional character from someone who has supervised or closely worked with you.

                        Usually written by an employer, direct supervisor, or trusted colleague with whom you have worked for a significant period, the letter should include detailed information about your job responsibilities, achievements, specific skills, and any other relevant aspects of your work experience.

                        The aim of the professional reference letter is to enhance your profile by offering tangible evidence of your skills and contributions within your work environment. It also adds credibility to your application by confirming your alignment with professional standards and requirements of the Canadian job market.

                        In summary, the professional reference letter is a written testimony that highlights your skills and work experience, thereby strengthening your candidacy for permanent residence in Canada through the Express Entry system.

                        You can <a class="text-blue-600" href="https://drive.google.com/file/d/1Z3W7dTGRcwQBRERC3OU6EU3ldXLtah3H/view?fbclid=IwAR3JxeiY7DW0eXdoHhu832ed1BJDGUcg3dy1jCqG7CVpBY81kEESZvjA6d4" target="_blank" rel="noreferrer">click here</a> to view an example of a professional reference letter.
                        <br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    giftDeedBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("The gift deed");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The gift deed is a process that allows a candidate for permanent residence in Canada, who does not have the full required funds, to receive a financial contribution from a close family member. This contribution aims to supplement the required amount to meet the financial requirements of the immigration program.

                        The gift deed involves an official declaration from the close family member, stating their commitment to provide the necessary funds to the candidate to cover the shortfall. This declaration must be supported by supporting documents, such as bank statements or proof of money transfer.

                        This process offers an option for candidates who receive financial support from their close relatives to meet the financial requirements of the program. However, it is crucial to comply with official guidelines and provide solid evidence to ensure the validity and transparency of the gift deed.

                        In short, the gift deed allows candidates to receive financial support from close family members to meet the necessary financial criteria for their application for permanent residence in Canada.

                        You can <a class="text-blue-600" href="https://drive.google.com/file/d/1_UqlPCrwc7xYcXLiCXq_4m2QojY7Vfmy/view?fbclid=IwAR0ZlqOZQWDMQO-ltvs7Cwmxxl2sN0s6nKhYSulK6T3xE51U-uITL4roVXU" target="_blank" rel="noreferrer">click here</a> to view an example of a gift deed.<br>
                        <br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    feesBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("The fees");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        As an immigration candidate through the Express Entry system, it's crucial to be aware of the fees associated with this process. These fees cover various stages, including application fees, biometric fees for fingerprinting and photography, as well as permanent residence fees. It's important to understand the fee structure based on your situation, the number of family members included in the application, and the immigration category you're applying for. Ensuring timely payment of these fees is a crucial element to ensure the processing of your application and continue your journey towards permanent residence in Canada.<br>
                        <ol>
                            <li><b>Application processing fee:</b> 850$</li>
                            <li><b>Permanent residence fee:</b> 515$</li>
                            <li><b>Dependent child:</b> 230$</li>
                            <li><b>Biometric fee:</b> 85$</li>
                            <li><b>TOTAL FOR A SINGLE APPLICANT:</b> 1450$</li>
                            <li><b>TOTAL FOR TWO ADULTS WITHOUT CHILDREN:</b> 2900$</li>
                            <li><b>TOTAL FOR TWO ADULTS WITH ONE CHILD:</b> 3130$</li>
                        </ol>
    
                        <a class="text-blue-600" href="https://www.facebook.com/groups/hellocanada25/posts/321111072513577/?__cft__[0]=AZVwmw321Tz5-XLh6Cce3PaUVGx1YrPtJ6NRVB4N9ryDI4bLGbhjULVH6WYE4xgtx4C_LL-ukFVEzrtBloTO44uZ4WajEsb4_l5qFWX8gdjo8dEwRYepzDtEPx2ts7D9Yhm_KvTVflLsdsJK_68_C3sZ&__tn__=%2CO%2CP-R" target="_blank" rel="noreferrer">Click here</a> to get an idea of the fees to be paid.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    vmBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("The medical visit");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The medical examination required by Immigration, Refugees, and Citizenship Canada (IRCC) is a crucial step in the immigration process, particularly within the context of the Express Entry system. This medical examination aims to assess your health status to ensure that you do not pose a risk to public health in Canada and that you will not require intensive healthcare upon arrival.

                        A physician designated by IRCC will conduct a comprehensive medical examination, including screening tests for contagious diseases and other medical assessments. The results of this medical examination will be considered in the eligibility process for permanent residence.

                        It's important to note that the medical examination must be conducted only by a physician authorized by IRCC (<a class="text-blue-600" href="https://secure.cic.gc.ca/PanelPhysicianMedecinDesigne/en/Home" target="_blank" rel="noreferrer">Find an Authorized Physician</a>). The results of the medical examination will be transmitted directly to IRCC and will not be disclosed to the candidate.

                        In a nutshell, the IRCC-required medical examination within the context of Express Entry aims to ensure that candidates for permanent residence are in good health and do not pose a risk to Canadian public health.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

// From Post Aor
function fromPostAorFr(lang) {
    let bioBtn = document.querySelector('.bioBtn');
    let processingTimeBtn = document.querySelector('.processingTimeBtn');
    let adrBtn = document.querySelector('.adrBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');

    bioBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("La biométrie");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Les données biométriques font référence à des caractéristiques physiques et uniques qui permettent d'identifier de manière précise une personne. Dans le cadre du processus d'immigration, les données biométriques sont collectées pour renforcer la sécurité et l'authenticité des documents d'identification. 

                        Lorsqu'un candidat à l'immigration via le système Entrée express est invité à fournir des données biométriques, cela implique la prise de photographies d'empreintes digitales et la capture d'autres caractéristiques distinctives. Ces données sont ensuite enregistrées dans une base de données gouvernementale et utilisées pour vérifier l'identité du candidat tout au long du processus d'immigration.

                        La collecte de données biométriques vise à prévenir la fraude et à garantir que les personnes qui soumettent des demandes d'immigration sont bien celles qu'elles prétendent être. C'est une mesure de sécurité importante pour protéger l'intégrité du système d'immigration et assurer que seules les personnes admissibles et légitimes obtiennent le statut de résidence permanente.

                        En un mot, les données biométriques sont des informations uniques et spécifiques à chaque individu, collectées dans le but de renforcer la sécurité et l'authenticité du processus d'immigration au Canada à travers le système Entrée express.
                        
                        <a class="text-blue-600" href="https://www.cic.gc.ca/francais/visiter/biometrie.asp" target="_blank" rel="noreferrer">Cliquez ici</a> pour savoir si vous avez besoin de faire la biométrie.
                        <br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    processingTimeBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Le délai de traitement de la demande");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Le délai de traitement d'une demande de résidence permanente via le système Entrée express varie en fonction de plusieurs facteurs, notamment le programme d'immigration choisi, le volume de demandes en cours de traitement et la complexité de votre dossier individuel. Les délais peuvent également être influencés par des circonstances externes telles que les contraintes opérationnelles ou les mesures de sécurité renforcées.

                        Il est important de noter que les délais de traitement peuvent différer d'un candidat à l'autre. Généralement, IRCC s'efforce de traiter les demandes de manière efficace et en temps opportun. Certains programmes peuvent bénéficier de délais de traitement accélérés, tandis que d'autres peuvent prendre plus de temps en raison de la vérification détaillée des informations fournies.

                        Pour obtenir une estimation plus précise du délai de traitement de votre demande spécifique, il est recommandé de consulter le site web officiel d'Immigration, Réfugiés et Citoyenneté Canada (IRCC). <a class="text-blue-600" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/verifier-delais-traitement.html" target="_blank" rel="noreferrer">Cliquez ici pour avoir une idée sur le délai de traitement de votre demande</a>.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    adrBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Demande de document additionnel");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        ADR "Additional Document Request", "Demande de document additionnel" en français. Cela fait référence à la situation où Immigration, Réfugiés et Citoyenneté Canada (IRCC) demande des documents ou des informations supplémentaires à un candidat pour approfondir l'évaluation de leur admissibilité au programme Entrée express ou pour vérifier les informations fournies dans leur demande. Les demandes de documents additionnels sont une étape normale du processus de demande, et les candidats doivent fournir les documents demandés dans le délai spécifié afin de poursuivre leur demande.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function fromPostAorEn(lang) {
    let bioBtn = document.querySelector('.bioBtn');
    let processingTimeBtn = document.querySelector('.processingTimeBtn');
    let adrBtn = document.querySelector('.adrBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');

    bioBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Biometrics");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Biometric data refers to unique and physical characteristics that allow for accurate identification of an individual. In the context of the immigration process, biometric data is collected to enhance the security and authenticity of identification documents.

                        When a candidate for immigration through the Express Entry system is invited to provide biometric data, it involves capturing photographs of fingerprints and other distinctive features. This data is then stored in a government database and used to verify the candidate's identity throughout the immigration process.

                        The collection of biometric data aims to prevent fraud and ensure that individuals submitting immigration applications are indeed who they claim to be. It's an important security measure to protect the integrity of the immigration system and ensure that only eligible and legitimate individuals attain permanent resident status.

                        In essence, biometric data consists of unique and individual-specific information collected to enhance the security and authenticity of the immigration process in Canada through the Express Entry system.

                        <a class="text-blue-600" href="https://www.cic.gc.ca/english/visit/biometrics.asp" target="_blank" rel="noreferrer">Click here</a> to find out if you need to provide biometrics.
                        <br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    processingTimeBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Processing time");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The processing time for a permanent residence application through the Express Entry system varies depending on several factors, including the chosen immigration program, the volume of applications being processed, and the complexity of your individual case. Delays can also be influenced by external circumstances such as operational constraints or enhanced security measures.

                        It is important to note that processing times can differ from one candidate to another. Generally, IRCC strives to process applications efficiently and in a timely manner. Some programs may benefit from accelerated processing times, while others may take longer due to detailed verification of provided information.

                        To obtain a more precise estimate of the processing time for your specific application, it is recommended to consult the official website of Immigration, Refugees and Citizenship Canada (IRCC). <a class="text-blue-600" href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande/verifier-delais-traitement.html" target="_blank" rel="noreferrer">Click here to get an idea of the processing time for your application</a>.<br><br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    adrBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Additional document request");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        After you have submitted your application through the Express Entry system, you may encounter a process known as "Additional Document Request" (ADR). An ADR is a request from Immigration, Refugees and Citizenship Canada (IRCC) for additional supporting documents or information to verify the details provided in your application.

                        Receiving an ADR does not necessarily indicate a problem with your application; it is a routine step to ensure the accuracy and authenticity of the information you've submitted. IRCC may request documents such as educational transcripts, language test results, work experience letters, or other relevant documentation.

                        It's important to respond to the ADR promptly and provide the requested documents within the specified timeframe. Failure to provide the requested documents may lead to delays or even refusal of your application. Timely and accurate submission of the requested documents can help ensure a smooth and efficient processing of your application within the Express Entry system.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

// From Post Ppr
function fromPprFr(lang) {
    let visaBtn = document.querySelector('.visaBtn');
    let coprBtn = document.querySelector('.coprBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');

    visaBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Le visa IMMIGRANT");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        L'étape de la demande de passeport intervient après avoir reçu l'approbation de votre demande de résidence permanente au Canada. Une fois que vous avez reçu la lettre d'approbation, vous devez déposer votre passeport auprès des autorités compétentes (généralement les <a class="text-blue-600" href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices/find-visa-application-centre.html" target="_blank" rel="noreferrer">CRDV</a>) pour obtenir le visa de résident permanent.

                        Ce visa de résident permanent, également appelé visa immigrant, est apposé dans votre passeport et vous permet de voyager au Canada en tant que résident permanent. Il est important de suivre les instructions fournies par les autorités concernant la procédure de demande de visa de résident permanent, y compris les documents requis, les frais associés et les délais à respecter.

                        Une fois que vous avez obtenu votre visa de résident permanent dans votre passeport, vous pouvez planifier votre voyage au Canada. Assurez-vous de voyager avant la date d'expiration indiquée sur le visa. À votre arrivée au Canada, vous serez soumis à un contrôle à la frontière où vous présenterez votre passeport avec le visa pour confirmer votre statut de résident permanent.

                        En récapitulation, l'étape de la demande de passeport fait suite à l'approbation de votre demande de résidence permanente. Elle implique l'obtention du visa de résident permanent dans votre passeport, vous permettant ainsi de voyager au Canada et de confirmer votre statut de résident permanent à votre arrivée.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    coprBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("La Confirmation de Résidence Permanente");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        La Confirmation de Résidence Permanente (CRP) est un document officiel émis par les autorités canadiennes pour confirmer que votre demande de résidence permanente a été approuvée. Une fois que vous avez reçu la CRP, cela signifie que vous avez satisfait aux critères d'immigration requis et que vous êtes autorisé à devenir un résident permanent du Canada.

                        La CRP contient des informations importantes telles que votre nom, votre photo, votre date de naissance et un numéro d'identification unique (<a class="text-blue-600" href="https://www.cic.gc.ca/francais/centre-aide/reponse.asp?qnum=013&top=4" target="_blank" rel="noreferrer">IUC</a>). Elle atteste de votre statut de résident permanent et peut être utilisée comme preuve officielle de votre droit de vivre et de travailler au Canada de façon permanente.

                        Lorsque vous voyagez au Canada, vous devrez présenter votre CRP aux autorités à votre arrivée pour confirmer votre statut de résident permanent. La CRP est un document essentiel que vous devrez garder en sécurité et avoir avec vous chaque fois que vous voyagez à l'étranger ou lorsque vous interagissez avec les autorités canadiennes.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function fromPprEn(lang) {
    let visaBtn = document.querySelector('.visaBtn');
    let coprBtn = document.querySelector('.coprBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');

    visaBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("IMMIGRANT visa");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The passport application step comes after receiving approval for your permanent residence application in Canada. Once you've received the approval letter, you need to submit your passport to the relevant authorities (usually the <a class="text-blue-600" href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/contact-ircc/offices/find-visa-application-centre.html" target="_blank" rel="noreferrer">VACs</a>) to obtain the permanent resident visa.

                        This permanent resident visa, also known as an immigrant visa, is stamped in your passport and allows you to travel to Canada as a permanent resident. It's important to follow the instructions provided by the authorities regarding the procedure for applying for the permanent resident visa, including required documents, associated fees, and deadlines.

                        Once you have the permanent resident visa in your passport, you can plan your trip to Canada. Make sure to travel before the expiration date indicated on the visa. Upon arrival in Canada, you will undergo a border control process where you'll present your passport with the visa to confirm your permanent resident status.

                        To recapitulate, the passport application step follows the approval of your permanent residence application. It involves obtaining the permanent resident visa in your passport, allowing you to travel to Canada and confirm your permanent resident status upon arrival.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    coprBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Confirmation of Permanent Residence (CoPR)");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The Confirmation of Permanent Residence (CoPR) is an official document issued by Canadian authorities to confirm the approval of your permanent residence application. Once you receive the CoPR, it signifies that you have met the required immigration criteria and are authorized to become a permanent resident of Canada.

                        The CoPR contains important information such as your name, photo, date of birth, and a unique identification number (<a class="text-blue-600" href="https://www.cic.gc.ca/english/helpcentre/answer.asp?qnum=013&top=4" target="_blank" rel="noreferrer">UCI</a>). It verifies your permanent resident status and can serve as an official proof of your right to live and work in Canada permanently.

                        When you travel to Canada, you will need to present your CoPR to authorities upon arrival to confirm your permanent resident status. The CoPR is an essential document that you should keep secure and have with you whenever you travel abroad or interact with Canadian authorities.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

// From settlement
function fromInstallation(lang) {
    let nasBtn = document.querySelector('.nasBtn');
    let bankBtn = document.querySelector('.bankBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');

    nasBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Le NAS");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Le NAS, ou <a class="text-blue-600" href="https://www.canada.ca/fr/emploi-developpement-social/services/numero-assurance-sociale.html" target="_blank" rel="noreferrer">Numéro d'Assurance Sociale</a>, est un numéro unique à neuf chiffres attribué par Service Canada, qui est l'agence responsable des services gouvernementaux liés à l'emploi, aux programmes sociaux et aux prestations au Canada. Le NAS est essentiellement un numéro d'identification fiscale et sociale utilisé pour diverses interactions avec le gouvernement, y compris pour travailler, payer des impôts et accéder à certains programmes et avantages sociaux.

                        Les résidents permanents et temporaires au Canada ont généralement besoin d'un NAS pour travailler et bénéficier des services gouvernementaux. Vous pouvez obtenir un NAS en faisant une demande directement auprès de Service Canada. Généralement, vous devrez fournir des documents d'identification, tels qu'un permis de travail ou une confirmation de résidence permanente, ainsi que des preuves de votre statut d'immigration et de votre identité.

                        Il est important de noter que le NAS est confidentiel et doit être protégé. Ne partagez pas votre NAS avec des personnes non autorisées et évitez de l'utiliser à d'autres fins que celles prévues par les autorités gouvernementales.

                        En gros, le NAS est un numéro d'assurance sociale attribué par Service Canada pour identifier les résidents au Canada et leur permettre d'accéder à divers services gouvernementaux. Vous pouvez l'obtenir en faisant une demande auprès de Service Canada en fournissant les documents requis.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    bankBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Créer un compte bancaire");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        Pour ouvrir un compte bancaire au Canada en tant que nouvel arrivant et résident permanent, suivez ces étapes générales :
                        <ol>
                        <li><b>Choisissez une banque:</b> Au Canada, il y a plusieurs grandes banques nationales telles que la Banque Royale du Canada (RBC), la Banque Toronto-Dominion (TD), la Banque de Montréal (BMO), la Banque Scotia (Scotiabank) et la CIBC. Vous pouvez également opter pour des banques en ligne comme Tangerine ou des coopératives de crédit.</li>

                        <li><b>Rassemblez vos documents:</b> Vous devrez généralement fournir des pièces d'identité telles que votre passeport, votre carte de résident permanent, votre permis de conduire canadien (le cas échéant) et une preuve d'adresse au Canada, comme un contrat de bail ou une facture de services publics.</li>

                        <li><b>Visitez la banque:</b> Rendez-vous à la succursale de la banque de votre choix avec vos documents. Le personnel de la banque vous guidera à travers le processus d'ouverture de compte.</li>

                        <li><b>Choisissez le type de compte:</b> Discutez avec le conseiller de la banque pour déterminer quel type de compte correspond le mieux à vos besoins. Les options peuvent inclure des comptes courants, des comptes d'épargne, des comptes d'étudiants, etc.</li>

                        <li><b>Remplissez les formulaires:</b> Vous devrez remplir des formulaires de demande et fournir vos informations personnelles, telles que votre adresse, votre numéro de téléphone et votre numéro d'assurance sociale (NAS).</li>

                        <li><b>Effectuez un dépôt initial:</b> Certaines banques peuvent exiger un dépôt initial pour ouvrir le compte. Vérifiez les exigences de la banque choisie.</li>

                        <li><b>Obtenez les cartes et les services:</b> Une fois que votre compte est ouvert, la banque vous fournira généralement une carte de débit et des informations sur les services bancaires en ligne.</li></ol>

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

                        N'oubliez pas de prendre en compte les frais, les taux d'intérêt, les services en ligne, la disponibilité des succursales et d'autres facteurs importants lors de votre décision.<br>
                        ${questionInvitationFr[Math.floor(Math.random() * questionInvitationFr.length)]}
                        <ul class="suggestionUser pt-2">
                            <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                        </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function fromSettlement(lang) {
    let nasBtn = document.querySelector('.nasBtn');
    let bankBtn = document.querySelector('.bankBtn');
    let anotherQuestionBtn = document.querySelector('.anotherQuestionBtn');

    nasBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Social Insurance Number (SIN)");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        The SIN, or <a class="text-blue-600" href="https://www.canada.ca/en/employment-social-development/services/social-insurance-number.html" target="_blank" rel="noreferrer">Social Insurance Number</a>, is a unique nine-digit number issued by Service Canada, which is the agency responsible for government services related to employment, social programs, and benefits in Canada. The SIN is essentially a tax and social identification number used for various interactions with the government, including working, paying taxes, and accessing certain social programs and benefits.

                        Both permanent and temporary residents in Canada generally require a SIN to work and access government services. You can obtain a SIN by applying directly to Service Canada. Typically, you will need to provide identification documents such as a work permit or confirmation of permanent residence, as well as proof of your immigration status and identity.

                        It's important to note that the SIN is confidential and should be safeguarded. Do not share your SIN with unauthorized individuals and avoid using it for purposes other than those intended by government authorities.

                        All in all, the SIN is a social insurance number issued by Service Canada to identify residents in Canada and allow them to access various government services. You can obtain it by applying to Service Canada and providing the required documents.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                                <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Refresh</button></li>
                            </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    bankBtn.addEventListener('click', () => {
        spinner.style.display = 'block';
        answerUser("Créer un compte bancaire");
        setTimeout(() => {
            spinner.style.display = 'none';
            discussion.innerHTML += `
                <div class="discMsg text-start flex flex-row justify-around items-start gap-2 mt-3">
                    <i class="fa-solid fa-robot ml-1 mt-1"></i>
                    <div>
                        <h3 class="rounded-lg p-1 my-1 pl-2 text-sm md:text-md bg-teal-100 w-5/6">
                        To open a bank account in Canada as a newcomer and permanent resident, follow these general steps:
                        <ol>
                        <li><b>Choose a bank:</b> In Canada, there are several major national banks such as the Royal Bank of Canada (RBC), Toronto-Dominion Bank (TD), Bank of Montreal (BMO), Scotiabank, and CIBC. You can also consider online banks like Tangerine or credit unions.</li>
                        <li><b>Gather your documents:</b> You will typically need to provide identification documents such as your passport, permanent resident card, Canadian driver's license (if applicable), and proof of address in Canada, such as a lease agreement or utility bill.</li>
                        <li><b>Visit the bank:</b> Go to the branch of the bank of your choice with your documents. The bank staff will guide you through the account opening process.</li>
                        <li><b>Choose the account type:</b> Discuss with the bank advisor to determine the account type that best suits your needs. Options may include checking accounts, savings accounts, student accounts, etc.</li>
                        <li><b>Fill out the forms:</b> You will need to complete application forms and provide your personal information, such as your address, phone number, and Social Insurance Number (SIN).</li>
                        <li><b>Make an initial deposit:</b> Some banks may require an initial deposit to open the account. Check the requirements of the chosen bank.</li>
                        <li><b>Get cards and services:</b> Once your account is open, the bank will usually provide you with a debit card and information about online banking services.</li></ol>

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

                        Remember to consider fees, interest rates, online services, branch availability, and other important factors when making your decision.<br>
                        ${questionInvitationEn[Math.floor(Math.random() * questionInvitationEn.length)]}
                        <ul class="suggestionUser pt-2">
                            <li><button class="answer resetBtn bg-teal-300 w-3/4 text-start pl-2 ml-2 py-1 rounded-lg">Actualiser</button></li>
                        </ul>
                        </h3>
                    </div>
                </div>
            `;
        }, 2000);
    })

    anotherQuestionBtn.addEventListener('click', questionFromWebsite(lang))

    discussion.scrollIntoView({ behavior: 'smooth', block: 'end' })
}











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
                selectedCurrency === 'CAD' ? result.innerHTML = `Required funds in Canadian dollars (CAD) for ${familyMembers.value} person${familyMembers.value > 1 ? 's' : ''} are: <b>${canadianFunds}$</b>, that's what you need to have in your bank account.` : result.innerHTML = `Required funds in Canadian dollars (CAD) for ${familyMembers.value} person${familyMembers.value > 1 ? 's' : ''}: <b>${canadianFunds}$</b>.<br/>
                In your local currency (${selectedCurrency}), you should have approximately: <b>${equivalentInLocalCurrency} ${selectedCurrency}</b>`;
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
        if (input.value == '' || input.value == 'first-language-' + skill + '-clb6') {
            noticeDiv.style.display = 'block';
            noticeDiv.innerHTML += `
                    <li class="listElement">You should get at least "CLB 7" in ${skill} skill to be eligible to Express Entry</li>
                    `;
        } else {
            let listElements = document.querySelectorAll('.listElement');
            for (let i = 0; i < listElements.length; i++) {
                if (listElements[i].textContent == 'You should get at least "CLB 7" in ' + skill + ' skill to be eligible to Express Entry') {
                    listElements[i].remove();
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


for (let btn of navButtons) {
    btn.addEventListener('click', () => {
        let current = document.getElementsByClassName('active');
        current[0].disabled = false;
        current[0].classList.remove('active');
        btn.classList.add('active');
        btn.disabled = true;
    })
}


function triggerSecondLangDiv(reading, writing, listening, speaking, divSecondLang) {
    if ((reading.value == '' || reading.value == 'first-language-reading-clb6') || (writing.value == '' || writing.value == 'first-language-writing-clb6') || (listening.value == '' || listening.value == 'first-language-listening-clb6') || (speaking.value == '' || speaking.value == 'first-language-speaking-clb6')) {
        divSecondLang.style.display = 'none';
    } else {
        divSecondLang.style.display = 'block';
        divSecondLang.scrollIntoView({ behavior: 'smooth' })
    }
}

function getScoreOfFirstLangSkill(index, skill, langSkillInput) {
    if (langSkillInput.value == '') {
        firstLangScoresArray[index] = 0;
    } else if (langSkillInput.value == `first-language-${skill}-clb6`) {
        firstLangScoresArray[index] = 0;
    } else if (langSkillInput.value == `first-language-${skill}-clb7`) {
        firstLangScoresArray[index] = 4;
    } else if (langSkillInput.value == `first-language-${skill}-clb8`) {
        firstLangScoresArray[index] = 5;
    } else if (langSkillInput.value == `first-language-${skill}-clb9`) {
        firstLangScoresArray[index] = 6;
    }
}


function calculateLanguageScore(langArray) {
    let langScore = langArray[0] + langArray[1] + langArray[2] + langArray[3];
    return langScore;
}




crsBtn.addEventListener('click', () => {
    document.title = 'Maple Tools - CRS Calculator';
    let count = 0;
    main.innerHTML = '';
    let clone = crsTemplate.content.cloneNode(true);
    main.appendChild(clone);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let year = new Date().getFullYear() - 10;
    let month = monthNames[new Date().getMonth()];

    // declare variables for the form
    let eligibilityDiv = document.querySelector('.eligibility-div');
    let explanations = document.querySelectorAll('.fa-solid')

    let martialStatus = document.querySelector('.marital-status');

    let spouseCanadianStatusDiv = document.querySelector('.spouseCanadianStatusDiv');
    let spouseCanadianStatusInput = document.querySelector('[name="spouseCanadianStatus"]');

    let spouseFollowerDiv = document.querySelector('.spouseFollowerDiv');
    let spouseFollowerInput = document.querySelector('[name="spouseFollower"]');

    let ageDiv = document.querySelector('.ageDiv');
    let ageInput = document.querySelector('[name="age"]');

    let educationDiv = document.querySelector('.educationDiv');
    let educationInput = document.querySelector('[name="education"]');

    let studiesInCanadaDiv = document.querySelector('.studiesInCanadaDiv');
    let studiesInCanadaInput = document.querySelector('[name="studiesInCanada"]');

    let studiesInCanadaTypeDiv = document.querySelector('.studiesCanadaTypeDiv');
    let studiesInCanadaTypeInput = document.querySelector('[name="studiesCanadaType"]');

    let firstLangDiv = document.querySelector('.first-language-div');
    let firstLangInput = document.querySelector('[name="first-language-availability"]');
    let firstLangTypeDiv = document.querySelector('.first-language-typeDiv');
    let firstLangTypeInput = document.querySelector('[name="first-language-type"]');
    let firstLangScoresDiv = document.querySelector('.first-language-scoresDiv');
    let firstLangReadingInput = document.querySelector('[name="first-language-reading"]');
    let firstLangWritingInput = document.querySelector('[name="first-language-writing"]');
    let firstLangListeningInput = document.querySelector('[name="first-language-listening"]');
    let firstLangSpeakingInput = document.querySelector('[name="first-language-speaking"]');
    let firstLangScoresArray = [0, 0, 0, 0];

    let secondLangDiv = document.querySelector('.second-language-div');
    let secondLangInput = document.querySelector('[name="second-language-availability"]');
    let secondLangTypeDiv = document.querySelector('.second-language-typeDiv');
    let secondLangTypeInput = document.querySelector('[name="second-language-type"]');
    let secondLangScoresDiv = document.querySelector('.second-language-scoresDiv');
    let secondLangReadingInput = document.querySelector('[name="second-language-reading"]');
    let secondLangWritingInput = document.querySelector('[name="second-language-writing"]');
    let secondLangListeningInput = document.querySelector('[name="second-language-listening"]');
    let secondLangSpeakingInput = document.querySelector('[name="second-language-speaking"]');
    let secondLangScoresArray = [0, 0, 0, 0];

    let workExpCanDiv = document.querySelector('.work-experience-can-div');
    let workExpCanInput = document.querySelector('[name="work-experience-can"]');

    let workExpDiv = document.querySelector('.work-experience-div');
    let workExpInput = document.querySelector('[name="work-experience"]');

    let qualificationDiv = document.querySelector('.qualification-div');
    let qualificationInput = document.querySelector('[name="qualification"]');

    let reservedJobDiv = document.querySelector('.reserved-job-position-in-canada-div');
    let reservedJobInput = document.querySelector('[name="reserved-job-position-in-canada"]');

    let nominationDiv = document.querySelector('.nomination-div');
    let nominationInput = document.querySelector('[name="nomination"]');

    // let studyDiv = document.querySelector('.study-canada-div');
    // let studyInput = document.querySelector('[name="study-canada"]');

    // let workExpInCanadaDiv = document.querySelector('.work-experience-canada-div');
    // let workExpInCanadaInput = document.querySelector('[name="work-experience-canada"]');

    // let jobOfferDiv = document.querySelector('.job-offer-div');
    // let jobOfferInput = document.querySelector('[name="job-offer"]');

    let jobOfferTeerDiv = document.querySelector('.jobOfferTeerDiv');
    let jobOfferTeerInput = document.querySelector('[name="jobOfferTeer"]');

    let relativesDiv = document.querySelector('.relatives-div');
    let relativesInput = document.querySelector('[name="relatives"]');

    let spouseEducationDiv = document.querySelector('.spouse-education-div');
    let spouseEducationInput = document.querySelector('[name="spouse-education"]');

    let spouseWorkExpDiv = document.querySelector('.spouse-work-experience-div');
    let spouseWorkExpInput = document.querySelector('[name="spouse-work-experience"]');

    let spouseLangDiv = document.querySelector('.spouse-language-div');
    let spouseLangInput = document.querySelector('[name="spouse-language-type"]');

    let spouseLangScoresDiv = document.querySelector('.spouse-language-scoresDiv');
    let spouseLangReadingInput = document.querySelector('[name="spouse-language-reading"]');
    let spouseLangWritingInput = document.querySelector('[name="spouse-language-writing"]');
    let spouseLangListeningInput = document.querySelector('[name="spouse-language-listening"]');
    let spouseLangSpeakingInput = document.querySelector('[name="spouse-language-speaking"]');

    let overlay = document.querySelector('#overlay');
    let modal = document.querySelector('#modal');
    let modalResult = document.querySelector('#modalResult');
    let modalConfirmation = document.querySelector('#modalConfirmation');
    let noticeDiv = document.querySelector('.noticeCRS');
    let btnReset = document.querySelector('.btn-reset');
    let btnCalculate = document.querySelector('.btn-calculate');
    let spanMarried = document.querySelector('#marriedOrNot');
    let likeSingle = false;




    martialStatus.addEventListener('change', () => {
        if (martialStatus.value == 'married') {
            ageDiv.style.display = 'none';
            spouseCanadianStatusDiv.style.display = 'block';
            spouseCanadianStatusInput.scrollIntoView({ behavior: 'smooth' })
        } else if (martialStatus.value == 'single') {
            spouseCanadianStatusDiv.style.display = 'none';
            ageDiv.style.display = 'block';
            ageInput.scrollIntoView({ behavior: 'smooth' })
            likeSingle = true;
        }

        btnReset.disabled = false;
    })

    spouseCanadianStatusInput.addEventListener('change', () => {
        if (spouseCanadianStatusInput.value == 'yes') {
            ageDiv.style.display = 'block';
            ageInput.scrollIntoView({ behavior: 'smooth' })
            spouseFollowerDiv.style.display = 'none';
            likeSingle = true;
        } else if (spouseCanadianStatusInput.value == 'no') {
            likeSingle = false;
            ageDiv.style.display = 'none';
            ageInput.value = '';
            spouseFollowerDiv.style.display = 'block';
            spouseFollowerInput.scrollIntoView({ behavior: 'smooth' })
        } /* else {
            notDisplayComponents(spouseCanadianStatusDiv);
        } */
        spanMarriedOrSingle(spanMarried);
    })

    spouseFollowerInput.addEventListener('change', () => {
        if (spouseFollowerInput.value == 'yes') {
            likeSingle = false;
        } else if (spouseFollowerInput.value == 'no') {
            likeSingle = true;
        } /* else {
            notDisplayComponents(spouseFollowerDiv);
        } */
        ageDiv.style.display = 'block';
        ageInput.scrollIntoView({ behavior: 'smooth' })
        ageInput.value = '';
        spanMarriedOrSingle(spanMarried);

    })

    function spanMarriedOrSingle(span) {
        if (martialStatus.value == 'married' && likeSingle == false) {
            span.textContent = 'or your spouse or common law partner (if they will come with you to Canada)';
        } else if ((martialStatus.value == 'married' && likeSingle == true) || martialStatus.value == 'single') {
            span.textContent = '';
        }
    }


    ageInput.addEventListener('change', () => {
        if (martialStatus.value == 'married' && likeSingle == false) {
            if (ageInput.value == 17) {
                ageScore = 0;
                noticeDiv.style.display = 'block';
                noticeDiv.innerHTML = `
                <span class="underline">BECARFUL</span> <br>
                You are not eligible to apply for Express Entry because you are under 18 years old.
                `;

                setTimeout(() => {
                    noticeDiv.style.display = 'none';
                    noticeDiv.innerHTML = '';
                }, 8000);
            } else if (ageInput.value == 18) {
                ageScore = 90;
            } else if (ageInput.value == 19) {
                ageScore = 95;
            } else if (ageInput.value >= 20 && ageInput.value <= 29) {
                ageScore = 100;
            } else if (ageInput.value == 30) {
                ageScore = 95;
            } else if (ageInput.value == 31) {
                ageScore = 90;
            } else if (ageInput.value == 32) {
                ageScore = 85;
            } else if (ageInput.value == 33) {
                ageScore = 80;
            } else if (ageInput.value == 34) {
                ageScore = 75;
            } else if (ageInput.value == 35) {
                ageScore = 70;
            } else if (ageInput.value == 36) {
                ageScore = 65;
            } else if (ageInput.value == 37) {
                ageScore = 60;
            } else if (ageInput.value == 38) {
                ageScore = 55;
            } else if (ageInput.value == 39) {
                ageScore = 50;
            } else if (ageInput.value == 40) {
                ageScore = 45;
            } else if (ageInput.value == 41) {
                ageScore = 35;
            } else if (ageInput.value == 42) {
                ageScore = 25;
            } else if (ageInput.value == 43) {
                ageScore = 15;
            } else if (ageInput.value == 44) {
                ageScore = 5;
            } else if (ageInput.value >= 45) {
                ageScore = 0;
            } else {
                ageScore = 0;
                // notDisplayComponents(ageDiv);
            }
        } else if ((martialStatus.value == 'married' && likeSingle == true) || martialStatus.value == 'single') {
            if (ageInput.value == 17) {
                ageScore = 0;
                noticeDiv.style.display = 'block';
                noticeDiv.innerHTML = `
                <span class="underline">BECARFUL</span> <br>
                You are not eligible to apply for Express Entry because you are under 18 years old.
                `;

                setTimeout(() => {
                    noticeDiv.style.display = 'none';
                    noticeDiv.innerHTML = '';
                }, 8000);
            } else if (ageInput.value == 18) {
                ageScore = 99;
            } else if (ageInput.value == 19) {
                ageScore = 105;
            } else if (ageInput.value >= 20 && ageInput.value <= 29) {
                ageScore = 110;
            } else if (ageInput.value == 30) {
                ageScore = 105;
            } else if (ageInput.value == 31) {
                ageScore = 99;
            } else if (ageInput.value == 32) {
                ageScore = 94;
            } else if (ageInput.value == 33) {
                ageScore = 88;
            } else if (ageInput.value == 34) {
                ageScore = 83;
            } else if (ageInput.value == 35) {
                ageScore = 77;
            } else if (ageInput.value == 36) {
                ageScore = 72;
            } else if (ageInput.value == 37) {
                ageScore = 66;
            } else if (ageInput.value == 38) {
                ageScore = 61;
            } else if (ageInput.value == 39) {
                ageScore = 55;
            } else if (ageInput.value == 40) {
                ageScore = 50;
            } else if (ageInput.value == 41) {
                ageScore = 39;
            } else if (ageInput.value == 42) {
                ageScore = 28;
            } else if (ageInput.value == 43) {
                ageScore = 17;
            } else if (ageInput.value == 44) {
                ageScore = 6;
            } else if (ageInput.value >= 45) {
                ageScore = 0;
            } else {
                ageScore = 0;
                // notDisplayComponents(ageDiv);
            }
        }
        educationDiv.style.display = 'block';
        educationInput.scrollIntoView({ behavior: 'smooth' })
    })

    educationInput.addEventListener('change', () => {
        if (martialStatus.value == 'married' && likeSingle == false) {
            if (educationInput.value == 'secondary') {
                educationScore = 28;
            } else if (educationInput.value == 'one-year') {
                educationScore = 84;
            } else if (educationInput.value == 'two-year') {
                educationScore = 91;
            } else if (educationInput.value == 'bachelors') {
                educationScore = 112;
            } else if (educationInput.value == 'two-or-more') {
                educationScore = 119;
            } else if (educationInput.value == 'masters') {
                educationScore = 126;
            } else if (educationInput.value == 'doctoral') {
                educationScore = 140;
            } else {
                educationScore = 0;
                // notDisplayComponents(educationDiv);
            }
        } else if ((martialStatus.value == 'married' && likeSingle == true) || martialStatus.value == 'single') {
            if (educationInput.value == 'secondary') {
                educationScore = 30;
            } else if (educationInput.value == 'one-year') {
                educationScore = 90;
            } else if (educationInput.value == 'two-year') {
                educationScore = 98;
            } else if (educationInput.value == 'bachelors') {
                educationScore = 120;
            } else if (educationInput.value == 'two-or-more') {
                educationScore = 128;
            } else if (educationInput.value == 'masters') {
                educationScore = 135;
            } else if (educationInput.value == 'doctoral') {
                educationScore = 150;
            } else {
                educationScore = 0;
                // notDisplayComponents(educationDiv);
            }
        }
        studiesInCanadaDiv.style.display = 'block';
        studiesInCanadaInput.scrollIntoView({ behavior: 'smooth' })
        noticeDiv.style.display = 'none';
        noticeDiv.innerHTML = '';
    })

    studiesInCanadaInput.addEventListener('change', () => {
        if (studiesInCanadaInput.value == 'yes') {
            studiesInCanadaTypeDiv.style.display = 'block';
            studiesInCanadaTypeInput.scrollIntoView({ behavior: 'smooth' })
            firstLangDiv.style.display = 'none';
        } else if (studiesInCanadaInput.value == 'no') {
            studiesInCanadaTypeDiv.style.display = 'none';
            firstLangDiv.style.display = 'block';
            firstLangInput.scrollIntoView({ behavior: 'smooth' })
        } /* else {
            notDisplayComponents(studiesInCanadaDiv);
        } */
    })

    studiesInCanadaTypeInput.addEventListener('change', () => {
        /*if (studiesInCanadaTypeInput.value == 'secondary') {
            educationScore = 5;
        } else if (studiesInCanadaTypeInput.value == 'diploma') {
            educationScore = 7;
        } else if (studiesInCanadaTypeInput.value == 'bachelor') {
            educationScore = 15;
        }  else {
            notDisplayComponents(studiesInCanadaTypeDiv);
        } */
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
            noticeDiv.classList.remove('noticeCRS');
            noticeDiv.style.display = 'block';
            noticeDiv.innerHTML = `
            You must have a language test result to be eligible for Express Entry.
            `;
        }
    })

    firstLangTypeInput.addEventListener('change', () => {
        secondLangTypeInput.querySelector('option[value="ielts"]').style.display = 'block';
        secondLangTypeInput.querySelector('option[value="celpip"]').style.display = 'block';
        secondLangTypeInput.querySelector('option[value="tef-canada"]').style.display = 'block';
        secondLangTypeInput.querySelector('option[value="tcf-canada"]').style.display = 'block';

        if (firstLangTypeInput.value == 'ielts') {
            firstLangScoresDiv.style.display = 'block';
            firstLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
            secondLangTypeInput.querySelector('option[value="ielts"]').style.display = 'none';
            secondLangTypeInput.querySelector('option[value="celpip"]').style.display = 'none';

            fillLanguageReading('ielts', firstLangReadingInput);
            fillLanguageWriting('ielts', firstLangWritingInput);
            fillLanguageListening('ielts', firstLangListeningInput);
            fillLanguageSpeaking('ielts', firstLangSpeakingInput);
        } else if (firstLangTypeInput.value == 'celpip') {
            firstLangScoresDiv.style.display = 'block';
            firstLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
            secondLangTypeInput.querySelector('option[value="ielts"]').style.display = 'none';
            secondLangTypeInput.querySelector('option[value="celpip"]').style.display = 'none';

            fillLanguageReading('celpip', firstLangReadingInput);
            fillLanguageWriting('celpip', firstLangWritingInput);
            fillLanguageListening('celpip', firstLangListeningInput);
            fillLanguageSpeaking('celpip', firstLangSpeakingInput);
        } else if (firstLangTypeInput.value == 'tef-canada') {
            firstLangScoresDiv.style.display = 'block';
            firstLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
            secondLangTypeInput.querySelector('option[value="tef-canada"]').style.display = 'none';
            secondLangTypeInput.querySelector('option[value="tcf-canada"]').style.display = 'none';

            fillLanguageReading('tef-canada', firstLangReadingInput);
            fillLanguageWriting('tef-canada', firstLangWritingInput);
            fillLanguageListening('tef-canada', firstLangListeningInput);
            fillLanguageSpeaking('tef-canada', firstLangSpeakingInput);
        } else if (firstLangTypeInput.value == 'tcf-canada') {
            firstLangScoresDiv.style.display = 'block';
            firstLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
            secondLangTypeInput.querySelector('option[value="tef-canada"]').style.display = 'none';
            secondLangTypeInput.querySelector('option[value="tcf-canada"]').style.display = 'none';

            fillLanguageReading('tcf-canada', firstLangReadingInput);
            fillLanguageWriting('tcf-canada', firstLangWritingInput);
            fillLanguageListening('tcf-canada', firstLangListeningInput);
            fillLanguageSpeaking('tcf-canada', firstLangSpeakingInput);
        } else {
            firstLangScoresDiv.style.display = 'none';
            firstLangReadingInput.value = '';
            firstLangWritingInput.value = '';
            firstLangListeningInput.value = '';
            firstLangSpeakingInput.value = '';
            secondLangTypeInput.querySelector('option[value="ielts"]').style.display = 'block';
            secondLangTypeInput.querySelector('option[value="celpip"]').style.display = 'block';
            secondLangTypeInput.querySelector('option[value="tef-canada"]').style.display = 'block';
            secondLangTypeInput.querySelector('option[value="tcf-canada"]').style.display = 'block';
        }
    })

    firstLangReadingInput.addEventListener('change', () => {
        getPointsFirstLanguage(martialStatus.value, likeSingle, firstLangReadingInput.value, firstLangScoresArray, 0);
        firstLangScore = calculateLanguageScore(firstLangScoresArray);
        errorLanguageSkill(firstLangReadingInput, 'reading', firstLangWritingInput, secondLangDiv);
        triggerSecondLangDiv(firstLangReadingInput, firstLangWritingInput, firstLangListeningInput, firstLangSpeakingInput, secondLangDiv);
    })

    firstLangWritingInput.addEventListener('change', () => {
        getPointsFirstLanguage(martialStatus.value, likeSingle, firstLangWritingInput.value, firstLangScoresArray, 1);
        firstLangScore = calculateLanguageScore(firstLangScoresArray);
        errorLanguageSkill(firstLangWritingInput, 'writing', firstLangListeningInput, secondLangDiv);
        triggerSecondLangDiv(firstLangReadingInput, firstLangWritingInput, firstLangListeningInput, firstLangSpeakingInput, secondLangDiv);
    })

    firstLangListeningInput.addEventListener('change', () => {
        getPointsFirstLanguage(martialStatus.value, likeSingle, firstLangListeningInput.value, firstLangScoresArray, 2);
        firstLangScore = calculateLanguageScore(firstLangScoresArray);
        errorLanguageSkill(firstLangListeningInput, 'listening', firstLangSpeakingInput, secondLangDiv);
        triggerSecondLangDiv(firstLangReadingInput, firstLangWritingInput, firstLangListeningInput, firstLangSpeakingInput, secondLangDiv);
    })

    firstLangSpeakingInput.addEventListener('change', () => {
        getPointsFirstLanguage(martialStatus.value, likeSingle, firstLangSpeakingInput.value, firstLangScoresArray, 3);
        firstLangScore = calculateLanguageScore(firstLangScoresArray);
        errorLanguageSkill(firstLangSpeakingInput, 'speaking', firstLangScoresDiv, secondLangDiv);
        triggerSecondLangDiv(firstLangReadingInput, firstLangWritingInput, firstLangListeningInput, firstLangSpeakingInput, secondLangDiv);
    })

    function errorLanguageSkill(input, skill, nextInput, secondLanguageDiv) {
        if (input.value == '' || input.value == 'clb6' || input.value == 'clb5' || input.value == 'clb4' || input.value == 'clb3') {
            noticeDiv.style.display = 'block';
            noticeDiv.innerHTML += `
                <li class="listElement">Just remember that you should get at least "CLB 7" in ${skill} skill to be eligible to Express Entry</li>
                `;
            setTimeout(() => {
                noticeDiv.style.display = 'none';
                noticeDiv.innerHTML = '';
                input.scrollIntoView({ behavior: 'smooth' })
            }, 4000);
            secondLanguageDiv.style.display = 'none';
            nextInput.disabled ? nextInput.disabled = true : nextInput.disabled = false;
        } else {
            nextInput.disabled = false;
        }
    }



    secondLangInput.addEventListener('change', () => {
        if (secondLangInput.value == 'yes') {
            secondLangTypeDiv.style.display = 'block';
            secondLangTypeDiv.scrollIntoView({ behavior: 'smooth' })
            secondLangTypeInput.value = '';
            workExpCanDiv.style.display = 'none';
        } else {
            secondLangTypeDiv.style.display = 'none';
            secondLangScoresDiv.style.display = 'none';
            workExpCanDiv.style.display = 'block';
            workExpCanDiv.scrollIntoView({ behavior: 'smooth' })
        }
    })

    secondLangTypeInput.addEventListener('change', () => {
        if (secondLangTypeInput.value == 'ielts') {
            secondLangScoresDiv.style.display = 'block';
            secondLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
            fillLanguageReading('ielts', secondLangReadingInput);
            fillLanguageWriting('ielts', secondLangWritingInput);
            fillLanguageListening('ielts', secondLangListeningInput);
            fillLanguageSpeaking('ielts', secondLangSpeakingInput);
        } else if (secondLangTypeInput.value == 'celpip') {
            secondLangScoresDiv.style.display = 'block';
            secondLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
            fillLanguageReading('celpip', secondLangReadingInput);
            fillLanguageWriting('celpip', secondLangWritingInput);
            fillLanguageListening('celpip', secondLangListeningInput);
            fillLanguageSpeaking('celpip', secondLangSpeakingInput);
        } else if (secondLangTypeInput.value == 'tef-canada') {
            secondLangScoresDiv.style.display = 'block';
            secondLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
            fillLanguageReading('tef-canada', secondLangReadingInput);
            fillLanguageWriting('tef-canada', secondLangWritingInput);
            fillLanguageListening('tef-canada', secondLangListeningInput);
            fillLanguageSpeaking('tef-canada', secondLangSpeakingInput);
        } else if (secondLangTypeInput.value == 'tcf-canada') {
            secondLangScoresDiv.style.display = 'block';
            secondLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
            fillLanguageReading('tcf-canada', secondLangReadingInput);
            fillLanguageWriting('tcf-canada', secondLangWritingInput);
            fillLanguageListening('tcf-canada', secondLangListeningInput);
            fillLanguageSpeaking('tcf-canada', secondLangSpeakingInput);
        } else {
            secondLangReadingInput.value = '';
            secondLangWritingInput.value = '';
            secondLangListeningInput.value = '';
            secondLangSpeakingInput.value = '';
            secondLangScoresDiv.style.display = 'none';
            workExpCanDiv.style.display = 'block';
            workExpCanDiv.scrollIntoView({ behavior: 'smooth' })
        }
    })

    secondLangReadingInput.addEventListener('change', () => {
        getPointsSecondLanguage(secondLangReadingInput.value, secondLangScoresArray, 0);
        triggerWorkExpDiv()
        secondLangScore = calculateLanguageScore(secondLangScoresArray);
    })

    secondLangWritingInput.addEventListener('change', () => {
        getPointsSecondLanguage(secondLangWritingInput.value, secondLangScoresArray, 1);
        triggerWorkExpDiv()
        secondLangScore = calculateLanguageScore(secondLangScoresArray);
    })

    secondLangListeningInput.addEventListener('change', () => {
        getPointsSecondLanguage(secondLangListeningInput.value, secondLangScoresArray, 2);
        triggerWorkExpDiv()
        secondLangScore = calculateLanguageScore(secondLangScoresArray);
    })

    secondLangSpeakingInput.addEventListener('change', () => {
        getPointsSecondLanguage(secondLangSpeakingInput.value, secondLangScoresArray, 3);
        secondLangScore = calculateLanguageScore(secondLangScoresArray);
        triggerWorkExpDiv()
    })

    function triggerWorkExpDiv() {
        if (secondLangReadingInput.value != '' && secondLangWritingInput.value != '' && secondLangListeningInput.value != '' && secondLangSpeakingInput.value != '') {
            workExpCanDiv.style.display = 'block';
            workExpCanInput.scrollIntoView({ behavior: 'smooth' })
        } else {
            workExpCanDiv.style.display = 'none';
        }
    }

    workExpCanInput.addEventListener('change', () => {
        let monthYearSpan = document.querySelector('#monthYearExp');
        monthYearSpan.textContent = `${month} 1st, ${year}`;

        if (martialStatus.value == 'married' && likeSingle == false) {
            if (workExpCanInput.value == 1) {
                workExpeCanScore = 35;
            } else if (workExpCanInput.value == 2) {
                workExpeCanScore = 46;
            } else if (workExpCanInput.value == 3) {
                workExpeCanScore = 56;
            } else if (workExpCanInput.value == 4) {
                workExpeCanScore = 63;
            } else if (workExpCanInput.value == 5) {
                workExpeCanScore = 70;
            } else {
                workExpeCanScore = 0;
                // notDisplayComponents(educationDiv);
            }
        } else if ((martialStatus.value == 'married' && likeSingle == true) || martialStatus.value == 'single') {
            if (workExpCanInput.value == 1) {
                workExpeCanScore = 40;
            } else if (workExpCanInput.value == 2) {
                workExpeCanScore = 53;
            } else if (workExpCanInput.value == 3) {
                workExpeCanScore = 64;
            } else if (workExpCanInput.value == 4) {
                workExpeCanScore = 72;
            } else if (workExpCanInput.value == 5) {
                workExpeCanScore = 80;
            } else {
                workExpeCanScore = 0;
                // notDisplayComponents(educationDiv);
            }
        }

        workExpDiv.style.display = 'block';
        workExpInput.scrollIntoView({ behavior: 'smooth' })

        if (workExpCanInput.value == '') {
            workExpeScore = 0;
            workExpDiv.style.display = 'none';
        }
    })

    workExpInput.addEventListener('change', () => {
        noticeDiv.classList.remove('noticeCRS');
        if (workExpInput.value == '') {
            workExpeScore = 0;
            qualificationDiv.style.display = 'none';
        } else if (workExpInput.value == 0) {
            qualificationDiv.style.display = 'none';
            noticeDiv.style.display = 'block';
            noticeDiv.innerHTML = `
            <span class="underline">BECARFUL</span> <br>
            You must have at least one year of continuous full-time or equivalent paid work experience in the past 10 years (from ${month} 1st, ${year}) in a skilled occupation.
            `;
            // setTimeout(() => {
            //     noticeDiv.style.display = 'none';
            //     noticeDiv.innerHTML = '';
            //     workExpInput.scrollIntoView({ behavior: 'smooth' })
            // }, 8000);
        } else {
            qualificationDiv.style.display = 'block';
            qualificationInput.scrollIntoView({ behavior: 'smooth' })
            noticeDiv.style.display = 'none';
            noticeDiv.innerHTML = '';
        }
    })

    qualificationInput.addEventListener('change', () => {
        if (qualificationInput.value == 'yes') {
            qualificationScore = 50;
        } else if (qualificationInput.value == 'no') {
            qualificationScore = 0;
        }
        reservedJobDiv.style.display = 'block';
        reservedJobInput.scrollIntoView({ behavior: 'smooth' })
        if (qualificationInput.value == '') {
            workExpeScore = 0;
            reservedJobDiv.style.display = 'none';
        }
    })

    reservedJobInput.addEventListener('change', () => {
        if (reservedJobInput.value == 'yes') {
            jobOfferTeerDiv.style.display = 'block';
            jobOfferTeerInput.scrollIntoView({ behavior: 'smooth' });
            nominationDiv.style.display = 'none';
        } else if (reservedJobInput.value == 'no') {
            jobOfferTeerDiv.style.display = 'none';
            nominationDiv.style.display = 'block';
            nominationInput.scrollIntoView({ behavior: 'smooth' })
        } else if (reservedJobInput.value == '') {
            jobOfferTeerDiv.style.display = 'none';
            nominationDiv.style.display = 'none';
        }
    })

    jobOfferTeerInput.addEventListener('change', () => {
        if (jobOfferTeerInput.value == 'teer00') {
            reservedJobScore = 200;
        } else if (jobOfferTeerInput.value == 'teer0123') {
            reservedJobScore = 50;
        } else if (jobOfferTeerInput.value == 'teer45') {
            reservedJobScore = 0;
        }

        nominationDiv.style.display = 'block';
        nominationInput.scrollIntoView({ behavior: 'smooth' })

        if (jobOfferTeerInput.value == '') {
            reservedJobScore = 0;
            nominationDiv.style.display = 'none';
        }
    })

    nominationInput.addEventListener('change', () => {
        if (nominationInput.value == 'yes') {
            nominationScore = 600;
        } else if (nominationInput.value == 'no') {
            nominationScore = 0;
        }

        relativesDiv.style.display = 'block';
        relativesInput.scrollIntoView({ behavior: 'smooth' })

        if (nominationInput.value == '') {
            nominationScore = 0;
            relativesDiv.style.display = 'none';
        }
    })

    relativesInput.addEventListener('change', () => {
        if (relativesInput.value == 'yes') {
            relativesScore = 15;
        } else if (relativesInput.value == 'no') {
            relativesScore = 0;
        }

        if (martialStatus.value == 'married' && likeSingle == false) {
            spouseEducationDiv.style.display = 'block';
            spouseEducationDiv.scrollIntoView({ behavior: 'smooth' })
        } else if ((martialStatus.value == 'married' && likeSingle == true) || martialStatus.value == 'single') {
            spouseEducationDiv.style.display = 'none';
            spouseWorkExpDiv.style.display = 'none';
            spouseLangDiv.style.display = 'none';
            btnCalculate.disabled = false;
        }

        if (relativesInput.value == '') {
            relativesScore = 0;
            spouseEducationDiv.style.display = 'none';
            spouseWorkExpDiv.style.display = 'none';
            spouseLangDiv.style.display = 'none';
        }
    })

    spouseEducationInput.addEventListener('change', () => {
        if (spouseEducationInput.value == 'secondary') {
            spouseEducationScore = 2;
        } else if (spouseEducationInput.value == 'one-year') {
            spouseEducationScore = 6;
        } else if (spouseEducationInput.value == 'two-year') {
            spouseEducationScore = 7;
        } else if (spouseEducationInput.value == 'bachelors') {
            spouseEducationScore = 8;
        } else if (spouseEducationInput.value == 'two-or-more') {
            spouseEducationScore = 9;
        } else if (spouseEducationInput.value == 'masters' || spouseEducationInput.value == 'doctoral') {
            spouseEducationScore = 10;
        } else {
            spouseEducationScore = 0;
        }

        spouseWorkExpDiv.style.display = 'block';
        spouseWorkExpDiv.scrollIntoView({ behavior: 'smooth' })

        if (spouseEducationInput.value == '') {
            spouseEducationScore = 0;
            spouseWorkExpDiv.style.display = 'none';
        }
    })

    spouseWorkExpInput.addEventListener('change', () => {
        if (spouseWorkExpInput.value == 0) {
            spouseWorkExpScore = 0;
        } else if (spouseWorkExpInput.value == 1) {
            spouseWorkExpScore = 5;
        } else if (spouseWorkExpInput.value == 2) {
            spouseWorkExpScore = 7;
        } else if (spouseWorkExpInput.value == 3) {
            spouseWorkExpScore = 8;
        } else if (spouseWorkExpInput.value == 4) {
            spouseWorkExpScore = 9;
        } else if (spouseWorkExpInput.value >= 5) {
            spouseWorkExpScore = 10;
        } else {
            spouseWorkExpScore = 0;
        }

        spouseLangDiv.style.display = 'block';
        spouseLangInput.scrollIntoView({ behavior: 'smooth' })

        if (spouseWorkExpInput.value == '') {
            spouseWorkExpScore = 0;
            spouseLangDiv.style.display = 'none';
        }
    })

    spouseLangInput.addEventListener('change', () => {
        if (spouseLangInput.value == 'ielts') {
            spouseLangScoresDiv.style.display = 'block';
            spouseLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
            fillLanguageReading('ielts', spouseLangReadingInput);
            fillLanguageWriting('ielts', spouseLangWritingInput);
            fillLanguageListening('ielts', spouseLangListeningInput);
            fillLanguageSpeaking('ielts', spouseLangSpeakingInput);
        } else if (spouseLangInput.value == 'celpip') {
            spouseLangScoresDiv.style.display = 'block';
            spouseLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
            fillLanguageReading('celpip', spouseLangReadingInput);
            fillLanguageWriting('celpip', spouseLangWritingInput);
            fillLanguageListening('celpip', spouseLangListeningInput);
            fillLanguageSpeaking('celpip', spouseLangSpeakingInput);
        } else if (spouseLangInput.value == 'tef-canada') {
            spouseLangScoresDiv.style.display = 'block';
            spouseLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
            fillLanguageReading('tef-canada', spouseLangReadingInput);
            fillLanguageWriting('tef-canada', spouseLangWritingInput);
            fillLanguageListening('tef-canada', spouseLangListeningInput);
            fillLanguageSpeaking('tef-canada', spouseLangSpeakingInput);
        } else if (spouseLangInput.value == 'tcf-canada') {
            spouseLangScoresDiv.style.display = 'block';
            spouseLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
            fillLanguageReading('tcf-canada', spouseLangReadingInput);
            fillLanguageWriting('tcf-canada', spouseLangWritingInput);
            fillLanguageListening('tcf-canada', spouseLangListeningInput);
            fillLanguageSpeaking('tcf-canada', spouseLangSpeakingInput);
        } else if (spouseLangInput.value == '') {
            spouseLangReadingInput.value = '';
            spouseLangWritingInput.value = '';
            spouseLangListeningInput.value = '';
            spouseLangSpeakingInput.value = '';
            spouseLangScoresDiv.style.display = 'none';

        } else {
            spouseLangScoresDiv.style.display = 'none';
            spouseLangScoresArray = [0, 0, 0, 0];
            btnCalculate.disabled = false;
        }
    })

    spouseLangReadingInput.addEventListener('change', () => {
        getPointsLanguageSpouse(spouseLangReadingInput.value, spouseLangScoresArray, 0);
        spouseLangScore = calculateLanguageScore(spouseLangScoresArray);
        enableCalculateButton();
    })

    spouseLangWritingInput.addEventListener('change', () => {
        getPointsLanguageSpouse(spouseLangWritingInput.value, spouseLangScoresArray, 1);
        spouseLangScore = calculateLanguageScore(spouseLangScoresArray);
        enableCalculateButton();
    })

    spouseLangListeningInput.addEventListener('change', () => {
        getPointsLanguageSpouse(spouseLangListeningInput.value, spouseLangScoresArray, 2);
        spouseLangScore = calculateLanguageScore(spouseLangScoresArray);
        enableCalculateButton();
    })

    spouseLangSpeakingInput.addEventListener('change', () => {
        getPointsLanguageSpouse(spouseLangSpeakingInput.value, spouseLangScoresArray, 3);
        spouseLangScore = calculateLanguageScore(spouseLangScoresArray);
        enableCalculateButton();
    })

    function enableCalculateButton() {
        if (spouseLangReadingInput.value != '' && spouseLangWritingInput.value != '' && spouseLangListeningInput.value != '' && spouseLangSpeakingInput.value != '') {
            btnCalculate.disabled = false;
        } else {
            btnCalculate.disabled = true;
        }
    }

    function showResultModal(count) {
        let studyPlusLanguage = 0
        let studyPlusWorkExpCan = 0
        let workExpPlusLanguage = 0
        let workExpPlusWorkExpCan = 0
        let qualificationPlusLanguage = 0
        let studiesEntries = 0
        let experienceEntries = 0
        let qualificationEntries = 0
        let pointsForFrenchlanguageSkills = 0
        let pointsForStudiesInCanada = 0
        let allSpouseScore = 0;

        let firstLangScoree = calculateLanguageScore(firstLangScoresArray);

        let readingSkillFirstLanguage = firstLangScoresArray[0];
        let writingSkillFirstLanguage = firstLangScoresArray[1];
        let listeningSkillFirstLanguage = firstLangScoresArray[2];
        let speakingSkillFirstLanguage = firstLangScoresArray[3];

        if (martialStatus.value == 'married' && likeSingle == false) {
            if (readingSkillFirstLanguage < 29 || writingSkillFirstLanguage < 29 || listeningSkillFirstLanguage < 29 || speakingSkillFirstLanguage < 29) {
                if (educationInput.value == 'secondary' || educationInput.value == 'notCompleted') {
                    studyPlusLanguage = 0;
                } else if (educationInput.value == 'one-year' || educationInput.value == 'two-year' || educationInput.value == 'bachelors') {
                    studyPlusLanguage = 13;
                } else {
                    studyPlusLanguage = 25;
                }
            } else if (readingSkillFirstLanguage >= 29 && writingSkillFirstLanguage >= 29 && listeningSkillFirstLanguage >= 29 && speakingSkillFirstLanguage >= 29) {
                if (educationInput.value == 'secondary' || educationInput.value == 'notCompleted') {
                    studyPlusLanguage = 0;
                } else if (educationInput.value == 'one-year' || educationInput.value == 'two-year' || educationInput.value == 'bachelors') {
                    studyPlusLanguage = 25;
                } else {
                    studyPlusLanguage = 50;
                }
            } else {
                studyPlusLanguage = 0;
            }
        } else if ((martialStatus.value == 'married' && likeSingle == true) || martialStatus.value == 'single') {
            if (readingSkillFirstLanguage < 31 || writingSkillFirstLanguage < 31 || listeningSkillFirstLanguage < 31 || speakingSkillFirstLanguage < 31) {
                if (educationInput.value == 'secondary' || educationInput.value == 'notCompleted') {
                    studyPlusLanguage = 0;
                } else if (educationInput.value == 'one-year' || educationInput.value == 'two-year' || educationInput.value == 'bachelors') {
                    studyPlusLanguage = 13;
                } else {
                    studyPlusLanguage = 25;
                }
            } else if (readingSkillFirstLanguage >= 31 && writingSkillFirstLanguage >= 31 && listeningSkillFirstLanguage >= 31 && speakingSkillFirstLanguage >= 31) {
                if (educationInput.value == 'secondary' || educationInput.value == 'notCompleted') {
                    studyPlusLanguage = 0;
                } else if (educationInput.value == 'one-year' || educationInput.value == 'two-year' || educationInput.value == 'bachelors') {
                    studyPlusLanguage = 25;
                } else {
                    studyPlusLanguage = 50;
                }
            } else {
                studyPlusLanguage = 0;
            }
        }


        if (workExpCanInput.value == 1) {
            if (educationInput.value == 'secondary') {
                studyPlusWorkExpCan = 0;
            } else if (educationInput.value == 'one-year' || educationInput.value == 'two-year' || educationInput.value == 'bachelors') {
                studyPlusWorkExpCan = 13;
            } else {
                studyPlusWorkExpCan = 25;
            }
        } else if (workExpCanInput.value > 1) {
            if (educationInput.value == 'secondary') {
                studyPlusWorkExpCan = 0;
            } else if (educationInput.value == 'one-year' || educationInput.value == 'two-year' || educationInput.value == 'bachelors') {
                studyPlusWorkExpCan = 25;
            } else {
                studyPlusWorkExpCan = 50;
            }
        } else {
            studyPlusWorkExpCan = 0;
        }

        studiesEntries = studyPlusLanguage + studyPlusWorkExpCan;
        studiesEntries > 50 ? studiesEntries = 50 : studiesEntries = studiesEntries;


        if (martialStatus.value == 'married' && likeSingle == false) {
            if (readingSkillFirstLanguage < 29 || writingSkillFirstLanguage < 29 || listeningSkillFirstLanguage < 29 || speakingSkillFirstLanguage < 29) {
                if (workExpInput.value == 0) {
                    workExpPlusLanguage = 0;
                } else if (workExpInput.value == 1 || workExpInput.value == 2) {
                    workExpPlusLanguage = 13;
                } else {
                    workExpPlusLanguage = 25;
                }
            } else if (readingSkillFirstLanguage >= 29 && writingSkillFirstLanguage >= 29 && listeningSkillFirstLanguage >= 29 && speakingSkillFirstLanguage >= 29) {
                if (workExpInput.value == 0) {
                    workExpPlusLanguage = 0;
                } else if (workExpInput.value == 1 || workExpInput.value == 2) {
                    workExpPlusLanguage = 25;
                } else {
                    workExpPlusLanguage = 50;
                }
            } else {
                workExpPlusLanguage = 0;
            }
        } else if ((martialStatus.value == 'married' && likeSingle == true) || martialStatus.value == 'single') {
            if (readingSkillFirstLanguage < 31 || writingSkillFirstLanguage < 31 || listeningSkillFirstLanguage < 31 || speakingSkillFirstLanguage < 31) {
                if (workExpInput.value == 0) {
                    workExpPlusLanguage = 0;
                } else if (workExpInput.value == 1 || workExpInput.value == 2) {
                    workExpPlusLanguage = 13;
                } else {
                    workExpPlusLanguage = 25;
                }
            } else if (readingSkillFirstLanguage >= 31 && writingSkillFirstLanguage >= 31 && listeningSkillFirstLanguage >= 31 && speakingSkillFirstLanguage >= 31) {
                if (workExpInput.value == 0) {
                    workExpPlusLanguage = 0;
                } else if (workExpInput.value == 1 || workExpInput.value == 2) {
                    workExpPlusLanguage = 25;
                } else {
                    workExpPlusLanguage = 50;
                }
            } else {
                workExpPlusLanguage = 0;
            }
        }

        if (workExpCanInput.value == 1) {
            if (workExpInput.value == 0 || workExpInput.value == '') {
                workExpPlusWorkExpCan = 0;
            } else if (workExpInput.value == 1 || workExpInput.value == 2) {
                workExpPlusWorkExpCan = 13;
            } else {
                workExpPlusWorkExpCan = 25;
            }
        } else if (workExpCanInput.value > 1) {
            if (workExpInput.value == 0 || workExpInput.value == '') {
                workExpPlusWorkExpCan = 0;
            } else if (workExpInput.value == 1 || workExpInput.value == 2) {
                workExpPlusWorkExpCan = 25;
            } else {
                workExpPlusWorkExpCan = 50;
            }
        } else {
            workExpPlusWorkExpCan = 0;
        }

        if (martialStatus.value == 'married' && likeSingle == false) {
            if (readingSkillFirstLanguage < 29 || writingSkillFirstLanguage < 29 || listeningSkillFirstLanguage < 29 || speakingSkillFirstLanguage < 29) {
                if (qualificationInput.value == 'no') {
                    qualificationPlusLanguage = 0;
                } else {
                    qualificationPlusLanguage = 25;
                }
            } else if (readingSkillFirstLanguage >= 29 && writingSkillFirstLanguage >= 29 && listeningSkillFirstLanguage >= 29 && speakingSkillFirstLanguage >= 29) {
                if (qualificationInput.value == 'no') {
                    qualificationPlusLanguage = 0;
                } else {
                    qualificationPlusLanguage = 50;
                }
            } else {
                qualificationPlusLanguage = 0;
            }
        } else if ((martialStatus.value == 'married' && likeSingle == true) || martialStatus.value == 'single') {
            if (readingSkillFirstLanguage < 31 || writingSkillFirstLanguage < 31 || listeningSkillFirstLanguage < 31 || speakingSkillFirstLanguage < 31) {
                if (qualificationInput.value == 'no') {
                    qualificationPlusLanguage = 0;
                } else {
                    qualificationPlusLanguage = 25;
                }
            } else if (readingSkillFirstLanguage >= 31 && writingSkillFirstLanguage >= 31 && listeningSkillFirstLanguage >= 31 && speakingSkillFirstLanguage >= 31) {
                if (qualificationInput.value == 'no') {
                    qualificationPlusLanguage = 0;
                } else {
                    qualificationPlusLanguage = 50;
                }
            } else {
                qualificationPlusLanguage = 0;
            }
        }

        if (firstLangTypeInput.value == 'tef-canada' || firstLangTypeInput.value == 'tcf-canada') {
            if (martialStatus.value == 'married' && likeSingle == false) {
                if (firstLangScoree >= 64 && secondLangScore >= 4) {
                    pointsForFrenchlanguageSkills = 50;
                } else if (firstLangScoree >= 64 && secondLangScore < 4) {
                    pointsForFrenchlanguageSkills = 25;
                } else {
                    pointsForFrenchlanguageSkills = 0;
                }
            } else if ((martialStatus.value == 'married' && likeSingle == true) || martialStatus.value == 'single') {
                if (firstLangScoree >= 68 && secondLangScore >= 4) {
                    pointsForFrenchlanguageSkills = 50;
                } else if (firstLangScoree >= 68 && secondLangScore < 4) {
                    pointsForFrenchlanguageSkills = 25;
                } else {
                    pointsForFrenchlanguageSkills = 0;
                }
            }
        } else if (firstLangTypeInput.value != 'tef-canada' || firstLangTypeInput.value != 'tcf-canada') {
            if (martialStatus.value == 'married' && likeSingle == false) {
                if (firstLangScoree >= 64 && secondLangScore >= 12) {
                    pointsForFrenchlanguageSkills = 50;
                } else {
                    pointsForFrenchlanguageSkills = 0;
                }
            } else if ((martialStatus.value == 'married' && likeSingle == true) || martialStatus.value == 'single') {
                if (firstLangScoree >= 68 && secondLangScore >= 12) {
                    pointsForFrenchlanguageSkills = 50;
                } else {
                    pointsForFrenchlanguageSkills = 0;
                }
            }
        }

        if (studiesInCanadaInput.value == 'yes') {
            if (studiesInCanadaTypeInput.value == 'diploma') {
                pointsForStudiesInCanada = 15;
            } else if (studiesInCanadaTypeInput.value == 'bachelor') {
                pointsForStudiesInCanada = 30;
            } else {
                pointsForStudiesInCanada = 0;
            }
        }

        if (martialStatus.value == 'married' && likeSingle == false) {
            secondLangScore >= 22 ? secondLangScore = 22 : secondLangScore = secondLangScore;
        } else if ((martialStatus.value == 'married' && likeSingle == true) || martialStatus.value == 'single') {
            secondLangScore >= 24 ? secondLangScore = 24 : secondLangScore = secondLangScore;
        }

        experienceEntries = workExpPlusLanguage + workExpPlusWorkExpCan;
        experienceEntries > 50 ? experienceEntries = 50 : experienceEntries = experienceEntries;

        qualificationEntries = qualificationPlusLanguage + qualificationScore;
        qualificationEntries > 50 ? qualificationEntries = 50 : qualificationEntries = qualificationEntries;

        skillTransferabilityScore = studiesEntries + experienceEntries + qualificationEntries;
        skillTransferabilityScore > 100 ? skillTransferabilityScore = 100 : skillTransferabilityScore = skillTransferabilityScore;

        allSpouseScore = spouseEducationScore + spouseWorkExpScore + spouseLangScore;


        additionalPointsScore = relativesScore + pointsForFrenchlanguageSkills + pointsForStudiesInCanada + reservedJobScore + nominationScore
        additionalPointsScore > 600 ? additionalPointsScore = 600 : additionalPointsScore = additionalPointsScore;

        count = ageScore + educationScore + firstLangScoree + secondLangScore + workExpeCanScore + skillTransferabilityScore + additionalPointsScore + allSpouseScore;
        count > 1200 ? count = 1200 : count = count;

        let modalResult = document.querySelector('#modalResult');

        modalResult.innerHTML += `
        <div class="modalContent">
        <div class="flex flex-col md:gap-2 justify-center items-center">
            <h1 class="text-red-800 font-bold uppercase underline">human capital factors</h1>
            <p class="text-center">Age + Education + Languages + Canadian Work Experience</p>
            <p>${ageScore} + ${educationScore} + ${firstLangScoree + secondLangScore} + ${workExpeCanScore}</p>
            <h3 class="italic uppercase font-bold mt-3">Subtotal = ${ageScore + educationScore + firstLangScoree + secondLangScore + workExpeCanScore}</h3>
        </div>
        `
        if (martialStatus.value == 'married' && likeSingle == false) {
            modalResult.innerHTML += `
                <div class="flex flex-col md:gap-2 justify-center items-center mt-2">
                    <h1 class="text-red-800 font-bold uppercase underline">spouse factors</h1>
                    <p class="text-center">Education + Language + Canadian Work Experience</p>
                    <p>${spouseEducationScore} + ${spouseLangScore} + ${spouseWorkExpScore}</p>
                    <h3 class="italic uppercase font-bold mt-3">Subtotal = ${allSpouseScore}</h3>
                </div>
                `;
        }

        modalResult.innerHTML += `
        <div class="flex flex-col md:gap-2 justify-center items-center mt-2">
            <h1 class="text-red-800 font-bold uppercase underline">skill transferability factors</h1>
            <p class="font-bold underline text-center mt-2">Education (to a maximum of 50 points)</p>
            <p class="indent-10 text-center">Education + Official Language proficiency = ${studyPlusLanguage}</p>
            <p class="indent-10 text-center">Education + Canadian work experience = ${studyPlusWorkExpCan}</p>
            <h3 class="font-bold italic mt-2">Subtotal = ${studiesEntries}</h3>
            <p class="font-bold underline text-center mt-2">Foreign work experience (to a maximum of 50 points)</p>
            <p class="indent-10 text-center">Foreign work experience + Official Language proficiency = ${workExpPlusLanguage}</p>
            <p class="indent-10 text-center">Foreign work experience + Canadian work experience = ${workExpPlusWorkExpCan}</p>
            <h3 class="italic font-bold mt-2 mb-2">Subtotal = ${experienceEntries}</h3>
            <p>Certificate of qualification = ${qualificationEntries}</p>
            <h3 class="italic uppercase font-bold mt-2">Subtotal = ${skillTransferabilityScore}</h3>
        </div>

        <div class="flex flex-col md:gap-2 justify-center items-center mt-2">
            <h1 class="text-red-800 font-bold uppercase underline">additional points</h1>
            <p class="text-center">Provincial nomination + Job offer + Studies in Canada + French language skills + Sibling in Canada</p>
            <p>${nominationScore} + ${reservedJobScore} + ${pointsForStudiesInCanada} + ${pointsForFrenchlanguageSkills} + ${relativesScore}</p>
            <h3 class="italic uppercase font-bold mt-1">Subtotal = ${additionalPointsScore}</h3>
        </div>

        <h1 class="text-red-800 font-bold uppercase mt-4 text-center text-2xl md:text-3xl underline">Total:</h1>
        <p class="text-red-600 font-bold mt-2 text-center text-xl md:text-2xl">${ageScore + educationScore + firstLangScoree + secondLangScore + workExpeCanScore} + ${allSpouseScore} + ${skillTransferabilityScore} + ${additionalPointsScore}<p>
        <p class="font-bold text-green-600 text-2xl md:text-3xl mt-4 text-center">${count}</p>
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
            modalResult.querySelector('div').remove();
            cancelButton.removeEventListener('click', hideResultModal);
            resetAll();
            modalResult.innerHTML = `
                <button id="cancel" class="cancel absolute top-2 right-3 px-2 text-white bg-red-500 rounded hover:bg-red-600">
                <i class="fa-solid fa-xmark"></i>
            </button>
            `
        }

        let cancelButton = document.querySelector('#cancel');
        cancelButton.addEventListener('click', hideResultModal);
    }

    btnCalculate.addEventListener('click', showResultModal);

    btnReset.addEventListener('click', () => {
        resetAll();
    })


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

            });
        })
    }


    function resetAll() {
        count = 0;
        educationScore = 0;
        ageScore = 0;
        firstLangScore = 0;
        firstLangScoresArray = [0, 0, 0, 0];
        secondLangScore = 0;
        workExpeScore = 0;
        reservedJobScore = 0;
        adaptabilityScore = 0;
        additionalPointsScore = 0;
        skillTransferabilityScore = 0;
        qualificationScore = 0;
        relativesScore = 0;
        spouseEducationScore = 0;
        spouseWorkExpScore = 0;
        spouseLangScore = 0;
        spouseLangScoresArray = [0, 0, 0, 0];
        // spouseLangReadingScore = 0;
        // spouseLangWritingScore = 0;
        // spouseLangListeningScore = 0;
        // spouseLangSpeakingScore = 0;

        martialStatus.value = '';
        likeSingle = false;
        ageInput.value = '';
        educationInput.value = '';
        firstLangInput.value = '';
        firstLangTypeInput.value = '';
        firstLangReadingInput.value = '';
        firstLangWritingInput.value = '';
        firstLangListeningInput.value = '';
        firstLangSpeakingInput.value = '';
        secondLangInput.value = '';
        secondLangTypeInput.value = '';
        secondLangReadingInput.value = '';
        secondLangWritingInput.value = '';
        secondLangListeningInput.value = '';
        secondLangSpeakingInput.value = '';
        workExpInput.value = '';
        workExpCanInput.value = '';
        qualificationInput.value = '';
        reservedJobInput.value = '';
        jobOfferTeerInput.value = '';
        nominationInput.value = '';
        relativesInput.value = '';
        studiesInCanadaInput.value = '';
        studiesInCanadaTypeInput.value = '';
        spouseEducationInput.value = '';
        spouseWorkExpInput.value = '';
        spouseLangInput.value = '';
        spouseCanadianStatusInput.value = '';
        spouseFollowerInput.value = '';
        spouseLangReadingInput.value = '';
        spouseLangWritingInput.value = '';
        spouseLangListeningInput.value = '';
        spouseLangSpeakingInput.value = '';

        ageDiv.style.display = 'none';
        spouseCanadianStatusDiv.style.display = 'none';
        spouseFollowerDiv.style.display = 'none';
        educationDiv.style.display = 'none';
        studiesInCanadaDiv.style.display = 'none';
        studiesInCanadaTypeDiv.style.display = 'none';

        firstLangDiv.style.display = 'none';
        firstLangTypeDiv.style.display = 'none';
        firstLangScoresDiv.style.display = 'none';

        secondLangDiv.style.display = 'none';
        secondLangTypeDiv.style.display = 'none';
        secondLangScoresDiv.style.display = 'none';

        workExpCanDiv.style.display = 'none';
        workExpDiv.style.display = 'none';
        qualificationDiv.style.display = 'none';
        reservedJobDiv.style.display = 'none';
        jobOfferTeerDiv.style.display = 'none';
        nominationDiv.style.display = 'none';
        relativesDiv.style.display = 'none';
        spouseEducationDiv.style.display = 'none';
        spouseWorkExpDiv.style.display = 'none';
        spouseLangDiv.style.display = 'none';

        btnReset.disabled = true;
        btnCalculate.disabled = true;
        modalResult.style.backgroundColor = '#f7e6e6';
    }

})



function fillLanguageReading(language, readingInput) {
    if (language == 'ielts') {
        readingInput.options[1].innerHTML = '8.0 - 9.0';
        readingInput.options[2].innerHTML = '7.0 - 7.5';
        readingInput.options[3].innerHTML = '6.5';
        readingInput.options[4].innerHTML = '6.0';
        readingInput.options[5].innerHTML = '5.0 - 5.5';
        readingInput.options[6].innerHTML = '4.0 - 4.5';
        readingInput.options[7].innerHTML = '3.5';
        readingInput.options[8].innerHTML = '0 - 3.0';
    } else if (language == 'tef-canada') {
        readingInput.options[1].innerHTML = '263 - 300';
        readingInput.options[2].innerHTML = '248 - 262';
        readingInput.options[3].innerHTML = '233 - 247';
        readingInput.options[4].innerHTML = '207 - 232';
        readingInput.options[5].innerHTML = '181 - 206';
        readingInput.options[6].innerHTML = '151 - 180';
        readingInput.options[7].innerHTML = '121 - 150';
        readingInput.options[8].innerHTML = '0 - 120';
    } else if (language == 'tcf-canada') {
        readingInput.options[1].innerHTML = '549 - 699';
        readingInput.options[2].innerHTML = '524 - 548';
        readingInput.options[3].innerHTML = '499 - 523';
        readingInput.options[4].innerHTML = '453 - 498';
        readingInput.options[5].innerHTML = '406 - 452';
        readingInput.options[6].innerHTML = '375 - 405';
        readingInput.options[7].innerHTML = '342 - 374';
        readingInput.options[8].innerHTML = '0 - 341';
    } else if (language == 'celpip') {
        readingInput.options[1].innerHTML = '10 - 12';
        readingInput.options[2].innerHTML = '9';
        readingInput.options[3].innerHTML = '8';
        readingInput.options[4].innerHTML = '7';
        readingInput.options[5].innerHTML = '6';
        readingInput.options[6].innerHTML = '5';
        readingInput.options[7].innerHTML = '4';
        readingInput.options[8].innerHTML = 'M, 0 - 3';
    }
}

function fillLanguageWriting(language, writingInput) {
    if (language == 'ielts') {
        writingInput.options[1].innerHTML = '7.5 - 9.0';
        writingInput.options[2].innerHTML = '7.0';
        writingInput.options[3].innerHTML = '6.5';
        writingInput.options[4].innerHTML = '6.0';
        writingInput.options[5].innerHTML = '5.5';
        writingInput.options[6].innerHTML = '5.0';
        writingInput.options[7].innerHTML = '4.0 - 4.5';
        writingInput.options[8].innerHTML = '0 - 3.5';
    } else if (language == 'tef-canada') {
        writingInput.options[1].innerHTML = '393 - 450';
        writingInput.options[2].innerHTML = '371 - 392';
        writingInput.options[3].innerHTML = '349 - 370';
        writingInput.options[4].innerHTML = '310 - 348';
        writingInput.options[5].innerHTML = '271 - 309';
        writingInput.options[6].innerHTML = '226 - 270';
        writingInput.options[7].innerHTML = '181 - 225';
        writingInput.options[8].innerHTML = '0 - 180';
    } else if (language == 'tcf-canada') {
        writingInput.options[1].innerHTML = '16 - 20';
        writingInput.options[2].innerHTML = '14 - 15';
        writingInput.options[3].innerHTML = '12 - 13';
        writingInput.options[4].innerHTML = '10 - 11';
        writingInput.options[5].innerHTML = '7 - 9';
        writingInput.options[6].innerHTML = '6';
        writingInput.options[7].innerHTML = '4 - 5';
        writingInput.options[8].innerHTML = '0 - 3';
    } else if (language == 'celpip') {
        writingInput.options[1].innerHTML = '10 - 12';
        writingInput.options[2].innerHTML = '9';
        writingInput.options[3].innerHTML = '8';
        writingInput.options[4].innerHTML = '7';
        writingInput.options[5].innerHTML = '6';
        writingInput.options[6].innerHTML = '5';
        writingInput.options[7].innerHTML = '4';
        writingInput.options[8].innerHTML = 'M, 0 - 3';
    }
}

function fillLanguageListening(language, listeningInput) {
    if (language == 'ielts') {
        listeningInput.options[1].innerHTML = '8.5 - 9.0';
        listeningInput.options[2].innerHTML = '8.0';
        listeningInput.options[3].innerHTML = '7.5';
        listeningInput.options[4].innerHTML = '6.0 - 7.0';
        listeningInput.options[5].innerHTML = '5.5';
        listeningInput.options[6].innerHTML = '5.0';
        listeningInput.options[7].innerHTML = '4.5';
        listeningInput.options[8].innerHTML = '0 - 4.0';
    } else if (language == 'tef-canada') {
        listeningInput.options[1].innerHTML = '316 - 360';
        listeningInput.options[2].innerHTML = '298 - 315';
        listeningInput.options[3].innerHTML = '280 - 297';
        listeningInput.options[4].innerHTML = '249 - 279';
        listeningInput.options[5].innerHTML = '217 - 248';
        listeningInput.options[6].innerHTML = '181 - 216';
        listeningInput.options[7].innerHTML = '145 - 180';
        listeningInput.options[8].innerHTML = '0 - 144';
    } else if (language == 'tcf-canada') {
        listeningInput.options[1].innerHTML = '549 - 699';
        listeningInput.options[2].innerHTML = '523 - 548';
        listeningInput.options[3].innerHTML = '503 - 522';
        listeningInput.options[4].innerHTML = '458 - 502';
        listeningInput.options[5].innerHTML = '398 - 457';
        listeningInput.options[6].innerHTML = '369 - 397';
        listeningInput.options[7].innerHTML = '331 - 368';
        listeningInput.options[8].innerHTML = '0 - 330';
    } else if (language == 'celpip') {
        listeningInput.options[1].innerHTML = '10 - 12';
        listeningInput.options[2].innerHTML = '9';
        listeningInput.options[3].innerHTML = '8';
        listeningInput.options[4].innerHTML = '7';
        listeningInput.options[5].innerHTML = '6';
        listeningInput.options[6].innerHTML = '5';
        listeningInput.options[7].innerHTML = '4';
        listeningInput.options[8].innerHTML = 'M, 0 - 3';
    }
}

function fillLanguageSpeaking(language, speakingInput) {
    if (language == 'ielts') {
        speakingInput.options[1].innerHTML = '7.5 - 9.0';
        speakingInput.options[2].innerHTML = '7.0';
        speakingInput.options[3].innerHTML = '6.5';
        speakingInput.options[4].innerHTML = '6.0';
        speakingInput.options[5].innerHTML = '5.5';
        speakingInput.options[6].innerHTML = '5.0';
        speakingInput.options[7].innerHTML = '4.0 - 4.5';
        speakingInput.options[8].innerHTML = '0 - 3.5';
    } else if (language == 'tef-canada') {
        speakingInput.options[1].innerHTML = '393 - 450';
        speakingInput.options[2].innerHTML = '371 - 392';
        speakingInput.options[3].innerHTML = '349 - 370';
        speakingInput.options[4].innerHTML = '310 - 348';
        speakingInput.options[5].innerHTML = '271 - 309';
        speakingInput.options[6].innerHTML = '226 - 270';
        speakingInput.options[7].innerHTML = '181 - 225';
        speakingInput.options[8].innerHTML = '0 - 180';
    } else if (language == 'tcf-canada') {
        speakingInput.options[1].innerHTML = '16 - 20';
        speakingInput.options[2].innerHTML = '14 - 15';
        speakingInput.options[3].innerHTML = '12 - 13';
        speakingInput.options[4].innerHTML = '10 - 11';
        speakingInput.options[5].innerHTML = '7 - 9';
        speakingInput.options[6].innerHTML = '6';
        speakingInput.options[7].innerHTML = '4 - 5';
        speakingInput.options[8].innerHTML = '0 - 3';
    } else if (language == 'celpip') {
        speakingInput.options[1].innerHTML = '10 - 12';
        speakingInput.options[2].innerHTML = '9';
        speakingInput.options[3].innerHTML = '8';
        speakingInput.options[4].innerHTML = '7';
        speakingInput.options[5].innerHTML = '6';
        speakingInput.options[6].innerHTML = '5';
        speakingInput.options[7].innerHTML = '4';
        speakingInput.options[8].innerHTML = 'M, 0 - 3';
    }
}

function getPointsFirstLanguage(statusMarital, singleOrMarried, languageSkill, langArray, index) {
    if (statusMarital == 'married' && singleOrMarried == false) {
        if (languageSkill == 'clb10') {
            langArray[index] = 32;
        } else if (languageSkill == 'clb9') {
            langArray[index] = 29;
        } else if (languageSkill == 'clb8') {
            langArray[index] = 22;
        } else if (languageSkill == 'clb7') {
            langArray[index] = 16;
        } else if (languageSkill == 'clb6') {
            langArray[index] = 8;
        } else if (languageSkill == 'clb5' || languageSkill == 'clb4') {
            langArray[index] = 6;
        } else {
            langArray[index] = 0;
        }
    } else if ((statusMarital == 'married' && singleOrMarried == true) || statusMarital == 'single') {
        if (languageSkill == 'clb10') {
            langArray[index] = 34;
        } else if (languageSkill == 'clb9') {
            langArray[index] = 31;
        } else if (languageSkill == 'clb8') {
            langArray[index] = 23;
        } else if (languageSkill == 'clb7') {
            langArray[index] = 17;
        } else if (languageSkill == 'clb6') {
            langArray[index] = 9;
        } else if (languageSkill == 'clb5' || languageSkill == 'clb4') {
            langArray[index] = 6;
        } else {
            langArray[index] = 0;
        }
    }
}

function getPointsSecondLanguage(languageSkill, langArray, index) {
    if (languageSkill == 'clb9' || languageSkill == 'clb10') {
        langArray[index] = 6;
    } else if (languageSkill == 'clb7' || languageSkill == 'clb8') {
        langArray[index] = 3;
    } else if (languageSkill == 'clb5' || languageSkill == 'clb6') {
        langArray[index] = 1;
    } else {
        langArray[index] = 0;
    }
}

function getPointsLanguageSpouse(languageSkill, langArray, index) {
    if (languageSkill == 'clb10' || languageSkill == 'clb9') {
        langArray[index] = 5;
    } else if (languageSkill == 'clb8' || languageSkill == 'clb7') {
        langArray[index] = 3;
    } else if (languageSkill == 'clb6' || languageSkill == 'clb5') {
        langArray[index] = 1;
    } else {
        langArray[index] = 0;
    }
}


nclcBtn.addEventListener('click', () => {
    document.title = 'Maple Tools - CLB Calculator';
    main.innerHTML = '';
    let clone = nclcTemplate.content.cloneNode(true);
    main.appendChild(clone);

    // buttons
    let tefBtn = document.querySelector('#triggerTef');
    let tcfBtn = document.querySelector('#triggerTcf');
    let ieltsBtn = document.querySelector('#triggerIelts');
    let celpipBtn = document.querySelector('#triggerCelpip');

    // divs
    let tefDiv = document.querySelector('.tef');
    let tcfDiv = document.querySelector('.tcf');
    let ieltsDiv = document.querySelector('.ielts');
    let celpipDiv = document.querySelector('.celpip');

    // for tef canada
    tefBtn.addEventListener('click', () => {
        tcfDiv.style.display = 'none';
        ieltsDiv.style.display = 'none';
        celpipDiv.style.display = 'none';
        let tefDiv = document.querySelector('.tef');
        let tefReading = document.querySelector('[name="tefReading"]');
        let tefReadingScore = document.querySelector('#tefReadingScore');
        let errorTefReading = document.querySelector('#errorTefReading');
        let tefListening = document.querySelector('[name="tefListening"]');
        let tefListeningScore = document.querySelector('#tefListeningScore');
        let errorTefListening = document.querySelector('#errorTefListening');
        let tefWriting = document.querySelector('[name="tefWriting"]');
        let tefWritingScore = document.querySelector('#tefWritingScore');
        let errorTefWriting = document.querySelector('#errorTefWriting');
        let tefSpeaking = document.querySelector('[name="tefSpeaking"]');
        let tefSpeakingScore = document.querySelector('#tefSpeakingScore');
        let errorTefSpeaking = document.querySelector('#errorTefSpeaking');
        let finalResultTef = document.querySelector('#finalResultTef');
        let tefResultBtn = document.querySelector('#tefResultBtn');
        let tefResetBtn = document.querySelector('#tefResetBtn');
        let tefErrors = document.querySelectorAll('.errorTef');

        tefDiv.style.display = 'block';
        tefDiv.scrollIntoView({ behavior: 'smooth' })

        const checkErrors = () => {
            for (let error of tefErrors) {
                if (error.innerHTML !== '') {
                    return false;
                }
            }
            return true;
        }

        tefReading.addEventListener('input', () => {
            errorTefReading.innerHTML = '';
            errorTefReading.style.display = 'none';
            if (tefReading.value > 0 && tefReading.value <= 44) {
                tefReadingScore.innerHTML = 1;
            } else if (tefReading.value >= 45 && tefReading.value <= 90) {
                tefReadingScore.innerHTML = 2;
            } else if (tefReading.value >= 91 && tefReading.value <= 120) {
                tefReadingScore.innerHTML = 3;
            } else if (tefReading.value >= 121 && tefReading.value <= 150) {
                tefReadingScore.innerHTML = 4;
            } else if (tefReading.value >= 151 && tefReading.value <= 180) {
                tefReadingScore.innerHTML = 5;
            } else if (tefReading.value >= 181 && tefReading.value <= 206) {
                tefReadingScore.innerHTML = 6;
            } else if (tefReading.value >= 207 && tefReading.value <= 232) {
                tefReadingScore.innerHTML = 7;
            } else if (tefReading.value >= 233 && tefReading.value <= 247) {
                tefReadingScore.innerHTML = 8;
            } else if (tefReading.value >= 248 && tefReading.value <= 262) {
                tefReadingScore.innerHTML = 9;
            } else if (tefReading.value >= 263 && tefReading.value <= 277) {
                tefReadingScore.innerHTML = 10;
            } else if (tefReading.value >= 278 && tefReading.value <= 287) {
                tefReadingScore.innerHTML = 11;
            } else if (tefReading.value >= 288 && tefReading.value <= 300) {
                tefReadingScore.innerHTML = 12;
            } else if (tefReading.value == '') {
                errorTefReading.innerHTML = 'You must enter a score';
                tefReadingScore.innerHTML = 0;
            } else {
                errorTefReading.innerHTML = 'Please enter a valid score';
                errorTefReading.style.display = 'block';
                tefReadingScore.innerHTML = 0;
            }
        })

        tefListening.addEventListener('input', () => {
            errorTefListening.innerHTML = '';
            errorTefListening.style.display = 'none';
            if (tefListening.value > 0 && tefListening.value <= 55) {
                tefListeningScore.innerHTML = 1;
            } else if (tefListening.value >= 56 && tefListening.value <= 110) {
                tefListeningScore.innerHTML = 2;
            } else if (tefListening.value >= 111 && tefListening.value <= 144) {
                tefListeningScore.innerHTML = 3;
            } else if (tefListening.value >= 145 && tefListening.value <= 180) {
                tefListeningScore.innerHTML = 4;
            } else if (tefListening.value >= 181 && tefListening.value <= 216) {
                tefListeningScore.innerHTML = 5;
            } else if (tefListening.value >= 217 && tefListening.value <= 248) {
                tefListeningScore.innerHTML = 6;
            } else if (tefListening.value >= 249 && tefListening.value <= 279) {
                tefListeningScore.innerHTML = 7;
            } else if (tefListening.value >= 280 && tefListening.value <= 297) {
                tefListeningScore.innerHTML = 8;
            } else if (tefListening.value >= 298 && tefListening.value <= 315) {
                tefListeningScore.innerHTML = 9;
            } else if (tefListening.value >= 316 && tefListening.value <= 333) {
                tefListeningScore.innerHTML = 10;
            } else if (tefListening.value >= 333 && tefListening.value <= 349) {
                tefListeningScore.innerHTML = 11;
            } else if (tefListening.value >= 350 && tefListening.value <= 360) {
                tefListeningScore.innerHTML = 12;
            } else if (tefListening.value == '') {
                errorTefListening.innerHTML = 'You must enter a score';
                tefListeningScore.innerHTML = 0;
            } else {
                errorTefListening.innerHTML = 'Please enter a valid score';
                errorTefListening.style.display = 'block';
                tefListeningScore.innerHTML = 0;
            }
        })

        tefWriting.addEventListener('input', () => {
            errorTefWriting.innerHTML = '';
            errorTefWriting.style.display = 'none';
            if (tefWriting.value > 0 && tefWriting.value <= 70) {
                tefWritingScore.innerHTML = 1;
            } else if (tefWriting.value >= 71 && tefWriting.value <= 120) {
                tefWritingScore.innerHTML = 2;
            } else if (tefWriting.value >= 121 && tefWriting.value <= 180) {
                tefWritingScore.innerHTML = 3;
            } else if (tefWriting.value >= 181 && tefWriting.value <= 225) {
                tefWritingScore.innerHTML = 4;
            } else if (tefWriting.value >= 226 && tefWriting.value <= 270) {
                tefWritingScore.innerHTML = 5;
            } else if (tefWriting.value >= 271 && tefWriting.value <= 309) {
                tefWritingScore.innerHTML = 6;
            } else if (tefWriting.value >= 310 && tefWriting.value <= 348) {
                tefWritingScore.innerHTML = 7;
            } else if (tefWriting.value >= 349 && tefWriting.value <= 370) {
                tefWritingScore.innerHTML = 8;
            } else if (tefWriting.value >= 371 && tefWriting.value <= 392) {
                tefWritingScore.innerHTML = 9;
            } else if (tefWriting.value >= 393 && tefWriting.value <= 415) {
                tefWritingScore.innerHTML = 10;
            } else if (tefWriting.value >= 416 && tefWriting.value <= 438) {
                tefWritingScore.innerHTML = 11;
            } else if (tefWriting.value >= 439 && tefWriting.value <= 450) {
                tefWritingScore.innerHTML = 12;
            } else if (tefWriting.value == '') {
                errorTefWriting.innerHTML = 'You must enter a score';
                tefWritingScore.innerHTML = 0;
            } else {
                errorTefWriting.innerHTML = 'Please enter a valid score';
                errorTefWriting.style.display = 'block';
                tefWritingScore.innerHTML = 0;
            }
        })

        tefSpeaking.addEventListener('input', () => {
            errorTefSpeaking.innerHTML = '';
            errorTefSpeaking.style.display = 'none';
            if (tefSpeaking.value > 0 && tefSpeaking.value <= 70) {
                tefSpeakingScore.innerHTML = 1;
            } else if (tefSpeaking.value >= 71 && tefSpeaking.value <= 120) {
                tefSpeakingScore.innerHTML = 2;
            } else if (tefSpeaking.value >= 121 && tefSpeaking.value <= 180) {
                tefSpeakingScore.innerHTML = 3;
            } else if (tefSpeaking.value >= 181 && tefSpeaking.value <= 225) {
                tefSpeakingScore.innerHTML = 4;
            } else if (tefSpeaking.value >= 226 && tefSpeaking.value <= 270) {
                tefSpeakingScore.innerHTML = 5;
            } else if (tefSpeaking.value >= 271 && tefSpeaking.value <= 309) {
                tefSpeakingScore.innerHTML = 6;
            } else if (tefSpeaking.value >= 310 && tefSpeaking.value <= 348) {
                tefSpeakingScore.innerHTML = 7;
            } else if (tefSpeaking.value >= 349 && tefSpeaking.value <= 370) {
                tefSpeakingScore.innerHTML = 8;
            } else if (tefSpeaking.value >= 371 && tefSpeaking.value <= 392) {
                tefSpeakingScore.innerHTML = 9;
            } else if (tefSpeaking.value >= 393 && tefSpeaking.value <= 415) {
                tefSpeakingScore.innerHTML = 10;
            } else if (tefSpeaking.value >= 416 && tefSpeaking.value <= 438) {
                tefSpeakingScore.innerHTML = 11;
            } else if (tefSpeaking.value >= 439 && tefSpeaking.value <= 450) {
                tefSpeakingScore.innerHTML = 12;
            } else if (tefSpeaking.value == '') {
                errorTefSpeaking.innerHTML = 'You must enter a score';
                tefSpeakingScore.innerHTML = 0;
            } else {
                errorTefSpeaking.innerHTML = 'Please enter a valid score';
                errorTefSpeaking.style.display = 'block';
                tefSpeakingScore.innerHTML = 0;
            }
        })

        tefResultBtn.addEventListener('click', () => {
            if (tefReading.value == '' || tefListening.value == '' || tefWriting.value == '' || tefSpeaking.value == '') {
                finalResultTef.innerHTML = '<span class="text-red-600">Please enter all scores</span>';
            } else if (checkErrors() == false) {
                finalResultTef.innerHTML = `<span class="text-red-600">There are errors in the form</span>`;
            } else {
                let tefScore = [Number(tefReadingScore.innerHTML), Number(tefListeningScore.innerHTML), Number(tefWritingScore.innerHTML), Number(tefSpeakingScore.innerHTML)];
                let min = Math.min(...tefScore);
                finalResultTef.innerHTML = `Your CLB is <b class="underline">${min}</b>`;
            }
        })

        tefResetBtn.addEventListener('click', () => {
            tefReading.value = '';
            tefReadingScore.innerHTML = 0;
            errorTefReading.innerHTML = '';
            errorTefReading.style.display = 'none';
            tefListening.value = '';
            tefListeningScore.innerHTML = 0;
            errorTefListening.innerHTML = '';
            errorTefListening.style.display = 'none';
            tefWriting.value = '';
            tefWritingScore.innerHTML = 0;
            errorTefWriting.innerHTML = '';
            errorTefWriting.style.display = 'none';
            tefSpeaking.value = '';
            tefSpeakingScore.innerHTML = 0;
            errorTefSpeaking.innerHTML = '';
            errorTefSpeaking.style.display = 'none';
            finalResultTef.innerHTML = 0;
        })
    })

    // for tcf canada
    tcfBtn.addEventListener('click', () => {
        tefDiv.style.display = 'none';
        ieltsDiv.style.display = 'none';
        celpipDiv.style.display = 'none';
        let tcfDiv = document.querySelector('.tcf');
        let tcfReading = document.querySelector('[name="tcfReading"]');
        let tcfReadingScore = document.querySelector('#tcfReadingScore');
        let errorTcfReading = document.querySelector('#errorTcfReading');
        let tcfListening = document.querySelector('[name="tcfListening"]');
        let tcfListeningScore = document.querySelector('#tcfListeningScore');
        let errorTcfListening = document.querySelector('#errorTcfListening');
        let tcfWriting = document.querySelector('[name="tcfWriting"]');
        let tcfWritingScore = document.querySelector('#tcfWritingScore');
        let errorTcfWriting = document.querySelector('#errorTcfWriting');
        let tcfSpeaking = document.querySelector('[name="tcfSpeaking"]');
        let tcfSpeakingScore = document.querySelector('#tcfSpeakingScore');
        let errorTcfSpeaking = document.querySelector('#errorTcfSpeaking');
        let finalResultTcf = document.querySelector('#finalResultTcf');
        let tcfResultBtn = document.querySelector('#tcfResultBtn');
        let tcfResetBtn = document.querySelector('#tcfResetBtn');
        let tcfErrors = document.querySelectorAll('.errorTcf');

        tcfDiv.style.display = 'block';
        tcfDiv.scrollIntoView({ behavior: 'smooth' })

        const checkErrors = () => {
            for (let error of tcfErrors) {
                if (error.innerHTML !== '') {
                    return false;
                }
            }
            return true;
        }

        tcfReading.addEventListener('input', () => {
            errorTcfReading.innerHTML = '';
            errorTcfReading.style.display = 'none';
            if (tcfReading.value > 0 && tcfReading.value <= 130) {
                tcfReadingScore.innerHTML = 1;
            } else if (tcfReading.value >= 131 && tcfReading.value <= 231) {
                tcfReadingScore.innerHTML = 2;
            } else if (tcfReading.value >= 232 && tcfReading.value <= 341) {
                tcfReadingScore.innerHTML = 3;
            } else if (tcfReading.value >= 342 && tcfReading.value <= 374) {
                tcfReadingScore.innerHTML = 4;
            } else if (tcfReading.value >= 375 && tcfReading.value <= 405) {
                tcfReadingScore.innerHTML = 5;
            } else if (tcfReading.value >= 406 && tcfReading.value <= 452) {
                tcfReadingScore.innerHTML = 6;
            } else if (tcfReading.value >= 453 && tcfReading.value <= 498) {
                tcfReadingScore.innerHTML = 7;
            } else if (tcfReading.value >= 499 && tcfReading.value <= 523) {
                tcfReadingScore.innerHTML = 8;
            } else if (tcfReading.value >= 524 && tcfReading.value <= 548) {
                tcfReadingScore.innerHTML = 9;
            } else if (tcfReading.value >= 549 && tcfReading.value <= 599) {
                tcfReadingScore.innerHTML = 10;
            } else if (tcfReading.value >= 600 && tcfReading.value <= 649) {
                tcfReadingScore.innerHTML = 11;
            } else if (tcfReading.value >= 650 && tcfReading.value <= 699) {
                tcfReadingScore.innerHTML = 12;
            } else if (tcfReading.value == '') {
                errorTcfReading.innerHTML = 'You must enter a score';
                tcfReadingScore.innerHTML = 0;
            } else {
                errorTcfReading.innerHTML = 'Please enter a valid score';
                errorTcfReading.style.display = 'block';
                tcfReadingScore.innerHTML = 0;
            }
        })

        tcfListening.addEventListener('input', () => {
            errorTcfListening.innerHTML = '';
            errorTcfListening.style.display = 'none';
            if (tcfListening.value > 0 && tcfListening.value <= 110) {
                tcfListeningScore.innerHTML = 1;
            } else if (tcfListening.value >= 111 && tcfListening.value <= 221) {
                tcfListeningScore.innerHTML = 2;
            } else if (tcfListening.value >= 222 && tcfListening.value <= 330) {
                tcfListeningScore.innerHTML = 3;
            } else if (tcfListening.value >= 331 && tcfListening.value <= 368) {
                tcfListeningScore.innerHTML = 4;
            } else if (tcfListening.value >= 369 && tcfListening.value <= 397) {
                tcfListeningScore.innerHTML = 5;
            } else if (tcfListening.value >= 398 && tcfListening.value <= 457) {
                tcfListeningScore.innerHTML = 6;
            } else if (tcfListening.value >= 458 && tcfListening.value <= 502) {
                tcfListeningScore.innerHTML = 7;
            } else if (tcfListening.value >= 503 && tcfListening.value <= 522) {
                tcfListeningScore.innerHTML = 8;
            } else if (tcfListening.value >= 523 && tcfListening.value <= 548) {
                tcfListeningScore.innerHTML = 9;
            } else if (tcfListening.value >= 549 && tcfListening.value <= 599) {
                tcfListeningScore.innerHTML = 10;
            } else if (tcfListening.value >= 600 && tcfListening.value <= 649) {
                tcfListeningScore.innerHTML = 11;
            } else if (tcfListening.value >= 650 && tcfListening.value <= 699) {
                tcfListeningScore.innerHTML = 12;
            } else if (tcfListening.value == '') {
                errorTcfListening.innerHTML = 'You must enter a score';
                tcfListeningScore.innerHTML = 0;
            } else {
                errorTcfListening.innerHTML = 'Please enter a valid score';
                errorTcfListening.style.display = 'block';
                tcfListeningScore.innerHTML = 0;
            }
        })

        tcfWriting.addEventListener('input', () => {
            errorTcfWriting.innerHTML = '';
            errorTcfWriting.style.display = 'none';
            if (tcfWriting.value == 0 || tcfWriting.value == 1) {
                tcfWritingScore.innerHTML = 1;
            } else if (tcfWriting.value == 2) {
                tcfWritingScore.innerHTML = 2;
            } else if (tcfWriting.value == 3) {
                tcfWritingScore.innerHTML = 3;
            } else if (tcfWriting.value == 4 || tcfWriting.value == 5) {
                tcfWritingScore.innerHTML = 4;
            } else if (tcfWriting.value == 6) {
                tcfWritingScore.innerHTML = 5;
            } else if (tcfWriting.value >= 7 && tcfWriting.value <= 9) {
                tcfWritingScore.innerHTML = 6;
            } else if (tcfWriting.value == 10 || tcfWriting.value == 11) {
                tcfWritingScore.innerHTML = 7;
            } else if (tcfWriting.value == 12 || tcfWriting.value == 13) {
                tcfWritingScore.innerHTML = 8;
            } else if (tcfWriting.value == 14 || tcfWriting.value == 15) {
                tcfWritingScore.innerHTML = 9;
            } else if (tcfWriting.value == 16 || tcfWriting.value == 17) {
                tcfWritingScore.innerHTML = 10;
            } else if (tcfWriting.value == 18 || tcfWriting.value == 19) {
                tcfWritingScore.innerHTML = 11;
            } else if (tcfWriting.value == 20) {
                tcfWritingScore.innerHTML = 12;
            } else if (tcfWriting.value == '') {
                errorTcfWriting.innerHTML = 'You must enter a score';
                tcfWritingScore.innerHTML = 0;
            } else {
                errorTcfWriting.innerHTML = 'Please enter a valid score';
                errorTcfWriting.style.display = 'block';
                tcfWritingScore.innerHTML = 0;
            }
        })

        tcfSpeaking.addEventListener('input', () => {
            errorTcfSpeaking.innerHTML = '';
            errorTcfSpeaking.style.display = 'none';
            if (tcfSpeaking.value == 0 || tcfSpeaking.value == 1) {
                tcfSpeakingScore.innerHTML = 1;
            } else if (tcfSpeaking.value == 2) {
                tcfSpeakingScore.innerHTML = 2;
            } else if (tcfSpeaking.value == 3) {
                tcfSpeakingScore.innerHTML = 3;
            } else if (tcfSpeaking.value == 4 || tcfSpeaking.value == 5) {
                tcfSpeakingScore.innerHTML = 4;
            } else if (tcfSpeaking.value == 6) {
                tcfSpeakingScore.innerHTML = 5;
            } else if (tcfSpeaking.value >= 7 && tcfSpeaking.value <= 9) {
                tcfSpeakingScore.innerHTML = 6;
            } else if (tcfSpeaking.value == 10 || tcfSpeaking.value == 11) {
                tcfSpeakingScore.innerHTML = 7;
            } else if (tcfSpeaking.value == 12 || tcfSpeaking.value == 13) {
                tcfSpeakingScore.innerHTML = 8;
            } else if (tcfSpeaking.value == 14 || tcfSpeaking.value == 15) {
                tcfSpeakingScore.innerHTML = 9;
            } else if (tcfSpeaking.value == 16 || tcfSpeaking.value == 17) {
                tcfSpeakingScore.innerHTML = 10;
            } else if (tcfSpeaking.value == 18 || tcfSpeaking.value == 19) {
                tcfSpeakingScore.innerHTML = 11;
            } else if (tcfSpeaking.value == 20) {
                tcfSpeakingScore.innerHTML = 12;
            } else if (tcfSpeaking.value == '') {
                errorTcfWriting.innerHTML = 'You must enter a score';
                tcfSpeakingScore.innerHTML = 0;
            } else {
                errorTcfSpeaking.innerHTML = 'Please enter a valid score';
                errorTcfSpeaking.style.display = 'block';
                tcfSpeakingScore.innerHTML = 0;
            }
        })

        tcfResultBtn.addEventListener('click', () => {
            if (tcfReading.value == '' || tcfListening.value == '' || tcfWriting.value == '' || tcfSpeaking.value == '') {
                finalResultTcf.innerHTML = '<span class="text-red-600">Please enter all scores</span>';
            } else if (checkErrors() == false) {
                finalResultTcf.innerHTML = `<span class="text-red-600">There are errors in the form</span>`;
            } else {
                let tcfScore = [Number(tcfReadingScore.innerHTML), Number(tcfListeningScore.innerHTML), Number(tcfWritingScore.innerHTML), Number(tcfSpeakingScore.innerHTML)];
                let min = Math.min(...tcfScore);
                finalResultTcf.innerHTML = `Your CLB is <b class="underline">${min}</b>`;
            }
        })

        tcfResetBtn.addEventListener('click', () => {
            tcfReading.value = '';
            tcfReadingScore.innerHTML = 0;
            errorTcfReading.innerHTML = '';
            errorTcfReading.style.display = 'none';
            tcfListening.value = '';
            tcfListeningScore.innerHTML = 0;
            errorTcfListening.innerHTML = '';
            errorTcfListening.style.display = 'none';
            tcfWriting.value = '';
            tcfWritingScore.innerHTML = 0;
            errorTcfWriting.innerHTML = '';
            errorTcfWriting.style.display = 'none';
            tcfSpeaking.value = '';
            tcfSpeakingScore.innerHTML = 0;
            errorTcfSpeaking.innerHTML = '';
            errorTcfSpeaking.style.display = 'none';
            finalResultTcf.innerHTML = 0;
        })
    })

    // for ielts
    ieltsBtn.addEventListener('click', () => {
        tefDiv.style.display = 'none';
        tcfDiv.style.display = 'none';
        celpipDiv.style.display = 'none';
        let ieltsDiv = document.querySelector('.ielts');
        let ieltsReading = document.querySelector('[name="ieltsReading"]');
        let ieltsReadingScore = document.querySelector('#ieltsReadingScore');
        let errorIeltsReading = document.querySelector('#errorIeltsReading');
        let ieltsListening = document.querySelector('[name="ieltsListening"]');
        let ieltsListeningScore = document.querySelector('#ieltsListeningScore');
        let errorIeltsListening = document.querySelector('#errorIeltsListening');
        let ieltsWriting = document.querySelector('[name="ieltsWriting"]');
        let ieltsWritingScore = document.querySelector('#ieltsWritingScore');
        let errorIeltsWriting = document.querySelector('#errorIeltsWriting');
        let ieltsSpeaking = document.querySelector('[name="ieltsSpeaking"]');
        let ieltsSpeakingScore = document.querySelector('#ieltsSpeakingScore');
        let errorIeltsSpeaking = document.querySelector('#errorIeltsSpeaking');
        let finalResultIelts = document.querySelector('#finalResultIelts');
        let ieltsResultBtn = document.querySelector('#ieltsResultBtn');
        let ieltsResetBtn = document.querySelector('#ieltsResetBtn');
        let ieltsErrors = document.querySelectorAll('.errorIelts');

        ieltsDiv.style.display = 'block';
        ieltsDiv.scrollIntoView({ behavior: 'smooth' })

        const checkErrors = () => {
            for (let error of ieltsErrors) {
                if (error.innerHTML !== '') {
                    return false;
                }
            }
            return true;
        }

        ieltsReading.addEventListener('input', () => {
            errorIeltsReading.innerHTML = '';
            errorIeltsReading.style.display = 'none';
            if (ieltsReading.value >= 0 && ieltsReading.value <= 1) {
                ieltsReadingScore.innerHTML = 1;
            } else if (ieltsReading.value == 1.5 || ieltsReading.value == 2) {
                ieltsReadingScore.innerHTML = 2;
            } else if (ieltsReading.value == 2.5 || ieltsReading.value == 3) {
                ieltsReadingScore.innerHTML = 3;
            } else if (ieltsReading.value == 3.5) {
                ieltsReadingScore.innerHTML = 4;
            } else if (ieltsReading.value == 4 || ieltsReading.value == 4.5) {
                ieltsReadingScore.innerHTML = 5;
            } else if (ieltsReading.value == 5 || ieltsReading.value == 5.5) {
                ieltsReadingScore.innerHTML = 6;
            } else if (ieltsReading.value == 6) {
                ieltsReadingScore.innerHTML = 7;
            } else if (ieltsReading.value == 6.5) {
                ieltsReadingScore.innerHTML = 8;
            } else if (ieltsReading.value == 7 || ieltsReading.value == 7.5) {
                ieltsReadingScore.innerHTML = 9;
            } else if (ieltsReading.value >= 8 && ieltsReading.value <= 9) {
                ieltsReadingScore.innerHTML = 10;
            } else if (ieltsReading.value == '') {
                errorIeltsReading.innerHTML = 'You must enter a score';
                ieltsReadingScore.innerHTML = 0;
            } else {
                errorIeltsReading.innerHTML = 'Please enter a valid score';
                errorIeltsReading.style.display = 'block';
                ieltsReadingScore.innerHTML = 0;
            }
        })

        ieltsListening.addEventListener('input', () => {
            errorIeltsListening.innerHTML = '';
            errorIeltsListening.style.display = 'none';
            if (ieltsListening.value >= 0 && ieltsListening.value <= 1) {
                ieltsListeningScore.innerHTML = 1;
            } else if (ieltsListening.value >= 1.5 && ieltsListening.value <= 2.5) {
                ieltsListeningScore.innerHTML = 2;
            } else if (ieltsListening.value >= 3 && ieltsListening.value <= 4) {
                ieltsListeningScore.innerHTML = 3;
            } else if (ieltsListening.value == 4.5) {
                ieltsListeningScore.innerHTML = 4;
            } else if (ieltsListening.value == 5) {
                ieltsListeningScore.innerHTML = 5;
            } else if (ieltsListening.value == 5.5) {
                ieltsListeningScore.innerHTML = 6;
            } else if (ieltsListening.value >= 6 && ieltsListening.value <= 7) {
                ieltsListeningScore.innerHTML = 7;
            } else if (ieltsListening.value == 7.5) {
                ieltsListeningScore.innerHTML = 8;
            } else if (ieltsListening.value == 8) {
                ieltsListeningScore.innerHTML = 9;
            } else if (ieltsListening.value == 8.5 || ieltsListening.value == 9) {
                ieltsListeningScore.innerHTML = 10;
            } else if (ieltsListening.value == '') {
                errorIeltsListening.innerHTML = 'You must enter a score';
                ieltsListeningScore.innerHTML = 0;
            } else {
                errorIeltsListening.innerHTML = 'Please enter a valid score';
                errorIeltsListening.style.display = 'block';
                ieltsListeningScore.innerHTML = 0;
            }
        })

        ieltsWriting.addEventListener('input', () => {
            errorIeltsWriting.innerHTML = '';
            errorIeltsWriting.style.display = 'none';
            if (ieltsWriting.value >= 0 && ieltsWriting.value <= 1) {
                ieltsWritingScore.innerHTML = 1;
            } else if (ieltsWriting.value >= 1.5 && ieltsWriting.value <= 2.5) {
                ieltsWritingScore.innerHTML = 2;
            } else if (ieltsWriting.value == 3 || ieltsWriting.value == 3.5) {
                ieltsWritingScore.innerHTML = 3;
            } else if (ieltsWriting.value == 4 || ieltsWriting.value == 4.5) {
                ieltsWritingScore.innerHTML = 4;
            } else if (ieltsWriting.value == 5) {
                ieltsWritingScore.innerHTML = 5;
            } else if (ieltsWriting.value == 5.5) {
                ieltsWritingScore.innerHTML = 6;
            } else if (ieltsWriting.value == 6) {
                ieltsWritingScore.innerHTML = 7;
            } else if (ieltsWriting.value == 6.5) {
                ieltsWritingScore.innerHTML = 8;
            } else if (ieltsWriting.value == 7) {
                ieltsWritingScore.innerHTML = 9;
            } else if (ieltsWriting.value >= 7.5 && ieltsWriting.value <= 9) {
                ieltsWritingScore.innerHTML = 10;
            } else if (ieltsWriting.value == '') {
                errorIeltsWriting.innerHTML = 'You must enter a score';
                ieltsWritingScore.innerHTML = 0;
            } else {
                errorIeltsWriting.innerHTML = 'Please enter a valid score';
                errorIeltsWriting.style.display = 'block';
                ieltsWritingScore.innerHTML = 0;
            }
        })

        ieltsSpeaking.addEventListener('input', () => {
            errorIeltsSpeaking.innerHTML = '';
            errorIeltsSpeaking.style.display = 'none';
            if (ieltsSpeaking.value >= 0 && ieltsSpeaking.value <= 1) {
                ieltsSpeakingScore.innerHTML = 1;
            } else if (ieltsSpeaking.value >= 1.5 && ieltsSpeaking.value <= 2.5) {
                ieltsSpeakingScore.innerHTML = 2;
            } else if (ieltsSpeaking.value == 3 || ieltsSpeaking.value == 3.5) {
                ieltsSpeakingScore.innerHTML = 3;
            } else if (ieltsSpeaking.value == 4 || ieltsSpeaking.value == 4.5) {
                ieltsSpeakingScore.innerHTML = 4;
            } else if (ieltsSpeaking.value == 5) {
                ieltsSpeakingScore.innerHTML = 5;
            } else if (ieltsSpeaking.value == 5.5) {
                ieltsSpeakingScore.innerHTML = 6;
            } else if (ieltsSpeaking.value == 6) {
                ieltsSpeakingScore.innerHTML = 7;
            } else if (ieltsSpeaking.value == 6.5) {
                ieltsSpeakingScore.innerHTML = 8;
            } else if (ieltsSpeaking.value == 7) {
                ieltsSpeakingScore.innerHTML = 9;
            } else if (ieltsSpeaking.value >= 7.5 && ieltsSpeaking.value <= 9) {
                ieltsSpeakingScore.innerHTML = 10;
            } else if (ieltsSpeaking.value == '') {
                errorIeltsSpeaking.innerHTML = 'You must enter a score';
                ieltsSpeakingScore.innerHTML = 0;
            } else {
                errorIeltsSpeaking.innerHTML = 'Please enter a valid score';
                errorIeltsSpeaking.style.display = 'block';
                ieltsSpeakingScore.innerHTML = 0;
            }
        })

        ieltsResultBtn.addEventListener('click', () => {
            if (ieltsReading.value == '' || ieltsListening.value == '' || ieltsWriting.value == '' || ieltsSpeaking.value == '') {
                finalResultIelts.innerHTML = '<span class="text-red-600">Please enter all scores</span>';
            } else if (checkErrors() == false) {
                finalResultIelts.innerHTML = `<span class="text-red-600">There are errors in the form</span>`;
            } else {
                let ieltsScore = [Number(ieltsReadingScore.innerHTML), Number(ieltsListeningScore.innerHTML), Number(ieltsWritingScore.innerHTML), Number(ieltsSpeakingScore.innerHTML)];
                let min = Math.min(...ieltsScore);
                finalResultIelts.innerHTML = `Your CLB is <b class="underline">${min}</b>`;
            }
        })

        ieltsResetBtn.addEventListener('click', () => {
            ieltsReading.value = '';
            ieltsReadingScore.innerHTML = 0;
            errorIeltsReading.innerHTML = '';
            errorIeltsReading.style.display = 'none';
            ieltsListening.value = '';
            ieltsListeningScore.innerHTML = 0;
            errorIeltsListening.innerHTML = '';
            errorIeltsListening.style.display = 'none';
            ieltsWriting.value = '';
            ieltsWritingScore.innerHTML = 0;
            errorIeltsWriting.innerHTML = '';
            errorIeltsWriting.style.display = 'none';
            ieltsSpeaking.value = '';
            ieltsSpeakingScore.innerHTML = 0;
            errorIeltsSpeaking.innerHTML = '';
            errorIeltsSpeaking.style.display = 'none';
            finalResultIelts.innerHTML = 0;
        })
    })

    // for celpip
    celpipBtn.addEventListener('click', () => {
        tefDiv.style.display = 'none';
        tcfDiv.style.display = 'none';
        ieltsDiv.style.display = 'none';
        let celpipDiv = document.querySelector('.celpip');
        let celpipReading = document.querySelector('[name="celpipReading"]');
        let celpipReadingScore = document.querySelector('#celpipReadingScore');
        let errorCelpipReading = document.querySelector('#errorCelpipReading');
        let celpipListening = document.querySelector('[name="celpipListening"]');
        let celpipListeningScore = document.querySelector('#celpipListeningScore');
        let errorCelpipListening = document.querySelector('#errorCelpipListening');
        let celpipWriting = document.querySelector('[name="celpipWriting"]');
        let celpipWritingScore = document.querySelector('#celpipWritingScore');
        let errorCelpipWriting = document.querySelector('#errorCelpipWriting');
        let celpipSpeaking = document.querySelector('[name="celpipSpeaking"]');
        let celpipSpeakingScore = document.querySelector('#celpipSpeakingScore');
        let errorCelpipSpeaking = document.querySelector('#errorCelpipSpeaking');
        let finalResultCelpip = document.querySelector('#finalResultCelpip');
        let celpipResultBtn = document.querySelector('#celpipResultBtn');
        let celpipResetBtn = document.querySelector('#celpipResetBtn');
        let celpipErrors = document.querySelectorAll('.errorCelpip');

        celpipDiv.style.display = 'block';
        celpipDiv.scrollIntoView({ behavior: 'smooth' })

        const checkErrors = () => {
            for (let error of celpipErrors) {
                if (error.innerHTML !== '') {
                    return false;
                }
            }
            return true;
        }

        celpipReading.addEventListener('input', () => {
            errorCelpipReading.innerHTML = '';
            errorCelpipReading.style.display = 'none';
            if (celpipReading.value == 0 || celpipReading.value == 1) {
                celpipReadingScore.innerHTML = 1;
            } else if (celpipReading.value == 2) {
                celpipReadingScore.innerHTML = 2;
            } else if (celpipReading.value == 3) {
                celpipReadingScore.innerHTML = 3;
            } else if (celpipReading.value == 4) {
                celpipReadingScore.innerHTML = 4;
            } else if (celpipReading.value == 5) {
                celpipReadingScore.innerHTML = 5;
            } else if (celpipReading.value == 6) {
                celpipReadingScore.innerHTML = 6;
            } else if (celpipReading.value == 7) {
                celpipReadingScore.innerHTML = 7;
            } else if (celpipReading.value == 8) {
                celpipReadingScore.innerHTML = 8;
            } else if (celpipReading.value == 9) {
                celpipReadingScore.innerHTML = 9;
            } else if (celpipReading.value == 10) {
                celpipReadingScore.innerHTML = 10;
            } else if (celpipReading.value == '') {
                errorCelpipReading.innerHTML = 'You must enter a score';
                celpipReadingScore.innerHTML = 0;
            } else {
                errorCelpipReading.innerHTML = 'Please enter a valid score';
                errorCelpipReading.style.display = 'block';
                celpipReadingScore.innerHTML = 0;
            }
        })

        celpipListening.addEventListener('input', () => {
            errorCelpipListening.innerHTML = '';
            errorCelpipListening.style.display = 'none';
            if (celpipListening.value == 0 || celpipListening.value == 1) {
                celpipListeningScore.innerHTML = 1;
            } else if (celpipListening.value == 2) {
                celpipListeningScore.innerHTML = 2;
            } else if (celpipListening.value == 3) {
                celpipListeningScore.innerHTML = 3;
            } else if (celpipListening.value == 4) {
                celpipListeningScore.innerHTML = 4;
            } else if (celpipListening.value == 5) {
                celpipListeningScore.innerHTML = 5;
            } else if (celpipListening.value == 6) {
                celpipListeningScore.innerHTML = 6;
            } else if (celpipListening.value == 7) {
                celpipListeningScore.innerHTML = 7;
            } else if (celpipListening.value == 8) {
                celpipListeningScore.innerHTML = 8;
            } else if (celpipListening.value == 9) {
                celpipListeningScore.innerHTML = 9;
            } else if (celpipListening.value == 10) {
                celpipListeningScore.innerHTML = 10;
            } else if (celpipListening.value == '') {
                errorCelpipListening.innerHTML = 'You must enter a score';
                celpipListeningScore.innerHTML = 0;
            } else {
                errorCelpipListening.innerHTML = 'Please enter a valid score';
                errorCelpipListening.style.display = 'block';
                celpipListeningScore.innerHTML = 0;
            }
        })

        celpipWriting.addEventListener('input', () => {
            errorCelpipWriting.innerHTML = '';
            errorCelpipWriting.style.display = 'none';
            if (celpipWriting.value == 0 || celpipWriting.value == 1) {
                celpipWritingScore.innerHTML = 1;
            } else if (celpipWriting.value == 2) {
                celpipWritingScore.innerHTML = 2;
            } else if (celpipWriting.value == 3) {
                celpipWritingScore.innerHTML = 3;
            } else if (celpipWriting.value == 4) {
                celpipWritingScore.innerHTML = 4;
            } else if (celpipWriting.value == 5) {
                celpipWritingScore.innerHTML = 5;
            } else if (celpipWriting.value == 6) {
                celpipWritingScore.innerHTML = 6;
            } else if (celpipWriting.value == 7) {
                celpipWritingScore.innerHTML = 7;
            } else if (celpipWriting.value == 8) {
                celpipWritingScore.innerHTML = 8;
            } else if (celpipWriting.value == 9) {
                celpipWritingScore.innerHTML = 9;
            } else if (celpipWriting.value == 10) {
                celpipWritingScore.innerHTML = 10;
            } else if (celpipWriting.value == '') {
                errorCelpipWriting.innerHTML = 'You must enter a score';
                celpipWritingScore.innerHTML = 0;
            } else {
                errorCelpipWriting.innerHTML = 'Please enter a valid score';
                errorCelpipWriting.style.display = 'block';
                celpipWritingScore.innerHTML = 0;
            }
        })

        celpipSpeaking.addEventListener('input', () => {
            errorCelpipSpeaking.innerHTML = '';
            errorCelpipSpeaking.style.display = 'none';
            if (celpipSpeaking.value == 0 || celpipSpeaking.value == 1) {
                celpipSpeakingScore.innerHTML = 1;
            } else if (celpipSpeaking.value == 2) {
                celpipSpeakingScore.innerHTML = 2;
            } else if (celpipSpeaking.value == 3) {
                celpipSpeakingScore.innerHTML = 3;
            } else if (celpipSpeaking.value == 4) {
                celpipSpeakingScore.innerHTML = 4;
            } else if (celpipSpeaking.value == 5) {
                celpipSpeakingScore.innerHTML = 5;
            } else if (celpipSpeaking.value == 6) {
                celpipSpeakingScore.innerHTML = 6;
            } else if (celpipSpeaking.value == 7) {
                celpipSpeakingScore.innerHTML = 7;
            } else if (celpipSpeaking.value == 8) {
                celpipSpeakingScore.innerHTML = 8;
            } else if (celpipSpeaking.value == 9) {
                celpipSpeakingScore.innerHTML = 9;
            } else if (celpipSpeaking.value == 10) {
                celpipSpeakingScore.innerHTML = 10;
            } else if (celpipSpeaking.value == '') {
                errorCelpipSpeaking.innerHTML = 'You must enter a score';
                celpipSpeakingScore.innerHTML = 0;
            } else {
                errorCelpipSpeaking.innerHTML = 'Please enter a valid score';
                errorCelpipSpeaking.style.display = 'block';
                celpipSpeakingScore.innerHTML = 0;
            }
        })

        celpipResultBtn.addEventListener('click', () => {
            if (celpipReading.value == '' || celpipListening.value == '' || celpipWriting.value == '' || celpipSpeaking.value == '') {
                finalResultCelpip.innerHTML = '<span class="text-red-600">Please enter all scores</span>';
            } else if (checkErrors() == false) {
                finalResultCelpip.innerHTML = `<span class="text-red-600">There are errors in the form</span>`;
            } else {
                let celpipScore = [Number(celpipReadingScore.innerHTML), Number(celpipListeningScore.innerHTML), Number(celpipWritingScore.innerHTML), Number(celpipSpeakingScore.innerHTML)];
                let min = Math.min(...celpipScore);
                finalResultCelpip.innerHTML = `Your CLB is <b class="underline">${min}</b>`;
            }
        })

        celpipResetBtn.addEventListener('click', () => {
            celpipReading.value = '';
            celpipReadingScore.innerHTML = 0;
            errorCelpipReading.innerHTML = '';
            errorCelpipReading.style.display = 'none';
            celpipListening.value = '';
            celpipListeningScore.innerHTML = 0;
            errorCelpipListening.innerHTML = '';
            errorCelpipListening.style.display = 'none';
            celpipWriting.value = '';
            celpipWritingScore.innerHTML = 0;
            errorCelpipWriting.innerHTML = '';
            errorCelpipWriting.style.display = 'none';
            celpipSpeaking.value = '';
            celpipSpeakingScore.innerHTML = 0;
            errorCelpipSpeaking.innerHTML = '';
            errorCelpipSpeaking.style.display = 'none';
            finalResultCelpip.innerHTML = 0;
        })
    })
})

suggestedpnpBtn.addEventListener('click', () => {
    document.title = 'Maple Tools - Suggested PNP';
    main.innerHTML = '';
    let clone = suggestedpnpTemplate.content.cloneNode(true);
    main.appendChild(clone);

    let nocInput = document.querySelector('#nocCode');
    let crsInput = document.querySelector('#crsScore');
    let calculateBtn = document.querySelector('#suggestedPnpBtn');
    let resultDiv = document.querySelector('#resultDiv');
    let error = document.querySelector('.error');

    // function scrapOntario() {
    //     try {
    //         let url = `https://www.ontario.ca/page/oinp-express-entry-notifications-interest`;
    //         fetch(url)
    //             .then(response => response.text())
    //             .then(data => {
    //                 let parser = new DOMParser();
    //                 let htmlDoc = parser.parseFromString(data, 'text/html');
    //                 let td = htmlDoc.querySelectorAll('tr')[0].querySelectorAll('td')[2].textContent.split('-')[0];
    //                 console.log(td);
    //             })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // scrapOntario();

    function ontarioDiv(bgColor) {
        resultDiv.innerHTML += `<a href="https://www.ontario.ca/page/ontario-immigrant-nominee-program-oinp" target="_blank" rel="noreferrer"><p class="rounded bg-${bgColor}-100 p-2 my-2 font-bold">Ontario</p></a>`;
    }

    function albertaDiv(bgColor) {
        resultDiv.innerHTML += `<a href="https://www.alberta.ca/aaip-alberta-express-entry-stream-eligibility.aspx" target="_blank" rel="noreferrer"><p class="rounded bg-${bgColor}-100 p-2 my-2 font-bold">Alberta</p></a>`;
    }

    function britishColumbiaDiv(bgColor) {
        resultDiv.innerHTML += `<a href="https://www.welcomebc.ca/Immigrate-to-B-C/About-The-BC-PNP" target="_blank" rel="noreferrer"><p class="rounded bg-${bgColor}-100 p-2 my-2 font-bold">British Columbia</p></a>`;
    }

    function manitobaDiv(bgColor) {
        resultDiv.innerHTML += `<a href="https://immigratemanitoba.com/fr/immigrer-au-manitoba/visite-exploratoire/" target="_blank" rel="noreferrer"><p class="rounded bg-${bgColor}-100 p-2 my-2 font-bold">Manitoba</p></a>`;
    }

    function newBrunswickDiv(bgColor) {
        resultDiv.innerHTML += `<a href="https://www.welcomenb.ca/content/wel-bien/en/immigrating/content/HowToImmigrate/NBProvincialNomineeProgram.html" target="_blank" rel="noreferrer"><p class="rounded bg-${bgColor}-100 p-2 my-2 font-bold">New Brunswick</p></a>`;
    }

    function newfoundlandAndLabradorDiv(bgColor) {
        resultDiv.innerHTML += `<p class="rounded bg-${bgColor}-100 p-2 my-2 font-bold">Newfoundland and Labrador</p>`;
    }

    function northwestTerritoriesDiv(bgColor) {
        resultDiv.innerHTML += `<p class="rounded bg-${bgColor}-100 p-2 my-2 font-bold">Northwest Territories</p>`;
    }

    function novaScotiaDiv(bgColor) {
        resultDiv.innerHTML += `<a href="https://novascotiaimmigration.com/move-here/nova-scotia-experience-express-entry/" target="_blank" rel="noreferrer"><p class="rounded bg-${bgColor}-100 p-2 my-2 font-bold">Nova Scotia</p></a>`;
    }

    function nunavutDiv(bgColor) {
        resultDiv.innerHTML += `<p class="rounded bg-${bgColor}-100 p-2 my-2 font-bold">Nunavut</p>`;
    }

    function princeEdwardIslandDiv(bgColor) {
        resultDiv.innerHTML += `<a href="https://www.princeedwardisland.ca/en/information/office-of-immigration/pei-express-entry" target="_blank" rel="noreferrer"><p class="rounded bg-${bgColor}-100 p-2 my-2 font-bold">Prince Edward Island</p></a>`;
    }

    function saskatchewanDiv(bgColor) {
        resultDiv.innerHTML += `<a href="https://www.saskatchewan.ca/residents/moving-to-saskatchewan/live-in-saskatchewan/by-immigrating/saskatchewan-immigrant-nominee-program/browse-sinp-programs/applicants-international-skilled-workers/assess-your-eligibility" target="_blank" rel="noreferrer"><p class="rounded bg-${bgColor}-100 p-2 my-2 font-bold">Saskatchewan</p></a>`;
    }

    function yukonDiv(bgColor) {
        resultDiv.innerHTML += `<p class="rounded bg-slate-100 p-2 my-2 font-bold">Yukon</p>`;
    }

    function quebecDiv(bgColor) {
        resultDiv.innerHTML += `<a href="https://www.quebec.ca/immigration/travailler-quebec/travailleurs-qualifies/programme-regulier-travailleurs-qualifies/declaration-interet" target="_blank" rel="noreferrer"><p class="rounded bg-${bgColor}-100 p-2 my-2 font-bold">Quebec</p></a>`;
    }

    const edArray = ['00010', '40041', '10019', '14103', '42200', '41302', '42204', '44100', '65310', '51122', '53121', '53122', '53121', '55109', '53124', '53200', '64321', '65229', '65109', '65211', '65329', '75200', '85104', '85121 ', '85102', '85110'];

    const qcEdArray = [
        '44101', '43100', '40021',
    ]

    const bcEdArray = [
        '51111', '51112',
    ]

    const nbQcEdArray = [
        '41221', '41220',
    ]

    const abEdArray = [
        '00011', '00014', '40010', '40011', '40012', '40019', '40040', '10012', '40042', '80022', '11103', '12104', '43203', '12203', '14100', '14101', '14102', '14103', '14111', '14112', '14200', '13102', '14201', '14202', '14301', '14110', '64401', '74100', '74101', '74102', '75201', '14400', '14401', '13201', '14402', '14403', '13201', '14404', '14405', '21100', '21102', '21103', '21109', '21111', '21332', '21201', '21202', '22112', '22113', '22214', '72602', '72603', '72604', '31103', '31209', '31204', '32122', '32100', '32200', '32209', '41201', '41100', '41311', '42201', '42100', '42102', '43204', '44200', '43200', '43201', '43202', '51100', '51101', '51102', '51113', '51121', '53120', '52100', '53100', '53110', '52110', '52114', '53125', '53201', '53202', '62010', '62023', '63210', '63220', '63221', '62201', '64100', '64300', '64301', '65200', '64310', '64311', '64312', '64313', '64320', '64322', '64314', '64410', '65329', '64400', '64409', '64201', '63211', '65220', '65100', '65101', '65102', '65201', '65210', '65310', '65311', '65312', '73201', '65320', '72012', '72204', '72205', '72301', '72302', '72311', '73101', '73110', '72022', '72023', '72403', '72420', '72421', '73402', '72501', '73200', '74204', '73202', '73209', '75100', '73300', '73301', '74102', '75201', '73400', '74204', '74205', '74201', '75210', '74202', '74203', '75119', '75212', '75211', '82020', '83100', '83101', '83120', '83121', '84100', '84101', '84110', '84111', '85103', '84121', '85111', '85120', '92010', '92014', '92015', '92020', '92021', '92021', '92022', '92024', '93102', '92101', '94100', '94102', '94103', '94105', '94106', '94107', '94110', '95102', '94111', '94112', '94120', '94129', '94122', '94123', '94124', '94130', '95105', '94131', '95105', '94133', '94140', '94141', '94143', '94150', '94151', '94152', '94153', '94200', '94201', '94202', '94203', '94204', '94205', '94219', '94211', '94212', '94213', '94219', '95100', '95101', '95102', '95103', '95104', '94130', '95105', '95109'
    ]

    const abQcEdArray = [
        '31102', '31300', '31100', '31101', '31110', '84120', '85101', '73111', '72321', '72406', '94142', '95107', '31302', '33102', '63100', '12201', '22114', '45100', '31111', '42101', '52111', '94210', '92013', '95106', '64101', '94132', '13200', '21390', '94101', '50010', '14300', '32110', '74200', '94104', '94121', '93200',
    ]

    const abBcEdArray = [
        '22311', '51110', '52112', '52119', '53111',
    ]

    const abBcQcEdArray = [
        '50011'
    ]

    const abSkEdArray = [
        '00013', '00015', '10012', '10029', '70021', '60031', '80010', '80021', '12010', '72025', '13100', '12103', '13112', '12111', '12112', '12113', '21101', '21322', '21330', '21331', '21399', '22210', '22211', '22213', '22231', '31201', '32123', '33100', '33109', '41200', '41401', '41409', '62021', '62022', '62024', '62029', '65211', '62200', '63201', '65202', '65202', '64200', '62202', '72010', '72013', '72014', '72103', '72104', '72105', '72202', '72320', '72020', '72021', '72423', '72429', '73401', '72423', '72999', '82010', '82021', '83110', '72600', '82030', '84120', '82031', '92011', '93100', '93101'
    ]

    const abQcSkEdArray = [
        '85100', '32102', '72422', '21120', '92012', '41320', '12202', '22233', '22222', '22230', '72011', '72024', '40020', '12012', '72601', '92023',
    ]

    const abBcSkEdArray = [
        '10030', '21320',
    ]

    const abNbSkEdArray = [
        '00012', '60030', '12100', '12102',
    ]

    const abNbEdArray = [
        '30010',
    ]

    const abNbBcEdArray = [
        '51114',
    ]

    const abNbSkMbEdArray = [
        '13110', '62101',
    ]

    const abNbQcSkMbEdArray = [
        '11200', '11101',
    ]

    const abNbBcQcSkMbEdArray = [
        '22220',
    ]

    const abNsNbSkMbEdArray = [
        '12200',
    ]

    const abNbMbEdArray = [
        '62010', '63200',
    ]

    const nbQcSkMbEdArray = [
        '42202'
    ]

    const abNsNbSkEdArray = [
        '41210'
    ]

    const onAbNbBcSkMbEdArray = [
        '21223',
    ]

    const onAbNbBcQcSkMbEdArray = [
        '21211', '21230', '21232', '21231', '21234'
    ]

    const onAbNsQcSkMbEdArray = [
        '10022',
    ]

    const onAbQcSkMbEdArray = [
        '10010', '11201',
    ]

    const onAbBcQcSkMbEdArray = [
        '21233', '20012',
    ]

    const abSkMbEdArray = [
        '10021', '70010', '70011', '70020', '80020', '90010', '90011', '11200', '12011', '12013', '13201', '74202', '13111', '21110', '22101', '22110', '22111', '22301', '22303', '22311', '22212', '31203', '32120', '33101', '32124', '32129', '33103', '41400', '11202', '41402', '41403', '41404', '41406', '42203', '63202', '72101', '72200', '72201', '72203', '72204', '72205', '72300', '72310', '73112', '72401', '72402', '72410', '92100'
    ]

    const abQcSkMbEdArray = [
        '22300', '31200', '41301', '41310', '21220', '21221', '21222', '21210', '31303', '32103', '22302', '72106', '32121', '41300', '72100', '12101', '22232', '63102', '72500', '75110', '41405', '10020', '13101', '72411', '41321', '72404', '20011', '12110', '22313',
    ]

    const abBcSkMbEdArray = [
        '22110', '22312', '22221',
    ]

    const abBcQcSkMbEdArray = [
        '62100', '70012', '22310', '75101',
    ]

    const onAbSkEdArray = [
        '10019', '60010', '60020'
    ]

    const abMbEdArray = [
        '20010', '50012', '21112', '21200', '22100', '72600', '31112', '31202', '32109', '32111', '32201', '41407', '52121', '53123', '64100', '54100', '62020', '73100', '73102', '73113', '73310', '73311'
    ]

    const abQcMbEdArray = [
        '31120', '21321', '31121', '52120', '21203', '32104', '72102', '41101', '72405', '51120',
    ]

    const abBcMbEdArray = [
        '21301',
    ]

    const abBcQcMbEdArray = [
        '21310', '52113',
    ]

    const skMbEdArray = [
        '40030',
    ]

    const onSkEdArray = [
        '60040'
    ]

    const onAbNsSkMbEdArray = [
        '11100', '11102', '11109',
    ]

    const onAbNsBcQcSkMbEdArray = [
        '21311'
    ]

    const abNsSkMbEdArray = [
        '42200', '42201'
    ]

    const abNsQcSkMbEdArray = [
        '11202', '64409',
    ]

    const abNsBcQcSkMbEdArray = [
        '21300',
    ]

    const abNsSkEdArray = [
        '13110',
    ]

    const onAbNsQcEdArray = [
        '31301'
    ]

    const skEdArray = [
        '32112', '43109'
    ]

    const abNsEdArray = [
        '32101'
    ]

    const mbEdArray = [
        '63101'
    ]

    calculateBtn.addEventListener('click', () => {
        resultDiv.style.display = 'block';
        const regexNoc = /^[0-9]{5}$/;
        const regexCrs = /^[0-9]{2,3}$/;

        if (nocInput.value == '' && crsInput.value == '') {
            resultDiv.innerHTML = '';
            resultDiv.style.display = 'none';
            error.innerHTML = 'You should fill both fields';
        } else if (nocInput.value == '') {
            resultDiv.innerHTML = '';
            resultDiv.style.display = 'none';
            error.innerHTML = 'The NOC code field is empty';
        } else if (crsInput.value == '') {
            resultDiv.innerHTML = '';
            resultDiv.style.display = 'none';
            error.innerHTML = 'The CRS score field is empty';
        } else if (!regexNoc.test(nocInput.value)) {
            resultDiv.innerHTML = '';
            resultDiv.style.display = 'none';
            error.innerHTML = 'Please enter a valid NOC code';
        } else if (!regexCrs.test(crsInput.value)) {
            resultDiv.innerHTML = '';
            resultDiv.style.display = 'none';
            error.innerHTML = 'Please enter a valid CRS score';
        } else if (crsInput.value != '' && regexCrs.test(crsInput.value)) {
            resultDiv.innerHTML = '';
            error.innerHTML = '';
            resultDiv.style.display = 'block';
            resultDiv.scrollIntoView({ behavior: 'smooth' });
            if (edArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('gray');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('gray');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (qcEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('gray');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('green');
                britishColumbiaDiv('gray');
                saskatchewanDiv('gray');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (bcEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('gray');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('yellow');
                saskatchewanDiv('gray');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (nbQcEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('gray');
                novaScotiaDiv('gray');
                newBrunswickDiv('green');
                quebecDiv('green');
                britishColumbiaDiv('gray');
                saskatchewanDiv('gray');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (abEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('gray');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (abQcEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('green');
                britishColumbiaDiv('gray');
                saskatchewanDiv('gray');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (abBcEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('yellow');
                saskatchewanDiv('gray');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (abBcQcEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('green');
                britishColumbiaDiv('yellow');
                saskatchewanDiv('gray');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (abSkEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (abQcSkEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('green');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (abBcSkEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('yellow');
                saskatchewanDiv('yellow');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (abNbSkEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('green');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (abNbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('green');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('gray');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (abNbBcEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('green');
                quebecDiv('gray');
                britishColumbiaDiv('yellow');
                saskatchewanDiv('gray');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (abNbSkMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('green');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (abNbQcSkMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('green');
                quebecDiv('green');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (abNbBcQcSkMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('green');
                quebecDiv('green');
                britishColumbiaDiv('yellow');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (abNsNbSkMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('green');
                newBrunswickDiv('green');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (abNbMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('green');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('gray');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (nbQcSkMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('gray');
                novaScotiaDiv('gray');
                newBrunswickDiv('green');
                quebecDiv('green');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (abNsNbSkEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('green');
                newBrunswickDiv('green');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (onAbNbBcSkMbEdArray.includes(nocInput.value)) {
                if (crsInput.value >= 458 && crsInput.value <= 462) {
                    ontarioDiv('green');
                } else if (crsInput.value > 462) {
                    ontarioDiv('yellow')
                } else {
                    ontarioDiv('gray');
                }
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('green');
                quebecDiv('gray');
                britishColumbiaDiv('yellow');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (onAbNbBcQcSkMbEdArray.includes(nocInput.value)) {
                if (crsInput.value >= 458 && crsInput.value <= 462) {
                    ontarioDiv('green');
                } else if (crsInput.value > 462) {
                    ontarioDiv('yellow')
                } else {
                    ontarioDiv('gray');
                }
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('green');
                quebecDiv('green');
                britishColumbiaDiv('yellow');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (onAbNsQcSkMbEdArray.includes(nocInput.value)) {
                if (crsInput.value >= 458 && crsInput.value <= 462) {
                    ontarioDiv('green');
                } else if (crsInput.value > 462) {
                    ontarioDiv('yellow')
                } else {
                    ontarioDiv('gray');
                }
                albertaDiv('green');
                novaScotiaDiv('green');
                newBrunswickDiv('gray');
                quebecDiv('green');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (onAbQcSkMbEdArray.includes(nocInput.value)) {
                if (crsInput.value >= 458 && crsInput.value <= 462) {
                    ontarioDiv('green');
                } else if (crsInput.value > 462) {
                    ontarioDiv('yellow')
                } else {
                    ontarioDiv('gray');
                }
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('green');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (onAbBcQcSkMbEdArray.includes(nocInput.value)) {
                if (crsInput.value >= 458 && crsInput.value <= 462) {
                    ontarioDiv('green');
                } else if (crsInput.value > 462) {
                    ontarioDiv('yellow')
                } else {
                    ontarioDiv('gray');
                }
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('green');
                britishColumbiaDiv('yellow');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (abSkMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (abQcSkMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('green');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (abBcSkMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('yellow');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (abBcQcSkMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('green');
                britishColumbiaDiv('yellow');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (onAbSkEdArray.includes(nocInput.value)) {
                if (crsInput.value >= 458 && crsInput.value <= 462) {
                    ontarioDiv('green');
                } else if (crsInput.value > 462) {
                    ontarioDiv('yellow')
                } else {
                    ontarioDiv('gray');
                }
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (abMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('gray');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (abQcMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('green');
                britishColumbiaDiv('gray');
                saskatchewanDiv('gray');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (abBcMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('yellow');
                saskatchewanDiv('gray');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (abBcQcMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('green');
                britishColumbiaDiv('yellow');
                saskatchewanDiv('gray');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (skMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('gray');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (onSkEdArray.includes(nocInput.value)) {
                if (crsInput.value >= 458 && crsInput.value <= 462) {
                    ontarioDiv('green');
                } else if (crsInput.value > 462) {
                    ontarioDiv('yellow')
                } else {
                    ontarioDiv('gray');
                }
                albertaDiv('gray');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (onAbNsSkMbEdArray.includes(nocInput.value)) {
                if (crsInput.value >= 458 && crsInput.value <= 462) {
                    ontarioDiv('green');
                } else if (crsInput.value > 462) {
                    ontarioDiv('yellow')
                } else {
                    ontarioDiv('gray');
                }
                albertaDiv('green');
                novaScotiaDiv('green');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (onAbNsBcQcSkMbEdArray.includes(nocInput.value)) {
                if (crsInput.value >= 458 && crsInput.value <= 462) {
                    ontarioDiv('green');
                } else if (crsInput.value > 462) {
                    ontarioDiv('yellow')
                } else {
                    ontarioDiv('gray');
                }
                albertaDiv('green');
                novaScotiaDiv('green');
                newBrunswickDiv('gray');
                quebecDiv('green');
                britishColumbiaDiv('yellow');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (abNsSkMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('green');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (abNsQcSkMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('green');
                newBrunswickDiv('gray');
                quebecDiv('green');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (abNsBcQcSkMbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('green');
                newBrunswickDiv('gray');
                quebecDiv('green');
                britishColumbiaDiv('yellow');
                saskatchewanDiv('yellow');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else if (abNsSkEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('green');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (onAbNsQcEdArray.includes(nocInput.value)) {
                if (crsInput.value >= 458 && crsInput.value <= 462) {
                    ontarioDiv('green');
                } else if (crsInput.value > 462) {
                    ontarioDiv('yellow')
                } else {
                    ontarioDiv('gray');
                }
                albertaDiv('green');
                novaScotiaDiv('green');
                newBrunswickDiv('gray');
                quebecDiv('green');
                britishColumbiaDiv('gray');
                saskatchewanDiv('gray');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (skEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('gray');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('yellow');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (abNsEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('green');
                novaScotiaDiv('green');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('gray');
                manitobaDiv('gray');
                princeEdwardIslandDiv('yellow');
            } else if (mbEdArray.includes(nocInput.value)) {
                ontarioDiv('gray');
                albertaDiv('gray');
                novaScotiaDiv('gray');
                newBrunswickDiv('gray');
                quebecDiv('gray');
                britishColumbiaDiv('gray');
                saskatchewanDiv('gray');
                manitobaDiv('yellow');
                princeEdwardIslandDiv('yellow');
            } else {
                error.innerHTML = 'The NOC code is not found';
                resultDiv.style.display = 'none';
            }
        } else {
            error.innerHTML = '';
            resultDiv.innerHTML = '';
            resultDiv.style.display = 'none';
        }
    })
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

    for (let i = 2; i < 13; i++) {
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td class="bg-indigo-50 font-bold text-blue-600 underline"><a href="https://www.canada.ca/content/canadasite/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds/invitations.html?q=${tabDraw[i].nbDraw}" title="Get more information about #${tabDraw[i].nbDraw} draw" target="_blank" rel="noreferrer">${tabDraw[i].nbDraw}</a></td>
        <td>${tabDraw[i].date}</td>
        <td>${tabDraw[i].nbInvitations}</td>
        <td class="bg-yellow-50 font-bold">${tabDraw[i].crsScore}</td>
        <td>${tabDraw[i].program}</td>
        `;
        document.querySelector('#tbody').appendChild(tr);
        let tds = document.querySelectorAll('td');
        for (let elementTd of tds) {
            elementTd.classList.add('border-2', 'border-gray-400', 'px-4', 'py-2');
        }
    }
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