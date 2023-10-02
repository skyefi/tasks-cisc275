import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    return (
        <span>
            <Button
                disabled={inProgress || numAttempts === 0}
                onClick={() => {
                    setNumAttempts(numAttempts - 1);
                    setInProgress(true);
                }}
            >
                Start Quiz
            </Button>
            <Button disabled={!inProgress} onClick={() => setInProgress(false)}>
                Stop Quiz
            </Button>
            <Button
                disabled={inProgress}
                onClick={() => setNumAttempts(numAttempts + 1)}
            >
                Mulligan
            </Button>
            <p>In Progress = {inProgress ? "True" : "False"}</p>
            <p>Attempts = {numAttempts}</p>
        </span>
    );
}
