import { signal, useSignal } from '@preact/signals-react';
import axios from 'axios';
import { useEffect } from 'react';

const localWatchlist = localStorage.getItem('watchlist')
  ? JSON.parse(localStorage.getItem('watchlist'))
  : [];
export const watchlist = signal(localWatchlist);

const useShowState = type => {
  const shows = useSignal([]);
  const page = useSignal(1);
  const loading = useSignal(false);
  console.log(watchlist.value);
  useEffect(() => {
    async function getAllShows() {
      loading.value = true;
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/${type}/day?language=en-US&page=${page.value}&api_key=6ed9eba4505892b51f147b962cf7acfc`
      );
      shows.value = res.data.results;
      page.value = res.data.page;
      loading.value = false;
    }

    getAllShows();
  }, [page.value, type]);

  const toggleWatchlistItem = show => {
    if (watchlist.value.some(item => item.id === show.id)) {
      removeFromWatchlist(show);
    } else {
      addToWatchlist(show);
    }
  };

  const addToWatchlist = show => {
    const updatedWatchlist = [...watchlist.value, show];
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    watchlist.value = updatedWatchlist;
  };

  const removeFromWatchlist = show => {
    const updatedWatchlist = watchlist.value.filter(
      item => item.id !== show.id
    );
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    watchlist.value = updatedWatchlist;
  };

  return [shows, page, watchlist, loading, toggleWatchlistItem];
};

export default useShowState;
