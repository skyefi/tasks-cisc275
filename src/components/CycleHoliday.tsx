import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🎃" | "🎄" | "🎆" | "☀️" | "❄️";
//Halloween, Christmas, New Year's, Summer Solstice, Winter Solstice

export function nextHolidayAlphabetical(current: Holiday): Holiday {
    if (current === "🎄") {
        return "🎃";
    } else if (current === "🎃") {
        return "🎆";
    } else if (current === "🎆") {
        return "☀️";
    } else if (current === "☀️") {
        return "❄️";
    } else {
        return "🎄";
    }
}

export function nextHolidayYear(current: Holiday): Holiday {
    if (current === "🎄") {
        return "🎆";
    } else if (current === "🎆") {
        return "☀️";
    } else if (current === "☀️") {
        return "🎃";
    } else if (current === "🎃") {
        return "❄️";
    } else {
        return "🎄";
    }
}

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");
    return (
        <span>
            <div>Holiday: {holiday}</div>
            <Button
                onClick={() => setHoliday(nextHolidayAlphabetical(holiday))}
            >
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(nextHolidayYear(holiday))}>
                Advance by Year
            </Button>
        </span>
    );
}
