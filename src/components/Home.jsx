import { HomeHero } from './homeHero';
import { TopRated } from './topRated';
import { Upcoming } from "./upcoming";
import { NowShowing } from "./nowShowing";
import { Footer } from "./footer";

import { useEffect, useState } from "react";
import { ScreenLoader } from "./screenLoader";


export const Home = ()=>{

    const [loader, setLoader] = useState(false);
    useEffect(()=>{
        setLoader(true);
        setTimeout(()=>{setLoader(false)}, 2000)
    }, [])
    return (
        <>
              { loader ? <ScreenLoader loader={loader}></ScreenLoader> 
              :
                <>
                    <HomeHero></HomeHero>
                    <TopRated></TopRated>
                    <NowShowing></NowShowing>
                    <Upcoming></Upcoming>
                    <Footer></Footer>
                </>
                }
        </>
    )
}