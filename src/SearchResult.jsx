import { useAtom } from "jotai";
import { keywordString, searchResult } from "./App";

const SearchResult = () => {
  const [result] = useAtom(searchResult);
  const [keyword] = useAtom(keywordString);

  if (!keyword) {
    return <p>Search Something !</p>;
  }

  if (!result) {
    return <p>Not Found</p>;
  }

  const { id, name, email } = result;

  return (
    <div className="search-result">
      SearchResult :
      <pre>
        id: {`${id}`} <br />
        name: {`${name}`} <br />
        email: {`${email}`} <br />
      </pre>
    </div>
  );
};

export default SearchResult;
