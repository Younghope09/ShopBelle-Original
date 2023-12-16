// Translate to a specific language
function translateTo(language) {
    google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
    var selectElement = document.querySelector(".goog-te-combo");
    selectElement.value = language;
    selectElement.dispatchEvent(new Event('change'));
}