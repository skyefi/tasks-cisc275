import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="editMode"
                label="Edit Mode"
                checked={editMode}
                onChange={() => setEditMode(!editMode)}
            />
            {!editMode &&
                userName + " is" + (isStudent ? "" : " NOT") + " a student"}
            <div hidden={!editMode}>
                <Form.Group controlId="enterUserName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={userName} onChange={changeName} />
                </Form.Group>
                <Form.Check
                    type="checkbox"
                    id="isStudentCheck"
                    label="Student"
                    checked={isStudent}
                    onChange={() => setIsStudent(!isStudent)}
                />
            </div>
        </div>
    );
}
