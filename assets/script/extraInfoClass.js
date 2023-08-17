export default class ExtraInfoClass {
    constructor() {
        this.tabDraw = {};
        this.init();
    }

    async scrapeData() {
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
                };
                this.tabDraw[i] = draws;
            }
        } catch (error) {
            console.error('Error scraping data:', error);
        }
    }

    async init() {
        await this.scrapeData();

        for (let i = 1; i < 12; i++) {
            let tr = document.createElement('tr');
            tr.setAttribute('class', 'text-sm md:text:xl')
            tr.innerHTML = `
                <td class="bg-indigo-50 font-bold text-blue-600 underline"><a href="https://www.canada.ca/content/canadasite/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds/invitations.html?q=${this.tabDraw[i].nbDraw}" title="Get more information about #${this.tabDraw[i].nbDraw} draw" target="_blank" rel="noreferrer">${this.tabDraw[i].nbDraw}</a></td>
                <td>${this.tabDraw[i].date}</td>
                <td>${this.tabDraw[i].nbInvitations}</td>
                <td class="bg-yellow-50 font-bold">${this.tabDraw[i].crsScore}</td>
                <td>${this.tabDraw[i].program}</td>
            `;
            if (document.querySelector('#tbody')) {
                document.querySelector('#tbody').appendChild(tr);
            }
            let tds = document.querySelectorAll('td');
            for (let elementTd of tds) {
                elementTd.classList.add('border-2', 'border-gray-400', 'px-4', 'py-2');
            }
        }

        this.removeProgram();
    }

    removeProgram() {
        if (window.innerWidth < 768) {
            let th = document.querySelector('th:nth-child(5)');
            let tds = document.querySelectorAll('td:nth-child(5)');
            th.style.display = 'none';
            for (let elementTd of tds) {
                elementTd.style.display = 'none';
            }
        }
    }
}
