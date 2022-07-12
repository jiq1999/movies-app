import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeFavouriteMovie, removeMovieDetail } from "../../actions";
import Styles from "./Favorites.module.css";
import { IoCloseSharp } from 'react-icons/io5';

function ConnectedList(props) {

  useEffect(() => {
    props.removeMovieDetail();
  }, [])

  return (
    <div>
      <h2 className={Styles.title}>FAVOURITE MOVIES</h2>
      <div className={Styles.moviesGrid}>
      {
        props.movies?.map(movie => {
          return (
            <div className={Styles.movie} key={movie.id}>
              <Link className={Styles.link} to={`/movie/${movie.id}`}>
                <img className={Styles.img} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="image-poster"/>
              </Link>
              <button className={Styles.btn} onClick={() => props.removeFavouriteMovie(movie.id)}><IoCloseSharp/></button>
            </div>
          )
        })
        }
      </div>
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