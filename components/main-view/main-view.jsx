import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            Title: "Eight Crazy Nights",
            Description: "American adult animated Hanukkah musical comedy-drama film.",
            Director: "Seth Kearsley",
            Genre: "Comedy",
            Year: "2002",
            Image: "https://en.wikipedia.org/wiki/Eight_Crazy_Nights#/media/File:8crazynights.jpg"
        },
        {
            id: 2,
            Title: "The Longest Yard",
            Description: "Disgraced pro football quarterback lands in jail, where manipulative Warden recruits him to advise the institution's team.",
            Director: "Peter Segal",
            Genre: "Comedy",
            Year: "2005",
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRvaWcD8i3_8YRqBxm-iID6jOb_sof7c1TkPkmdEV2w&s"
        },
        {
            id: 3,
            Title: "Fight Club",
            Description: "Two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives.",
            Director: "David Fincher",
            Genre: "Thriller",
            Year: "1999",
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJA6yOkGAfBclm6pyVBKGZCiLuwg1qp4-p5bJi4eRW12_2AflxQ93Tu6BZsg&s"
        }
    ]);
    //put movie info here from api in future

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return (
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );
};
