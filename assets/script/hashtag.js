export default class HashtagClass {
    constructor() {
        this.modalResult = document.querySelector('#modalResult');
        this.cancelBtn = this.modalResult.querySelectorAll('.cancel');
        this.hashtagSelect = document.querySelector('#hashtag');
        this.getHashtagBtn = document.querySelector('#getHashtagBtn');
        this.overlay = document.querySelector('#overlay');
        this.result = document.querySelector('#result');

        this.init();
    }

    init() {
        this.overlay.style.display = 'block';
        this.overlay.style.opacity = '0.8';
        this.overlay.style.visibility = 'visible';
        this.modalResult.style.transform = 'translate(-50%, -50%) scale(1)';

        this.getHashtagBtn.addEventListener('click', () => {
            const selectedOption = this.hashtagSelect.value;
            if (selectedOption) {
                const currentDate = new Date();
                const month = currentDate.getMonth() + 1; // Month is 0-based
                const day = currentDate.getDate();
                const hours = currentDate.getHours();
                const minutes = currentDate.getMinutes();
                const hashtag = `#maplemind_${selectedOption}_${month}${day}_${hours}${minutes}`;
                const hashtagWithIcon = `<h1 class="flex flex-col md:flex-row justify-center items-center gap-8"><span class="text-lg md:text-2xl font-bold">#maplemind_${selectedOption}_${month}${day}_${hours}${minutes}</span> <i id="copyHashtag" class="copy-icon fas fa-copy cursor-pointer text-slate-500 hover:text-slate-800 hover:animate-bounce" title="Click to copy"></i></h1>`;

                this.result.innerHTML = hashtagWithIcon;

                const copyHashtagIcon = document.querySelector('#copyHashtag');
                copyHashtagIcon.addEventListener('click', () => {
                    this.copyToClipboard(hashtag);
                });
            } else {
                this.result.innerHTML = `<h1 class="text-xl md:text-3xl font-bold text-red-400">Please select an option.</h1>`;
            }
        });

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
        });
    }

    copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}
