import { Container, Row, Card } from "react-bootstrap";
import "./resume.css";
export const ResumeRenderComp = () => {

  const firstname = "Saikot ";
  const lastname = "Paul";
  return (
    <Card>
      <Container>
        <Row>
          <Card.Header className="header">
            <h2>{firstname + " " + lastname}</h2>
            <div className="header-links">
              <a className="link" target="_blank" href="www.google.ca">
                Email |
              </a>
              <a className="link" target="_blank" href="www.google.ca">
                LinkedIn |
              </a>
              <a className="link" target="_blank" href="www.google.ca">
                Website
              </a>
            </div>
          </Card.Header>
        </Row>
        <Row>
          <div className="content-container">
            <Row>
              <h3>Education</h3>
            </Row>
            <Row>
              <div className="spread top">
                <div>University of Nowhere</div>
                <div>Date Start - Date End</div>
              </div>
              <div className="spread bottom">
                <div>
                  <em>Bachelor's of Doing Nothing</em>
                </div>
                <div>City, State</div>
              </div>
            </Row>
            <Row>
              <h3>Experience</h3>
            </Row>
            <Row>
              <div className="spread top">
                <div>Position Title</div>
                <div>Start Date - End Date</div>
              </div>
              <div className="spread bottom">
                <div>
                  <em>Company Name</em>
                </div>
                <div>City, State</div>
              </div>
            </Row>
            <Row>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio, perferendis quis. Omnis, autem!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio, perferendis quis. Omnis, autem!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio, perferendis quis. Omnis, autem!
                </li>
              </ul>
            </Row>
            <Row>
              <div className="spread top">
                <div>Position Title</div>
                <div>Start Date - End Date</div>
              </div>
              <div className="spread bottom">
                <div>
                  <em>Company Name</em>
                </div>
                <div>City, State</div>
              </div>
            </Row>
            <Row>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio, perferendis quis. Omnis, autem!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio, perferendis quis. Omnis, autem!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio, perferendis quis. Omnis, autem!
                </li>
              </ul>
            </Row>
            <Row>
              <h3>Projects</h3>
            </Row>
            <Row>
              <div className="spread top">
                <div>Project Name</div>
                <div>Start Date - End Date</div>
              </div>
            </Row>
            <Row>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio, perferendis quis. Omnis, autem!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio, perferendis quis. Omnis, autem!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio, perferendis quis. Omnis, autem!
                </li>
              </ul>
            </Row>
            <Row>
              <div className="spread top">
                <div>Project Name</div>
                <div>Start Date - End Date</div>
              </div>
            </Row>
            <Row>
              <ul>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio, perferendis quis. Omnis, autem!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio, perferendis quis. Omnis, autem!
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio, perferendis quis. Omnis, autem!
                </li>
              </ul>
            </Row>
          </div>
        </Row>
      </Container>
    </Card>
  );
};

export default ResumeRenderComp;
