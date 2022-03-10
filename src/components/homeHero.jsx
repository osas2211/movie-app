import { StyledHomeHero } from "../styledComponents/styled.homeHero";
import { Header } from "./header";
import { TopThree } from "./topThree";
import { ApiKey } from "../apiKey";
import { useContext } from "react";
import { DetailsContext } from "../context.js/detailsContext";
import { actions } from "../context.js/detailsContext";
import { Link } from "react-router-dom";
import { useFetch } from "../custom hooks/customHooks";

export const HomeHero = ()=>{
    const [state, dispatch] = useContext(DetailsContext)
    const movieID = 634649;
    const imgHTTP = "https://image.tmdb.org/t/p/original/"
    const movieData = useFetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${ApiKey}&language=en-US`);

    const addDetails = ()=>{
        dispatch({type: actions.FETCH, payload: movieData});
    }

    return <>
        <StyledHomeHero>
            <img src={`${imgHTTP}/${movieData.backdrop_path}`} alt="" className="hero-img" srcset="" />
                <div className="hero-details">
                    <Header></Header>
                </div>

                <div className="favourite-movie d-flex mx-4 mx-md-5 px-md-5 px-0">
                    <div className="favourite-details">
                        <div className="favourite-info">
                            <small className="text-uppercase">Developer's Choice</small>
                            <h2 className="favourite-title mt-4 mb-1">{movieData.title}</h2>
                            <p className="tagline text-uppercase mt-0 pt-0">{movieData.tagline}</p>
                            <div className="favourite-rating mb-4">
                                <div className="d-inline-block me-2"><i className="far fa-star"></i> <span>IMBD: {movieData.vote_average}</span></div>
                                <div className="d-inline-block mx-2"><i className="fas fa-stopwatch"></i> <span>DURATION: {movieData.runtime} mins</span></div>
                                <div className="d-inline-block mx-2"><i className="far fa-calendar-alt"></i> <span>YEAR: {movieData.release_date}</span></div>
                            </div>
                            
                            <p className="favourite-description my-4 mb-5">
                                {movieData.overview}
                            </p>
                        </div>
                        <Link to="/movie-details/0" className="btn-custom-2 text-uppercase" onClick={addDetails}>View details</Link>
                    </div>

                    <TopThree></TopThree>
                </div>
        </StyledHomeHero>
    </>
}