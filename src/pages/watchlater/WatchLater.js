import React from 'react';
import { useSelector } from 'react-redux';
import Info from '../../components/layout/Info';
import MovieCard from '../../components/layout/MovieCard';

export default function WatchLater() {

  const { watchlater } = useSelector(state => state.watchlater);

  return (
    <>
      <section className="center">
        <h1>Watch Later List</h1>
        {
          watchlater?.length > 0 ?
            <Info />
            :
            <div className="info">No Movie on your Watch Later List!</div>
        }

      </section>
      {
        watchlater?.length > 0 &&
        <div className="flex flex-wrap">
          {
            watchlater.map((movie, index) => (
              <MovieCard movie={movie} key={`movie_${index}`} />
            ))
          }
        </div>
      }
    </>
  )
}