import { Card } from "./card2";
import PuffLoader from "react-spinners/PuffLoader";
import {css} from "@emotion/react";
import OwlCarousel from 'react-owl-carousel';
import { ApiKey, imgHTTP } from "../apiKey";
import { useFetchMulti } from "../custom hooks/customHooks";

export const Upcoming = ()=>{
    const override = css`
    display: inline-block;
    transform: translateY(10%);
    margin: 0 auto;
    `;

    const movies = useFetchMulti(`https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}&language=en-US&page=2`);

    return (
        <div className="upcoming pb-5 px-3 pt-5" id="upcoming">
            <div className="py-3 px-3">
                <h3 className="h2 text-capitalise mt-5">Upcoming Movies </h3>
            </div>

            <div className="container-fluid mt-2 pb-5">
                
                {
                    movies.length > 0 ? <OwlCarousel className='owl-theme'
                    navText = {[
                        "<span href='#' className=''>Prev</span>",
                        "<span href='#' className=''>Next</span>"
                    ]}
                    
                    dots ={false}
                    responsive = {
                        {
                            0:{
                                items: 1
                            },

                            600:{
                                items: 2
                            },

                            1000:{
                                items: 4
                            }
                        }
                    }

                    loop 
                    margin={30}
                    stagePadding={20} nav>
                    {
                            movies.map((data)=>{
                                return(
                                    <Card key={data.id} img={imgHTTP+data.poster_path} animeClass="translate-right" title={data.title} year={data.release_date} rating={data.vote_average} time={data.runtime} data={data} />
                                )
                            })
                        }
                </OwlCarousel> 
                :
                <></>
                }
                </div>
            </div>
    )
}