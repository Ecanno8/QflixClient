import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

export const MovieView = ({ movies }) => {
    const { movieId } = useParams();

    const movie = movies.find((movie) => movie._id === movieId);


    return (
        <Row className="mt-5 justify-content-center">
            <Col md={5} >
                <img src={movie.ImagePath} alt="Movie Cover" className="img-fluid" />
            </Col>
            <Col md={3}>
                <div className="my-1">
                    <span className="h6">Title: </span>
                    <span>{movie.Title}</span>
                </div>
                <div className="my-1">
                    <span className="h6">Description: </span>
                    <span>{movie.Description}</span>
                </div>
                <div className="my-1">
                    <span className="h6">Director:</span>
                    <span>{movie.Director.Name}</span>
                </div>
                <div className="my-1">
                    <span className="h6">Genre: </span>
                    <span>{movie.Genre.Name}</span>
                </div>
                <div className="my-1">
                    <span className="h6">Year:  </span>
                    <span>{movie.Year}</span>
                </div>
                <Link to={`/`}>
                    <Button>Back</Button>
                </Link>
            </Col>
        </Row>
    );
};
