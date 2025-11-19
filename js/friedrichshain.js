// ===== Ссылка на PDF (одна на все языки) =====
const pdfLink = '<a href="zauberberg-frottage.pdf" class="pdf-btn" download>СКАЧАТЬ PDF</a>';


// ===== Локализация для страницы Friedrichshain =====
window.langPage = {
  ru: {
    friedrichshainTitle: "ОЧИСТКИ ОТ КАРАНДАША",
    mainText_1: `Все говорят что роман Томаса Манна «Волшебная гора» про время. А мы думаем он про дискредитацию речи: персонажи говорят банальности, глупости, словоблудят, и в конце концов появляется Пепперкон, речь его состоит из многозоначительных обрывков, пока в кульминации водопада и вовсе не подменяется шумом воды. Единственная искренняя прочувствованная речь, происходит у Ганса Кастропа с Клавдией Шоша, когда они объясняются друг с другом, но оба для этого используют неродной язык.
Книга была написана сто лет назад, на фоне первой мировой войны, революций и гражданских войн. И теперь, сто лет спустя, мы снова оказались в похожей картине, и снова кажется что речь дискредитирована.
Мы предлагаем вам прогулку, в которой вы сами соберете книжку про Волшебную Гору с помощью фроттажа и собственного опыта.
Представьте что белый лист – это СНЕГ из главы «Снежная буря», фроттаж – это РЕНТГЕН, проявляющий скрытое, а КАРАНДАШ – тот самый символический, из главы «Вальпургиева ночь».
И, пожалуй, начнем мы путь сквозь «Волшебную гору» с конца – и будем двигаться от войны к... ну вот дойдем и увидим.

I.
Распечатайте этот пдф.`,
    downloadBtn: "СКАЧАТЬ ИНСТРУКЦИЮ",
    mainText_2: `II.
Наденьте желтый дождевик.
Возьмите толстый мягкий карандаш
и идите в Volkspark Friedrichshain.

III.
Следуя карте и инструкциям
делайте фроттажи и др.

IV.
Пришлите нам фотографии или сканы результатов похода
для публикации на сайте`
  },
  de: {
    friedrichshainTitle: "BLEISTIFTSPANE",
    mainText_1: `Alle sagen, der Roman „Der Zauberberg“ von Thomas Mann handelt von Zeit. Wir denken, er handelt von der Diskreditierung der Sprache: Die Figuren sprechen Banalitäten, Dummheiten, reden um den heißen Brei, und am Ende erscheint Pepperkorn, dessen Rede aus mehrdeutigen Fragmenten besteht, bis sie im Höhepunkt des Wasserfalls ganz vom Rauschen des Wassers abgelöst wird. Die einzige aufrichtige, gefühlvolle Rede findet zwischen Hans Castorp und Claudia Chauchat statt, wenn sie sich einander erklären, aber beide benutzen dafür eine Fremdsprache.
Das Buch wurde vor hundert Jahren geschrieben, vor dem Hintergrund des Ersten Weltkriegs, Revolutionen und Bürgerkriegen. Und jetzt, hundert Jahre später, sind wir wieder in einer ähnlichen Situation und wieder scheint die Sprache diskreditiert.
Wir schlagen Ihnen einen Spaziergang vor, bei dem Sie mit Hilfe von Frottage und eigener Erfahrung selbst ein Buch über den Zauberberg sammeln.
Stellen Sie sich vor, das weiße Blatt ist der SCHNEE aus dem Kapitel „Schneesturm“, die Frottage ist das RÖNTGEN, das Verborgene sichtbar macht, und der BLEISTIFT ist das symbolische Objekt aus dem Kapitel „Walpurgisnacht“.
Und vielleicht beginnen wir unseren Weg durch den „Zauberberg“ von hinten – und gehen von Krieg zu ... na, wir werden sehen.

I.
Drucken Sie dieses PDF aus.`,
  downloadBtn: "ANLEITUNG HERUNTERLADEN",
  mainText_2: `II.
Zieh dir einen gelben Regenmantel an.
Nimm einen dicken, weichen Bleistift
und geh zum Volkspark Friedrichshain.

III.
Folge der Karte und den Anweisungen,
mach Frottagen usw.

IV.
Schick uns Fotos oder Scans deiner Wanderergebnisse
zur Veröffentlichung auf der Website`
  },
  en: {
    friedrichshainTitle: "PENCIL SHAVINGS",
    mainText_1: `Everyone says Thomas Mann’s “The Magic Mountain” is about time. We think it’s about the discrediting of speech: characters utter banalities, foolishness, empty talk, and finally Pepperkorn appears, whose speech consists of ambiguous fragments until, at the climax of the waterfall, it is replaced entirely by the noise of the water. The only sincere, heartfelt speech occurs between Hans Castorp and Claudia Chauchat, when they explain themselves to each other, but both use a foreign language.
The book was written a hundred years ago, against the background of World War I, revolutions and civil wars. And now, a hundred years later, we are again in a similar situation, and again it seems that speech is discredited.
We invite you for a walk, in which you assemble a book about The Magic Mountain using frottage and your own experience.
Imagine the white sheet is SNOW from the “Snowstorm” chapter, frottage is the X-RAY that reveals the hidden, and the PENCIL is that very symbolic object from the “Walpurgis Night” chapter.
And perhaps we’ll start our journey through the “Magic Mountain” from the end – moving from war to… well, we’ll see.

I.
Print out this PDF.`,

  downloadBtn: "DOWNLOAD INSTRUCTION",

  mainText_2: `II.
Put on a yellow raincoat.
Take a thick, soft pencil
and go to Volkspark Friedrichshain.

III.
Follow the map and instructions,
do frottages, etc.

IV.
Send us photos or scans of your hike results
for publication on the website`
  }
};

