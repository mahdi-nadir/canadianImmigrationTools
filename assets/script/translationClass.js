export default class translationClass {
    constructor() {
        // super();
        this.language = localStorage.getItem('language') === 'true' || false;
        this.languageBtn = document.querySelector('#languageBtn');
        this.languageBtn.textContent = this.language ? 'EN' : 'FR';

        // navbar buttons
        this.homeBtn = document.querySelector('#homeBtn');
        this.eligibilityCalculatorBtn = document.querySelector('#eligibilityCalculatorBtn');
        this.crsBtn = document.querySelector('#crsBtn');
        this.nclcBtn = document.querySelector('#nclcBtn');
        this.suggestedpnpBtn = document.querySelector('#suggestedpnpBtn');
        this.ebooksBtn = document.querySelector('#ebooksBtn');
        this.extraInfoBtn = document.querySelector('#extraInfoBtn');
        // this.weatherBtn = document.querySelector('.weatherBtn');
        // this.newsBtn = document.querySelector('.newsBtn');
        this.currencyBtn = document.querySelector('.currencyBtn');
        this.hashtagBtn = document.querySelector('.hashtagBtn');
        this.languageBtn = document.querySelector('#languageBtn');

        // home templates
        this.home = document.querySelector('.home');

        this.init();
    }

    init() {
        this.language ? this.translateFr() : this.translateEn();

        this.languageBtn.addEventListener('click', () => {
            this.language = !this.language;
            localStorage.setItem('language', this.language);
            if (this.language === true) {
                this.translateFr();
                languageBtn.textContent = 'EN';
            } else {
                this.translateEn();
                languageBtn.textContent = 'FR';
            }
        })
    }

    translateFr() {
        // home template
        this.home.children[0].textContent = 'Bienvenue à MapleMind Tools';
        this.home.children[1].textContent = 'Ce site web est conçu pour vous aider avec votre demande Entrée Express.';
        this.home.children[2].innerHTML = `Si vous avez des questions, n\'hésitez pas à les poser dans mon <a href='https://www.facebook.com/groups/hellocanada25' class='text-blue-600' target="_blank" rel="noreferrer">groupe Facebook</a>`;

        // navbar buttons
        this.homeBtn.textContent = 'Accueil';
        this.eligibilityCalculatorBtn.textContent = 'Calculateur d\'éligibilité';
        this.crsBtn.textContent = 'SCG';
        this.nclcBtn.textContent = 'NCLC';
        this.suggestedpnpBtn.textContent = 'PNP suggéré';
        this.ebooksBtn.textContent = 'Ebooks';
        this.extraInfoBtn.textContent = 'Infos supp.';
    }

    translateEn() {
        // home template
        this.home.children[0].textContent = 'Welcome to MapleMind Tools';
        this.home.children[1].textContent = 'This website is designed to help you with your Express Entry application.';
        this.home.children[2].innerHTML = `If you have any questions, feel free to ask them in my <a href='https://www.facebook.com/groups/hellocanada25' class='text-blue-600' target="_blank" rel="noreferrer">Facebook group</a>`;

        // navbar buttons
        this.homeBtn.textContent = 'Home';
        this.eligibilityCalculatorBtn.textContent = 'Eligibility Calculator';
        this.crsBtn.textContent = 'CRS';
        this.nclcBtn.textContent = 'CLB';
        this.suggestedpnpBtn.textContent = 'Suggested PNP';
        this.ebooksBtn.textContent = 'Ebooks';
        this.extraInfoBtn.textContent = 'Extra Info';
    }
}

