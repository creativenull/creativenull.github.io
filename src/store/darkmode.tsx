import { createEffect, createSignal, createContext, useContext, JSX } from "solid-js";

type DarkModeContextState = [() => boolean, { toggleDarkMode: () => void }];

const storageKey = "darkmode";
if (localStorage.getItem(storageKey) === null) {
  localStorage.setItem(storageKey, "");
}

const [isDark, setIsDark] = createSignal(localStorage.getItem(storageKey) === "dark");

const initialState: DarkModeContextState = [
  isDark,
  {
    toggleDarkMode(): void {
      if (isDark()) {
        setIsDark(false);
      } else {
        setIsDark(true);
      }
    },
  },
];

createEffect(() => {
  if (isDark()) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkmode", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkmode", "");
  }
});

const DarkModeContext = createContext(initialState);

export const DarkModeProvider = (props: { children: JSX.Element }) => {
  return <DarkModeContext.Provider value={initialState}>{props.children}</DarkModeContext.Provider>;
};

export const useDarkMode = () => useContext(DarkModeContext);
