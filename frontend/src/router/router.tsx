import { useMemo, useState } from "react";

import { RouterContext, LocationContext } from "./Contexts";
import { pages } from "./pages";

const { location } = window;
const queryData: { [key: string]: string } = {};
location.search
  .slice(1)
  .split("&")
  .map((item) => item.split("="))
  .forEach(([key, val]) => {
    queryData[key] = val;
  });

const FIRST_INDEX = 0;
const FIRST_SLASH_COUNT = 1;

const getCurrentPath = () => {
  return (
    location.pathname.slice(FIRST_SLASH_COUNT).split("/")[FIRST_INDEX] ||
    "index"
  );
};

const Router = ({ children }: RouterProps): React.ReactElement => {
  const currentPath = getCurrentPath();

  const [page, setPage] = useState(pages[currentPath] ? "index" : "notFound");

  onpopstate = (/* e: PopStateEvent */) => {
    const poppedPath = getCurrentPath();
    // TODO: e.state 이용하여 뒤로가기 시 검색결과

    if (!pages[poppedPath]) {
      setPage("notFound");
      return;
    }

    setPage(poppedPath);
  };

  return (
    <RouterContext.Provider
      value={useMemo(() => ({ page, setPage }), [page, setPage])}
    >
      <LocationContext.Provider
        value={useMemo(
          () => ({
            queryData,
            pathname: location.pathname,
          }),
          [location.pathname, location.search]
        )}
      >
        {children}
      </LocationContext.Provider>
    </RouterContext.Provider>
  );
};
interface RouterProps {
  children: React.ReactNode;
}

export default Router;
