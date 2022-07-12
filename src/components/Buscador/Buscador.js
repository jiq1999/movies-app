import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies, addFavouriteMovie, removeMovieDetail, removeFavouriteMovie } from "../../actions";
import Styles from "./Buscador.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoSearch } from 'react-icons/io5';

function Buscador (props) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    props.removeMovieDetail();
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    props.getMovies(title);
    setTitle("");
  }

  return (
    <div>
      <h2 className={Styles.title}>SEARCH FOR A TITLE</h2>
      <form className={Styles.formContainer} onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          autoComplete="off"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit"><IoSearch/></button>
      </form>
      <div className={Styles.moviesGrid}>
        { props.movies.length > 0 ?
            props.movies.map(movie => {
              return (
                <div className={Styles.movie} key={movie.id}>
                  <Link className={Styles.link} to={`/movie/${movie.id}`}>
                    <img className={Styles.img} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="image-poster"/>
                  </Link>
                  {
                    (props.favouritesMovies.find(m => m.id === movie.id)) ? 
                    <button className={Styles.btn} onClick={() => props.removeFavouriteMovie(movie.id)}><AiFillStar/></button> :
                    <button className={Styles.btn} onClick={() => props.addFavouriteMovie(movie)}><AiOutlineStar/></button>
                  }
                </div>
              )
            }) : null
        }
      </div>
    </div>
  );  
}
 
const mapStateToProps = (state) => {
  return {
    movies: state.loadedMovies,
    details: state.movieDetails,
    favouritesMovies: state.favouritesMovies
  }
}

export default connect (mapStateToProps, { getMovies, addFavouriteMovie, removeMovieDetail, removeFavouriteMovie })(Buscador);


// CLASS COMPONENT
// export class Buscador extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: ""
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ title: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.props.getMovies(this.state.title);
//   }

//   render() {
//     const { title } = this.state;
//     return (
//       <div>
//         <h2>Buscador</h2>
//         <form className="form-container" onSubmit={this.handleSubmit}>
//           <div>
//             <label className="label" htmlFor="title">Película: </label>
//             <input
//               type="text"
//               id="title"
//               autoComplete="off"
//               value={title}
//               onChange={(e) => this.handleChange(e)}
//             />
//           </div>
//           <button type="submit">BUSCAR</button>
//         </form>
//         <ul>
//          {
//           this.props.movies?.map(movie => {
//             return (
//               <div key={movie.imdbID}>
//                 <Link to={`/movie/${movie.imdbID}`}>
//                   <li>{movie.Title}</li>
//                 </Link>
//                 <button onClick={() => this.props.addFavouriteMovie(movie)}>FAV</button>
//               </div>
//             )
//           })
//          }
//         </ul>
//       </div>
//     );
//   }
// }