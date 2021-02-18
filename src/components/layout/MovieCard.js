import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/actions/favoritesActions';
import { toggleWatchLater } from '../../redux/actions/watchLaterActions';
import noPoster from '../../assets/images/no-poster.jpg';
import './MovieCard.css';
import { checkIsFavorite, checkIsWatchLater, getGenreName } from '../../helpers';

export default function MovieCard({ movie }) {
  const { genres } = useSelector(state => state.genres);
  const { favorites } = useSelector(state => state.favorites);
  const { watchlater } = useSelector(state => state.watchlater);
  const dispatch = useDispatch();

  function addFavorite(movie) {
    dispatch(toggleFavorite(movie));
  }
  function addWatchLater(movie) {
    dispatch(toggleWatchLater(movie));
  }

  return (
    <div className="card md-w-33pc p-10">
      <figure>
        <div className="img">
          {
            movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
              :
              <img src={noPoster} alt={movie.title} />
          }
          <figcaption>
            <p className="name">{movie.title}</p>
            <i className={`far fa-star ${checkIsFavorite(favorites, movie.id) && `solid`}`} onClick={() => addFavorite(movie)} />
            <h4 className="rating">{movie.vote_average} / 10</h4>
            {
              movie.genre_ids && movie.genre_ids.map((id, idx) => {
                const genre = getGenreName(genres, id);
                return (
                  <h4 key={`genre_h4_${idx}`}>
                    {
                      genre.name
                    }
                  </h4>
                )
              })
            }
            <button className="details" onClick={() => addWatchLater(movie)}>
              <i className={`far fa-clock ${checkIsWatchLater(watchlater, movie.id) && `solid`}`} />
              Watch Later
            </button>
          </figcaption>
        </div>
        <p>
          {movie.title}
        </p>
        <div className="date">{movie.release_date}</div>
      </figure>
    </div>
  )
}
