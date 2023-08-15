// import Translator from "./translation/translator.js";

export default class eligibilityClass {
    constructor() {
        // this.language = localStorage.getItem('language') === 'true' || false;
        // this.languageBtn = document.querySelector('#languageBtn');
        // this.languageBtn.textContent = this.language ? 'EN' : 'FR';
        // this.translator = new Translator(this.language);
        // this.translator.loadTranslations();



        this.main = document.querySelector('main');
        this.count = 0;
        this.educationScore = 0;
        this.ageScore = 0;
        this.firstLangScore = 0;
        this.firstLangScoresArray = [0, 0, 0, 0];
        this.secondLangScore = 0;
        this.secondLangScoresArray = [0, 0, 0, 0];
        this.workExpeCanScore = 0;
        this.workExpeScore = 0;
        this.jobOfferScore = 0;
        this.qualificationScore = 0;
        this.nominationScore = 0;
        this.reservedJobScore = 0;
        this.studyScore = 0;
        this.workExpInCanadaScore = 0;
        this.relativesScore = 0;
        this.spouseLangScore = 0;
        this.spouseLangScoresArray = [0, 0, 0, 0];
        this.spouseEducationScore = 0;
        this.spouseWorkExpScore = 0;
        this.adaptabilityScore = 0;
        this.skillTransferabilityScore = 0;
        this.additionalPointsScore = 0;

        this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        this.year = new Date().getFullYear() - 10;
        this.month = this.monthNames[new Date().getMonth()];
        this.explanations = document.querySelectorAll('.fa-solid')

        // declare variables for the form
        this.eligibilityComponentDiv = document.querySelector('#eligibility_calculator');
        this.eligibilityDiv = document.querySelector('.eligibility-div');
        this.explanations = document.querySelectorAll('.fa-solid')

        this.martialStatus = document.querySelector('.marital-status');

        this.ageDiv = document.querySelector('.ageDiv');
        this.ageInput = document.querySelector('[name="age"]');

        this.educationDiv = document.querySelector('.educationDiv');
        this.educationInput = document.querySelector('[name="education"]');

        this.firstLangDiv = document.querySelector('.first-language-div');
        this.firstLangInput = document.querySelector('[name="first-language-availability"]');
        this.firstLangTypeDiv = document.querySelector('.first-language-typeDiv');
        this.firstLangTypeInput = document.querySelector('[name="first-language-type"]');
        this.firstLangScoresDiv = document.querySelector('.first-language-scoresDiv');
        this.firstLangReadingInput = document.querySelector('[name="first-language-reading"]');
        this.firstLangWritingInput = document.querySelector('[name="first-language-writing"]');
        this.firstLangListeningInput = document.querySelector('[name="first-language-listening"]');
        this.firstLangSpeakingInput = document.querySelector('[name="first-language-speaking"]');

        this.secondLangDiv = document.querySelector('.second-language-div');
        this.secondLangInput = document.querySelector('[name="second-language-availability"]');
        this.secondLangTypeDiv = document.querySelector('.second-language-typeDiv');
        this.secondLangTypeInput = document.querySelector('[name="second-language-type"]');
        this.secondLangScoresDiv = document.querySelector('.second-language-scoresDiv');
        this.secondLangScoresInput = document.querySelector('[name="second-language-scores"]');

        this.workExpDiv = document.querySelector('.work-experience-div');
        this.workExpInput = document.querySelector('[name="work-experience"]');

        this.reservedJobDiv = document.querySelector('.reserved-job-position-in-canada-div');
        this.reservedJobInput = document.querySelector('[name="reserved-job-position-in-canada"]');

        this.studyDiv = document.querySelector('.study-canada-div');
        this.studyInput = document.querySelector('[name="study-canada"]');

        this.workExpInCanadaDiv = document.querySelector('.work-experience-canada-div');
        this.workExpInCanadaInput = document.querySelector('[name="work-experience-canada"]');

        this.jobOfferDiv = document.querySelector('.job-offer-div');
        this.jobOfferInput = document.querySelector('[name="job-offer"]');

        this.relativesDiv = document.querySelector('.relatives-div');
        this.relativesInput = document.querySelector('[name="relatives"]');

        this.spouseLangDiv = document.querySelector('.spouse-language-div');
        this.spouseLangInput = document.querySelector('[name="spouse-language-availability"]');

        this.spouseEducationDiv = document.querySelector('.spouse-education-div');
        this.spouseEducationInput = document.querySelector('[name="spouse-education"]');

        this.spouseWorkExpDiv = document.querySelector('.spouse-work-experience-div');
        this.spouseWorkExpInput = document.querySelector('[name="spouse-work-experience"]');

        this.overlay = document.querySelector('#overlay');
        this.modal = document.querySelector('#modal');
        this.modalResult = document.querySelector('#modalResult');
        this.modalConfirmation = document.querySelector('#modalConfirmation');
        this.btnReset = document.querySelector('.btn-reset');
        this.btnCalculate = document.querySelector('.btn-calculate');
        this.noticeDiv = document.querySelector('.noticeEligibility');
        this.init();
    }

