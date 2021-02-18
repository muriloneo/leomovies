import React from 'react';
import { useSelector } from 'react-redux';
import Info from '../../components/layout/Info';
import MovieCard from '../../components/layout/MovieCard';

export default function Favorites() {

  const { favorites } = useSelector(state => state.favorites);

  return (
    <>
      <section className="center">
        <h1>Favorites List</h1>
        {
          favorites?.length > 0 ?
          <Info />
          :
          <div className="info">No Movie on your Favorites!</div>
        }

      </section>
      {
        favorites?.length > 0 &&
        <div className="flex flex-wrap">
          {
            favorites.map((movie, index) => (
              <MovieCard movie={movie} key={`movie_${index}`} />
            ))
          }
        </div>
      }
    </>
  )
}