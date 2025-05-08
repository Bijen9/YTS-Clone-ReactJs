import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layouts/MainLayouts'
import Dashboard from './pages/dashboard'
import Trending from "./pages/trending"
import HighQuality from './pages/4k';
import BrowseMovies from './pages/browse-movies';
import MovieSpec from "./pages/movieSpec";



function App() {

  return (
    
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/4k" element={<HighQuality />} />
        <Route path="/browse-movies" element={<BrowseMovies />} />
        <Route path="/movieSpec/:id" element={<MovieSpec />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  )


}

export default App