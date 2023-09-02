import { Container, Row, Card } from "react-bootstrap";
import "./resume.css";
import HeaderComp from "./HeaderComp";
import { FormData, nestedItem } from "../interface/interface";
import {} from "react";

interface Props {
  contactData: FormData;
}
export const ResumeRenderComp = ({ contactData }: Props) => {
  function getParam(param: string) {
    if (
      contactData.value.length === 0 ||
      contactData.value[0].value.length === 0
    ) {
      return null;
    }

    const item: nestedItem | undefined = contactData.value[0].value.find(
      (item) => item.key === param
    );

    return item ? item.value : "";
  }

  return (
    <Card>
      <Container>
        <Row>
          <Card.Header className="header">
            <HeaderComp
              firstname={getParam("firstname")}
              lastname={getParam("lastname")}
              linkedIn={getParam("linkedin")}
              email={getParam("email")}
              website={getParam("website")}
            ></HeaderComp>
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
