import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeFavouriteMovie, removeMovieDetail } from "../../actions";
import './Favorites.css';

function ConnectedList(props) {

  useEffect(() => {
    props.removeMovieDetail();
  })

  return (
    <div>
      <h2>Películas Favoritas</h2>
      <ul>
      {
        props.movies?.map(movie => {
          return (
            <div key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
                <li>{movie.Title}</li>
              </Link>
              <button onClick={() => props.removeFavouriteMovie(movie.imdbID)}>X</button>
            </div>
          )
        })
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.favouritesMovies,
    details: state.movieDetails
  }
}

export default connect (mapStateToProps, { removeFavouriteMovie, removeMovieDetail }) (ConnectedList);


// CLASS COMPONENT
// export class ConnectedList extends Component {

//   render() {
//     return (
//       <div>
//         <h2>Películas Favoritas</h2>
//         <ul>
//         {
//           this.props.movies?.map(movie => {
//             return (
//               <div key={movie.imdbID}>
//                 <Link to={`/movie/${movie.imdbID}`}>
//                   <li>{movie.Title}</li>
//                 </Link>
//                 <button onClick={() => this.props.removeFavouriteMovie(movie.imdbID)}>X</button>
//               </div>
//             )
//           })
//          }
//         </ul>
//       </div>
//     );
//   }
// }