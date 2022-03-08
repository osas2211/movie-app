import wallpaper from "../images/wallpaper2.jpg";
import { StyledHomeHero } from "../styledComponents/styled.homeHero";
import { Header } from "./header";
import { TopThree } from "./topThree";

export const HomeHero = ()=>{
    return <>
        <StyledHomeHero>
            <img src={wallpaper} alt="" className="hero-img" srcset="" />
                <div className="hero-details">
                    <Header></Header>
                </div>

                <div className="favourite-movie d-flex mx-4 mx-md-5 px-md-5 px-0">
                    <div className="favourite-details">
                        <div className="favourite-info">
                            <small className="text-uppercase">Developer's Choice</small>
                            <h2 className="favourite-title my-4">Black Widow</h2>
                            <div className="favourite-rating mb-4">
                                <div className="d-inline-block me-2"><i className="far fa-star"></i> <span>IMBD: 7.4</span></div>
                                <div className="d-inline-block mx-2"><i className="fas fa-stopwatch"></i> <span>DURATION: 1H 58MINS</span></div>
                                <div className="d-inline-block mx-2"><i className="far fa-calendar-alt"></i> <span>YEAR: 2019</span></div>
                            </div>
                            <p className="favourite-description my-4 mb-5">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, distinctio deleniti? Minus, incidunt. Ratione, maxime odit. Quod enim minima quibusdam aliquam, incidunt repudiandae eos fugiat, architecto perspiciatis accusamus quis inventore!
                            </p>
                        </div>
                        <a href="/movie-details" className="btn-custom-2 text-uppercase">View details</a>
                    </div>

                    <TopThree></TopThree>
                </div>
        </StyledHomeHero>
    </>
}