    init() {
        // this.language ? this.translateFr() : this.translateEn();

        // this.languageBtn.addEventListener('click', () => {
        //     this.language = !this.language;
        //     localStorage.setItem('language', this.language);
        //     if (this.language === true) {
        //         this.translateFr();
        //         languageBtn.textContent = 'EN';
        //     } else {
        //         this.translateEn();
        //         languageBtn.textContent = 'FR';
        //     }
        // })



        let spanMarried = document.querySelector('#marriedOrNot');
        this.martialStatus.addEventListener('change', () => {
            if (this.martialStatus.value == '') {
                this.ageDiv.style.display = 'none';
                this.btnReset.disabled = true;
            } else {
                this.ageDiv.style.display = 'block';
                this.ageInput.scrollIntoView({ behavior: 'smooth' })
                this.btnReset.disabled = false;
                if (this.martialStatus.value == 'married') {
                    spanMarried.textContent = 'or your spouse';
                } else {
                    spanMarried.textContent = '';
                }
            }
        })

        this.ageInput.addEventListener('change', () => {
            if (this.ageInput.value >= 18 && this.ageInput.value <= 35) {
                this.ageScore = 12;
            } else if (this.ageInput.value == 36) {
                this.ageScore = 11;
            } else if (this.ageInput.value == 37) {
                this.ageScore = 10;
            } else if (this.ageInput.value == 38) {
                this.ageScore = 9;
            } else if (this.ageInput.value == 39) {
                this.ageScore = 8;
            } else if (this.ageInput.value == 40) {
                this.ageScore = 7;
            } else if (this.ageInput.value == 41) {
                this.ageScore = 6;
            } else if (this.ageInput.value == 42) {
                this.ageScore = 5;
            } else if (this.ageInput.value == 43) {
                this.ageScore = 4;
            } else if (this.ageInput.value == 44) {
                this.ageScore = 3;
            } else if (this.ageInput.value == 45) {
                this.ageScore = 2;
            } else if (this.ageInput.value == 46) {
                this.ageScore = 1;
            } else if (this.ageInput.value >= 47) {
                this.ageScore = 0;
            }

            this.educationDiv.style.display = 'block';
            this.educationInput.scrollIntoView({ behavior: 'smooth' })
            this.noticeDiv.style.display = 'none';

            if (this.ageInput.value == 17) {
                this.ageScore = 0;
                this.educationDiv.style.display = 'none';
                this.noticeDiv.style.display = 'block';
                this.noticeDiv.innerHTML += `
                    You cannot create a profile if you are 17 years old or less
                    `;
                this.noticeDiv.scrollIntoView({ behavior: 'smooth' })
            } else if (this.ageInput.value == '') {
                this.noticeDiv.style.display = 'none';
                this.educationDiv.style.display = 'none';
                this.noticeDiv.innerHTML = '';
            }
        })

        this.educationInput.addEventListener('change', () => {
            if (this.educationInput.value == 'secondary') {
                this.educationScore = 5;
            } else if (this.educationInput.value == 'one-year') {
                this.educationScore = 15;
            } else if (this.educationInput.value == 'two-year') {
                this.educationScore = 19;
            } else if (this.educationInput.value == 'bachelors') {
                this.educationScore = 21;
            } else if (this.educationInput.value == 'two-or-more') {
                this.educationScore = 22;
            } else if (this.educationInput.value == 'masters') {
                this.educationScore = 23;
            } else if (this.educationInput.value == 'doctoral') {
                this.educationScore = 25;
            }
            this.firstLangDiv.style.display = 'block';
            this.firstLangInput.scrollIntoView({ behavior: 'smooth' })

            if (this.educationInput.value == '') {
                this.educationScore = 0;
                this.firstLangDiv.style.display = 'none';

            }
        })

        this.firstLangInput.addEventListener('change', () => {
            if (this.firstLangInput.value == 'yes') {
                this.firstLangTypeDiv.style.display = 'block';
                this.firstLangTypeInput.scrollIntoView({ behavior: 'smooth' })
                this.noticeDiv.style.display = 'none';
                this.noticeDiv.innerHTML = '';

            } else {
                this.firstLangTypeDiv.style.display = 'none';
                this.firstLangScoresDiv.style.display = 'none';
                this.noticeDiv.style.display = 'block';
                this.noticeDiv.innerHTML = `
                    You should have a language test to be eligible to Express Entry
                    `;
                this.noticeDiv.scrollIntoView({ behavior: 'smooth' })
            }
        })

        this.firstLangTypeInput.addEventListener('change', () => {
            this.secondLangTypeInput.querySelector('option[value="ielts"]').style.display = 'block';
            this.secondLangTypeInput.querySelector('option[value="celpip"]').style.display = 'block';
            this.secondLangTypeInput.querySelector('option[value="tef-canada"]').style.display = 'block';
            this.secondLangTypeInput.querySelector('option[value="tcf-canada"]').style.display = 'block';

            if (this.firstLangTypeInput.value == 'ielts' || this.firstLangTypeInput.value == 'celpip') {
                this.firstLangScoresDiv.style.display = 'block';
                this.firstLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
                this.secondLangTypeInput.querySelector('option[value="ielts"]').style.display = 'none';
                this.secondLangTypeInput.querySelector('option[value="celpip"]').style.display = 'none';
            } else if (this.firstLangTypeInput.value == 'tef-canada' || this.firstLangTypeInput.value == 'tcf-canada') {
                this.firstLangScoresDiv.style.display = 'block';
                this.firstLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
                this.secondLangTypeInput.querySelector('option[value="tef-canada"]').style.display = 'none';
                this.secondLangTypeInput.querySelector('option[value="tcf-canada"]').style.display = 'none';
            } else {
                this.firstLangScoresDiv.style.display = 'none';
            }
            this.firstLangReadingInput.value = '';
            this.firstLangWritingInput.value = '';
            this.firstLangListeningInput.value = '';
            this.firstLangSpeakingInput.value = '';
        })

        this.firstLangReadingInput.addEventListener('change', () => {
            this.getScoreOfFirstLangSkill(0, 'reading', this.firstLangReadingInput);
            this.firstLangScore = this.calculateLanguageScore(this.firstLangScoresArray);
            this.errorLanguageSkill(this.firstLangReadingInput, 'reading');
            this.hideError();
            this.triggerSecondLangDiv(this.firstLangReadingInput, this.firstLangWritingInput, this.firstLangListeningInput, this.firstLangSpeakingInput, this.secondLangDiv);
        })

        this.firstLangWritingInput.addEventListener('change', () => {
            this.getScoreOfFirstLangSkill(1, 'writing', this.firstLangWritingInput);
            this.firstLangScore = this.calculateLanguageScore(this.firstLangScoresArray);
            this.errorLanguageSkill(this.firstLangWritingInput, 'writing');
            this.hideError();
            this.triggerSecondLangDiv(this.firstLangReadingInput, this.firstLangWritingInput, this.firstLangListeningInput, this.firstLangSpeakingInput, this.secondLangDiv);
        })

        this.firstLangListeningInput.addEventListener('change', () => {
            this.getScoreOfFirstLangSkill(2, 'listening', this.firstLangListeningInput);
            this.firstLangScore = this.calculateLanguageScore(this.firstLangScoresArray);
            this.errorLanguageSkill(this.firstLangListeningInput, 'listening');
            this.hideError();
            this.triggerSecondLangDiv(this.firstLangReadingInput, this.firstLangWritingInput, this.firstLangListeningInput, this.firstLangSpeakingInput, this.secondLangDiv);
        })

        this.firstLangSpeakingInput.addEventListener('change', () => {
            this.getScoreOfFirstLangSkill(3, 'speaking', this.firstLangSpeakingInput);
            this.firstLangScore = this.calculateLanguageScore(this.firstLangScoresArray);
            this.errorLanguageSkill(this.firstLangSpeakingInput, 'speaking');
            this.hideError();
            this.triggerSecondLangDiv(this.firstLangReadingInput, this.firstLangWritingInput, this.firstLangListeningInput, this.firstLangSpeakingInput, this.secondLangDiv);
        })

        this.secondLangInput.addEventListener('change', () => {
            if (this.secondLangInput.value == 'yes') {
                this.secondLangTypeDiv.style.display = 'block';
                this.secondLangTypeDiv.scrollIntoView({ behavior: 'smooth' })
                this.secondLangTypeInput.value = '';
                this.workExpDiv.style.display = 'none';
            } else {
                this.secondLangTypeDiv.style.display = 'none';
                this.secondLangScoresDiv.style.display = 'none';
                this.workExpDiv.style.display = 'block';
                this.workExpDiv.scrollIntoView({ behavior: 'smooth' })
            }
        })

        this.secondLangTypeInput.addEventListener('change', () => {
            if (this.secondLangTypeInput.value == 'ielts' || this.secondLangTypeInput.value == 'celpip') {
                this.secondLangScoresDiv.style.display = 'block';
                this.secondLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
            } else if (this.secondLangTypeInput.value == 'tef-canada' || this.secondLangTypeInput.value == 'tcf-canada') {
                this.secondLangScoresDiv.style.display = 'block';
                this.secondLangScoresDiv.scrollIntoView({ behavior: 'smooth' })
            } else {
                this.secondLangScoresDiv.style.display = 'none';
            }
        })

        this.secondLangScoresInput.addEventListener('change', () => {
            this.secondLangScoresInput.value == 'yes' ? this.secondLangScore = 4 : this.secondLangScore = 0;
            this.workExpDiv.style.display = 'block';
            this.workExpDiv.scrollIntoView({ behavior: 'smooth' })
        })

        this.workExpInput.addEventListener('change', () => {
            if (this.workExpInput.value === '1') {
                this.workExpeScore = 9;
            } else if (this.workExpInput.value === '2-3') {
                this.workExpeScore = 11;
            } else if (this.workExpInput.value === '4-5') {
                this.workExpeScore = 13;
            } else if (this.workExpInput.value === '6') {
                this.workExpeScore = 15;
            }
            this.reservedJobDiv.style.display = 'block';
            this.reservedJobDiv.scrollIntoView({ behavior: 'smooth' })
            if (this.workExpInput.value === '') {
                this.workExpeScore = 0;
                this.reservedJobDiv.style.display = 'none';
            }
        })

        this.reservedJobInput.addEventListener('change', () => {
            if (this.reservedJobInput.value == 'yes') {
                this.reservedJobScore = 10;
            } else if (this.reservedJobInput.value == 'no') {
                this.reservedJobScore = 0;
            }

            this.studyDiv.style.display = 'block';
            this.studyDiv.scrollIntoView({ behavior: 'smooth' })

            if (this.reservedJobInput.value == '') {
                this.reservedJobScore = 0;
                this.studyDiv.style.display = 'none';
            }
        })

        this.studyInput.addEventListener('change', () => {
            if (this.studyInput.value == 'yes') {
                this.studyScore = 5;
            } else if (this.studyInput.value == 'no') {
                this.studyScore = 0;
            }

            this.workExpInCanadaDiv.style.display = 'block';
            this.workExpInCanadaDiv.scrollIntoView({ behavior: 'smooth' })

            if (this.studyInput.value == '') {
                this.studyScore = 0;
                this.workExpInCanadaDiv.style.display = 'none';
            }

            this.adaptabilityScore += this.studyScore;
        })

        this.workExpInCanadaInput.addEventListener('change', () => {
            if (this.workExpInCanadaInput.value == 'yes') {
                this.workExpInCanadaScore = 10;
            } else if (this.workExpInCanadaInput.value == 'no') {
                this.workExpInCanadaScore = 0;
            }

            this.jobOfferDiv.style.display = 'block';
            this.jobOfferDiv.scrollIntoView({ behavior: 'smooth' })

            if (this.workExpInCanadaInput.value == '') {
                this.workExpInCanadaScore = 0;
                this.jobOfferDiv.style.display = 'none';
            }

            this.adaptabilityScore += this.workExpInCanadaScore;
        })

        this.jobOfferInput.addEventListener('change', () => {
            if (this.jobOfferInput.value == 'yes') {
                this.jobOfferScore = 5;
            } else if (this.jobOfferInput.value == 'no') {
                this.jobOfferScore = 0;
            }

            this.relativesDiv.style.display = 'block';
            this.relativesDiv.scrollIntoView({ behavior: 'smooth' })

            if (this.jobOfferInput.value == '') {
                this.jobOfferScore = 0;
                this.relativesDiv.style.display = 'none';
            }

            this.adaptabilityScore += this.jobOfferScore;
        })

        this.relativesInput.addEventListener('change', () => {
            if (this.relativesInput.value == 'yes') {
                this.relativesScore = 5;
            } else if (this.relativesInput.value == 'no') {
                this.relativesScore = 0;
            }

            if (this.martialStatus.value == 'married') {
                this.spouseLangDiv.style.display = 'block';
                this.spouseLangDiv.scrollIntoView({ behavior: 'smooth' })
            } else {
                this.spouseLangDiv.style.display = 'none';
                this.btnCalculate.disabled = false;
            }

            if (this.relativesInput.value == '') {
                this.relativesScore = 0;
                this.spouseLangDiv.style.display = 'none';
            }

            this.adaptabilityScore += this.relativesScore;
        })

        this.spouseLangInput.addEventListener('change', () => {
            if (this.spouseLangInput.value == 'yes') {
                this.spouseLangScore = 5;
            } else if (this.spouseLangInput.value == 'no') {
                this.spouseLangScore = 0;
            }

            this.spouseEducationDiv.style.display = 'block';
            this.spouseEducationDiv.scrollIntoView({ behavior: 'smooth' })

            if (this.spouseLangInput.value == '') {
                this.spouseLangScore = 0;
                this.spouseEducationDiv.style.display = 'none';
            }

            this.adaptabilityScore += this.spouseLangScore;
        })

        this.spouseEducationInput.addEventListener('change', () => {
            if (this.spouseEducationInput.value == 'yes') {
                this.spouseEducationScore = 5;
            } else if (this.spouseEducationInput.value == 'no') {
                this.spouseEducationScore = 0;
            }

            this.spouseWorkExpDiv.style.display = 'block';
            this.spouseWorkExpDiv.scrollIntoView({ behavior: 'smooth' })

            if (this.spouseEducationInput.value == '') {
                this.spouseEducationScore = 0;
                this.spouseWorkExpDiv.style.display = 'none';
            }

            this.adaptabilityScore += this.spouseEducationScore;
        })

        this.spouseWorkExpInput.addEventListener('change', () => {
            if (this.spouseWorkExpInput.value == 'yes') {
                this.spouseWorkExpScore = 5;
            } else if (this.spouseWorkExpInput.value == 'no') {
                this.spouseWorkExpScore = 0;
            }

            if (this.spouseWorkExpInput.value == '') {
                this.spouseWorkExpScore = 0;
            }

            this.adaptabilityScore += this.spouseWorkExpScore;
            this.btnCalculate.disabled = false;
            this.btnCalculate.scrollIntoView({ behavior: 'smooth' })
        })

        this.btnCalculate.addEventListener('click', this.getCRS.bind(this));

        this.btnReset.addEventListener('click', this.resetAll.bind(this));

        for (let explanation of this.explanations) {
            explanation.addEventListener('click', () => {
                if (explanation.classList.contains('fa-question')) {
                    this.overlay.style.display = 'block';
                    this.overlay.style.opacity = '0.8';
                    this.overlay.style.visibility = 'visible';
                    modal.style.transform = 'translate(-50%, -50%) scale(1)';
                    modal.innerHTML = explanation.parentElement.nextElementSibling.innerHTML;
                } else {
                    return;
                }

                const cancelBtn = modal.querySelectorAll('.cancelButton');

                cancelBtn.forEach(element => {
                    element.addEventListener('click', () => {
                        this.overlay.style.display = 'none';
                        this.overlay.style.opacity = '0';
                        this.overlay.style.visibility = 'hidden';
                        modal.style.transform = 'translate(-50%, -50%) scale(0)';
                    });

                });
            })
        }
    }

