import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { createRoutes } from "./routes";

export function createRouter({ strategy, initialPathname, onSignIn }) {
  const routes = createRoutes(onSignIn)

  if (strategy === 'browser') {
    return createBrowserRouter(routes);
  }

  const initialEntries = [initialPathname || "/"];
  return createMemoryRouter(routes, { initialEntries: initialEntries });
}