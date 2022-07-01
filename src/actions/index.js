const API_KEY = process.env.REACT_APP_API_KEY;

export function addFavouriteMovie (payload) {
  return { type: "ADD_FAVOURITE_MOVIE", payload };
}

export function removeFavouriteMovie (idMovie) {
  return { type: "REMOVE_FAVOURITE_MOVIE", payload: idMovie };
}

export function getMovies (title) {
  return function (dispatch) {
    fetch(`https://omdbapi.com/?apikey=${API_KEY}&s=${title}`)
    .then(response => response.json())
    .then(data => {
      dispatch({ type: "GET_MOVIES", payload: data})
    });
  }
}

export function getMovieDetail (idMovie) {
  return function (dispatch) {
    fetch(`https://omdbapi.com/?apikey=${API_KEY}&i=${idMovie}`)
    .then(response => response.json())
    .then(data => {
      dispatch({ type: "GET_MOVIE_DETAILS", payload: data})
    });
  }
}

export function removeMovieDetail () {
  return { type: "REMOVE__MOVIE_DETAIL" };
}
