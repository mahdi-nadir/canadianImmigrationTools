export default class clbClass {
    constructor() {
        this.init();
    }

    init() {

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
    }
}