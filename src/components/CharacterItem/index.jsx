import { Link } from "react-router-dom"

import "./styles.css"

const CharacterItem = ({ character }) => {    
    return ( 
        <article className="character-item">
            <p>{ character.name }</p>
            <Link to={ `/character/?source=${character.url}`} >Ver mais</Link>
        </article>
    );
}
 
export default CharacterItem;