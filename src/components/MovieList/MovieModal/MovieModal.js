import { useState } from "react";
import { Modal, Button, Image, Form } from "react-bootstrap";

function MovieModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [comment, setComment] = useState("");
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const favListHandler = async () => {
    const data = {
      title: props.data.title || "No Title",
      release_date: props.data.release_date,
      poster_path: props.data.poster_path,
      overview: props.data.overview,
      comments: comment,
    };
    try {
      await fetch("http://localhost:3000/addMovie", {
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
        add to the favorite list
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.data.title || "No Title"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={props.poster} rounded style={{ width: "16rem" }} />
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
          <Button variant="primary" onClick={favListHandler}>
            add to favorite list
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MovieModal;
