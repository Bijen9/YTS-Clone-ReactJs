import React, { useEffect } from 'react'
import "../styles/movieSpec.css"
import { useParams, useSearchParams } from 'react-router'
import axios from 'axios'

const MovieSpec = () => {
  const {id} = useParams()

  const getMovieDetails = async () =>{
    const response = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`)
    console.log(response?.data)
  }

  useEffect(()=>{
    getMovieDetails()
  },[])



  return (
    <div className='main'>
        <div className='firstContainer1'>
          <div className='movieFigure' >
          <img className="img-responsive1" src="/images/movie4.jpg" alt="" />
          <button className='downloadbtn'>
          <a href="">
            Download
          </a>
          </button>
         
         <button className='watchbtn'>
          <a href="">Watch Now</a>

         </button>
          </div>

          <div className='movie-info'>
            <h1>Another Simple Favor</h1>
            <h2>2025</h2>
            <h2>Comedy / Crime / Mystery / Thriller</h2>

            <p>
            <em>Available in: &nbsp;</em>
            <a href="">720p.WEB</a>
            <a href="">1080.WEB</a>
            <a href="">1080p.WEB
              <small>.x265</small>
            </a>
            <a href="">2160p.WEB
              <small>.x265</small>
            </a>
          </p>

          <span>
            <b>WEB</b>
            : same quality as BluRay
          </span>
          <br />
          <br />

          <a href="">
            <span className='downloadimg'>
              <img src="/images/download_icon.png" width="16px" height="16px" alt="" />
            </span>
            Download Subtitles
          </a>
          </div>

          <div className='similar-movies'>
            <h4>Similar Movies</h4>
            <div className='similarMoviesBox'>
              
              <a href="" className='movieimg1'>
                <img src="/images/movie1.jpg" className='movieimg'  alt="" />
              </a>

              <a href="" className='movieimg1'>
                <img src="/images/movie2.jpg" className='movieimg' alt="" />
              </a>

              <a href="" className='movieimg1'>
                <img src="/images/movie3.jpg" className='movieimg' alt="" />
              </a>

              <a href="" className='movieimg1'>
                <img src="/images/movie4.jpg" className='movieimg'  alt="" />
              </a>
            
              
            </div>
          </div>
        </div>

        <div>

        </div>
    </div>
  )
}

export default MovieSpec