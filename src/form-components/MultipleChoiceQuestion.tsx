import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateUserAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="MultipleChoiceQuestion">
                <Form.Label>Select an option</Form.Label>
                <Form.Select value={userAnswer} onChange={updateUserAnswer}>
                    {options.map((opt: string) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {userAnswer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
