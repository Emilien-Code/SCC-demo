import React from "react";

import "../../assets/styles/atoms/search.scss";
import loupe from "../../assets/images/icons/search.png"

const Search = () => {
    return (
        <div className="scc-search-component">
            <img src={loupe} alt="loupe"/>
            <input type="text" name="search" id="search" placeholder="SCC Cloud"/>
        </div>
    )
}
export default Search