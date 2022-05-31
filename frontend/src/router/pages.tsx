import Header from "components/Header/Header";
import SearchResult from "components/Main/SearchResult/SearchResult";
import NotFound from "components/NotFound/NotFound";

export const pages: PagesType = {
  index: <Header />,
  searchResult: <SearchResult />,
  notFound: <NotFound />,
};

export type LinkPath = "index" | "searchResult";

export interface PagesType {
  [key: string]: React.ReactNode;
}
