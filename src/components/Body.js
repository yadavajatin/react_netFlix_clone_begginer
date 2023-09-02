import Header from './Header'
import Navbar from './Navbar'
import CategorisedMovieList from './CategorisedMovieList'
import MovieCardRow from './MovieCardRow'
import requests from "../../requests"

const Body = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <div className="main-body">
                <MovieCardRow
                    title="Netflix Originals"
                    fetchUrl={requests.fetchNetflixOriginals}
                />
                <MovieCardRow
                    title="Top Rated"
                    fetchUrl={requests.fetchTopRated}
                />
                <MovieCardRow
                    title="Action Movies"
                    fetchUrl={requests.fetchActionMovies}
                />
                <MovieCardRow
                    title="Comedy Movies"
                    fetchUrl={requests.fetchComedyMovies}
                />
                <MovieCardRow
                    title="Horror Movies"
                    fetchUrl={requests.fetchHorrorMovies}
                />
                <MovieCardRow
                    title="Romance Movies"
                    fetchUrl={requests.fetchRomanceMovies}
                />
                <MovieCardRow
                    title="Documantries"
                    fetchUrl={requests.fetchDocumentaries}
                />
            </div>
        </>
    )
}

export default Body