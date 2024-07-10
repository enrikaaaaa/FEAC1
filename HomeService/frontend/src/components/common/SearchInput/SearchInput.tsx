import React, { useState } from "react";

import Button from "../../../components/common/Button/Button";
import { CiSearch } from "react-icons/ci";
import styles from "./SearchInput.module.scss";
import useDebounce from "../../../hooks/useDebounce";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch]);

  return (
    <div className={styles.search_container}>
      <input
        className={styles.searchInput}
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button rounded>
        <div>
          <CiSearch fontSize={24} />
        </div>
      </Button>
    </div>
  );
};

export default SearchInput;
