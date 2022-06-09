import { useDarkMode } from "../store/darkmode";

export default function AppDarkMode() {
  const [isDark, { toggleDarkMode }] = useDarkMode();

  return (
    <button onClick={toggleDarkMode} class="p-2 text-light-50 text-xl hover:text-sky-500">
      <i class="fa-solid" classList={{ "fa-sun": isDark(), "fa-moon": !isDark() }}></i>
    </button>
  );
}
