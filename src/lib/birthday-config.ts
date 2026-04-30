// 💕 EDIT THIS FILE TO PERSONALIZE THE EXPERIENCE

export const config = {
  // Her name (replace with hers)
  name: "My Love",
  shortName: "Beautiful",

  // 4-digit passcode (e.g. her birthday DDMM)
  passcode: "0000",

  // Welcome screen
  welcomeHeading: "A surprise made only for you",
  welcomeSubtitle: "Type the four little numbers that mean the most to us. Something soft and sparkling is waiting on the other side.",

  // Birthday wish
  birthdayHeadline: "Happy Birthday, my whole heart",
  birthdaySubline: "Another year of being my favorite person — and my favorite chaos.",
  cakeOneCaption: "Tap the cake. I dare you. ✨",

  // Gift 1 — Video
  gift1Title: "Gift One",
  gift1Subtitle: "A little moving memory, just for you",
  gift1Caption: "Press play, beautiful. This one's a smile-on-loop.",
  // Replace with your uploaded video URL (mp4) or keep blank to show placeholder
  gift1VideoUrl: "",

  // Gift 2 — Letter + photos
  gift2Title: "Gift Two",
  gift2Subtitle: "Words I've been waiting to hand you",
  letterText: `My love,

If I tried to write down every reason you make my world softer, the page would run out before my heart did. So here is a small piece of an endless thing.

You are the kindest mischief I've ever met. The reason ordinary days quietly turn into stories. The voice I look for in every room.

On your birthday, I just want you to know — I would choose you in every version of every life, every single time.

Yours, always.`,

  // Gift 3 trigger / second cake
  cakeTwoCaption: "One more wish, princess. Make it a big one.",

  // Final reveal
  finaleTitle: "The Memory Vault",
  finaleSubtitle: "Everything I love, kept in one little place",
  finaleClosing: "Made with love. For you. Always.",

  // Final gallery videos (replace URLs)
  finalVideos: [] as { url: string; caption: string }[],

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