import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qType, setQType] = useState<QuestionType>("short_answer_question");
    const qTypeString: string =
        qType === "short_answer_question" ? "Short Answer" : "Multiple Choice";
    return (
        <span>
            <Button
                onClick={() =>
                    setQType(
                        qType === "short_answer_question"
                            ? "multiple_choice_question"
                            : "short_answer_question"
                    )
                }
            >
                Change Type
            </Button>
            {qTypeString}
        </span>
    );
}
