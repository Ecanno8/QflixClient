export const MovieCard = ({ movie, onMovieClick }) => {
    // const {movie} = props;
    // const {onBookClick} = props;
    return (<div onClick={() => {
        onMovieClick(movie);
    }}>{movie.Title}</div>)
};
