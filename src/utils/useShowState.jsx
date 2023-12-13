import { signal, useSignal } from '@preact/signals-react';
import axios from 'axios';
import { useEffect } from 'react';

const watchlist = signal([]);

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

  const toggleWatchlistItem = id => {
    if (watchlist.value.includes(id)) {
      removeFromWatchlist(id);
    } else {
      addToWatchlist(id);
    }
  };

  const addToWatchlist = id => {
    if (!watchlist.value.includes(id)) {
      const updatedWatchlist = [...watchlist.value, id];
      watchlist.value = updatedWatchlist;
    }
  };

  const removeFromWatchlist = id => {
    const updatedWatchlist = watchlist.value.filter(showId => showId !== id);
    watchlist.value = updatedWatchlist;
  };

  return [shows, page, watchlist, loading, toggleWatchlistItem];
};

export default useShowState;
