import React from "react";
import "./App.css";
import pic from "./Catwalk.jpg";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Nicky Reigel</h1>
            <img
                src={pic}
                alt="A picture of a catwalk above the house of a theater, with lights hanging off the left side"
                width="403"
                height="196"
            />
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "200",
                                height: "500",
                                backgroundColor: "lightblue"
                            }}
                        >
                            <p>Column 1</p>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "200",
                                height: "500",
                                backgroundColor: "red"
                            }}
                        >
                            <p>Column 2</p>
                            <Button
                                onClick={() => console.log("Hello Galaxy!!")}
                            >
                                Log something better
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <p></p>
            <ol>
                <li>#1 Yes</li>
                <li>B) No</li>
                <li>III - Kinda</li>
            </ol>
        </div>
    );
}

export default App;
