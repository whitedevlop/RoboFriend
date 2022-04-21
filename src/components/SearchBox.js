import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div className="pa2">
                <input className="pa3 ba b--green bg-lightest-blue"
                 type="search"
                  placeholder="Search a Robot"
                  onChange={searchChange}
                  >
                 </input>
        </div>
    )
}

export default SearchBox;