import { ReactNode } from "react";
import { Suspense } from "react";
import SearchBar from "../components/searchBar";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      {/* <div>{new Date().toLocaleString()}</div> */}
      <Suspense
        fallback={<div>Loading ... </div>}
      >
        <SearchBar />
      </Suspense>
      {children}
    </div>
  );
}
