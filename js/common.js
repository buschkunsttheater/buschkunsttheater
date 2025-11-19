// ===== Общая локализация (header + меню) =====
window.langCommon = {
  ru: {
    headerTitle: "BuschKunstTheater",
    headerSubtitle: "UberZauberBerg",
    mainLink: "Главная",
    tempelhofLink: "Большое Спасибо",
    apothekeLink: "Больна и Глупа?",
    friedrichshainLink: "Очистки от Карандаша",
    balconyLink: "Обычный Балкон",
    pressLink: "Пресса",
    contactsLink: "Контакты"
  },
  de: {
    headerTitle: "BuschKunstTheater",
    headerSubtitle: "UberZauberBerg",
    mainLink: "Startseite",
    tempelhofLink: "Vielen Dank",
    apothekeLink: "Krank und Dumm?",
    friedrichshainLink: "Bleistiftspäne",
    balconyLink: "Normaler Balkon",
    pressLink: "Presse",
    contactsLink: "Kontakt"
  },
  en: {
    headerTitle: "BuschKunstTheater",
    headerSubtitle: "UberZauberBerg",
    mainLink: "Home",
    tempelhofLink: "Thank You Very Much",
    apothekeLink: "Sick and Dumb?",
    friedrichshainLink: "Pencil Shavings",
    balconyLink: "Regular Balcony",
    pressLink: "Press",
    contactsLink: "Contacts"
  }
};

// соответствие id → ключу в langCommon
const commonIdToKey = {
  headerTitle: "headerTitle",
  headerSubtitle: "headerSubtitle",
  mainLink: "mainLink",
  tempelhofLink: "tempelhofLink",
  apothekeLink: "apothekeLink",
  friedrichshainLink: "friedrichshainLink",
  balconyLink: "balconyLink",
  pressLink: "pressLink",
  contactsLink: "contactsLink"
};

// универсальный тогглер дропдаунов
function toggleDropdown(btn, contentEl) {
  if (!btn || !contentEl) return;
  btn.classList.toggle('open');
  contentEl.classList.toggle('open');
}

// применяем язык: сначала общие элементы, потом страничные
function applyLanguage(lang) {
  // --- общие ---
  const commonData = window.langCommon && window.langCommon[lang];
  if (commonData) {
    Object.entries(commonIdToKey).forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el && commonData[key] != null) {
        el.textContent = commonData[key];
      }
    });
  }

  // --- страничные (определяются в scr_*.js) ---
  if (window.langPage && window.pageLangMap && window.langPage[lang]) {
    const pageData = window.langPage[lang];
    Object.entries(window.pageLangMap).forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el && pageData[key] != null) {
        el.textContent = pageData[key];
      }
    });
  }

  // подсветка активной кнопки языка
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // ===== Hamburger =====
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const sideMenu = document.getElementById('sideMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeMenuBtn = document.getElementById('closeMenuBtn');

  if (hamburgerBtn && sideMenu && menuOverlay && closeMenuBtn) {
    const openMenu = () => {
      sideMenu.classList.add('open');
      menuOverlay.classList.add('open');
      document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
      sideMenu.classList.remove('open');
      menuOverlay.classList.remove('open');
      document.body.style.overflow = "";
    };

    hamburgerBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);
  }

  // ===== Язык =====
  // берём язык из localStorage или ru по умолчанию
  let currentLang = localStorage.getItem('bktLang') || 'ru';
  if (!window.langCommon || !window.langCommon[currentLang]) {
    currentLang = 'ru';
  }

  // первая отрисовка языка
  applyLanguage(currentLang);

  // обработчики кнопок смены языка
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (!lang || !window.langCommon[lang]) return;
      localStorage.setItem('bktLang', lang);
      applyLanguage(lang);
    });
  });
});
