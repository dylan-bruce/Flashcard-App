import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";

function CreateDeckButton() {
    const history = useHistory();

    function handleClick(path) {
        history.push(path);
    }

    return (
        <Button
            type="button"
            size="lg"
            onClick={() => handleClick("/decks/new")}
        >
            Create Deck
        </Button>
    )
}

export default CreateDeckButton;