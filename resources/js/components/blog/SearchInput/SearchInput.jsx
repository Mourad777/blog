import React from 'react'
import './SearchInput.css'
import { Icon } from 'semantic-ui-react'
const SearchInput = () => (
    <div className="search-box">
        <button className="btn-search"><Icon name="search" /></button>
        <input type="text" className="input-search" placeholder="Type to Search..."></input>
    </div>
)

export default SearchInput;