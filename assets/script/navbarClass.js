export default class NavbarClass {
    constructor() {
        this.homeBtn = document.querySelector('#homeBtn');
        this.eligibilityCalculatorBtn = document.querySelector('#eligibilityCalculatorBtn');
        this.crsBtn = document.querySelector('#crsBtn');
        this.nclcBtn = document.querySelector('#nclcBtn');
        this.suggestedpnpBtn = document.querySelector('#suggestedpnpBtn');
        this.ebooksBtn = document.querySelector('#ebooksBtn');
        this.extraInfoBtn = document.querySelector('#extraInfoBtn');
        this.windowWidth = window.innerWidth;
        this.burger = document.querySelector('#labelburger');
        this.open = false;
        window.addEventListener('resize', this.handleWindowResize.bind(this));
        this.init()
    }

    init() {
        if (this.windowWidth < 1024) {
            this.homeBtn.innerHTML = '<i class="fa-solid fa-house text-xl md:text-3xl px-1 md:px-6"></i>';
            this.eligibilityCalculatorBtn.innerHTML = '<i class="fa-solid fa-calculator text-xl md:text-3xl px-1 md:px-6"></i>';
            this.crsBtn.innerHTML = '<i class="fa-solid fa-chart-bar text-xl md:text-3xl px-1 md:px-6"></i>';
            this.nclcBtn.innerHTML = '<i class="fa-solid fa-language text-xl md:text-3xl px-1 md:px-6"></i>';
            this.suggestedpnpBtn.innerHTML = '<i class="fa-solid fa-list-check text-xl md:text-3xl px-1 md:px-6"></i>';
            this.ebooksBtn.innerHTML = '<i class="fa-solid fa-book-open text-xl md:text-3xl px-1 md:px-6"></i>';
            this.extraInfoBtn.innerHTML = '<i class="fa-solid fa-info text-xl md:text-3xl px-1 md:px-6"></i>';
        } else {
            this.homeBtn.innerHTML = 'Home';
            this.eligibilityCalculatorBtn.innerHTML = 'Eligibility Calculator';
            this.crsBtn.innerHTML = 'CRS';
            this.nclcBtn.innerHTML = 'CLB';
            this.suggestedpnpBtn.innerHTML = 'Suggested PNP';
            this.ebooksBtn.innerHTML = 'E-Books';
            this.extraInfoBtn.innerHTML = 'Extra Info';
        }

        this.burger.addEventListener('click', () => {
            this.toggleBurger();

            if (this.open) {
                this.burger.innerHTML = '<i class="fa-solid fa-times text-white text-2xl md:text-4xl ml-4 my-3 hover:text-red-400"></i>';
            } else {
                this.burger.innerHTML = '<i class="fa-solid fa-bars text-white text-2xl md:text-4xl ml-4 my-3 hover:text-lime-400"></i>';
            }
        });
    }

    handleWindowResize() {
        this.windowWidth = window.innerWidth;
        this.init();
    }

    getInnerWidth() {
        return window.innerWidth;
    }

    toggleBurger() {
        this.open = !this.open;
    }
}