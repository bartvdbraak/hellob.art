import { env } from "@/env.mjs";

export const siteConfig = {
  name: "hellob.art",
  description: "a simple portfolio made by bart van der braak.",
  url: env.NEXT_PUBLIC_APP_URL || "https://hellob.art",
  ogImage: "https://hellob.art/og.jpg",
  links: {
    linkedIn: "https://linkedin.com/in/bartvdbraak",
    github: {
      project: "https://github.com/bartvdbraak/hellob.art",
      profile: "https://github.com/bartvdbraak",
    },
  },
};
