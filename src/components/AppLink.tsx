import { JSX } from "solid-js";

export interface AppLinkProps {
  href: string;
  children: JSX.Element;
}

export default function AppLink(props: AppLinkProps) {
  return (
    <a
      href={props.href}
      class="text-blue-700 font-bold hover:underline dark:text-blue-500"
    >
      {props.children}
    </a>
  );
}
