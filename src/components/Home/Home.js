import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTrending, getTopRated, getComingSoon, addFavouriteMovie, removeMovieDetail, removeFavouriteMovie } from "../../actions";
import Styles from "./Home.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';


function Home (props) {

  useEffect(() => {
    props.getTrending();
    props.getTopRated();
    props.getComingSoon();
    props.removeMovieDetail();
  }, [])

  if (window.innerWidth < 768) {
    return (
      <div className={Styles.background}>
      <h1 className={Styles.title}>TRENDING MOVIES</h1>
        {
          props.trending.length > 0 ?
            <Swiper
              className={Styles.swiper}
              modules={[Navigation]}
              navigation={true}
              spaceBetween={0}
              slidesPerView={2}
            >
            {
              props.trending.map(movie => {
                return (
                  <SwiperSlide key={movie.id}>
                    <div className={Styles.movie}>
                      <Link className={Styles.link} to={`/movie/${movie.id}`}>
                        <img className={Styles.img} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="image-poster"/>
                      </Link>
                      {
                        (props.favouritesMovies.find(m => m.id === movie.id)) ? 
                        <button className={Styles.btn} onClick={() => props.removeFavouriteMovie(movie.id)}><AiFillStar/></button> :
                        <button className={Styles.btn} onClick={() => props.addFavouriteMovie(movie)}><AiOutlineStar/></button>
                      }
                    </div>
                  </SwiperSlide>
                )
              })
            }
            </Swiper> : null
        }
        <h1 className={Styles.title}>TOP RATED MOVIES</h1>
        {
          props.topRated.length > 0 ?
            <Swiper
              className={Styles.swiper}
              modules={[Navigation]}
              navigation={true}
              spaceBetween={0}
              slidesPerView={2}
            >
            {
              props.topRated.map(movie => {
                return (
                  <SwiperSlide key={movie.id}>
                    <div className={Styles.movie}>
                      <Link className={Styles.link} to={`/movie/${movie.id}`}>
                        <img className={Styles.img} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="image-poster"/>
                      </Link>
                      {
                        (props.favouritesMovies.find(m => m.id === movie.id)) ? 
                        <button className={Styles.btn} onClick={() => props.removeFavouriteMovie(movie.id)}><AiFillStar/></button> :
                        <button className={Styles.btn} onClick={() => props.addFavouriteMovie(movie)}><AiOutlineStar/></button>
                      }
                    </div>
                  </SwiperSlide>
                )
              })
            }
            </Swiper> : null
        }
        <h1 className={Styles.title}>COMING SOON</h1>
        {
          props.comingSoon.length > 0 ?
            <Swiper
              className={Styles.swiper}
              modules={[Navigation]}
              navigation={true}
              spaceBetween={0}
              slidesPerView={2}
            >
            {
              props.comingSoon.map(movie => {
                return (
                  <SwiperSlide key={movie.id}>
                    <div className={Styles.movie}>
                      <Link className={Styles.link} to={`/movie/${movie.id}`}>
                        <img className={Styles.img} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="image-poster"/>
                      </Link>
                      {
                        (props.favouritesMovies.find(m => m.id === movie.id)) ? 
                        <button className={Styles.btn} onClick={() => props.removeFavouriteMovie(movie.id)}><AiFillStar/></button> :
                        <button className={Styles.btn} onClick={() => props.addFavouriteMovie(movie)}><AiOutlineStar/></button>
                      }
                    </div>
                  </SwiperSlide>
                )
              })
            }
            </Swiper> : null
        }
      </div>
    )
  } else {
    return (
      <div className={Styles.background}>
      <h1 className={Styles.title}>TRENDING MOVIES</h1>
        {
          props.trending.length > 0 ?
            <Swiper
              className={Styles.swiper}
              modules={[Navigation]}
              navigation={true}
              spaceBetween={0}
              slidesPerView={5}
            >
            {
              props.trending.map(movie => {
                return (
                  <SwiperSlide key={movie.id}>
                    <div className={Styles.movie}>
                      <Link className={Styles.link} to={`/movie/${movie.id}`}>
                        <img className={Styles.img} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="image-poster"/>
                      </Link>
                      {
                        (props.favouritesMovies.find(m => m.id === movie.id)) ? 
                        <button className={Styles.btn} onClick={() => props.removeFavouriteMovie(movie.id)}><AiFillStar/></button> :
                        <button className={Styles.btn} onClick={() => props.addFavouriteMovie(movie)}><AiOutlineStar/></button>
                      }
                    </div>
                  </SwiperSlide>
                )
              })
            }
            </Swiper> : null
        }
        <h1 className={Styles.title}>TOP RATED MOVIES</h1>
        {
          props.topRated.length > 0 ?
            <Swiper
              className={Styles.swiper}
              modules={[Navigation]}
              navigation={true}
              spaceBetween={0}
              slidesPerView={5}
            >
            {
              props.topRated.map(movie => {
                return (
                  <SwiperSlide key={movie.id}>
                    <div className={Styles.movie}>
                      <Link className={Styles.link} to={`/movie/${movie.id}`}>
                        <img className={Styles.img} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="image-poster"/>
                      </Link>
                      {
                        (props.favouritesMovies.find(m => m.id === movie.id)) ? 
                        <button className={Styles.btn} onClick={() => props.removeFavouriteMovie(movie.id)}><AiFillStar/></button> :
                        <button className={Styles.btn} onClick={() => props.addFavouriteMovie(movie)}><AiOutlineStar/></button>
                      }
                    </div>
                  </SwiperSlide>
                )
              })
            }
            </Swiper> : null
        }
        <h1 className={Styles.title}>COMING SOON</h1>
        {
          props.comingSoon.length > 0 ?
            <Swiper
              className={Styles.swiper}
              modules={[Navigation]}
              navigation={true}
              spaceBetween={0}
              slidesPerView={5}
            >
            {
              props.comingSoon.map(movie => {
                return (
                  <SwiperSlide key={movie.id}>
                    <div className={Styles.movie}>
                      <Link className={Styles.link} to={`/movie/${movie.id}`}>
                        <img className={Styles.img} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="image-poster"/>
                      </Link>
                      {
                        (props.favouritesMovies.find(m => m.id === movie.id)) ? 
                        <button className={Styles.btn} onClick={() => props.removeFavouriteMovie(movie.id)}><AiFillStar/></button> :
                        <button className={Styles.btn} onClick={() => props.addFavouriteMovie(movie)}><AiOutlineStar/></button>
                      }
                    </div>
                  </SwiperSlide>
                )
              })
            }
            </Swiper> : null
        }
      </div>
    )
  }
}
 
const mapStateToProps = (state) => {
  return {
    trending: state.trending,
    topRated: state.topRated,
    comingSoon: state.comingSoon,
    details: state.movieDetails,
    favouritesMovies: state.favouritesMovies
  }
}

export default connect (mapStateToProps, { getTrending, getTopRated, getComingSoon, addFavouriteMovie, removeMovieDetail, removeFavouriteMovie })(Home);