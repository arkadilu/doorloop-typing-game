import { useEffect, useMemo, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

function App() {
  const [counter, setCounter] = useState();
  const [currentInput, setCurrentInput] = useState();
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(20);

  useEffect(() => {
    let timeout;
    if (!!counter && counter > 0) {
      timeout = setTimeout(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [counter, setCounter]);

  return (
    <div className="text-center">
      <Container>
        <Card>
          <Card.Header>
            <Container>
              <Row>
                <Col>
                  <Button variant="primary" onClick={() => setCounter(3)}>
                    Restart
                  </Button>
                </Col>
                <Col>Time Left (s): {counter}</Col>
                <Col>CPM: </Col>
                <Col>WPM: </Col>
                <Col>Occuracy (%): </Col>
              </Row>
            </Container>
          </Card.Header>
          <Card.Body>
            <Container>
              {words.slice(from, to).map((w) => (
                <>{w} </>
              ))}
            </Container>
          </Card.Body>
          <Card.Footer>
            <input
              type={"text"}
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
            />
          </Card.Footer>
        </Card>
      </Container>
      value: {currentInput}
    </div>
  );
}
const words = [
  "account",
  "act",
  "addition",
  "adjustment",
  "advertisement",
  "agreement",
  "air",
  "amount",
  "amusement",
  "animal",
  "answer",
  "apparatus",
  "approval",
  "argument",
  "art",
  "attack",
  "attempt",
  "attention",
  "attraction",
  "authority",
  "back",
  "balance",
  "base",
  "behavior",
  "belief",
  "birth",
  "bit",
  "bite",
  "blood",
  "blow",
  "body",
  "brass",
  "bread",
  "breath",
  "brother",
  "building",
  "burn",
  "burst",
  "business",
  "butter",
  "canvas",
  "care",
  "cause",
  "chalk",
  "chance",
  "change",
  "cloth",
  "coal",
  "color",
  "comfort",
  "committee",
  "company",
  "comparison",
  "competition",
  "condition",
  "connection",
  "control",
  "cook",
  "copper",
  "copy",
  "cork",
  "cotton",
  "cough",
  "country",
  "cover",
  "crack",
  "credit",
  "crime",
  "crush",
  "cry",
  "current",
  "curve",
  "damage",
  "danger",
  "daughter",
  "day",
  "death",
  "debt",
  "decision",
  "degree",
  "design",
  "desire",
  "destruction",
  "detail",
  "development",
  "digestion",
  "direction",
  "discovery",
  "discussion",
  "disease",
  "disgust",
  "distance",
  "distribution",
  "division",
  "doubt",
  "drink",
  "driving",
  "dust",
  "earth",
  "edge",
  "education",
  "effect",
  "end",
  "error",
  "event",
  "example",
  "exchange",
  "existence",
  "expansion",
  "experience",
  "expert",
  "fact",
  "fall",
  "family",
  "father",
  "fear",
  "feeling",
  "fiction",
  "field",
  "fight",
  "fire",
  "flame",
  "flight",
  "flower",
  "fold",
  "food",
  "force",
  "form",
  "friend",
  "front",
  "fruit",
];

export default App;
