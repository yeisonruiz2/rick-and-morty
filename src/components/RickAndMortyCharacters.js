import { useEffect, useState } from "react"
import Character from "./Character";
import Paginator from "./Paginator";
import image from './../assets/images/rick-sanchez.gif';

const RickAndMortyCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setInfo(data.info);
                setIsLoading(false);
            })
    }, [page]);

    return (
        <div className="container">
            <div className="m-5 text-center">
                <h1 className="fs-1">Rick and Morty</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-2">
                {isLoading ? <div className="d-flex justify-content-center text-center"><img id="img-loading" src={image} alt="loading" /></div> : ''}
                {!isLoading && characters.map(character => (
                    <Character
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        image={character.image}
                        status={character.status}
                        species={character.species}
                        location={character.location.name}
                        gender={character.gender} />
                ))}
            </div>
            <Paginator page={page} info={info} setPage={setPage} />
        </div>
    )
}

export default RickAndMortyCharacters;