import { createPortal } from "react-dom";
import { StyledTopThree } from "../styledComponents/styled.topThree";
import { ApiKey } from "../apiKey";
import { useState,useEffect, useContext } from "react";
import axios from "axios";
import { DetailsContext } from "../context.js/detailsContext";
import { Link } from "react-router-dom";
import { actions } from "../context.js/detailsContext";
import { ViewDetails } from "./viewDetails";

export const TopThree = ()=>{
    const [state, dispatch] = useContext(DetailsContext)
    const [key, setKey] = useState(0)
    const [movieData, setMovieData] = useState([])
    const movieID = [634649, 94605];
    const imgHTTP = "https://image.tmdb.org/t/p/original/"

    const getPICK = async ()=>{
        const data = await axios(`https://api.themoviedb.org/3/movie/${movieID[0]}?api_key=${ApiKey}&language=en-US`);
        const data2 = await axios(`https://api.themoviedb.org/3/tv/${movieID[1]}?api_key=${ApiKey}&language=en-US`);
        const response = await data.data
        const response2 = await data2.data
        setMovieData([response, response2])
    }

    useEffect(()=>{
        return getPICK();
    }, [])


    return createPortal(
        <>  
            <StyledTopThree>
                {
                    movieData.map((data, num)=>{
                        
                        return (
                            <div className="top-3-movie mb-4" key={data.id}>
                                <div className="top-3-movie-img">
                                    <img src={`${imgHTTP}/${data.poster_path}`} alt="" srcset="" />
                                </div>
                                <div className="top-3-movie-title text-uppercase">
                                    <img src={`${imgHTTP}/${data.backdrop_path}`} alt="" srcset="" />
                                    <p>{data.title ? data.title: data.name}</p>
                                    <div className="favourite-rating mb-2">
                                            <div className="d-inline-block me-2"><i className="far fa-star"></i> <span>{data.vote_average}</span></div>
                                            <div className="d-inline-block mx-2"><i className="fas fa-stopwatch"></i> <span>{data.runtime} mins</span></div>
                                            <div className="d-inline-block mx-2"><i className="far fa-calendar-alt"></i> <span>{data.release_date}</span></div>
                                        </div>
                                    <ViewDetails id={data.id} data={data}></ViewDetails>   
                                </div>
                            </div>
                        )
                    })
                }

                </StyledTopThree>
        </>, document.querySelector("body")
    )
}