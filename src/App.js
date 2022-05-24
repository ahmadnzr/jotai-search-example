import { Suspense } from "react";
import { atom, useAtom, Provider } from "jotai";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import "./styles.css";

export const keywordString = atom("");

export const searchResult = atom(async (get) => {
  const keyword = get(keywordString);
  const apiResponse = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await apiResponse.json();
  const result = users.find((user) => user.name === keyword);

  if (keyword) return result;
  return null;
});

const Loading = () => {
  const [text] = useAtom(keywordString);
  return (
    <p style={{ fontSize: "14px", margin: "5px 0 5px 0" }}>
      Searching for <span className="searching-text"> {text} </span>{" "}
    </p>
  );
};

export default function App() {
  return (
    <Provider>
      <div className="App">
        <SearchBar />
        <Suspense fallback={<Loading />}>
          <SearchResult />
        </Suspense>
      </div>
    </Provider>
  );
}
