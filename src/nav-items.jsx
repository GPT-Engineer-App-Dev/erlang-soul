import { Code2 } from "lucide-react";
import SoulOfErlang from "./pages/SoulOfErlang.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Soul of Erlang",
    to: "/",
    icon: <Code2 className="h-4 w-4" />,
    page: <SoulOfErlang />,
  },
];