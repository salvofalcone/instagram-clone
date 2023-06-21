import "./index.css";

import { SearchIcon__Messages } from "../../icons";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      {" "}
      <SearchIcon__Messages />
      <input type="search" id="searchBar" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
