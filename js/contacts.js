// ===== Локализация страницы Contacts =====
window.langPage = {
  ru: {
    contactsTitle: "Контакты",
    contactsText:
      "Пишите нам — мы рады вашим письмам, предложениям, фотографиям фроттажа для публикации на сайте, вопросам и предложениям по участию."
  },

  de: {
    contactsTitle: "Kontakt",
    contactsText:
      "Schreiben Sie uns – wir freuen uns über Ihre Nachrichten, Vorschläge, Frottage-Fotos zur Veröffentlichung auf der Website sowie Fragen und Vorschläge zur Teilnahme."
  },

  en: {
    contactsTitle: "Contacts",
    contactsText:
      "Write to us — we welcome your letters, suggestions, frottage photos for publication on the site, questions and proposals for participation."
  }
};


// ===== соответствие id → ключу локализации =====
window.pageLangMap = {
  contactsTitle: "contactsTitle",
  contactsText: "contactsText"
};


// На этой странице нет интерактивного UI кроме локализации,
// но оставляем DOMContentLoaded для единообразия.
document.addEventListener("DOMContentLoaded", () => {
  // applyLanguage() вызовется из common.js автоматически
});
