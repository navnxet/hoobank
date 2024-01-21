import {
  airbnb,
  airbnb2,
  apple,
  binance,
  binance2,
  coinbase,
  coinbase2,
  dropbox,
  dropbox2,
  google,
  people01,
  people02,
  people03,
  send,
  shield,
  star,
} from "@/public";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const navLinks = [
  {
    url: "home",
    title: "Home",
  },
  {
    url: "features",
    title: "Features",
  },
  {
    url: "product",
    title: "Product",
  },
  {
    url: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    title: "Users Active",
    value: "3800+",
  },
  {
    title: "Trusted by Companies",
    value: "230+",
  },
  {
    title: "Transactions",
    value: "$230M+",
  },
];

export const downloadApps = [
  {
    url: "https://www.apple.com/in/store",
    icon: apple,
    alter: "apple",
    widthh: 148,
    heightt: 62,
  },
  {
    url: "https://play.google.com/store/apps",
    icon: google,
    alter: "google",
    widthh: 160,
    heightt: 74,
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "./content/",
      },
      {
        name: "How it Works",
        link: "./how-it-works/",
      },
      {
        name: "Create",
        link: "./create/",
      },
      {
        name: "Explore",
        link: "./explore/",
      },
      {
        name: "Terms & Services",
        link: "./terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "./help-center/",
      },
      {
        name: "Partners",
        link: "./partners/",
      },
      {
        name: "Suggestions",
        link: "./suggestions/",
      },
      {
        name: "Blog",
        link: "./blog/",
      },
      {
        name: "Newsletters",
        link: "./newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "./our-partner/",
      },
      {
        name: "Become a Partner",
        link: "./become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    icon: Instagram,
    link: "https://www.instagram.com/navnxet",
  },
  {
    icon: Facebook,
    link: "https://www.facebook.com/navnxet",
  },
  {
    icon: Twitter,
    link: "https://www.twitter.com/navnxet",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/navnxet",
  },
];

export const clients = [
  {
    logo: airbnb,
    logo2: airbnb2,
  },
  {
    logo: binance,
    logo2: binance2,
  },
  {
    logo: coinbase,
    logo2: coinbase2,
  },
  {
    logo: dropbox,
    logo2: dropbox2,
  },
];
