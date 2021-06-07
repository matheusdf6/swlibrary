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
    const [ loading, setLoading ] = useState(false);

    useEffect( () => {
        fecthCharacters();
    }, [])

    const fecthCharacters = async () => {
        setLoading(true);
        const response = await CharacterRepository.getAll();
        setLoading(false);
        if( response ) {
            updateCharacterList(response)
        }

    }
    const handleSearch = async term => {
        setLoading(true);
        const response = await CharacterRepository.search(term);
        setLoading(false);
        if( response ) {
            updateCharacterList(response)
        }    
    }

    const updateCharacterList = response => {
        setCharacters(response.results)
        setPreviousLink(response.previous)
        setNextLink(response.next)
        setResultsNumber(response.count)    
    }

    const paginate = url => async () => {
        if( url != null ) {
            setLoading(true);
            const response = await CharacterRepository.paginate(url);
            setLoading(false);
            if( response ) {
                updateCharacterList(response)
            }    
        }
    } 

    const handleNextPage = paginate(nextLink)
    const handlePreviousPage = paginate(previousLink)

    const handleClean = () => fecthCharacters(); 

    return ( 
        <main className="character-list">
            <AsideFilters onSearch={handleSearch} clean={handleClean} />
            <TopBar count={resultsNumber} 
                    containsPrevious={ previousLink != null } 
                    containsNext={ nextLink != null }
                    OnNextPage={handleNextPage} 
                    OnPreviousPage={handlePreviousPage} 
                    loading={loading}  />
            <CharacterGrid characters={characters} loading={loading} />
        </main>
    );
}
 
export default CharacterList;