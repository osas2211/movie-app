import { useState } from "react"
import { Card } from "./card";
import batman from "../images/batman.jpg"
import spiderman from "../images/spiderman.jpg";
import shiangchi from "../images/shiangchi.jpg";
import enchanto from "../images/enchanto.jpeg";
import wanda from "../images/wandavision.jpg";
import falcon from "../images/falcon.jpg";
import peacemaker from "../images/peacemaker.jpg";
import whatif from "../images/whatif.jpg";


export const TopRated = ()=>{
    const [showMovies, setShowMovies] = useState(true);
    const [showTV, setShowTV] = useState(false);

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
            <h3 className="display-6 text-capitalise text-center fw-bold mt-5">Top Rated Movies</h3>
            <div className="top-rated-nav text-center my-5">
                <a href="" className={showMovies ? "btn-custom-4 ms-3 active-4" : "btn-custom-4 ms-3"} onClick={displayMovies}><span>Movies</span></a>

                <a href="" className={showTV ? "btn-custom-4 ms-3 active-4" : "btn-custom-4 ms-3"} onClick={displayTV}><span>Tv Shows</span></a>
            </div>

            {showMovies ? 
                <div className="container-fluid mt-5 pb-5">
                    <div className="row justify-content-center g-5">
                        <Card img={batman} animeClass="translate-right" title={"Batman"} year={"2022"} rating={7.4} time={"128 min"} />
                        <Card img={spiderman} animeClass="translate-right" title={"SpiderMan-No Way Home"} year={"2021"} rating={7.4} time={"128 min"} />
                        <Card img={shiangchi} animeClass="translate-right" title={"Shiang Chi-Legend of the Ten Rings"} year={"2021"} rating={7.4} time={"128 min"} />
                        <Card img={enchanto} animeClass="translate-right" title={"Enchanto"} year={"2021"} rating={7.4} time={"128 min"} />
                        <Card img={enchanto} animeClass="translate-right" title={"Enchanto"} year={"2021"} rating={7.4} time={"128 min"} />
                        <Card img={shiangchi} animeClass="translate-right" title={"Shiang Chi-Legend of the Ten Rings"} year={"2021"} rating={7.4} time={"128 min"} />
                        <Card img={batman} animeClass="translate-right" title={"Batman"} year={"2022"} rating={7.4} time={"128 min"} />
                        <Card img={spiderman} animeClass="translate-right" title={"SpiderMan-No Way Home"} year={"2021"} rating={7.4} time={"128 min"} />
                    </div>
                </div> 
                
                : 

                <div className="container-fluid mt-5">
                    <div className="row justify-content-center g-5">
                        <Card img={wanda} animeClass="translate-left" title={"WandaVision"} year={"2021"} rating={7.4} time={"128 min"} />
                        <Card img={peacemaker} animeClass="translate-left" title={"The Peacemaker"} year={"2021"} rating={7.4} time={"128 min"} />
                        <Card img={falcon} animeClass="translate-left" title={"The Falcon and the Winter Soldier"} year={"2022"} rating={7.4} time={"128 min"} />
                        <Card img={whatif} animeClass="translate-left" title={"What If?"} year={"2021"} rating={7.4} time={"128 min"} />
                        <Card img={whatif} animeClass="translate-left" title={"What If?"} year={"2021"} rating={7.4} time={"128 min"} />
                        <Card img={wanda} animeClass="translate-left" title={"WandaVision"} year={"2021"} rating={7.4} time={"128 min"} />
                        <Card img={peacemaker} animeClass="translate-left" title={"The Peacemaker"} year={"2021"} rating={7.4} time={"128 min"} />
                        <Card img={falcon} animeClass="translate-left" title={"The Falcon and the Winter Soldier"} year={"2022"} rating={7.4} time={"128 min"} />
                    </div>
                </div>
            }
        </div>
    )
}