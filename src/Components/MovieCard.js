import React from "react";
import { Card } from "react-bootstrap";
function MovieCard(props) {
    return (
        <div>
            <Card style={{ width: "18rem", margin: "30px auto" }}>
                <Card.Img variant="top" src={props.movie.posterUrl} />
                <Card.Body>
                    <Card.Title>{props.movie.title}</Card.Title>
                    {/* <Card.Text>{props.movie.description}</Card.Text> */}
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieCard;
