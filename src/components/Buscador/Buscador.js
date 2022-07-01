import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies, addFavouriteMovie, removeMovieDetail } from "../../actions";
import "./Buscador.css";

function Buscador (props) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    props.removeMovieDetail();
  })

  function handleSubmit(e) {
    e.preventDefault();
    props.getMovies(title);
  }
  
  return (
    <div>
      <h2>Buscador</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <label className="label" htmlFor="title">Película: </label>
          <input
            type="text"
            id="title"
            autoComplete="off"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit">BUSCAR</button>
      </form>
      <ul>
        {
        props.movies?.map(movie => {
          return (
            <div key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
                <li>{movie.Title}</li>
              </Link>
              <button onClick={() => props.addFavouriteMovie(movie)}>FAV</button>
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
    movies: state.loadedMovies,
    details: state.movieDetails
  }
}

export default connect (mapStateToProps, { getMovies, addFavouriteMovie, removeMovieDetail })(Buscador);


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