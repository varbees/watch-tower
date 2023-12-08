import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Watchlist from './components/Watchlist';

function App() {
  // const name = signal('Watch Tower');
  // effect(() => console.log(name.value));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Banner />
              <Movies />
            </>
          }
        />
        <Route path='/movies' element={<Movies />} />
        <Route path='/watchlist' element={<Watchlist />} />
      </Routes>
    </Router>
  );
}

export default App;
