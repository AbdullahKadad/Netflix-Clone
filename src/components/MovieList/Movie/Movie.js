import Card from "react-bootstrap/Card";
import MovieModal from "../MovieModal/MovieModal";
function Movie(props) {
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  }
  const exPoster =
    "https://image.tmdb.org/t/p/w500/";

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={exPoster+props.data.poster_path} />
        <Card.Body>
          <Card.Title>{truncateText(props.data.title || "No Title", 15)}</Card.Title>
          <Card.Text>{truncateText(props.data.overview, 80)}</Card.Text>
          <MovieModal data={props.data} poster={exPoster+props.data.poster_path} />
        </Card.Body>
      </Card>
    </>
  );
}
export default Movie;
