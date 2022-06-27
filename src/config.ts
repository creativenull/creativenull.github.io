export interface AppConfig {
  siteName: string;
  siteSubtitle: string;
  author: string;
  siteBannerConfig: {
    primaryTitleText: string;
    secondaryTitleText: string;
  };
}

export const config: AppConfig = {
  siteName: "CreativeNull",
  siteSubtitle: "Random engineering notes and blog",
  author: "Arnold Chand",
  siteBannerConfig: {
    primaryTitleText: "Creative",
    secondaryTitleText: "Null",
  },
};
