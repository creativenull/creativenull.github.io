import { createSignal } from "solid-js";

const appBannerStyle = {
  width: "100%",
  height: "350px",
};

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
    <div
      style={appBannerStyle}
      class="flex flex-col justify-center items-center bg-dark-900 shadow-lg shadow-dark-50 dark:shadow-none"
    >
      <div
        onMouseEnter={toggleStyling}
        onMouseLeave={toggleStyling}
        class="font-righteous flex cursor-default text-5xl md:text-8xl"
      >
        <span
          class="transition-color duration-500"
          classList={{ "text-light-900": toggleColors(), "text-blue-600": !toggleColors() }}
        >
          Creative
        </span>
        <span
          class="transition-color duration-500"
          classList={{ "text-light-900": !toggleColors(), "text-blue-600": toggleColors() }}
        >
          Null
        </span>
      </div>
      <span class="text-xs text-light-50 md:text-lg">Random engineering notes, blog, etc</span>
    </div>
  );
}
