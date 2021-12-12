import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";

function NavBar(props) {
    const handleName = (e) => {
        props.setSearch(e.target.value);
    };
    return (
        <div>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={props.search}
                    onChange={handleName}
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </div>
    );
}

export default NavBar;
