import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function gainAttempts() {
        const requestInt: number = parseInt(requestedAttempts, 10);
        if (!isNaN(requestInt) && requestedAttempts !== "") {
            setAttempts(attempts + requestInt);
            setRequestedAttempts("");
        }
    }

    return (
        <div>
            <p>{attempts}</p>
            <Form.Group controlId="RequestAttempts">
                <Form.Label>Request Addiional Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestedAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <Button onClick={gainAttempts}>Gain</Button>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts <= 0}
            >
                Use
            </Button>
        </div>
    );
}
