import { ReactNode } from "react";
import { Suspense } from "react";
import SearchBar from "../components/searchBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Suspense fallback={null}>
        <SearchBar />
      </Suspense>
      {children}
    </div>
  );
}
