import React, { useState } from "react";
import "./Friends.css";

const Friends = () => {
    const [searchField, setSeachField] = useState("");
    const [searchResults, setSearchResults] = useState(null);

    function handleChange({target}) {
        setSeachField(prev => target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        /* TODO */

        setSeachField("");
    }

    const SearchResults = () => {
        return (searchResults.length > 0)
            ? searchResults.map(item => item.toString())
            : <p><em>Nothing found.</em></p>;
    }

    return (
        <div className="Friends">
            <h2>Friends</h2>
            <div className="Friends-search">
                <h3>Add A Friend</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="searchField">Search </label>
                    <input  type="text" 
                            placeholder="email or mobile" 
                            name="searchField"
                            id="searchField"
                            value={searchField}
                            onChange={handleChange}
                    />
                    <button type="submit">Search</button>
                </form>

                {searchResults !== null && <SearchResults />}
                
            </div>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
            </p>
        </div>
    );
}

export default Friends;