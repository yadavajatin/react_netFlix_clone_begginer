import {useEffect, useState} from "react"
import "../../src/css/headerMovieDescription.css"
import ahsoka from "../../assets/images/ahsoka.png"
import axios from "../../axios"
import requests from "../../requests"


const HeaderMovieDescription = ({movieName, chunkDescription}) => {
    return (
        <>
            <div className="header-movie-description__wrapper">
                <span className="header-movie-description__title"> {movieName} </span>
                {/*<img src={ahsoka} alt="" className="header-movie-description__title"/>*/}
                <div className="header-movie-description__buttons">
                    <button className="header-movie-description__play-button button">
                        <span><i className="fa-solid fa-play"></i></span> Play</button>
                    <button
                        className="header-movie-description__info-button button"
                    > <span><i className="fa-solid fa-circle-info"></i></span> More Info
                    </button>
                </div>
                <span className="header-movie-description__description">
                    {chunkDescription}
                </span>

            </div>
        </>
    )
}

export default HeaderMovieDescription