import { JSX } from "solid-js";

export interface AppLinkProps {
  href: string;
  children: JSX.Element;
}

export default function AppLink(props: AppLinkProps) {
  return (
    <a
      href={props.href}
      class="transition-color duration-300 text-blue-700 font-bold hover:(underline text-green-400) dark:text-blue-400 dark:hover:(underline text-green-500)"
    >
      {props.children}
    </a>
  );
}
