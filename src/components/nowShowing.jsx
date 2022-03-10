import { Card } from "./card2";
import PuffLoader from "react-spinners/PuffLoader";
import {css} from "@emotion/react";
import OwlCarousel from 'react-owl-carousel';
import { useFetchMulti } from "../custom hooks/customHooks";
import { ApiKey, imgHTTP } from "../apiKey";
import { useEffect, useState } from "react";

export const NowShowing = ()=>{
    const movies = useFetchMulti(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US&page=1`);
    
    const override = css`
    display: inline-block;
    transform: translateY(10%);
    margin: 0 0.5rem;
    `;

    return (
        <div className="now-showing pb-5 px-3 pt-5" id="nowshowing">
            <div className="py-3 px-3">
                <h3 className="h2 text-capitalise mt-5">Now Showing<PuffLoader css={override} size={25} color="#ff0022"/> </h3>
            </div>

            <div className="container-fluid mt-2 pb-5">
                
                {
                    movies.length && <OwlCarousel className='owl-theme'
                    navText = {[
                        "<span href='#' className=''>Prev</span>",
                        "<span href='#' className=''>Next</span>"
                    ]}
                    mouseDrag ={true}
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
                          movies.length !==0 && movies.map((data)=>{
                                return(
                                    <Card key={data.id} img={imgHTTP+data.poster_path} animeClass="translate-right" title={data.title} year={data.release_date} rating={data.vote_average} time={data.runtime} data={data} />
                                )
                            })
                        }
                        
                </OwlCarousel>
                }
                </div>
            </div>
    )
}