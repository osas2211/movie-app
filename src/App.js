import { useEffect, useState } from "react";
import { ScreenLoader } from "./components/screenLoader";

import { HomeHero } from './components/homeHero';
import { TopRated } from './components/topRated';

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(()=>{
    setLoader(true);
    setTimeout(()=>{setLoader(false)}, 4000)
  }, [])
  return (
    <div className="App">
      {
        loader ? <ScreenLoader loader={loader}></ScreenLoader>
        :
        <>
          <HomeHero></HomeHero>
          <TopRated></TopRated>
        </>
      }
    </div>
  );
}

export default App;
