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



adaptabilityScore > 10 ? adaptabilityScore = 10 : adaptabilityScore = adaptabilityScore;

burger.addEventListener('change', () => {
    if (burger.checked === true) {
        burger.innerHTML = '<i class="fa-solid fa-times"></i>';
    } else {
        burger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

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
            if (!explanation.classList.contains('fa-bars') && !explanation.classList.contains('fa-xmark')) {
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
            if (!explanation.classList.contains('fa-bars') && !explanation.classList.contains('fa-xmark')) {
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