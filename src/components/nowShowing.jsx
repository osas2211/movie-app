import { Card } from "./card2";
import PuffLoader from "react-spinners/PuffLoader";
import {css} from "@emotion/react";
import OwlCarousel from 'react-owl-carousel';
import batman from "../images/batman.jpg"
import spiderman from "../images/spiderman.jpg";
import shiangchi from "../images/shiangchi.jpg";
import enchanto from "../images/enchanto.jpeg";

export const NowShowing = ()=>{
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
                
                <OwlCarousel className='owl-theme'
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

                        <Card img={spiderman} animeClass="translate-right" title={"SpiderMan-No Way Home"} year={"2021"} rating={7.4} time={"128 min"} />
                        <Card img={batman} animeClass="translate-right" title={"Batman"} year={"2022"} rating={7.4} time={"128 min"} />
                        <Card img={shiangchi} animeClass="translate-right" title={"Shiang Chi-Legend of the Ten Rings"} year={"2021"} rating={7.4} time={"128 min"} />
                        <Card img={enchanto} animeClass="translate-right" title={"Enchanto"} year={"2021"} rating={7.4} time={"128 min"} />
                        <Card img={enchanto} animeClass="translate-right" title={"Enchanto"} year={"2021"} rating={7.4} time={"128 min"} />
                        <Card img={shiangchi} animeClass="translate-right" title={"Shiang Chi-Legend of the Ten Rings"} year={"2021"} rating={7.4} time={"128 min"} />
                        <Card img={batman} animeClass="translate-right" title={"Batman"} year={"2022"} rating={7.4} time={"128 min"} />
                        <Card img={spiderman} animeClass="translate-right" title={"SpiderMan-No Way Home"} year={"2021"} rating={7.4} time={"128 min"} />
                </OwlCarousel>
                </div>
            </div>
    )
}