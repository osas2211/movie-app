import { createPortal } from "react-dom";
import { StyledTopThree } from "../styledComponents/styled.topThree";
import spiderman from "../images/spiderman.jpg";
import shiangchi from "../images/shiangchi.jpg";

export const TopThree = ()=>{

    return createPortal(
        <>  
            <StyledTopThree>
                <div className="top-3-movie mb-4">
                    <div className="top-3-movie-img">
                        <img src={spiderman} alt="" srcset="" />
                    </div>
                    <div className="top-3-movie-title text-uppercase">
                        <img src={spiderman} alt="" srcset="" />
                        <p>SpiderMan-No Way Home</p>
                        <div className="favourite-rating mb-2">
                                <div className="d-inline-block me-2"><i class="far fa-star"></i> <span>7.4</span></div>
                                <div className="d-inline-block mx-2"><i class="fas fa-stopwatch"></i> <span>1H 58MINS</span></div>
                                <div className="d-inline-block mx-2"><i class="far fa-calendar-alt"></i> <span>2019</span></div>
                            </div>
                        <a href="#" className="btn-custom-3 mt-2">View Details</a>    
                    </div>
                </div>

                <div className="top-3-movie mb-3">
                    <div className="top-3-movie-img">
                        <img src={shiangchi} alt="" srcset="" />
                    </div>
                    <div className="top-3-movie-title text-uppercase">
                        <img src={shiangchi} alt="" srcset="" />
                        <p> Shiang Chi-Legend of the Ten Rings</p>
                        <div className="favourite-rating mb-2">
                                <div className="d-inline-block me-2"><i class="far fa-star"></i> <span>7.4</span></div>
                                <div className="d-inline-block mx-2"><i class="fas fa-stopwatch"></i> <span>1H 58MINS</span></div>
                                <div className="d-inline-block mx-2"><i class="far fa-calendar-alt"></i> <span>2019</span></div>
                            </div>
                        <a href="#" className="btn-custom-3 mt-2">View Details</a>                       
                    </div>
                </div>
                </StyledTopThree>
        </>, document.querySelector("body")
    )
}