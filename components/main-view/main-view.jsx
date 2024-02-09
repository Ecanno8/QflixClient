import { useState } from "react";
import { MovieCard } from "components\main-view\movie-card";
import { MovieView } from "components\main-view\movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Eight Crazy Nights",
            description: "American adult animated Hanukkah musical comedy-drama film.",
            director: "Seth Kearsley",
            genre: "Comedy",
            year: "2002",
            image: "https://en.wikipedia.org/wiki/Eight_Crazy_Nights#/media/File:8crazynights.jpg"
        },
        {
            id: 2,
            title: "The Longest Yard",
            description: "Disgraced pro football quarterback lands in jail, where manipulative Warden recruits him to advise the institution's team.",
            director: "Peter Segal",
            genre: "Comedy",
            year: "2005",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRvaWcD8i3_8YRqBxm-iID6jOb_sof7c1TkPkmdEV2w&s"
        },
        {
            id: 3,
            title: "Fight Club",
            description: "Two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives.",
            director: "David Fincher",
            genre: "Thriller",
            year: "1999",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJA6yOkGAfBclm6pyVBKGZCiLuwg1qp4-p5bJi4eRW12_2AflxQ93Tu6BZsg&s"
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
                    key={movie._id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );
};