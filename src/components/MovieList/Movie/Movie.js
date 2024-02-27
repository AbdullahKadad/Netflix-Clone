import MovieModal from "../MovieModal/MovieModal";
import Card from "react-bootstrap/Card";

function Movie(props) {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  }
  const firstUrlSec = process.env.REACT_APP_FIRST_URL_SEC;

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={firstUrlSec + props.movie.poster_path} />
        <Card.Body>
          <Card.Title>
            {truncateText(props.movie.title || "No Title", 15)}
          </Card.Title>
          <Card.Text>{truncateText(props.movie.overview, 80)}</Card.Text>
          <MovieModal movie={props.movie} firstUrlSec={firstUrlSec} />
        </Card.Body>
      </Card>
    </>
  );
}
export default Movie;
