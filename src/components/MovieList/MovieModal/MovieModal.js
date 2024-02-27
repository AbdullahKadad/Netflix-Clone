import { Modal, Button, Image, Form } from "react-bootstrap";
import { useState } from "react";

function MovieModal(props) {
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");
  const addMovieUrl = process.env.REACT_APP_ADD_MOVIE_URL;

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const addMovie = async () => {
    const data = {
      title: props.movie.title || "No Title",
      release_date: props.movie.release_date,
      poster_path: props.movie.poster_path,
      overview: props.movie.overview,
      comments: comment,
    };
    try {
      await fetch(addMovieUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("e", error);
    }
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add to favorites
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title || "No Title"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={props.firstUrlSec + props.movie.poster_path}
            rounded
            style={{ width: "16rem" }}
          />
          <p>{props.movie.overview}</p>
          <Form.Group controlId="comment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={comment}
              onChange={handleCommentChange}
              placeholder="Write your comment here..."
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={addMovie}>
            add to favorite list
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MovieModal;
