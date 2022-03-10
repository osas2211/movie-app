import { useContext } from "react";
import { DetailsContext } from "../context.js/detailsContext";
import { Link } from "react-router-dom";
import { actions } from "../context.js/detailsContext";
import { string } from "i/lib/util";

export const Card = ({img, title, year, rating, time, animeClass, data})=> {

    const [movieData, dispatch] = useContext(DetailsContext);
    const addDetails = ()=>{
        dispatch({type: actions.FETCH, payload: data})
    }

    return (
        <div className="col-12 col-md-6 col-lg-3 border-2">
            <div className={"movie-card " + animeClass}>
                <div className="movie-poster">
                    <img src={img} alt="" />
                </div>
                <div className="movie-intro py-3 px-2">
                    <div className="title-year d-flex justify-content-between align-items-center">
                        <p className="movie-title me-3">{title ? title : data.name}</p>
                        <p className="movie-year">{typeof(year) == "string" ? year.slice(0,4) : year}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to={"/movie-details/"+data.id} onClick={addDetails} className="btn-custom-5">View Details</Link>

                        <div className="rating">
                            <div className="d-inline-block me-2"><i className="far fa-star"></i> <span>{rating}</span></div>
                            <div className="d-inline-block ms"><i className="fas fa-stopwatch"></i> <span>{time}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}