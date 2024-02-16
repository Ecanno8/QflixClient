import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setselectedMovie] = useState(null);


    useEffect(() => {
        if (!token) {
            return;
        }

        fetch("https://my-movies-api-23e4e5dc7a5e.herokuapp.com/movies", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const moviesfromApi = data.map((movie) => {
                    return {
                        _id: movie._id,
                        Title: movie.Title,
                        ImagePath: movie.ImagePath,
                        Description: movie.Description,
                        Year: movie.Year,
                        Genre: {
                            Name: movie.Genre.Name
                        },
                        Director: {
                            Name: movie.Director.Name
                        }
                    };
                });
                setMovies(moviesfromApi);
            });
    }, [token]);

    // Require Login
    if (!user) {
        return (
            <LoginView
                onLoggedIn={(user, token) => {
                    setUser(user);
                    setToken(token);
                }}
            />
        );
    }
    //Show Similar Movies
    if (selectedMovie) {
        let similarMovies = movies.filter((movie) => {
            return movie._id !== selectedMovie._id && movie.Genre.Name === selectedMovie.Genre.Name;
        });
        if (similarMovies.length === 0) {
            return (
                <>
                    <MovieView movie={selectedMovie} onBackClick={() => setselectedMovie(null)} /><br />
                    <h2>Similar Movies</h2>
                    <p>There are no similar movies.</p>
                </>
            );
        } else {
            return (
                <>
                    <MovieView movie={selectedMovie} onBackClick={() => setselectedMovie(null)} /><br />
                    <h2>Similar Movies</h2>
                    {similarMovies.map((movie) => (
                        <MovieCard
                            key={movie._id}
                            movie={movie}
                            onMovieClick={(newSelectedMovie) => {
                                setselectedMovie(newSelectedMovie);
                            }}
                        />
                    ))}
                </>
            );
        }
    }

    if (movies.length === 0) {
        return <div>
            <p>The list is empty!</p>
            <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
        </div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie._id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
            <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
        </div>
    );
};
