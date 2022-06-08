import { createContext } from "react";

import { /* LocationContextType, */ RouterContextType } from "router";

const RouterContext = createContext<RouterContextType>({
  page: "index",
  setPage: () => {},
});

export default RouterContext;

// export const LocationContext = createContext<LocationContextType | null>(null);
