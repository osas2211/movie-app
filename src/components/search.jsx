import batman from "../images/batman.jpg"
import spiderman from "../images/spiderman.jpg";
import shiangchi from "../images/shiangchi.jpg";
import enchanto from "../images/enchanto.jpeg";
import { Card } from "./card";
import { useState } from "react"

export const Search = ()=>{
    const [result, setResult] = useState(false);
    const [val, setVal] = useState("")
    const handleInputVal = (e)=>{
        e.preventDefault();
        setVal(e.target.value)
    }

    return (
        <div className="search-page container-fluid">
            <div className="home mx-2 my-0">
                    <a href="/">&#8592;</a>
                </div>
            <form className="search-form pt-3 m-auto">
                <div className="input-group">
                    <span className="input-group-text">🔎</span>
                    <input type="text" onChange={handleInputVal} value={val} placeholder="Search For Movies" className="form-control" />
                    <button className="btn btn-primary">Search</button>
                </div>
            </form>

            <div className="search-result mt-5">
                {
                    !result ? <p className="no-result pt-5 text-light display-6 text-muted text-center">Input a Valid Search: {val}</p>
                     :
                     <div className="container-fluid mt-5 pb-5">
                     <div className="row justify-content-center g-5 text-light">
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
                }
            </div>    
        </div>
    )
}