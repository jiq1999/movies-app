const initialState = {
  favouritesMovies : [],
  loadedMovies : [],
  movieDetails : {},
  trending: {},
  topRated: {},
  comingSoon: {}
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
        favouritesMovies: state.favouritesMovies.filter(movie => movie.id !== action.payload)
      }
    case "GET_MOVIES":
      return {
        ...state,
        loadedMovies: action.payload.results
      }
    case "GET_MOVIE_DETAILS":
      return {
        ...state,
        movieDetails: action.payload
      }
    case "REMOVE_MOVIE_DETAIL":
      return {
        ...state,
        movieDetails: ""
      }
    case "GET_TRENDING":
      return {
        ...state,
        trending: action.payload.results.slice(0, 10)
      }
    case "GET_TOP_RATED":
      return {
        ...state,
        topRated: action.payload.results.slice(0, 10)
      }
    case "GET_COMING_SOON":
      return {
        ...state,
        comingSoon: action.payload.results.slice(0, 10)
      }
    default:
      return state
  }
}