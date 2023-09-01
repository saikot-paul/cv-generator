import FormClass from "./FormClass";
import { Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FormData } from "../../interface/interface";

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const Contact = ({ formData, setFormData }: Props) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <FormClass
                  controlId="firstName"
                  inputType="text"
                  label="First Name"
                  validate="text"
                  placeholder="John"
                  formData={formData}
                  setFormData={setFormData}
                  itemKey={"contact-0"}
                ></FormClass>
              </Col>
              <Col>
                <FormClass
                  controlId="lastName"
                  inputType="text"
                  label="Last Name"
                  validate="text"
                  placeholder="Doe"
                  formData={formData}
                  setFormData={setFormData}
                  itemKey={"contact-0"}
                ></FormClass>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormClass
                  controlId="email"
                  inputType="email"
                  label="Email"
                  validate="email"
                  placeholder="yourname@domain.com"
                  formData={formData}
                  setFormData={setFormData}
                  itemKey={"contact-0"}
                ></FormClass>
              </Col>
              <Col>
                <FormClass
                  controlId="website"
                  inputType="text"
                  label="Website"
                  validate="url"
                  placeholder="www.domain.com"
                  formData={formData}
                  setFormData={setFormData}
                  itemKey={"contact-0"}
                ></FormClass>
              </Col>
            </Row>
            <Row>
              <FormClass
                controlId="linkedin"
                inputType="text"
                label="LinkedIn"
                validate="url"
                placeholder="www.linkedin/in/your-name"
                formData={formData}
                setFormData={setFormData}
                itemKey={"contact-0"}
              ></FormClass>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default Contact;
