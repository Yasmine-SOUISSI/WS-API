import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalAddMovie(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState("");
    const [posterUrl, setPosterUrl] = useState("");
    const [rate, setRate] = useState(1);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                AddMovie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div
                        className="space-x-4 space-y-3"
                        style={{ margin: "2px" }}
                    >
                        <label>Movie Title</label>
                        <input
                            name="title"
                            placeholder="Titanic"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div
                        className="space-x-4 space-y-3"
                        style={{ margin: "2px" }}
                    >
                        <label>Movie Post</label>
                        <input
                            name="postUrl"
                            placeholder="http/image/.."
                            onChange={(e) => setPosterUrl(e.target.value)}
                        />
                    </div>
                    <div className="space-x-4 space-y-3">
                        <label>Movie Rate</label>
                        <input
                            name="rate"
                            placeholder="2"
                            onChange={(e) => setRate(e.target.value)}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() =>
                            props.addMovie({ title, rate, posterUrl })
                        }
                    >
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAddMovie;
