export default class SuggestedPnpClass {
    constructor() {
        this.init();
    }

    init() {
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
    }
}