// соответствие id → ключу в langPage (только страничные элементы без HTML)
window.pageLangMap = {
  friedrichshainTitle: "friedrichshainTitle",
  mainText_1: "mainText_1",
  downloadBtn: "downloadBtn",
  mainText_2: "mainText_2"
};


// ===== Логика страницы Friedrichshain =====
document.addEventListener('DOMContentLoaded', () => {
  // --- Leaflet карта ---
  const mapEl = document.getElementById('map');
  if (mapEl && window.L) {
    const map = L.map('map', {
      scrollWheelZoom: false,
      attributionControl: false
    }).setView([52.52798, 13.43208], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 10
    }).addTo(map);

    L.marker([52.52614556956629, 13.429769383544585]).addTo(map).bindPopup("1").openPopup();
    L.marker([52.52620757998046, 13.430096613013957]).addTo(map).bindPopup("2");
    L.marker([52.52639321906961, 13.430509728836139]).addTo(map).bindPopup("3");
    L.marker([52.52617465468041, 13.43316279668694]).addTo(map).bindPopup("4");
    L.marker([52.52635475281976, 13.431663882305449]).addTo(map).bindPopup("5");
    L.marker([52.526365911289645, 13.432145527314326]).addTo(map).bindPopup("6");
    L.marker([52.52679950233038, 13.431625760840461]).addTo(map).bindPopup("7");
    L.marker([52.527293917586455, 13.429876624180741]).addTo(map).bindPopup("8");
    L.marker([52.52789589353464, 13.427340439493326]).addTo(map).bindPopup("9");
  }


  // download button
  const downloadBtn = document.getElementById('downloadBtn');
  if (!downloadBtn) return;

  // файлы для разных языков
  const fileByLang = {
    ru: 'files/zauberberg_RUS.pdf',
    de: 'files/zauberberg_DE.pdf',
    en: 'files/zauberberg_ENG.pdf'
  };

  downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // язык из localStorage (как делает твой common.js)
    let lang = localStorage.getItem('bktLang') || 'ru';
    if (!fileByLang[lang]) lang = 'ru';

    // открываем в новой вкладке
    window.open(fileByLang[lang], '_blank');
  });
});


