import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';


function Movie (props) {

  useEffect(() => {
    props.getMovieDetail(props.match.params.id);
  })

  return (
    <div className="movie-detail">
      <h2>{props.movie.Title}</h2>
      <p>{props.movie.Plot}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    movie: state.movieDetails
  }
}

export default connect (mapStateToProps, { getMovieDetail })(Movie);


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