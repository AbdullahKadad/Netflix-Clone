import { useState, useEffect } from "react";
import { Button, Card, Modal, Form } from "react-bootstrap";
import "./FavList.css";

function FavList() {
  const [favData, setFavData] = useState([]);
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});

  const firstUrlSec = process.env.REACT_APP_FIRST_URL_SEC;
  const getFavData = process.env.REACT_APP_GET_FAV_DATA;
  const deletedFavMovie = process.env.REACT_APP_DELETE;
  const addComment = process.env.REACT_APP_COMMENT;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + "...";
  };
  const handleClose = () => setShow(false);
  const handleShow = (movie) => {
    setShow(true);
    setSelectedMovie(movie);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleComment = async () => {
    const movie = {
      comments: comment,
    };
    try {
      await fetch(addComment + selectedMovie.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    handleClose();
  };

  const fetchData = async () => {
    try {
      const response = await fetch(getFavData);
      const data = await response.json();
      setFavData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${deletedFavMovie}${id}`, {
        method: "DELETE",
      });
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [favData]);

  return (
    <main className="main-fav">
      {favData.map((movie) => {
        return (
          <Card style={{ width: "18rem" }} key={movie.id}>
            <Card.Img variant="top" src={firstUrlSec + movie.poster_path} />
            <Card.Body>
              <Card.Title>{movie.title || "No Title"}</Card.Title>
              <Card.Text>{truncateText(movie.overview, 80)}</Card.Text>
              <Button variant="danger" onClick={() => handleDelete(movie.id)}>
                Delete
              </Button>
              <Button variant="primary" onClick={() => handleShow(movie)}>
                Update
              </Button>
            </Card.Body>
          </Card>
        );
      })}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New comment for {selectedMovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="comment">
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
          <Button
            variant="success"
            onClick={() => handleComment(selectedMovie.id)}
          >
            Save Comment
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}

export default FavList;
