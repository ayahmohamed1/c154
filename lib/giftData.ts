export interface GiftData {
  senderName: string;
  receiverName: string;
  envelopeImage: string;
  cardMessage: string;
  birthdayImage: string;
  birthdayTitle: string;
  birthdayText: string;
  balloonImage: string;
  birthdayWishesTitle: string;
  birthdayWishesMessage: string;
  thingsWeWannaDo: string[];
  loveLetterTitle?: string;
  loveLetterSubtitle?: string;
  loveLetterParagraphs?: string[];
  musicCoverImage: string;
  musicUrl: string;
  songTitle: string;
}

const defaultThings: string[] = [
  "Have a hot chocolate booth at our wedding 🍫💍",
  "Jump out of a plane together 🪂",
  "Travel to Greece, just the two of us ",
];

export const defaultLoveLetterParagraphs: string[] = [
  "Loving you is the easiest and most beautiful thing I've ever done.",
  "I love your laugh, the way it fills any room and fixes any bad day.",
  "I love your kindness and your gentle, giving heart.",
  "I choose you through the easy days and the hard ones, today and for all our years ahead.",
  "Happy 20th birthday to my forever favorite person, my heart, and my future.",
  "Always and forever, your Hot chocolate 🤍",
];

const ahmedGift: GiftData = {
  senderName: "Hot chocolate",
  receiverName: "Skyla",
  envelopeImage: "/images/envelope-placeholder.png",
  cardMessage: "Check out these awesome surprises made just for you, Skyla! ✨",
  birthdayImage: "/images/kid-placeholder.jpg",
  birthdayTitle: "To my favorite person,",
  birthdayText:
    "Every moment with you feels like my favorite memory. I fell so deeply in love with your laugh, your kindness and your beautiful heart. 🤍",
  balloonImage: "/images/cat.png",
  birthdayWishesTitle: "Happy 20th Birthday, Skyla! 🎂✨",
  birthdayWishesMessage:
    "Happy 20th birthday to my favorite person! Your laugh makes my whole world brighter, your kindness warms everyone around you, and your heart is the most beautiful thing I know. I'm so lucky to have you, and I can't wait to be by your side forever. Wishing you endless happiness, peace and love. Happy birthday, Skyla! 🤍✨",
  thingsWeWannaDo: defaultThings,
  loveLetterTitle: "The little things I love about you",
  loveLetterSubtitle: "To my Skyla, with all my love <3",
  loveLetterParagraphs: defaultLoveLetterParagraphs,
  musicCoverImage: "/images/song-cover.jpg",
  musicUrl: "/music/our-song.mp3",
  songTitle: "Our Special Track",
};

const giftData: Record<string, GiftData> = {
  ahmed: ahmedGift,
  amir: ahmedGift,
  aya: ahmedGift,
};

export default giftData;