import { Link } from "react-router-dom";
import { actions } from "../context.js/detailsContext";
import { useContext } from "react";
import { DetailsContext } from "../context.js/detailsContext";


export const ViewDetails =({data, id})=>{
    const [movieData, dispatch] = useContext(DetailsContext);
    const addDetails = ()=>{
        dispatch({type: actions.FETCH, payload: data})
    }
    return (
        <Link onClick={addDetails} 
        to={"/movie-details/"+id} className="btn-custom-3 mt-2">View Details</Link> 
    )
}