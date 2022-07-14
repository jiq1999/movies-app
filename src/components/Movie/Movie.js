import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getMovieDetail, removeFavouriteMovie, addFavouriteMovie, getMovieTrailer } from '../../actions/index';
import Styles from "./Movie.module.css"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Movie (props) {
  const params = useParams();

  useEffect(() => {
    props.getMovieDetail(params.id);
    props.getMovieTrailer(params.id);
  }, [])

  return (
    <div className={Styles.container}>
      <img className={Styles.img} src={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`} alt="image-poster"/>
      <div className={Styles.card}>
        <div className={Styles.titles}>
          <h3 className={Styles.title}>{props.movie.title}</h3>
          {
            (props.favouritesMovies.find(m => m.id === props.movie.id)) ? 
            <button className={Styles.score} onClick={() => props.removeFavouriteMovie(props.movie.id)}><AiFillStar/>{props.movie.vote_average}</button> :
            <button className={Styles.score} onClick={() => props.addFavouriteMovie(props.movie)}><AiOutlineStar/>{props.movie.vote_average}</button>
          }
        </div>
        <div className={Styles.elements}>
          <img className={Styles.img2} src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`} alt="image-poster"/>
          <div className={Styles.subElements}>
            {
              props.movieTrailer ?
              <a className={Styles.ytElement} href={`https://www.youtube.com/embed/${props.movieTrailer.key}?autoplay=1`} target="_blank" rel="noopener">
                <button className={Styles.ytButton}>PLAY TRAILER</button>
              </a> : null
            }
            <p>{props.movie.overview}</p>
            <p>Genres: 
              {props.movie.genres?.map((el, index) => index === props.movie.genres.length-1 ? ` ${el.name}` : ` ${el.name},`)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    movie: state.movieDetails,
    favouritesMovies: state.favouritesMovies,
    movieTrailer: state.movieTrailer
  }
}

export default connect (mapStateToProps, { getMovieDetail, removeFavouriteMovie, addFavouriteMovie, getMovieTrailer })(Movie);


// CLASS COMPONENT
// class Movie extends React.Component {

//   componentDidMount() {
//     this.props.getMovieDetail(this.props.match.params.id);
//   }

//   render() {
//     return (
//       <div className="movie-detail">
//         <h2>{this.props.movie.Title}</h2>
//         <p>{this.props.movie.Plot}</p>
//       </div>
//     );
//   }
// }