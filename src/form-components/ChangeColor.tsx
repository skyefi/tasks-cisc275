import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors: string[] = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "brown"
];

export function makeColorButtons(
    activeColor: string,
    setColor: (color: string) => void
): JSX.Element {
    function mapColorButtons(color: string): JSX.Element {
        return (
            <span>
                <Form.Check
                    inline
                    type="radio"
                    name="colorSelect"
                    onChange={() => setColor(color)}
                    id={"color-check-" + color}
                    key={"color-check-" + color}
                    label={color}
                    style={{ backgroundColor: color }}
                    value={color}
                    checked={activeColor === color}
                    color={color}
                />
            </span>
        );
    }

    return <div>{colors.map(mapColorButtons)}</div>;
}

export function ChangeColor(): JSX.Element {
    const [activeColor, setActiveColor] = useState<string>("");

    return (
        <div>
            {makeColorButtons(activeColor, setActiveColor)}
            You have chosen{" "}
            <text
                data-testid="colored-box"
                style={{ backgroundColor: activeColor }}
            >
                {activeColor === "" ? "nothing yet" : activeColor}
            </text>
        </div>
    );
}
