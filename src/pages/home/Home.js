import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Info from '../../components/layout/Info';
import MovieCard from '../../components/layout/MovieCard';
import Paginate from '../../components/layout/Paginate';
import SearchBar from '../../components/layout/SearchBar';
import { loadGenres } from '../../redux/actions/genreActions';
import MovieService from '../../services/MovieService';
import './Home.css';

export default function Home() {

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [result, setResult] = useState({});
  const [fetching, setFetching] = useState(false);

  const dispatch = useDispatch();
  const { genres, loading } = useSelector(state => state.genres);

  const searchMovies = useCallback(
    async () => {
      scrollTop();
      setFetching(true);
      const movies = await MovieService.searchByTitle(query, page);
      setResult(movies);
      setFetching(false);
    },
    [page, query],
  )

  useEffect(() => {
    if (!genres) {
      dispatch(loadGenres());
    }
  }, [dispatch, genres])

  useEffect(() => {
    if (query) {
      searchMovies();
    }
  }, [page, dispatch, query, searchMovies]);

  const setInputQuery = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim()) {
      searchMovies();
    }
  }



  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const changePage = (action) => {
    if (action === true) {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  }

  if (loading || fetching) {
    return (<h1 className="loading">Loading...</h1>)
  }

  return (
    <>
      <section className="center">
        <SearchBar handleSubmit={handleSubmit} setQuery={setInputQuery} />
        {
          result?.results?.length > 0 ?
            <Info />
            :
            (result?.total_results === 0 || !result) && <div className="info" data-testid="no_movies">No movies were found.</div>
        }

      </section>
      {
        result?.results?.length > 0 &&
        <>
          <div className="flex flex-wrap" data-testid="result_list">
            {
              result.results.map((movie, index) => (
                <MovieCard movie={movie} key={`movie_${index}`} />
              ))
            }
          </div>
          <Paginate page={page} total_pages={result.total_pages} changePage={changePage} />
        </>
      }
    </>
  )
}