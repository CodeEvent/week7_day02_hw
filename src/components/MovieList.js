import React from "react";
import Movie from "./Movie";


const MovieList = ({movies}) => {
  
        const movieNodes = movies.map(movie => (
            <Movie  name={movie.name} url={movie.url} key={movie.id}>{movie.name}</Movie>
          )
            
          
          )
        
          return (
        <>
        {movieNodes}
        </>
    );
}

export default MovieList;