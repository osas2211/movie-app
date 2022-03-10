import wallpaper from "../images/wallpaper3.jpg";
import { imgHTTP } from "../apiKey";
import { useContext } from "react";
import { DetailsContext } from "../context.js/detailsContext";
import { Link } from "react-router-dom";


export const MovieDetails = ()=>{
    const [movieData, dispatch] = useContext(DetailsContext);
    console.log(movieData)

    return (
        <div className="details-page">
            <div className="movie-details">
                <img src={`${imgHTTP}/${movieData.backdrop_path}`} alt="" className="wallpaper" /> 
                <div className="home mx-5 my-0">
                    <Link to="/">&#8592;</Link>
                </div>
                <div className="container-fluid">
                    <div className="details m-3 m-md-5 px-3 row">
                        <p className="hover text-center text-muted d-block d-md-none text-uppercase">Hover or Tap the Movie Poster</p>
                        <div className="movie-poster col-12 col-4-md me-md-5 me-0">
                            <img src={`${imgHTTP}/${movieData.poster_path}`} alt="" className="w-100"/>
                            <div className="overview d-block d-md-none">
                                <h6 className="tagline text-uppercase">{movieData.tagline}</h6>
                                <h2 className="title display-6">{movieData.title ? movieData.title: movieData.name}</h2>
                                <div className="rating mb-3">
                                    <div className="d-inline-block me-4"><i className="far fa-star me-1"></i> <span>{movieData.vote_average}/ 10</span></div>
                                    <div className="d-inline-block me-4"><i className="fas fa-stopwatch me-1"></i> <span>{movieData.runtime} mins</span>
                                    </div>
                                    <div className="d-inline-block me-4"><i className="far fa-calendar-alt"></i> <span>{movieData.release_date}</span></div>
                                    {/* {movieData.genres.map(genre => <p className="d-inline-block px-1 genre">{genre.name}</p>)} */}
                            </div>
                            <p className="summary">
                            {movieData.overview}
                            </p>
                        </div>
                       
                        </div>
                        <div className="overview col-md-8 col-12 d-md-block d-none">
                            <h6 className="tagline text-uppercase">{movieData.tagline}</h6>
                            <h2 className="title display-3">{movieData.title ? movieData.title: movieData.name}</h2>
                            <div className="rating mb-3">
                                <div className="d-inline-block me-4"><i className="far fa-star me-1"></i> <span>{movieData.vote_average} / 10</span></div>
                                <div className="d-inline-block me-4"><i className="fas fa-stopwatch me-1"></i> <span>{movieData.runtime} mins</span>
                                </div>
                                <div className="d-inline-block me-4"><i className="far fa-calendar-alt"></i> <span>{movieData.release_date}</span></div>
                                {movieData.genres && movieData.genres.map(genre => <p className="d-inline-block px-1 genre">{genre.name}</p>)}
                            </div>
                            <p className="summary">
                            {movieData.overview}
                            </p>
                        </div>
                    </div>   
                </div>
                    
            </div>
        </div>
    )
}