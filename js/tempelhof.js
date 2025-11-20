// ===== Локализация для страницы Tempelhof =====
window.langPage = {
  ru: {
    tempelhofTitle: "СЧАСТИЛИВО, И БОЛЬШОЕ СПАСИБО",
    tempelhofSubtitle: "Всеволод Лисовский",
    instructionText: "Найдите этот объект по геолокации. Когда найдете, осмотритесь кругом и прочитайте этот текст:",
    textBtn: "ТЕКСТ",
    textContent: `Тут он увидел двух бородатых мужчин с топорами на плече, идущих ему навстречу; подойдя ближе, они стали прощаться. «Ну, счастливо и большое спасибо», – сказал один из них другому низким звучным голосом, переложил топор на другое плечо и, похрустывая иглами, начал без дороги спускаться между елями в долину. Как странно прозвучали в этом уединении слова: «Ну, счастливо и большое спасибо», – они точно сон коснулись Ганса Касторпа, который был все еще захвачен своими песнями и восхождением на крутизну. Он повторил вполголоса эти слова, пытаясь подражать гортанному наречию горца и той торжественной и нескладной манере, с какой они были произнесены; затем поднялся еще выше, ибо ему хотелось достичь границы лесов, однако, взглянув на часы, вынужден был отказаться от этого намерения.`
  },
  de: {
    tempelhofTitle: "LEB WOHL AND HAB DANK",
    tempelhofSubtitle: "Vsevolod Lisovsky",
    instructionText: "Finden Sie dieses Objekt per Geolokalisierung. Wenn Sie es gefunden haben, schauen Sie sich um und lesen Sie diesen Text:",
    textBtn: "TEXT",
    textContent: `Er stieg noch höher, in Serpentinen, Kuhglockengeläut zog ihn an, und er fand auch die Herde; sie graste in der Nähe einer Blockhütte, deren Dach mit Steinen beschwert war. Zwei bärti- ge Männer kamen ihm entgegen, mit Äxten auf den Schultern, und trennten sich, als sie nahe herangekommen. »Nun, so leb wohl und hab Dank!« sagte der eine zum andern mit tiefer, gaumiger Stimme, legte seine Axt auf die andere Schulter und begann ohne Weg und mit knackenden Tritten zwischen den Fichten zu Tal zu schreiten. Es hatte so sonderbar in der Einsam- keit geklungen, dieses »Leb wohl und hab Dank«, und träume- risch Hans Castorps vom Steigen und Singen benommenen Sinn berührt. Er sprach es leise nach, indem er sich bemühte, die gutturale und feierlich-unbeholfene Mundart des Gebirglers nachzuahmen, und stieg noch ein Stück über die Almhütte hin- aus, da es ihm darum zu tun war, die Baumgrenze zu erreichen; doch ließ er nach einem Blick auf die Uhr von diesem Vorha- ben ab.`
  },
  en: {
    tempelhofTitle: "FAREWELL, AND GOD BE WITH YOU",
    tempelhofSubtitle: "Wsevolod Lisowski",
    instructionText: "Find this object by geolocation. When you find it, look around and read this text:",
    textBtn: "TEXT",
    textContent: `He climbed still higher, in zigzags; the sound of cowbells lured him on, and he found the herd grazing near a log hut whose roof was weighted with stones. Two bearded men came toward him, axes on their shoulders; as they met, they parted.
“Well then, farewell, and God be with you!” said one to the other, in a deep, guttural voice; he shifted his axe to the other shoulder and began, without a path and with crackling steps, to descend through the fir-trees.
That “Farewell, and God be with you!” had sounded so strange in the solitude; it touched Hans Castorp’s dreamy, mountain-bewitched mood. He softly repeated the words, trying to imitate the guttural, solemn, and clumsy dialect of the mountaineer. Then he climbed a little higher, beyond the hut, for he wished to reach the tree line; but after a glance at his watch he gave up the plan.`
  }
};

// какие элементы на этой странице должны локализоваться через common.js
window.pageLangMap = {
  tempelhofTitle: "tempelhofTitle",
  tempelhofSubtitle: "tempelhofSubtitle",
  instructionText: "instructionText",
  textBtn: "textBtn",
  textContent: "textContent"
};


// ===== Логика Tempelhof =====
document.addEventListener('DOMContentLoaded', () => {
  // --- дропдаун "ТЕКСТ" ---
  const textBtn = document.getElementById('textBtn');
  const textContent = document.getElementById('textContent');

  if (textBtn && textContent) {
    textBtn.addEventListener('click', () => {
      if (typeof toggleDropdown === 'function') {
        toggleDropdown(textBtn, textContent);
      } else {
        textBtn.classList.toggle('open');
        textContent.classList.toggle('open');
      }
    });
  }

  // --- карта Leaflet ---
  const mapEl = document.getElementById('map');
  if (mapEl && window.L) {
    const map = L.map('map', {
      scrollWheelZoom: false,
      attributionControl: false
    }).setView([52.4755, 13.4032], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 10
    }).addTo(map);

    const marker = L.marker([52.472483, 13.391068])
      .addTo(map)
      .bindPopup("Поле Темпельхоф");
    marker.openPopup();
  }
});
