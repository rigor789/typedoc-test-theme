import { Application } from "typedoc";
import { TestTheme } from "./theme";

export function load(app: Application) {
  app.renderer.defineTheme("test", TestTheme);
}
