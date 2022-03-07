import { useEffect, useState } from "react";
import { ScreenLoader } from "./components/screenLoader";

import { HomeHero } from './components/homeHero';
import { TopRated } from './components/topRated';
import { Upcoming } from "./components/upcoming";
import { NowShowing } from "./components/nowShowing";
import { Footer } from "./components/footer";

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
          <NowShowing></NowShowing>
          <Upcoming></Upcoming>
          <Footer></Footer>
        </>
      }
    </div>
  );
}

export default App;
