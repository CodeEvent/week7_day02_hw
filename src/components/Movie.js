import React from "react";

const Movie = ({name, url}) =>{
    return (
        <>
        <h4>{name}</h4>
        <p><a href={url}>Watch it here</a></p>
        </>
    )

}

export default Movie;