
export const Card = ({img, title, year, rating, time, animeClass})=> {

    return (
        <div className="col-12 col-md-6 col-lg-3 border-2">
            <div className={"movie-card " + animeClass}>
                <div className="movie-poster">
                    <img src={img} alt="" />
                </div>
                <div className="movie-intro py-3 px-2">
                    <div className="title-year d-flex justify-content-between align-items-center">
                        <p className="movie-title me-3">{title}</p>
                        <p className="movie-year">{year}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <a href="#" className="btn-custom-5">View Details</a>

                        <div className="rating">
                            <div className="d-inline-block me-2"><i class="far fa-star"></i> <span>{rating}</span></div>
                            <div className="d-inline-block ms"><i class="fas fa-stopwatch"></i> <span>{time}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}