import { Card } from "./card";
import { useState } from "react"
import { useFetchMulti } from "../custom hooks/customHooks";
import { imgHTTP, ApiKey } from "../apiKey";
import { Link } from "react-router-dom";

export const Search = ()=>{
    const [result, setResult] = useState(false);
    const [searchInput, setSearchInput] = useState("")
    const movies = useFetchMulti(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${searchInput}&page=1&include_adult=false`, 16, [searchInput])
    const handleInputVal = (e)=>{
        e.preventDefault();
        setSearchInput(e.target.value)
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        setResult(movies)
        setSearchInput("")
    }

    return (
        <div className="search-page container-fluid">
            <div className="home mx-2 my-0">
                    <Link to="/">&#8592;</Link>
                </div>
            <form className="search-form pt-3 m-auto" onSubmit={handleSubmit}>
                <div className="input-group">
                    <span className="input-group-text">🔎</span>
                    <input type="text" onChange={handleInputVal} value={searchInput} placeholder="Search For Movies" className="form-control" />
                    <button className="btn btn-primary">Search</button>
                </div>
            </form>

            <div className="search-result mt-5">
                {
                    !result ? <p className="no-result pt-5 text-light display-6 text-muted text-center">Input a Valid Search</p>
                     :
                     <div className="container-fluid mt-5 pb-5">
                     <div className="row justify-content-center g-5 text-light">
                         {
                             result.map((data)=>{
                                return  <Card key={data.id} img={imgHTTP+data.poster_path} animeClass="translate-right" title={data.title} year={data.release_date} rating={data.vote_average} time={data.runtime} data={data} />
                             })
                         }
                     </div>
                 </div> 
                }
            </div>    
        </div>
    )
}