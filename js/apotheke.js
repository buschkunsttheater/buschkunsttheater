// ===== Локализация =====
window.langPage = {
  ru: {
    apothekeTitle: "БОЛЬНА И ГЛУПА?",
    instructionText: "Зайдите в аптеку из этого списка (или любую другую). Скажите провизору что плохо себя чувствуете и попросите померять свое артериальное давление.\nЗапомнив результат измерения, выйдите из аптеки отойдите от нее на 50 метров и прочитайте этот текст:",
    textBtn: "ТЕКСТ",
    textContent:`За нашим столом тоже сидит такая дама… фрау Штёр – вы, наверно, ее видели… Она убийственно невежественна, иной раз просто не знаешь, куда глаза девать, когда она заводит свои дурацкие разговоры. И притом жалуется, что у нее температура и уж такая, такая вялость! И она действительно тяжело больна. Как странно – больна и глупа. Не знаю, понятна ли моя мысль, но если человек глуп, да в придачу еще болен – это на меня как-то особенно действует, такое сочетание, наверно, самая печальная вещь на свете. И совершенно не знаешь, как быть: ведь к больному надо относиться серьезно и с уважением, болезнь – это ведь что-то почтенное, если мне позволено будет так выразиться`
  },
  de: {
    apothekeTitle: "KRANK UND DUMM?",
    instructionText: "Gehen Sie in eine Apotheke aus dieser Liste (oder eine andere). Sagen Sie dem Apotheker, dass Sie sich nicht wohl fühlen und bitten Sie, Ihren Blutdruck zu messen.\nMerken Sie sich das Ergebnis, verlassen Sie die Apotheke, gehen Sie 50 Meter weg und lesen Sie diesen Text:",
    textBtn: "TEXT",
    textContent:`An unserem Tisch sitzt auch so eine Dame . . . Frau Stöhr, - ich denke mir, daß Sie sie kennen? Mörderlich ungebildet ist sie, das muß man ja sagen, und manchmal weiß man nicht recht, wo man hinsehen soll, wenn sie so plappert. Und dabei klagt sie sehr über ihre Tempe- ratur und daß sie so schlaff ist, und ist wohl leider gar kein ganz leichter Fall. Das ist so sonderbar, - krank und dumm -, ich weiß nicht, ob ich mich richtig ausdrücke, aber mich mutet es ganz eigentümlich an, wenn einer dumm ist und dann auch noch krank, wenn das so zusammenkommt, das ist wohl das Trübseligste auf der Welt. Man weiß absolut nicht, was man für ein Gesicht machen soll, denn einem Kranken möchte man doch Ernst und Achtung entgegenbringen, nicht wahr, Krank- heit ist doch gewissermaßen etwas Ehrwürdiges, wenn ich so sagen darf. Aber wenn nun immer die Dummheit dazwischen kommt mit ›Fomulus‹ und ›kosmische Anstalt‹ und solchen Schnitzern, da weiß man wahrhaftig nicht mehr, ob man wei- nen oder lachen soll, es ist ein Dilemma für das menschliche Gefühl und so kläglich, daß ich es gar nicht sagen kann. Ich meine, es reimt sich nicht, es paßt nicht zusammen, man ist nicht gewohnt, es sich zusammen vorzustellen. Man denkt, ein dummer Mensch muß gesund und gewöhnlich sein, und Krankheit muß den Menschen fein und klug und besonders machen. So denkt man es sich in der Regel. Oder nicht? Ich sa- ge da wohl mehr, als ich verantworten kann«, schloß er. »Es ist nur, weil wir zufällig darauf kamen . . .«`
  },
  en: {
    apothekeTitle: "SICK AND DUMB?",
    instructionText: "Go to a pharmacy from this list (or any other). Tell the pharmacist you feel unwell and ask to have your blood pressure measured.\nRemember the result, leave the pharmacy, walk 50 meters away and read this text:",
    textBtn: "TEXT",
    textContent:`There is also such a lady at our table… Frau Stohr – you must have seen her… She is devastatingly ignorant, sometimes you just don’t know where to look when she starts her silly conversations. And she complains about having a temperature and such, such sluggishness! And she is really seriously ill. How strange – ill and stupid. I don’t know if my thought is clear, but if a person is stupid and in addition ill – it affects me in a special way, that combination is probably the saddest thing in the world. And you absolutely don’t know what to do: you have to treat a sick person seriously and with respect, illness is something honorable, if I may put it that way.`
  }
};


// соответствие id → ключу в langPage (специфично для этой страницы)
window.pageLangMap = {
  apothekeTitle: "apothekeTitle",
  instructionText: "instructionText",
  textBtn: "textBtn",
  textContent: "textContent"
};


// ===== Логика apotheke =====
document.addEventListener('DOMContentLoaded', () => {
  // дропдаун "ТЕКСТ"
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

  // карта leaflet
  const mapEl = document.getElementById('map');
  if (mapEl && window.L) {
    const map = L.map('map', {
      scrollWheelZoom: false,
      attributionControl: false
    }).setView([52.5208, 13.4094], 13.5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 10
    }).addTo(map);

    const pharmacies = [
      { lat: 52.5212, lng: 13.4132, name: "Apotheke am Alexanderplatz" },
      { lat: 52.52583, lng: 13.36908, name: "Apotheke am Hauptbahnhof" },
      { lat: 52.5163, lng: 13.3777, name: "Apotheke am Brandenburger Tor" },
      { lat: 52.5202, lng: 13.3872, name: "Friedrichstraße Apotheke" },
      { lat: 52.5232, lng: 13.4104, name: "Apotheke am Hackeschen Markt" },
      { lat: 52.5259, lng: 13.3887, name: "Apotheke Oranienburger Tor" },
      { lat: 52.5273, lng: 13.4018, name: "Apotheke Rosenthaler Platz" },
      { lat: 52.5175, lng: 13.3997, name: "Apotheke Museuminsel" }
    ];

    pharmacies.forEach(ph => {
      L.marker([ph.lat, ph.lng]).addTo(map).bindPopup(ph.name);
    });
  }
});
