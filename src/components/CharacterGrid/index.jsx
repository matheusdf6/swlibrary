import React from 'react';
import CharacterItem from '../CharacterItem';

import "./styles.css";

const CharacterGrid = ({ characters }) => {
    return ( 
        <section className="character-grid">
            { 
                characters ? characters.map( (ch, key) => (<CharacterItem key={key} character={ch} />)  ) : ''
            }
        </section>
    );
}
 
export default CharacterGrid;