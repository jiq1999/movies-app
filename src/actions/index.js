const API_KEY = process.env.REACT_APP_API_KEY;

export function addFavouriteMovie (payload) {
  return { type: "ADD_FAVOURITE_MOVIE", payload };
}

export function removeFavouriteMovie (idMovie) {
  return { type: "REMOVE_FAVOURITE_MOVIE", payload: idMovie };
}

export function getMovies (title) {
  return function (dispatch) {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data => {
      dispatch({ type: "GET_MOVIES", payload: data})
    });
  }
}

export function getMovieDetail (idMovie) {
  return function (dispatch) {
    fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      dispatch({ type: "GET_MOVIE_DETAILS", payload: data })
    });
  }
}

export function removeMovieDetail () {
  return { type: "REMOVE_MOVIE_DETAIL" };
}

export function getTrending () {
  return function (dispatch) {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      dispatch({ type: "GET_TRENDING", payload: data })
    });
  }
}

export function getTopRated () {
  return function (dispatch) {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
      dispatch({ type: "GET_TOP_RATED", payload: data })
    });
  }
}

export function getComingSoon () {
  return function (dispatch) {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
      dispatch({ type: "GET_COMING_SOON", payload: data })
    });
  }
}

export function getMovieTrailer (idMovie) {
  return function(dispatch) {
    fetch(`https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      dispatch({ type: "GET_MOVIE_TRAILER", payload: data })
    });
  }
}