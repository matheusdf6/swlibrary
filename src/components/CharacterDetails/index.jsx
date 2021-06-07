import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import "./styles.css";

const CharacterDetails = ({ character  }) => {

    const history = useHistory();

    const getFormattedDate = date => {
        const splitted = date.split('-');
        return `${splitted[2]}/${splitted[1]}/${splitted[0]}`
    }

    const translateGender = gender => {
        switch(gender) {
            case 'male': return 'Masculino';
            case 'female': return 'Feminino';
            default: return gender;
        }
    }

    const translateColor = color => {
        switch(color) {
            case 'blue': return 'Azul';
            case 'blue-gray': return 'Azul Acizentado';
            case 'red': return 'Vermelho';
            case 'yellow': return 'Amarelo';
            case 'brown': return 'Castanho';
            case 'black': return 'Preto';
            case 'white': return 'Branco';
            case 'green, yellow': return 'Verde e Amarelo';
            case 'gold': return 'Dourado';
            case 'orange': return 'Laranja';
            case 'red, blue': return 'Vermelho e Azul';
            case 'hazel': return 'Avelã';
            case 'pink': return 'Rosa';
            case 'unknown': return 'Desconhecido';
            default: return color;
        }
    }


    return ( 
        <div className="character-info-details">
            <header className="character-info-header">
                <button className="secondary-button" onClick={ () => history.goBack() }><span>Voltar</span></button>
                <h1>{character.name}</h1>
            </header>
            <div className="character-info-column">
                <h3>Informações</h3>
                <div className="information-table">
                    <div className="information-table-row">
                        <p className="row-header">Ano de Nascimento</p>
                        <p className="row-data">{character.birth_year}</p>
                    </div>
                    <div className="information-table-row">
                        <p className="row-header">Gênero</p>
                        <p className="row-data">{translateGender(character.gender)}</p>
                    </div>
                    <div className="information-table-row">
                        <p className="row-header">Cor dos Olhos</p>
                        <p className="row-data">{translateColor(character.eye_color)}</p>
                    </div>
                </div>
            </div> 
            <div className="character-info-column">
                <h3>Filmes</h3>
                <ul className="movie-list">
                    { 
                        character.movies.map( (movie, key) => {
                            return (<li key={key} className="movie-item">
                                <p>{movie.title}</p>
                                <p><span>Lançamento: </span>{getFormattedDate(movie.release_date)}</p>
                            </li>)
                        })
                    }
                </ul>
            </div>
        </div>
    );
}
 
export default CharacterDetails;