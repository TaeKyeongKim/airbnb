import { createContext, useContext, useMemo, useState } from "react";

import { pages, LinkPath } from "./pages";

const { history, location } = window;

export const RouterContext = createContext<RouterContextType>({
  page: pages.index,
  setPage: () => {},
});

const pushHistory = (pathName: string): void => {
  history.pushState({}, pathName, `${location.origin}${pathName}`);
};

const Link = ({
  to,
  state = "", // parameter
  children,
  onClick,
}: LinkProps): JSX.Element => {
  const { setPage } = useContext(RouterContext);

  const href = to + state;
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    onClick?.();
    pushHistory(`/${to}${state}`);
    setPage(pages[to]);
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

const FIRST_INDEX = 0;

const getCurrentPath = () =>
  location.pathname.slice(1).split("/")[FIRST_INDEX] || "index";

const Router = ({ children }: RouterProps): React.ReactElement => {
  const currentPath = getCurrentPath();

  const [page, setPage] = useState(pages[currentPath] || pages.notFound);

  onpopstate = () => {
    const poppedPath = getCurrentPath();

    if (!pages[poppedPath]) {
      setPage(pages.notFound);
      return;
    }

    setPage(pages[poppedPath]);
  };

  return (
    <RouterContext.Provider
      value={useMemo(() => ({ page, setPage }), [page, setPage])}
    >
      {children}
    </RouterContext.Provider>
  );
};

interface LinkProps {
  to: LinkPath | string;
  children: React.ReactNode;
  state?: string;
  onClick?: () => void;
}

interface RouterContextType {
  page: React.ReactNode;
  setPage: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

interface RouterProps {
  children: React.ReactNode;
}

export { Router, Link };
