import SearchBar from "./searchBar";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
}
