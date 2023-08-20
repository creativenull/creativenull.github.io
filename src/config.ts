export interface AppConfig {
  siteUrl: string;
  siteName: string;
  siteSubtitle: string;
  author: string;
  siteBannerConfig: {
    primaryTitleText: string;
    secondaryTitleText: string;
  };
}

export const config: AppConfig = {
  siteUrl: "https://creativenull.xyz",
  siteName: "CreativeNull",
  siteSubtitle: "Random engineering notes and blog",
  author: "Arnold Chand",
  siteBannerConfig: {
    primaryTitleText: "Creative",
    secondaryTitleText: "Null",
  },
};
