export interface AppConfig {
  siteUrl: string;
  siteName: string;
  siteSubtitle: string;
  author: string;
  siteBannerConfig: {
    primaryTitleText: string;
    secondaryTitleText: string;
  };
  dateTime: {
    locale: string;
    options: {
      timeZone: string;
      dateStyle: string;
      timeStyle: string;
      hour12: boolean;
    };
  };
}

export const config: AppConfig = {
  siteUrl: import.meta.env.DEV ? "http://127.0.0.1:4321" : "https://creativenull.dev",
  siteName: "CreativeNull",
  siteSubtitle: "Random engineering notes and blog",
  author: "Arnold Chand",
  siteBannerConfig: {
    primaryTitleText: "Creative",
    secondaryTitleText: "Null",
  },
  dateTime: {
    locale: "en-TT",
    options: {
      timeZone: "America/Port_of_Spain",
      dateStyle: "short",
      timeStyle: "short",
      hour12: false,
    },
  },
};
