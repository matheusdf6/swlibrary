import React from 'react';

import "./styles.css";

const TopBar = ({ count, containsPrevious, containsNext, OnNextPage, OnPreviousPage }) => {
    return (
        <header className="top-bar">
            <p className="result-information">Mostrando {count} resultado(s)</p>
            <div className="action-butto">
                { containsPrevious ? (<button className="previous-page secondary-button" onClick={OnPreviousPage}>Anterior</button>) : ''}
                { containsNext ? (<button className="next-page secondary-button" onClick={OnNextPage}>Próximo</button>) : ''}
            </div>
        </header>
    );
}
 
export default TopBar;