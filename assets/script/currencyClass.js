export default class CurrencyClass {
    constructor() {
        this.modalResult = document.querySelector('#modalResult');
        this.cancelBtn = modalResult.querySelectorAll('.cancel');
        // this.currencyTemplate = document.querySelector('#currencyTemplate');
        // this.clone = currencyTemplate.content.cloneNode(true);
        this.familyMembers = document.querySelector('#familyMembers');
        this.localCurrencyDiv = document.querySelector('.localCurrencyDiv');
        this.localCurrencyValue = document.querySelector('#localCurrency');
        this.amountDiv = document.querySelector('.amountDiv');
        this.amount = document.querySelector('#amount');
        this.convertBtn = document.querySelector('#convertBtn');
        this.overlay = document.querySelector('#overlay');
        this.canadianFunds = 0;
        this.result = document.querySelector('#result');

        this.select = document.querySelectorAll('.currencySelect');
        this.input = document.querySelectorAll('.currencyInput');
        this.currencyResult = document.querySelector('.currencyResult');
        this.API_URL = 'https://api.exchangerate-api.com/v4/latest/CAD';
        this.html = '';

        this.init();
    }

    init() {
        this.overlay.style.display = 'block';
        this.overlay.style.opacity = '0.8';
        this.overlay.style.visibility = 'visible';
        this.modalResult.style.transform = 'translate(-50%, -50%) scale(1)';

        this.familyMembers.addEventListener('change', () => {
            if (this.familyMembers.value != '') {
                this.localCurrencyDiv.style.display = 'block';
            } else {
                this.localCurrencyDiv.style.display = 'none';
            }

            switch (this.familyMembers.value) {
                case "1":
                    this.canadianFunds = 13757;
                    break;
                case "2":
                    this.canadianFunds = 17127;
                    break;
                case "3":
                    this.canadianFunds = 21055;
                    break;
                case "4":
                    this.canadianFunds = 25564;
                    break;
                case "5":
                    this.canadianFunds = 28994;
                    break;
                case "6":
                    this.canadianFunds = 32700;
                    break;
                case "7":
                    this.canadianFunds = 36407;
                    break;
                case "8":
                    this.canadianFunds = 40113;
                    break;
                case "9":
                    this.canadianFunds = 43819;
                    break;
                case "10":
                    this.canadianFunds = 47525;
                    break;
                case "11":
                    this.canadianFunds = 51231;
                    break;
                case "12":
                    this.canadianFunds = 54937;
                    break;
                case "13":
                    this.canadianFunds = 58643;
                    break;
                case "14":
                    this.canadianFunds = 62349;
                    break;
                default:
                    this.canadianFunds = 66055;
                    break;
            }
        })

        this.localCurrencyValue.addEventListener('change', () => {
            if (this.localCurrencyValue.value != '') {
                this.convertBtn.disabled = false;
            } else {
                this.convertBtn.disabled = true;
            }
        })

        this.getCurrencyData();

        this.convertBtn.addEventListener('click', async () => {
            if (this.localCurrencyValue.value === '') {
                this.result.textContent = 'Please select a local currency.';
                return;
            }

            const selectedCurrency = this.localCurrencyValue.value;

            try {
                const res = await fetch(this.API_URL);
                const data = await res.json();
                const exchangeRates = data.rates;

                if (exchangeRates[selectedCurrency]) {
                    const equivalentInLocalCurrency = (this.canadianFunds * exchangeRates[selectedCurrency]).toFixed(2);
                    const formattedNumber = equivalentInLocalCurrency.replace(/\d(?=(\d{3})+\.)/g, '$&,');

                    selectedCurrency === 'CAD' ? this.result.innerHTML = `Required funds in Canadian dollars (CAD) for ${this.familyMembers.value} person${this.familyMembers.value > 1 ? 's' : ''} are: <b>${this.canadianFunds}$</b>, that's what you need to have in your bank account.` : this.result.innerHTML = `Required funds in Canadian dollars (CAD) for ${this.familyMembers.value} person${this.familyMembers.value > 1 ? 's' : ''}: <b>${this.canadianFunds}$</b>.<br/>
                In your local currency (${selectedCurrency}), you should have approximately: <b>${formattedNumber} ${selectedCurrency}</b>`;
                } else {
                    this.result.textContent = 'Currency not found in exchange rates data.';
                }
            } catch (error) {
                this.result.textContent = 'An error occurred during currency conversion.';
            }
        })

        this.cancelBtn.forEach(element => {
            element.addEventListener('click', () => {
                this.overlay.style.display = 'none';
                this.overlay.style.opacity = '0';
                this.overlay.style.visibility = 'hidden';
                this.modalResult.style.transform = 'translate(-50%, -50%) scale(0)';
                this.modalResult.innerHTML = `
            <button id="cancel" class="cancel absolute top-2 right-3 px-2 text-white bg-red-500 rounded hover:bg-red-600">
                <i class="fa-solid fa-xmark"></i>
            </button>
            `;
            });
        })
    }

    async getCurrencyData() {
        const currencyType = document.querySelector('#localCurrency');

        const res = await fetch(this.API_URL);
        const data = await res.json();
        const rates = data.rates;
        const keys = Object.keys(rates);
        this.html = '';
        keys.forEach(key => {
            this.html += `<option value="${key}">${key}</option>`;
        })

        currencyType.innerHTML = this.html;
    }
}