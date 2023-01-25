function coolFunc(dysPodloga) {
  switch (dysPodloga.value) {
    case "pimpek":
      bambikNaPimpku.sayHello();
      break;
    case "puszek":
      puszek.sayHello();
      break;
    case "łyba":
      rybcia.sayHello();
      break;
    case "leviathan":
      leviathan.sayHello();
      break;
    default:
      difult.sayHello();
  }
  buttonJellyAnimation(dysPodloga);
}

function buttonJellyAnimation(dys) {
  dys.animate(
    [
      {
        transform: "scale(0.9, 1.1)",
      },

      {
        transform: "scale(1.1, 0.9)",
      },

      {
        transform: "scale(0.95, 1.05)",
      },
      {
        transform: "scale(1, 1)",
      },
    ],
    {
      duration: 300,
      iterations: 1,
    }
  );
}

function FortniteSkin(name, lildesc, photo) {
  this.name = name;
  this.lildesc = lildesc;
  this.hotPhoto = `grafiki/fullzdjecia/${photo}`;
  this.sayHello = function (kochamFortnite = 0) {
    photo = document.getElementById("hotFocia");
    desc = document.getElementById("tutajBedzieOpis");
    nameDisplay = document.getElementById("kamienisteKino");

    nameDisplay.innerText = this.name;
    photo.src = this.hotPhoto;
    desc.innerText = this.lildesc;
  };
}

const bambikNaPimpku = new FortniteSkin(
  "Bambik na pimpku/Giddy Up",
  "Bambik na pimpku zwany równiez jako Giddy-Up to epicki skórka w Battle Royale, która mogła być uzyskana jako nagroda za osiągnięcie poziomu 23 Battle Pass sezonu 6. W zestawie z tym strojem jest również dodatkowy emote Glitter-Up.",
  "bambik_na_pimpku.webp"
);

const puszek = new FortniteSkin(
  "Puszek/Guffy",
  "Guff to rzadki stroj w grze Fortnite: Battle Royale, który można kupić w sklepie z przedmiotami za 1,200 V-Bucks. Guff został po raz pierwszy wydany w rozdziale 2: sezonie 2 i jest częścią zestawu Mythical Might.",
  "puszek.webp"
);

const rybcia = new FortniteSkin(
  "Łbycia/Fishstick",
  "Fishstick to rzadki stroj w grze Fortnite: Battle Royale, który można kupić w sklepie z przedmiotami za 1,200 V-Bucks lub w zestawie Fishstick Bundle za 2,000 V-Bucks. Fishstick został po raz pierwszy wydany w sezonie 7 i jest częścią zestawu Fish Food.",
  "łyba.webp"
);
const leviathan = new FortniteSkin(
  "Leviathan",
  "Leviathan to legendarny stroj w grze Fortnite: Battle Royale, który można kupić w sklepie z przedmiotami. W zestawie z tym strojem jest też plecak Fish Tank. Leviathan można też uzyskać poprzez zakup zestawu Leviathan Bundle.",
  "leviathan.webp"
);

const difult = new FortniteSkin(
  "Coś poszło nie tak",
  "Do not ask. Ok?",
  "none"
);

function bibliografia(monke) {
  stopki = document.querySelector("footer");
  if (stopki.style.bottom == "0%") {
    stopki.animate(
      [
        { bottom: "0%" },
        { bottom: "40%" },
        { bottom: "80%" },
        { bottom: "65%" },
        { bottom: "70%" },
      ],
      {
        duration: 300,
        iterations: 1,
      }
    );
    stopki.style.bottom = "70%";
  } else {
    stopki.animate(
      [
        { bottom: "70%" },
        { bottom: "-10%" },
        { bottom: "5%" },
        { bottom: "0%" },
      ],
      {
        duration: 300,
        iterations: 1,
      }
    );
    stopki.style.bottom = "0%";
  }
}
