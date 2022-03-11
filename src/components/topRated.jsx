import { useState } from "react"
import { Card } from "./card";
import { ApiKey } from "../apiKey";
import { useFetchMulti } from "../custom hooks/customHooks";
import { imgHTTP } from "../apiKey";


export const TopRated = ()=>{
    const [showMovies, setShowMovies] = useState(true);
    const [showTV, setShowTV] = useState(false);
    const movies = useFetchMulti(`https://api.themoviedb.org/3/trending/movie/day?api_key=${ApiKey}`);
    const tv = useFetchMulti(`https://api.themoviedb.org/3/trending/tv/day?api_key=${ApiKey}`);

    const displayMovies = (e)=>{
        e.preventDefault()
        if (showMovies === false){
            setShowTV(false)
            setShowMovies(true)
        }
    }

    const displayTV = (e)=> {
        e.preventDefault()
        if (showTV === false){
            setShowTV(true)
            setShowMovies(false)
        }
    }
    return (
        <div className="top-rated py-5 px-3" id="top-rated">
            <h3 className="display-6 text-capitalise text-center fw-bold mt-5">Trending Movies/TV</h3>
            <div className="top-rated-nav text-center my-5">
                <a href="" className={showMovies ? "btn-custom-4 ms-3 active-4" : "btn-custom-4 ms-3"} onClick={displayMovies}><span>Movies</span></a>

                <a href="" className={showTV ? "btn-custom-4 ms-3 active-4" : "btn-custom-4 ms-3"} onClick={displayTV}><span>Tv Shows</span></a>
            </div>

            {showMovies ? 
                <div className="container-fluid mt-5 pb-5">
                    <div className="row justify-content-center g-5">
                        {
                            movies.map((data)=>{
                                return(
                                    <Card key={data.id} img={imgHTTP+data.poster_path} animeClass="translate-right" title={data.title} year={data.release_date} rating={data.vote_average} time={data.runtime} data={data} />
                                )
                            })
                        }
                        
                    </div>
                </div> 
                
                : 

                <div className="container-fluid mt-5">
                    <div className="row justify-content-center g-5">
                    {
                            tv.map((data)=>{
                                return(
                                    <Card key={data.id} img={imgHTTP+data.poster_path} animeClass="translate-right" title={data.title} year={data.release_date} rating={data.vote_average} time={data.runtime} data={data} />
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}