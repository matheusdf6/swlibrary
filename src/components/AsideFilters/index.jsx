import React, { useState } from 'react';

import "./styles.css";
import vaderIcon from "../../assets/darth-vader.png";
import searchIcon from "../../assets/search.png";

const AsideFilters = ({ onSearch, clean }) => {

    const [ search, setSearch ] = useState('');

    const handleChange = () => {
        if( search != '' ) {
            setSearch('');
            clean();
        }
    }

    return ( 
        <aside className="aside-filters">
            <div className="aside-header">
                <img src={vaderIcon} />
                <h1>Star Wars Library</h1>
            </div>
            <input type="checkbox" onChange={handleChange} name="toogle-search" id="toogle-search" className="toogle-search" />
            <label htmlFor="toogle-search"><img src={searchIcon} /></label>
            <div className="search-container">
                <h3>Procure por nome:</h3>
                <input type="text" 
                       id="search" 
                       value={search}
                       onChange={ event => setSearch(event.target.value) }/>
                                   <button className="aside-button" 
                    onClick={ () => onSearch(search) } >Pesquisar</button>

            </div>
        </aside>
    );
}
 
export default AsideFilters;