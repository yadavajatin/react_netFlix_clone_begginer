import logo_symbol from "../../assets/images/logo_symbol.png"
import "../css/movieCard.css"

const MovieCard = ({poster, title}) => {

    return (
        <>
            <div className="movie-card__wrapper">
                <img src={logo_symbol} alt="" className="movie-card__logo"/>
                <img
                    src={`https://image.tmdb.org/t/p/original${poster}`}
                    alt=""
                    className="movie-card__poster"/>
                {/*<span className="movie-card__title">{title}</span>*/}
            </div>
        </>
    )
}

export default MovieCard