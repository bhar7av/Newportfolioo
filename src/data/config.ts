const config = {
  title: "Bhargav Koushal | Developer & ML Enthusiast",
  description: {
    long: "Explore the portfolio of Bhargav Koushal, a developer and ML enthusiast specializing in front-end development, forecasting models, and creative projects. NIT Srinagar 2028.",
    short:
      "Discover the portfolio of Bhargav Koushal, a developer and ML enthusiast creating interactive web experiences.",
  },
  keywords: [
    "Bhargav Koushal",
    "portfolio",
    "developer",
    "ML enthusiast",
    "web development",
    "3D animations",
    "interactive websites",
    "NIT Srinagar",
  ],
  author: "Bhargav Koushal",
  email: "bhargavkoushal289@gmail.com",
  site: "https://bhar7av.github.io",

  // for github stars button
  githubUsername: "bhar7av",
  githubRepo: "newportfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://linkedin.com/in/bhargavkoushal",
    instagram: "https://www.instagram.com/bhar7avkoushal",
    facebook: "",
    github: "https://github.com/bhar7av",
  },
  googleSiteVerification: "", // Add code from Google Search Console (e.g., "googleSiteVerification: 'your-code'")
};
export { config };
