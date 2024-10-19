import React, { Component } from "react";
import { movies } from "./getMovies";

export default class List extends Component {
  render() {
    let allmovies = movies.results;
    return (
      <div>
        <h3 className="trending  display-3"> trending</h3>

        <div className="movies-list">
          {allmovies.map((movieObj) => {
            return (
              <div class="card movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                  class="card-img-top movie-img"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title movie-title">
                    {movieObj.original_title}
                  </h5>

                  <a href="#" class="btn btn-info  movie-button">
                    Add as Favourites
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } 
}
