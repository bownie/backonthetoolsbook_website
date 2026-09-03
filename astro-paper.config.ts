import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://backonthetoolsbook.com/",
    title: "Back on the Tools",
    shortTitle: "Back on the Tools",
    description: "Doing the tech work that actually suits you. Coming Spring 2027.",
    author: "Richard Bown",
    profile: "https://richardwbown.com",
    ogImage: "back-on-the-tools-2026-sep-smaller.jpg",
    lang: "en",
    timezone: "Europe/Amsterdam",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/satnaing/astro-paper/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "bluesky",   url: "https://bsky.app/profile/bownie.bsky.social" },
    { name: "linkedin",  url: "https://www.linkedin.com/in/richard-bown/" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