    getPointsSecondLanguage(languageSkill, langArray, index) {
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

    getPointsLanguageSpouse(languageSkill, langArray, index) {
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

    triggerSecondLangDiv(reading, writing, listening, speaking, divSecondLang) {
        if ((reading.value == '' || reading.value == 'first-language-reading-clb6') || (writing.value == '' || writing.value == 'first-language-writing-clb6') || (listening.value == '' || listening.value == 'first-language-listening-clb6') || (speaking.value == '' || speaking.value == 'first-language-speaking-clb6')) {
            divSecondLang.style.display = 'none';
        } else {
            divSecondLang.style.display = 'block';
            divSecondLang.scrollIntoView({ behavior: 'smooth' })
        }
    }

    getScoreOfFirstLangSkill(index, skill, langSkillInput) {
        if (langSkillInput.value == '') {
            this.firstLangScoresArray[index] = 0;
        } else if (langSkillInput.value == `first-language-${skill}-clb6`) {
            this.firstLangScoresArray[index] = 0;
        } else if (langSkillInput.value == `first-language-${skill}-clb7`) {
            this.firstLangScoresArray[index] = 4;
        } else if (langSkillInput.value == `first-language-${skill}-clb8`) {
            this.firstLangScoresArray[index] = 5;
        } else if (langSkillInput.value == `first-language-${skill}-clb9`) {
            this.firstLangScoresArray[index] = 6;
        }
    }

    calculateLanguageScore(langArray) {
        let langScore = langArray[0] + langArray[1] + langArray[2] + langArray[3];
        return langScore;
    }

    spanMarriedOrSingle(span) {
        if (this.martialStatus.value == 'married' && this.likeSingle == false) {
            span.textContent = 'or your spouse or common law partner (if they will come with you to Canada)';
        } else if ((this.martialStatus.value == 'married' && this.likeSingle == true) || this.martialStatus.value == 'single') {
            span.textContent = '';
        }
    }

    // errorLanguageSkill(input, skill, nextInput, secondLanguageDiv) {
    //     if (input.value == '' || input.value == 'clb6' || input.value == 'clb5' || input.value == 'clb4' || input.value == 'clb3') {
    //         this.noticeDiv.style.display = 'block';
    //         this.noticeDiv.innerHTML += `
    //         <li class="listElement">Just remember that you should get at least "CLB 7" in ${skill} skill to be eligible to Express Entry</li>
    //         `;
    //         setTimeout(() => {
    //             this.noticeDiv.style.display = 'none';
    //             this.noticeDiv.innerHTML = '';
    //             input.scrollIntoView({ behavior: 'smooth' })
    //         }, 4000);
    //         secondLanguageDiv.style.display = 'none';
    //         nextInput.disabled ? nextInput.disabled = true : nextInput.disabled = false;
    //     } else {
    //         nextInput.disabled = false;
    //     }
    // }

    errorLanguageSkill(input, skill) {
        const existingMessage = `You should get at least "CLB 7" in ${skill} skill to be eligible to Express Entry`;
        const listElements = this.noticeDiv.getElementsByClassName('listElement');
        let messageExists = false;

        for (let i = 0; i < listElements.length; i++) {
            if (listElements[i].textContent == existingMessage) {
                messageExists = true;
            }
        }

        if (input.value == '' || input.value == 'first-language-' + skill + '-clb6') {
            if (!messageExists) {
                this.noticeDiv.style.display = 'block';
                this.noticeDiv.innerHTML += `
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
                    this.noticeDiv.style.display = 'none';
                }
            }
        }
    }

    hideError() {
        if ((this.firstLangReadingInput.value != '' && this.firstLangReadingInput.value != 'first-language-reading-clb6') && (this.firstLangWritingInput.value != '' && this.firstLangWritingInput.value != 'first-language-writing-clb6') && (this.firstLangListeningInput.value != '' && this.firstLangListeningInput.value != 'first-language-listening-clb6') && (this.firstLangSpeakingInput.value != '' && this.firstLangSpeakingInput.value != 'first-language-speaking-clb6')) {
            this.noticeDiv.style.display = 'none';
        }
    }

    triggerWorkExpDiv() {
        if (this.secondLangReadingInput.value != '' && this.secondLangWritingInput.value != '' && this.secondLangListeningInput.value != '' && this.secondLangSpeakingInput.value != '') {
            this.workExpCanDiv.style.display = 'block';
            this.workExpCanInput.scrollIntoView({ behavior: 'smooth' })
        } else {
            this.workExpCanDiv.style.display = 'none';
        }
    }

    enableCalculateButton() {
        if (this.spouseLangReadingInput.value != '' && this.spouseLangWritingInput.value != '' && this.spouseLangListeningInput.value != '' && this.spouseLangSpeakingInput.value != '') {
            this.btnCalculate.disabled = false;
        } else {
            this.btnCalculate.disabled = true;
        }
    }


    getCRS() {
        this.adaptabilityScore > 10 ? this.adaptabilityScore = 10 : this.adaptabilityScore = this.adaptabilityScore;
        this.count = this.educationScore + this.ageScore + this.firstLangScore + this.secondLangScore + this.workExpeScore + this.reservedJobScore + this.adaptabilityScore;

        // let modalResult = document.querySelector('#modalResult');

        if (this.count >= 67) {
            this.modalResult.style.backgroundColor = '#c3ffc3';
            let audio = new Audio('assets/sounds/success.mp3');
            audio.play();
        } else {
            this.modalResult.style.backgroundColor = '#fcc2c2';
            let audio = new Audio('assets/sounds/failure.mp3');
            audio.play();
        }

        this.modalResult.innerHTML += `
            <div class="mt-5 flex flex-col items-around justify-between gap-10">
            <h1 class="text-center text-3xl font-bold underline md:text-4xl">${this.count >= 67 ? 'Congratulations <i class="fa-solid fa-face-smile mb-3"></i>' : 'Condolences <i class="fa-solid fa-face-sad-tear mb-3"></i>'}</h1>
            <div class="indent-8 text-2xl md:text-3xl mt-2">
            <li><b>Age:</b> ${this.ageScore}</li>
            <li><b>Education:</b> ${this.educationScore}</li>
            <li><b>First Language:</b> ${this.firstLangScore}</li>
            <li><b>Second Language:</b> ${this.secondLangScore}</li>
            <li><b>Work Experience:</b> ${this.workExpeScore}</li>
            <li><b>Reserved Job:</b> ${this.reservedJobScore}</li>
            <li><b>Adaptability:</b> ${this.adaptabilityScore}</li>
            </div>
            <h2 class="text-center text-xl mt-3 md:text-3xl">Your score is <b>${this.count}</b></h2>
            </div>
            `;

        this.overlay.style.display = 'block';
        this.overlay.style.opacity = '0.8';
        this.overlay.style.visibility = 'visible';
        this.modalResult.style.transform = 'translate(-50%, -50%) scale(1)';

        // function hideResultModal() {
        //     modalResult.style.transform = 'translate(-50%, -50%) scale(0)';
        //     overlay.style.display = 'none';
        //     overlay.style.opacity = '0';
        //     overlay.style.visibility = 'hidden';
        //     modalResult.querySelector('div').remove(); // Clear the modal content for the next time
        //     cancelButton.removeEventListener('click', hideResultModal);
        //     resetAll();
        // }

        let cancelButton = document.querySelector('#cancel');

        cancelButton.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.overlay.style.opacity = '0';
            this.overlay.style.visibility = 'hidden';
            this.modalResult.style.transform = 'translate(-50%, -50%) scale(0)';
            this.modalResult.innerHTML = `<button id="cancel" class="cancel absolute top-2 right-3 px-2 text-white bg-red-500 rounded hover:bg-red-600">
            <i class="fa-solid fa-xmark"></i>
        </button>`;
            this.resetAll();
        });


    }

    resetAll() {
        this.count = 0;
        this.educationScore = 0;
        this.ageScore = 0;
        this.firstLangScore = 0;
        this.firstLangScoresArray = [0, 0, 0, 0];
        this.secondLangScore = 0;
        this.secondLangScoresArray = [0, 0, 0, 0];
        this.workExpeScore = 0;
        this.reservedJobScore = 0;
        this.studyScore = 0;
        this.workExpInCanadaScore = 0;
        this.relativesScore = 0;
        this.spouseLangScore = 0;
        this.spouseEducationScore = 0;
        this.spouseWorkExpScore = 0;
        this.adaptabilityScore = 0;
        this.martialStatus.value = '';
        this.ageDiv.style.display = 'none';
        this.ageInput.value = '';
        this.educationDiv.style.display = 'none';
        this.educationInput.value = '';
        this.firstLangDiv.style.display = 'none';
        this.firstLangInput.value = '';
        this.firstLangTypeDiv.style.display = 'none';
        this.firstLangTypeInput.value = '';
        this.firstLangScoresDiv.style.display = 'none';
        this.firstLangReadingInput.value = 'first-language-reading-clb6';
        this.firstLangWritingInput.value = 'first-language-writing-clb6';
        this.firstLangListeningInput.value = 'first-language-listening-clb6';
        this.firstLangSpeakingInput.value = 'first-language-speaking-clb6';
        this.secondLangDiv.style.display = 'none';
        this.secondLangInput.value = '';
        this.secondLangTypeDiv.style.display = 'none';
        this.secondLangTypeInput.value = '';
        this.secondLangScoresDiv.style.display = 'none';
        this.secondLangScoresInput.value = '';
        this.workExpDiv.style.display = 'none';
        this.workExpInput.value = '';
        this.reservedJobDiv.style.display = 'none';
        this.reservedJobInput.value = '';
        this.studyDiv.style.display = 'none';
        this.studyInput.value = '';
        this.workExpInCanadaDiv.style.display = 'none';
        this.workExpInCanadaInput.value = '';
        this.jobOfferDiv.style.display = 'none';
        this.jobOfferInput.value = '';
        this.relativesDiv.style.display = 'none';
        this.relativesInput.value = '';
        this.spouseLangDiv.style.display = 'none';
        this.spouseLangInput.value = '';
        this.spouseEducationDiv.style.display = 'none';
        this.spouseEducationInput.value = '';
        this.spouseWorkExpDiv.style.display = 'none';
        this.spouseWorkExpInput.value = '';
        this.btnReset.disabled = true;
        this.btnCalculate.disabled = true;
        this.eligibilityDiv.style.backgroundColor = '#e2e8f0';
        this.modalResult.style.backgroundColor = '#f7e6e6';
    }

    /* getVariables() {
        let elig = []
        let eligibilityIntro = {}

        // eligibility variables
        eligibilityIntro[0] = document.querySelector('.eligTitle');
        eligibilityIntro[1] = eligibilityIntro[0].nextElementSibling;
        eligibilityIntro[2] = eligibilityIntro[1].nextElementSibling;
        elig[0] = eligibilityIntro;

        // form variables
        // marital status
        let maritalObj = {}
        maritalObj[0] = document.querySelector('.maritalTitle');
        maritalObj[1] = document.querySelector('[value="single"]');
        maritalObj[2] = document.querySelector('[value="married"]');
        maritalObj[3] = document.querySelector('.maritalModalExplanation');
        elig[1] = maritalObj;

        // age
        let ageObj = {}
        ageObj[0] = document.querySelector('.ageModalExplanation');
        elig[2] = ageObj;

        // education
        let educationObj = {}
        educationObj[0] = document.querySelector('[value="secondary"]');
        educationObj[1] = document.querySelector('[value="one-year"]');
        educationObj[2] = document.querySelector('[value="two-year"]');
        educationObj[3] = document.querySelector('[value="bachelors"]');
        educationObj[4] = document.querySelector('[value="two-or-more"]');
        educationObj[5] = document.querySelector('[value="masters"]');
        educationObj[6] = document.querySelector('[value="doctoral"]');
        educationObj[7] = document.querySelector('.educationModalExplanation');
        elig[3] = educationObj;

        // first language
        let firstLangObj = {}
        firstLangObj[0] = document.querySelector('.firstLangTitle');
        firstLangObj[1] = document.querySelector('[htmlFor="first-language-availability"]');

        return elig;
    }

    translateFr() {
        let elig = this.getVariables();
        elig[0][0].innerHTML = 'Calculateur d\'éligibilité';
        elig[0][1].innerHTML = 'Cet outil vous aidera à déterminer votre admissibilité à Entrée express';
        elig[0][2].innerHTML = 'Veuillez noter que vous n\'êtes éligible que si vous obtenez 67 points ou plus /100';

        // situation matrimoniale
        elig[1][0].innerHTML = 'Situation matrimoniale';
        elig[1][1].innerHTML = 'Célibataire / Mariage annulé / Veuf / Séparé';
        elig[1][2].innerHTML = 'Marié / Union de fait';
        elig[1][3].innerHTML = `<li><b>Célibataire</b> signifie que vous n'avez jamais été marié(e) et que vous n'êtes pas en union de fait.</li>
        <li><b>Mariage annulé</b> signifie un mariage déclaré légalement invalide.</li>
        <li><b>Veuf/Veuve</b> signifie que votre conjoint est décédé et que vous n'avez pas encore contracté de nouveau mariage ou n'avez pas encore vécu en union de fait.</li>
        <li><b>Séparé</b> signifie que vous et votre conjoint avez cessé de vivre ensemble pendant au moins 1 an en raison de problèmes de relation conjugale et que vous n'avez pas vécu en union de fait pendant cette période.</li>
        <li><b>Union de fait</b> signifie que vous avez vécu avec votre partenaire pendant au moins 1 an dans une relation continue et mutuellement dépendante, semblable à un mariage.</li>`;

        // age
        elig[2][0].innerHTML = `<b>Votre âge est déterminé à partir du jour où le CIC reçoit une invitation à présenter une demande (IPD). Cela signifie que si vous avez actuellement 35 ans, mais que vous aurez 36 ans avant de recevoir une IPD, vous n'obtiendrez pas de points pour avoir 35 ans.</b>`;

        // education
        elig[3][0].innerHTML = `Certificat d'études secondaires (lycée) ou moins`;
        elig[3][1].innerHTML = `Certificat de programme d'enseignement post-secondaire d'un an`;
        elig[3][2].innerHTML = `Certificat de programme d'enseignement post-secondaire de deux ans`;
        elig[3][3].innerHTML = `Diplôme de premier cycle OU un certificat de programme d'enseignement post-secondaire de trois ans ou plus`;
        elig[3][4].innerHTML = `Deux diplômes de programmes d'enseignement post-secondaire ou plus (dont au moins 1 devrait être de 3 ans ou plus)`;
        elig[3][5].innerHTML = `Maîtrise`;
        elig[3][6].innerHTML = `Doctorat`;
        elig[3][7].innerHTML = `<b><u>Indiquez le niveau de scolarité le plus élevé pour lequel vous :</u></b>
        <li>avez obtenu un diplôme, un certificat ou un titre canadien, ou</li>
        <li>avez obtenu une évaluation des titres de compétences académiques (ÉTCA) si vous avez étudié à l'extérieur du Canada (au cours des cinq dernières années).</li>
        <b><u>Remarque :</u></b> Le diplôme canadien doit provenir d'un établissement agréé. Si vous possédez un diplôme étranger, vous devez disposer d'un rapport d'ÉTCA provenant d'un organisme approuvé.`

    }

    translateEn() {
        let elig = this.getVariables();
        elig[0][0].innerHTML = 'Eligibility Calculator';
        elig[0][1].innerHTML = 'This tool will help you determine your eligibility for Express Entry';
        elig[0][2].innerHTML = 'Please note that you are only eligible if you get 67 points or more /100';

        // marital status
        elig[1][0].innerHTML = 'Marital Status';
        elig[1][1].innerHTML = 'Single / Annulled Marriage / Widowed / Separated';
        elig[1][2].innerHTML = 'Married / Common-Law';
        elig[1][3].innerHTML = `<li><b>Single</b> means you have never been married and are not in a common-law relationship.</li>
        <li><b>Annulled Marriage</b> means a marriage that is legally declared invalid.</li>
        <li><b>Widowed</b> means your spouse has died and that you have not re-married or entered into a common-law relationship.</li>
        <li><b>Separated</b> means that you are still legally married but no longer living with your spouse.</li>
        <li><b>Married</b> means that you and your spouse have had a ceremony that legally binds you to each other. Your marriage must be legally recognized in the country where it was performed.</li>
        <li><b>Common-Law</b> means that you have lived continuously with your partner in a marital-type relationship for a minimum of 1 year.</li>`;

        // age
        elig[2][0].innerHTML = `<b>Your age is based on the day IRCC gets an invitation to apply (ITA). It means that if you are 35 years old now, but you turn 36 before you get an ITA, then you will not get points for being 35.</b>`;

        // education
        elig[3][0].innerHTML = 'Secondary school (high school) credential or less';
        elig[3][1].innerHTML = 'One-year post-secondary program credential';
        elig[3][2].innerHTML = 'Two-year post-secondary program credential';
        elig[3][3].innerHTML = 'Bachelor\'s degree OR a three or more year post-secondary program credential';
        elig[3][4].innerHTML = 'Two or more post-secondary program credentials (1 should be 3 or more years)';
        elig[3][5].innerHTML = 'Master\'s degree';
        elig[3][6].innerHTML = 'Doctoral level university degree (Ph.D.)';
        elig[3][7].innerHTML = `<b><u>Enter the highest level of education for which you:</u></b>
        <li>earned a Canadian degree, diploma, or certificate, or</li>
        <li>had an Educational Credential Assessment (ECA) if studied outside Canada (within the last five years).</li>
        <b><u>Note:</u></b> Canadian degree must be from an accredited institution. If you have a foreign degree, you must have an ECA report from an approved agency.`

        // language
    } */
}