

// Logo path shortcuts for easier configuration
export const LOGO_PATHS = {
  BENTO_BOX: `logos/bentoboxgaming-logo.png`,
  IRON_GRID: `logos/irongrid-logo.png`,
  POWERSURGE: `logos/powersurge-logo.png`,
  LIMIT_BREAK: `logos/limitbreak-logo.png`,
  DEFAULT: null
};

export const events = {
  "North Jersey": [
    {
      name: "Iron Grid",
      descriptor: "NJIT's Fighting Game Community",
      location: "NJIT, Newark",
      logo: LOGO_PATHS.IRON_GRID,
      socialMediaText: "X/Twitter",
      socialMediaLink: "https://x.com/IronGridfgc",
    },
  ],
  "Central Jersey": [
    {
      name: "PowerSurge",
      descriptor: "Central Jersey's Fighting Game Community",
      location: "Middlesex County",
      logo: LOGO_PATHS.POWERSURGE,
      socialMediaText: "X/Twitter",
      socialMediaLink: "https://x.com/PowerSurgeFGC",
    }
  ],
  "South Jersey": [
    {
      name: "Bento Box Gaming",
      descriptor: "Your local South Jersey gaming tournaments (Hops & Stocks, Hops & Hits Showdown, Super Hops & Hits)",
      location: "Maple Shade",
      logo: LOGO_PATHS.BENTO_BOX,
      socialMediaText: "X/Twitter",
      socialMediaLink: "https://x.com/BentoBGaming"
    },
    {
      name: "Limit Break",
      descriptor: "South Jersey tournaments, hosted in and by the South Jersey FGC.",
      location: "Glassboro",
      logo: LOGO_PATHS.LIMIT_BREAK,
      socialMediaText: "X/Twitter",
      socialMediaLink: "https://twitter.com/acfgc"
    }
  ]
};
