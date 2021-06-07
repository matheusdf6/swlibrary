import React from 'react';
import CharacterItem from '../CharacterItem';
import Spinner from '../Spinner';

import "./styles.css";

const CharacterGrid = ({ characters, loading }) => {
    return ( 
        <section className="character-grid">
            { 
                loading  ? (<Spinner />)
                : characters ? characters.map( (ch, key) => (<CharacterItem key={key} character={ch} />)  ) 
                : (<p className="empty-message">Nenhum personagem encontrado</p>)

            }
        </section>
    );
}
 
export default CharacterGrid;