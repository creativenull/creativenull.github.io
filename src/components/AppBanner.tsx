import { createSignal } from "solid-js";
import { config } from "@config";

export default function AppBanner() {
  const [toggleColors, setToggleColors] = createSignal(true);

  function toggleStyling() {
    if (toggleColors()) {
      setToggleColors(false);
    } else {
      setToggleColors(true);
    }
  }

  return (
    <div class="frontpage-banner flex flex-col justify-center items-center bg-dark-900 shadow-lg shadow-dark-50 dark:shadow-none">
      <div
        onMouseEnter={toggleStyling}
        onMouseLeave={toggleStyling}
        class="font-righteous flex cursor-default text-5xl md:text-8xl"
      >
        <span
          class="transition-color duration-500"
          classList={{ "text-light-900": toggleColors(), "text-blue-600": !toggleColors() }}
        >
          {config.siteBannerConfig.primaryTitleText}
        </span>
        <span
          class="transition-color duration-500"
          classList={{ "text-light-900": !toggleColors(), "text-blue-600": toggleColors() }}
        >
          {config.siteBannerConfig.secondaryTitleText}
        </span>
      </div>
      <span class="text-xs text-light-50 md:text-lg">{config.siteSubtitle}</span>
    </div>
  );
}
