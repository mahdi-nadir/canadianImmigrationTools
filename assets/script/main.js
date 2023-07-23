
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
let workExpeScore = 0;
let reservedJobScore = 0;
let studyScore = 0;
let workExpInCanadaScore = 0;
let relativesScore = 0;
let spouseLangScore = 0;
let spouseEducationScore = 0;
let spouseWorkExpScore = 0;
let adaptabilityScore = 0;

adaptabilityScore > 10 ? adaptabilityScore = 10 : adaptabilityScore = adaptabilityScore;

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

        if (btnReset.disabled == false) {
            console.log('trying to go somewhere else');
            // overlay.style.display = 'block';
            // overlay.style.opacity = '0.8';
            // overlay.style.visibility = 'visible';
            // modalConfirmation.style.display = 'block';
            // modalConfirmation.style.transform = 'translate(-50%, -50%) scale(1)';

            // function hideConfirmationModal() {
            //     overlay.style.display = 'none';
            //     overlay.style.opacity = '0';
            //     overlay.style.visibility = 'hidden';
            //     modalConfirmation.style.transform = 'translate(-50%, -50%) scale(0)';
            //     modalConfirmation.style.display = 'none';
            //     cancelButton.removeEventListener('click', hideConfirmationModal);
            //     confirmButton.removeEventListener('click', hideConfirmationModal);
            // }

            // let cancelButton = document.querySelector('#close');
            // let confirmButton = document.querySelector('#confirm');
            // cancelButton.addEventListener('click', hideConfirmationModal);
            // confirmButton.addEventListener('click', hideConfirmationModal);
        }
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
        } else {
            ageScore = 0;
            let modalResult = document.querySelector('#modalResult');
            modalResult.innerHTML += `
                <div>
                <h1>You cannot create a profile if you are 17 years old or less</h1>
                </div>`;

            overlay.style.display = 'block';
            overlay.style.opacity = '0.8';
            overlay.style.visibility = 'visible';
            modalResult.style.transform = 'translate(-50%, -50%) scale(1)';

            function hideResultModal() {
                modalResult.style.transform = 'translate(-50%, -50%) scale(0)';
                overlay.style.display = 'none';
                overlay.style.opacity = '0';
                overlay.style.visibility = 'hidden';
                modalResult.innerHTML = ''; // Clear the modal content for the next time
                cancelButton.removeEventListener('click', hideResultModal);
                resetAll();
            }

            let cancelButton = document.querySelector('#cancel');
            cancelButton.addEventListener('click', hideResultModal);
            return
        }
        educationDiv.style.display = 'block';
        educationInput.scrollIntoView({ behavior: 'smooth' })
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
        } else {
            firstLangTypeDiv.style.display = 'none';
            firstLangScoresDiv.style.display = 'none';
            let modalResult = document.querySelector('#modalResult');
            modalResult.innerHTML += `
                <div class="mt-5">
                <h1><b>You should have a language test to be eligible to Express Entry</b></h1>
                </div>`;

            overlay.style.display = 'block';
            overlay.style.opacity = '0.8';
            overlay.style.visibility = 'visible';
            modalResult.style.transform = 'translate(-50%, -50%) scale(1)';
            modalResult.style.backgroundColor = '#fcc2c2';
            let audio = new Audio('assets/sounds/failure.mp3');
            audio.play();

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

            return
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
        reservedJobDiv.scrollIntoView({ behavior: 'smooth' })
        if (workExpInput.value === '') {
            workExpeScore = 0;
            reservedJobDiv.style.display = 'none';
        }
        count = educationScore + ageScore + firstLangScore + secondLangScore + workExpeScore;
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

        count = educationScore + ageScore + firstLangScore + secondLangScore + workExpeScore + reservedJobScore;
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
        <div class="mt-5">
        <h1 class="text-center text-xl font-bold underline md:text-3xl">${count >= 67 ? 'Congratulations <i class="fa-solid fa-face-smile mb-3"></i>' : 'Condolences <i class="fa-solid fa-face-sad-tear mb-3"></i>'}</h1>
        <div class="indent-8">
        <li><b>Age:</b> ${ageScore}</li>
        <li><b>Education:</b> ${educationScore}</li>
        <li><b>First Language:</b> ${firstLangScore}</li>
        <li><b>Second Language:</b> ${secondLangScore}</li>
        <li><b>Work Experience:</b> ${workExpeScore}</li>
        <li><b>Reserved Job:</b> ${reservedJobScore}</li>
        <li><b>Adaptability:</b> ${adaptabilityScore}</li>
        </div>
        <h2 class="text-center text-xl mt-3 md:text-3xl">Your score is <b class="underline">${count}</b></h2>
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

    btnReset.addEventListener('click', () => {
        resetAll();
    })


    for (let explanation of explanations) {
        explanation.addEventListener('click', () => {
            overlay.style.display = 'block';
            overlay.style.opacity = '0.8';
            overlay.style.visibility = 'visible';
            modal.style.transform = 'translate(-50%, -50%) scale(1)';
            modal.innerHTML = explanation.parentElement.nextElementSibling.innerHTML;

            const cancelBtn = modal.querySelector('#cancelBtn');

            cancelBtn.addEventListener('click', () => {
                overlay.style.display = 'none';
                overlay.style.opacity = '0';
                overlay.style.visibility = 'hidden';
                modal.style.transform = 'translate(-50%, -50%) scale(0)';
            });
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

    // refreshPage(eligibilityCalculatorTemplate, eligibilityComponentDiv);
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



function triggerWorkExpDivFromSecondLang(score, workExperienceDiv) {
    workExperienceDiv.style.display = 'block';
    workExperienceDiv.scrollIntoView({ behavior: 'smooth' })
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
    main.innerHTML = '';
    let clone = crsTemplate.content.cloneNode(true);
    main.appendChild(clone);
})

nclcBtn.addEventListener('click', () => {
    main.innerHTML = '';
    let clone = nclcTemplate.content.cloneNode(true);
    main.appendChild(clone);

    // buttons
    let tefBtn = document.querySelector('#triggerTef');
    let tcfBtn = document.querySelector('#triggerTcf');
    let ieltsBtn = document.querySelector('#triggerIelts');
    let celpipBtn = document.querySelector('#triggerCelpip');

    // for tef canada
    tefBtn.addEventListener('click', () => {
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

        tefDiv.style.display = 'block';
        tefDiv.scrollIntoView({ behavior: 'smooth' })

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
                tefReadingScore.innerHTML = 0;
            } else {
                errorTefReading.innerHTML = 'Please enter a valid score';
                errorTefReading.style.display = 'block';
                tefReadingScore.innerHTML = 0;
            }
            Number(tefReadingScore.innerHTML)
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
                tefListeningScore.innerHTML = 0;
            } else {
                errorTefListening.innerHTML = 'Please enter a valid score';
                errorTefListening.style.display = 'block';
                tefListeningScore.innerHTML = 0;
            }
            Number(tefListeningScore.innerHTML)
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
                tefWritingScore.innerHTML = 0;
            } else {
                errorTefWriting.innerHTML = 'Please enter a valid score';
                errorTefWriting.style.display = 'block';
                tefWritingScore.innerHTML = 0;
            }
            Number(tefWritingScore.innerHTML)
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
                tefSpeakingScore.innerHTML = 0;
            } else {
                errorTefSpeaking.innerHTML = 'Please enter a valid score';
                errorTefSpeaking.style.display = 'block';
                tefSpeakingScore.innerHTML = 0;
            }
            Number(tefSpeakingScore.innerHTML)
        })

        tefResultBtn.addEventListener('click', () => {
            if (tefReadingScore.innerHTML == '' || tefListeningScore.innerHTML == '' || tefWritingScore.innerHTML == '' || tefSpeakingScore.innerHTML == '') {
                finalResultTef.innerHTML = 'Please enter all scores';
            } else {
                let tefScore = [Number(tefReadingScore.innerHTML), Number(tefListeningScore.innerHTML), Number(tefWritingScore.innerHTML), Number(tefSpeakingScore.innerHTML)];
                let min = Math.min(...tefScore);
                finalResultTef.innerHTML = `Your CLB is <b class="underline">${min}</b>`;
            }
        })
    })
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