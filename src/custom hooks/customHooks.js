import { ApiKey } from "../apiKey";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useContext } from "react";
// import { DetailsContext } from "../context.js/detailsContext";
export const useFetch = (http)=>{
    // const [state, dispatch] = useContext(DetailsContext)
    const [movieData, setMovieData] = useState({})
    const getPICK = async ()=>{
        const data = await axios(http);
        const response = await data.data
        setMovieData(response)
    }

    useEffect(()=>{
        return getPICK();
    }, [])

    return movieData
}

export const useFetchMulti = (http, limit=8, render=[])=>{
    // const [state, dispatch] = useContext(DetailsContext)
    const [movieData, setMovieData] = useState([])
    const getPICK = async ()=>{
        const data = await axios(http);
        const response = await data.data
        const results = await response.results
        setMovieData(results)
    }

    useEffect(()=>{
         getPICK();
    }, render)

    return movieData.slice(0,limit)
}