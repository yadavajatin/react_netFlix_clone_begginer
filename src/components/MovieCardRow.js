import {useState, useEffect} from 'react'
import MovieCard from './MovieCard'
import "../../src/css/movieCardRow.css"
import axios from "../../axios"

const MovieCardRow = ({title, fetchUrl}) => {

    const [moviesArray, setMoviesArray] = useState([])

    async function fetchData() {
        try{
        const request = await axios.get(fetchUrl)
        const data = await request?.data?.results
        setMoviesArray(data)
            console.log(data.json())
        }catch(e){
            console.error("Error fetching data:", e);
        }
    }

    useEffect(() => {
        fetchData()
    }, [fetchUrl]);

    useEffect(() => {
        if(moviesArray?.length > 0){
            console.log(moviesArray)
        }

    }, [moviesArray]);


    return(
        <>
            <div className="movie-card-list__wrapper">
                <span className="movie-card-list__title"> {title} </span>
                <div className="movie-list">
                    {
                        moviesArray.map((movie) => {
                            return(
                                <MovieCard
                                    poster={movie?.poster_path}
                                    title={movie.title}
                                />
                                )

                        })
                    }

                </div>
            </div>
        </>
    )
}

export default MovieCardRow