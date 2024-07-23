import { Home, Code2 } from "lucide-react";
import Index from "./pages/Index.jsx";
import SoulOfErlang from "./pages/SoulOfErlang.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Soul of Erlang",
    to: "/soul-of-erlang",
    icon: <Code2 className="h-4 w-4" />,
    page: <SoulOfErlang />,
  },
];