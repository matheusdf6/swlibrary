import React from 'react';

import "./styles.css";

const TopBar = ({ count, containsPrevious, containsNext, OnNextPage, OnPreviousPage }) => {
    return (
        <header className="top-bar">
            <p className="result-information">Mostrando {count} resultado(s)</p>
            <div className="action-buttons">
                { containsPrevious ? (<button className="previous-page secondary-button" onClick={OnPreviousPage}><span>Anterior</span></button>) : ''}
                { containsNext ? (<button className="next-page secondary-button" onClick={OnNextPage}><span>Próximo</span></button>) : ''}
            </div>
        </header>
    );
}
 
export default TopBar;