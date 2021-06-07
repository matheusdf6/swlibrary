import { useEffect, useState } from "react";
import AsideFilters from "../../components/AsideFilters";
import CharacterGrid from "../../components/CharacterGrid";
import TopBar from "../../components/TopBar";
import { CharacterRepository } from "../../repositories/character_repository"

import "./styles.css";

const CharacterList = () => {

    const [ characters, setCharacters ] = useState([]);
    const [ previousLink, setPreviousLink ] = useState(null);
    const [ nextLink, setNextLink ] = useState(null);
    const [ resultsNumber, setResultsNumber ] = useState(0);

    useEffect( () => {
        const fecthCharacters = async () => {
            const response = await CharacterRepository.getAll();
            if( response ) {
                updateCharacterList(response)
            }
        }
        fecthCharacters();
    }, [])

    const updateCharacterList = response => {
        setCharacters(response.results)
        setPreviousLink(response.previous)
        setNextLink(response.next)
        setResultsNumber(response.count)    
    }

    const paginate = url => async () => {
        console.log(url)
        if( url != null ) {
            const response = await CharacterRepository.paginate(url);
            if( response ) {
                updateCharacterList(response)
            }    
        }
    } 

    const handleNextPage = paginate(nextLink)
    const handlePreviousPage = paginate(previousLink)

    const handleSearch = () => {}

    return ( 
        <main className="character-list">
            <AsideFilters onSearch={handleSearch}/>
            <TopBar count={resultsNumber} 
                    containsPrevious={ previousLink != null } 
                    containsNext={ nextLink != null }
                    OnNextPage={handleNextPage} 
                    OnPreviousPage={handlePreviousPage} />
            <CharacterGrid characters={characters} />
        </main>
    );
}
 
export default CharacterList;