import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MovieDetails } from "./components/movieDetails";
import { Home } from "./components/Home";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="movie-details" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
