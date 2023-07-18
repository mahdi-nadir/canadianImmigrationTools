
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


// template for components
let homeTemplate = document.querySelector('#homeTemplate');
let eligibilityCalculatorTemplate = document.querySelector('#eligibilityCalculatorTemplate');
let crsTemplate = document.querySelector('#crsTemplate');
let nclcTemplate = document.querySelector('#nclcTemplate');
let suggestedpnpTemplate = document.querySelector('#suggestedpnpTemplate');
let ebooksTemplate = document.querySelector('#ebooksTemplate');
let extraInfoTemplate = document.querySelector('#extraInfoTemplate');


// declare components variables
let main = document.querySelector('main');
let count = 0;
let educationScore = 0;
let ageScore = 0;
let firstLangScore = 0;
let firstLangScoresArray = [0, 0, 0, 0];
let secondLangScore = 0;
let secondLangScoresArray = [0, 0, 0, 0];
let workExpeScore = 0;



// add event listeners to buttons and display the right component when clicked
homeBtn.addEventListener('click', () => {
    main.innerHTML = '';
    let clone = homeTemplate.content.cloneNode(true);
    main.appendChild(clone);
})

eligibilityCalculatorBtn.addEventListener('click', () => {
    let count = 0;
    main.innerHTML = '';
    let clone = eligibilityCalculatorTemplate.content.cloneNode(true);
    main.appendChild(clone);

    // declare variables for the form
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

    let relativesDiv = document.querySelector('.relatives-div');
    let relativesInput = document.querySelector('[name="relatives"]');

    let spouseLangDiv = document.querySelector('.spouse-language-div');
    let spouseLangInput = document.querySelector('[name="spouse-language-availability"]');

    let spouseEducationDiv = document.querySelector('.spouse-education-div');
    let spouseEducationInput = document.querySelector('[name="spouse-education"]');

    let spouseWorkExpDiv = document.querySelector('.spouse-work-experience-div');
    let spouseWorkExpInput = document.querySelector('[name="spouse-work-experience"]');

    let btnCalculate = document.querySelector('.btn-calculate');




    martialStatus.addEventListener('change', () => {
        ageDiv.style.display = 'block';
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
        } else {
            ageScore = 0;
        }
        educationDiv.style.display = 'block';
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
    })

    firstLangInput.addEventListener('change', () => {
        if (firstLangInput.value == 'yes') {
            firstLangTypeDiv.style.display = 'block';
        } else {
            firstLangTypeDiv.style.display = 'none';
            firstLangScoresDiv.style.display = 'none';
        }
    })

    firstLangTypeInput.addEventListener('change', () => {
        if (firstLangTypeInput.value == 'ielts' || firstLangTypeInput.value == 'celpip') {
            firstLangScoresDiv.style.display = 'block';
            secondLangTypeInput.removeChild(secondLangTypeInput.childNodes[3]);
            secondLangTypeInput.removeChild(secondLangTypeInput.childNodes[4]);
        } else if (firstLangTypeInput.value == 'tef-canada' || firstLangTypeInput.value == 'tcf-canada') {
            firstLangScoresDiv.style.display = 'block';
            secondLangTypeInput.removeChild(secondLangTypeInput.childNodes[3]);
            secondLangTypeInput.removeChild(secondLangTypeInput.childNodes[4]);
        } else {
            firstLangScoresDiv.style.display = 'none';
        }
    })

    firstLangReadingInput.addEventListener('change', () => {
        getScoreOfFirstLangSkill(0, 'reading', firstLangReadingInput);
        firstLangScore = calculateLanguageScore(firstLangScoresArray);
        triggerSecondLangDiv(firstLangReadingInput, firstLangWritingInput, firstLangListeningInput, firstLangSpeakingInput, secondLangDiv);
        count = educationScore + ageScore + firstLangScore;
    })

    firstLangWritingInput.addEventListener('change', () => {
        getScoreOfFirstLangSkill(1, 'writing', firstLangWritingInput);
        firstLangScore = calculateLanguageScore(firstLangScoresArray);
        triggerSecondLangDiv(firstLangReadingInput, firstLangWritingInput, firstLangListeningInput, firstLangSpeakingInput, secondLangDiv);
        count = educationScore + ageScore + firstLangScore;
    })

    firstLangListeningInput.addEventListener('change', () => {
        getScoreOfFirstLangSkill(2, 'listening', firstLangListeningInput);
        firstLangScore = calculateLanguageScore(firstLangScoresArray);
        triggerSecondLangDiv(firstLangReadingInput, firstLangWritingInput, firstLangListeningInput, firstLangSpeakingInput, secondLangDiv);
        count = educationScore + ageScore + firstLangScore;
    })

    firstLangSpeakingInput.addEventListener('change', () => {
        getScoreOfFirstLangSkill(3, 'speaking', firstLangSpeakingInput);
        firstLangScore = calculateLanguageScore(firstLangScoresArray);
        triggerSecondLangDiv(firstLangReadingInput, firstLangWritingInput, firstLangListeningInput, firstLangSpeakingInput, secondLangDiv);
        count = educationScore + ageScore + firstLangScore;
    })

    secondLangInput.addEventListener('change', () => {
        if (secondLangInput.value == 'yes') {
            secondLangTypeDiv.style.display = 'block';
            secondLangTypeInput.value = '';
            workExpDiv.style.display = 'none';
        } else {
            secondLangTypeDiv.style.display = 'none';
            secondLangScoresDiv.style.display = 'none';
            workExpDiv.style.display = 'block';
        }
    })

    secondLangTypeInput.addEventListener('change', () => {
        if (secondLangTypeInput.value == 'ielts' || secondLangTypeInput.value == 'celpip') {
            secondLangScoresDiv.style.display = 'block';
        } else if (secondLangTypeInput.value == 'tef-canada' || secondLangTypeInput.value == 'tcf-canada') {
            secondLangScoresDiv.style.display = 'block';
        } else {
            secondLangScoresDiv.style.display = 'none';
        }
    })

    secondLangScoresInput.addEventListener('change', () => {
        secondLangScoresInput.value == 'yes' ? secondLangScore = 4 : secondLangScore = 0;
        count = educationScore + ageScore + firstLangScore + secondLangScore;
        triggerWorkExpDivFromSecondLang(secondLangScore, workExpDiv);
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
        if (workExpInput.value === '') {
            workExpeScore = 0;
            reservedJobDiv.style.display = 'none';
        }
        count = educationScore + ageScore + firstLangScore + secondLangScore + workExpeScore;
        console.log(count);
    })
})










