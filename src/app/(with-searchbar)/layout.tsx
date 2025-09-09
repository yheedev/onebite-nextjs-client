import SearchBar from "../components/searchBar";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
}
