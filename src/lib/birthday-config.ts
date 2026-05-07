// 💕 EDIT THIS FILE TO PERSONALIZE THE EXPERIENCE

export const config = {
  // Her name (replace with hers)
  name: "Viju Lu",
  shortName: "Viju",

  // 4-digit passcode (e.g. her birthday DDMM)
  passcode: "1614",

  // Welcome screen
  welcomeHeading: "A surprise made by Manikanta only for you",
  welcomeSubtitle: "Type the four little numbers that mean the most to us. Something soft and sparkling is waiting on the other side.",

  // Birthday wish
  birthdayHeadline: "Happy Birthday, Viju Lu",
  birthdaySubline: "Another year of being my favorite person — and my favorite chaos.",
  cakeOneCaption: "Tap the cake. I dare you. ✨",

  // Gift 1 — Video
  gift1Title: "Gift One",
  gift1Subtitle: "A little moving memory, just for you",
  gift1Caption: "Press play, beautiful. This one's a smile-on-loop.",
  // Replace with your uploaded video URL (mp4) or keep blank to show placeholder
  gift1VideoUrl: "/videos/rangula oo ❤️ [1F3C20F].mp4",

  // Gift 2 — Letter + photos
  gift2Title: "Gift Two",
  gift2Subtitle: "Words I've been waiting to hand you",
  letterText: `My Viju Lu,

Happy Happiest Birthday Viju Lu , you are most special person in my life. Nitho matldithea atha bhagutadho aa happiness enka yavari tho matldina radhu. Keep smiling always viju lu ... 
Nenu chala lucky adhuku atea nuv na life lo unav. Nuv matldina atha sepu happiness aa thapa sadness asalu radhu. Na life lo the most special persons atea edharea vakati amma enka nuvu viju lu.
Appudu ina theliyaka emana antea kopam thechukoku , niku enka chala birthdays ela chala suprises evali ani vundhi ... and Chala chala Talented person vi nuvu vijulu ni reels , ni songs , ni dancing ,and also a topper....
Onces again happy birthday viju lu. EE website just a gift aa kadhu na nichi niku echea na first gift with all efforts ,time and memories. YOu are Best Gift that i reviced form the god.
enka vaka sare Happy Birthday Viju Lu once again ....

Yours, Manikanta veerla always.`,

  // Gift 3 trigger / second cake
  cakeTwoCaption: "One more wish, princess. Make it a big one.",

  // Final reveal
  finaleTitle: "The Memory Vault",
  finaleSubtitle: "Everything I love, kept in one little place",
  finaleClosing: "Made with love. For you. Always.",

  // Final gallery videos (replace URLs)
  finalVideos: [
    { url: "/videos/Viju lu 1 [7732085] (1).mp4", caption: "Our first steps together" },
    { url: "/videos/viju lu 2 💗🎁 [62A518B] (1).mp4", caption: "Sweet moments on loop" },
    { url: "/videos/Viju lu 🎁 2 [AD9D996] (1).mp4", caption: "The big surprise" },
    { url: "/videos/New Project. [0F76755].mp4", caption: "A little magic for you" },
    { url: "/videos/birthday-story.mp4", caption: "Your birthday story" },
  ] as { url: string; caption: string }[],

  // Extra notes shown in the finale
  loveNotes: [
    { title: "The way you laugh", body: "Honestly unfair. It rearranges my whole day." },
    { title: "Your hands", body: "Small, warm, and somehow the safest place I know." },
    { title: "Us", body: "My favorite word, my favorite story, my favorite forever." },
  ],

  // Optional background music URL (leave blank to use silent placeholder)
  musicUrl: "",
};

export type BirthdayConfig = typeof config;