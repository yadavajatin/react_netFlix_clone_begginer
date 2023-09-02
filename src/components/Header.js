import {useState, useEffect} from 'react'
import HeaderMovieDescription from "./HeaderMovieDescription"
import "../css/header.css"
import axios from "../../axios"
import requests from "../../requests"

const Header = () => {
    // const [movie, setMovie] = useState([])
    //
    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get(requests.fetchNetflixOriginals)
    //         setMovie(
    //             request.data.results[
    //                 Math.floor(Math.random() * request.data.results.length - 1)
    //                 ]
    //         )
    //         return request
    //     }
    //     fetchData()
    // }, []);
    const [movie, setMovie] = useState([])
    const [chunkDescription, setChunkDescription] = useState("")
    const [movieName, setMovieName] = useState("")

    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals)
        setMovie(
            request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
        )
        return request
    }

    const setDescription = (description) => {
        if(description?.length > 145){
            const slicedDescription = description.slice(0, 158) + "......"
            setChunkDescription(slicedDescription)
        }else{
            return chunkDescription
        }
    }



    useEffect(() => {
        fetchData()
    }, []);




    useEffect(() => {
        setDescription(movie?.overview)
        setMovieName(movie?.title)
        // console.log(movie)
    }, [movie]);

    const backgroundImage = ``
    return (
        <>
            <div className="header">
                <div className="header-background-image" style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
                }}></div>
                <div className="header-gradients">
                    <div className="background-gradient"></div>
                    <div className="background-gradient"></div>
                    <div className="background-gradient left"></div>
                    <div className="background-gradient bottom"></div>
                </div>
                <div className="background-color"></div>

                <div className="header-content-container">
                    <div className="header-content" style={{maxWidth: "1400px", margin: "0 auto"}}>
                        <HeaderMovieDescription
                            movieName={movieName}
                            chunkDescription={chunkDescription}

                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header