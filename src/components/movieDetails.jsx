import wallpaper from "../images/wallpaper3.jpg";
import batman from "../images/batman2.jpg";


export const MovieDetails = ()=>{

    return (
        <div className="details-page">
            <div className="movie-details">
                <img src={wallpaper} alt="" className="wallpaper" /> 
                <div className="home mx-5 my-0">
                    <a href="/">&#8592;</a>
                </div>
                <div className="container-fluid">
                    <div className="details m-3 m-md-5 px-3 row">
                        <p className="hover text-center text-muted d-block d-md-none text-uppercase">Hover or Tap the Movie Poster</p>
                        <div className="movie-poster col-12 col-4-md me-md-5 me-0">
                            <img src={batman} alt="" className="w-100"/>
                            <div className="overview d-block d-md-none">
                                <h6 className="tagline text-uppercase">Unmask the truth</h6>
                                <h2 className="title display-6">The Batman</h2>
                                <div className="rating mb-3">
                                    <div className="d-inline-block me-4"><i className="far fa-star me-1"></i> <span>8.2 / 10</span></div>
                                    <div className="d-inline-block me-4"><i className="fas fa-stopwatch me-1"></i> <span>176 mins</span>
                                    </div>
                                    <div className="d-inline-block me-4"><i className="far fa-calendar-alt"></i> <span>2022-03-01</span></div>
                                    <p className="d-inline-block genre">Action, Crime</p>
                            </div>
                            <p className="summary">
                                In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.
                            </p>
                        </div>
                       
                        </div>
                        <div className="overview col-md-8 col-12 d-md-block d-none">
                            <h6 className="tagline text-uppercase">Unmask the truth</h6>
                            <h2 className="title display-2">The Batman</h2>
                            <div className="rating mb-3">
                                <div className="d-inline-block me-4"><i className="far fa-star me-1"></i> <span>8.2 / 10</span></div>
                                <div className="d-inline-block me-4"><i className="fas fa-stopwatch me-1"></i> <span>176 mins</span>
                                </div>
                                <div className="d-inline-block me-4"><i className="far fa-calendar-alt"></i> <span>2022-03-01</span></div>
                                <p className="d-inline-block genre">Action, Crime</p>
                            </div>
                            <p className="summary">
                                In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.
                            </p>
                        </div>
                    </div>   
                </div>
                    
            </div>
        </div>
    )
}