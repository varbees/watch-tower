import { useSignal } from '@preact/signals-react';
import axios from 'axios';
import { useEffect } from 'react';

const useShowState = type => {
  const shows = useSignal([]);
  const page = useSignal(1);
  const loading = useSignal(false);

  useEffect(() => {
    async function getAllShows() {
      loading.value = true;
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/${type}/day?language=en-US&page=${page}&api_key=6ed9eba4505892b51f147b962cf7acfc`
      );
      shows.value = res.data.results;
      page.value = res.data.page;
      loading.value = false;
      console.log(shows.value);
    }

    getAllShows();
  }, [page.value]);
  return [shows, page, loading];
};

export default useShowState;
