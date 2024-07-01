import React, { useState } from "react";

import Button from "@/components/common/Button/Button";
import { CiSearch } from "react-icons/ci";
import PropTypes from "prop-types";
import styles from "./SearchInput.module.scss";
import useDebounce from "@/hooks/useDebounce";

const SearchInput = ({ onSearch }) => {
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

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
