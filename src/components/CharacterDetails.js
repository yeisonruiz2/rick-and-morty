import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Character from "./Character";


const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => {
                setCharacter(data);
                setIsLoading(false);
            })
    }, [id])

    return (
        <>
            {isLoading ? <Loading /> : ''}
            {!isLoading && <Character
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image}
                status={character.status}
                species={character.species}
                location={character.location.name}
                gender={character.gender} />
            }
        </>
    );
}

export default CharacterDetails;