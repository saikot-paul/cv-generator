import Header from "./components/Header";
import { Row, Col, Container, Card } from "react-bootstrap";
import { FormFillup } from "./components/FormFillup/FormFillup";
import { ResumeRenderComp } from "./components/ResumeRender/ResumeRenderComp";
import { FormData } from "./components/interface/interface";
import { useState } from "react";
import { Typewriter } from "./components/FormFillup/Typewriter";

const App = () => {
  const [contactData, setContact] = useState<FormData>({
    key: "contactData",
    value: [],
  });

  const [desiredPosition, setDesiredPosition] = useState<FormData>({
    key: "desiredPosition",
    value: [],
  });
  const [educationData, setEducation] = useState<FormData>({
    key: "educationData",
    value: [],
  });
  const [experienceData, setExperience] = useState<FormData>({
    key: "experienceData",
    value: [],
  });
  const [projectData, setProject] = useState<FormData>({
    key: "projectData",
    value: [],
  });

  return (
    <>
      <Container
        style={{ marginTop: "0.1rem", marginBottom: "3rem", width: "100%" }}
      >
        <Row>
          <Header></Header>
        </Row>
        <Row style={{ width: "80vw" }}>
          <Col md={3}>
            <Row>
              <FormFillup
                contactData={contactData}
                setContact={setContact}
                desiredPosition={desiredPosition}
                setDesiredPosition={setDesiredPosition}
                educationData={educationData}
                setEducation={setEducation}
                experienceData={experienceData}
                setExperience={setExperience}
                projectData={projectData}
                setProject={setProject}
              ></FormFillup>
            </Row>
          </Col>
          <Col md={5}>
            <ResumeRenderComp></ResumeRenderComp>
          </Col>
          <Col>
            <Card>
              <Card.Header>Suggestions</Card.Header>
              <Card.Body>
                <Typewriter
                  text={"Checking if this works, hopefully does so"}
                  delay={50}
                ></Typewriter>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
