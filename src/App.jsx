import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './pages/Movies';
import Watchlist from './pages/Watchlist';
import TvShows from './pages/TvShows';
import NotFound from './pages/NotFound';

function App() {
  // const name = signal('Watch Tower');
  // effect(() => console.log(name.value));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          exact
          element={
            <>
              <Banner />
              <Movies />
            </>
          }
        />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tv' element={<TvShows />} />
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
