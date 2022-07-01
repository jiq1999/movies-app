const initialState = {
  favouritesMovies : [],
  loadedMovies : [],
  movieDetails : {}
}

export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVOURITE_MOVIE":
      return {
        ...state,
        favouritesMovies: state.favouritesMovies.concat(action.payload)
      }
    case "REMOVE_FAVOURITE_MOVIE":
      return {
        ...state,
        favouritesMovies: state.favouritesMovies.filter(movie => movie.imdbID !== action.payload)
      }
    case "GET_MOVIES":
      return {
        ...state,
        loadedMovies: action.payload.Search
      }
    case "GET_MOVIE_DETAILS":
      return {
        ...state,
        movieDetails: action.payload
      }
    case "REMOVE__MOVIE_DETAIL":
      return {
        ...state,
        movieDetails: ""
      }
    default:
      return state
  }
}