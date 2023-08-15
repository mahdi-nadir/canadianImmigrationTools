// export default class Translator {
//     constructor(language) {
//         this.language = language;
//     }

//     loadTranslations() {
//         fetch(`assets/script/translation/${this.language}.json`)
//             .then(response => response.json())
//             .then(data => this.translations = data);
//     }

//     translate(key, index) {
//         return this.translations[key][index];
//     }
// }