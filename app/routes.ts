import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";
import Cours from "./routes/Cours";
import About from "./routes/About";
import ReactCompiler from "./routes/ReactCompiler";

export default [
  index("routes/home.tsx"),
  route("about", "routes/About.tsx"),
  ...prefix("UpWeb", [
    route("decouvrir", "routes/Cours.tsx", [
      index("routes/Introduction.tsx"),
      route("react-compiler", "routes/ReactCompiler.tsx"),
      route("react-router-framework", "routes/RouterV7.tsx"),
      route("architecture-router-framework", "routes/ArchitectureRouterV7.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
