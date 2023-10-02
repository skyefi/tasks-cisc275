import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    return (
        <span>
            <Button onClick={() => setShowAnswer(!showAnswer)}>
                {showAnswer ? "Hide" : "Reveal"} Answer
            </Button>
            {showAnswer && <div>42</div>}
        </span>
    );
}
