import React from 'react';

import "./styles.css";
import icon from "../../assets/darth-vader.png";

const AsideFilters = ({ onSearch }) => {
    return ( 
        <aside className="aside-filters">
            <div className="aside-header">
                <img src={icon} />
                <h1>Star Wars Library</h1>
            </div>
            <div className="search-container">
                <h3>Procure por nome:</h3>
                <input type="text" name="search" id="search" />
            </div>
            <div className="radio-container">
                <h3>Gênero</h3>
                <div className="radio-input">
                    <input type="radio" name="gender" value="male" id="gender-male" />
                    <label htmlFor="gender-male">Masculino</label>
                </div>
                <div className="radio-input">
                    <input type="radio" name="gender" value="female" id="gender-female" />
                    <label htmlFor="gender-female">Feminino</label>
                </div>
                <div className="radio-input">
                    <input type="radio" name="gender" value="unknown" id="gender-unknown" />
                    <label htmlFor="gender-unknown">Desconhecido</label>
                </div>
                <div className="radio-input">
                    <input type="radio" name="gender" value="na" id="gender-na" />
                    <label htmlFor="gender-na" >N/A</label>
                </div>
            </div>
            <button className="aside-button">Pesquisar</button>
        </aside>
    );
}
 
export default AsideFilters;