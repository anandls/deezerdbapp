import React from "react";
import PropTypes from "prop-types";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.scss";

const SearchInput = ({ placeholder }) => {
    const setSearch = (e) => {};

    return (
        <div className="search">
            <span className="search_span">
                <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
                className="search_input"
                type="text"
                onChange={setSearch}
                placeholder={placeholder}
            />
        </div>
    );
};

SearchInput.propTypes = {
    setSearch: PropTypes.func.isRequired,
    search: PropTypes.string
};

export default SearchInput;