function triggerWorkExpDivFromSecondLang(score, workExperienceDiv) {
    if (score == 4) {
        workExperienceDiv.style.display = 'block';
    }
}

function triggerSecondLangDiv(reading, writing, listening, speaking, divSecondLang) {
    if (reading.value != 'first-language-reading-clb6' && writing.value != 'first-language-writing-clb6' && listening.value != 'first-language-listening-clb6' && speaking.value != 'first-language-speaking-clb6') {
        divSecondLang.style.display = 'block';
    } else {
        divSecondLang.style.display = 'none';
    }
}

function getScoreOfFirstLangSkill(index, skill, langSkillInput) {
    if (langSkillInput.value == `first-language-${skill}-clb6`) {
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
    main.innerHTML = '';
    let clone = crsTemplate.content.cloneNode(true);
    main.appendChild(clone);
})

nclcBtn.addEventListener('click', () => {
    main.innerHTML = '';
    let clone = nclcTemplate.content.cloneNode(true);
    main.appendChild(clone);
})

suggestedpnpBtn.addEventListener('click', () => {
    main.innerHTML = '';
    let clone = suggestedpnpTemplate.content.cloneNode(true);
    main.appendChild(clone);
})

ebooksBtn.addEventListener('click', () => {
    main.innerHTML = '';
    let clone = ebooksTemplate.content.cloneNode(true);
    main.appendChild(clone);
})

extraInfoBtn.addEventListener('click', () => {
    main.innerHTML = '';
    let clone = extraInfoTemplate.content.cloneNode(true);
    main.appendChild(clone);
})




