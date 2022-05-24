import { useAtom, useSetAtom } from "jotai";
import { keywordString } from "./App";

const SearchBar = () => {
  // const [, setKeyword] = useAtom(keywordString);
  const setKeyword = useSetAtom(keywordString);
  const handleChange = (e) => {
    const text = e.target.value;
    setKeyword(text.trim());
  };
  return (
    <input type="text" placeholder="fullname..." onChange={handleChange} />
  );
};

export default SearchBar;
