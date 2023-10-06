import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAns, setUserAns] = useState<string>("");

    function changeUserAns(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAns(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="CheckAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={userAns} onChange={changeUserAns} />
            </Form.Group>
            <p>{userAns === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
