import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🎃" | "🎄" | "🎆" | "☀️" | "❄️";
//Halloween, Christmas, New Year's, Summer Solstice, Winter Solstice

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");
    return <span>Holiday: </span>;
}
