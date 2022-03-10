import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MovieDetails } from "./components/movieDetails";
import { Home } from "./components/Home";
import { Search } from "./components/search";
import { DetailsProvider } from "./context.js/detailsContext";

function App() {
  
  return (
    <div className="App">
      <DetailsProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movie-details/:id" element={<MovieDetails />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Router>
      </DetailsProvider>
    </div>
  );
}

export default App;
