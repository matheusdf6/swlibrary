import React, { useEffect, useState } from 'react';
import CharacterDetails from '../../components/CharacterDetails';
import Spinner from '../../components/Spinner';
import { CharacterRepository } from '../../repositories/character_repository';
import { useQuery } from '../../utils/useQuery';

import "./styles.css";

const CharacterInfoPage = () => {
    const query = useQuery();
    const url = query.get('source');
    const [ character, setCharacter ] = useState(null)

    useEffect(() => {
        const getCharacterInfo = async () => {
            const character = await CharacterRepository.find(url);
            if( character ) {
                setCharacter(character)
            }
        }
        getCharacterInfo();
    }, [])


    return ( 
        <main className="character-info" style={{ height: '100%' }}>
            {
                character
                ? (<CharacterDetails character={character} />)
                : (<Spinner />)
            }
        </main>
    );
}
 
export default CharacterInfoPage;