import FormClass from "./FormClass";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FormData } from "../../interface/interface";
import React, { Component } from "react";

type Props = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

type State = {
  cardComps: {
    key: number;
    comp: JSX.Element;
  }[];
};

class Projects extends Component<Props, State> {
  didMount: boolean;
  constructor(props: Props) {
    super(props);

    this.state = {
      cardComps: [{ key: 0, comp: this.createCardComp(0) }],
    };
    this.didMount = false;
  }

  componentDidMount(): void {
    if (!this.didMount) {
      this.didMount = true;
      const copy = this.props.formData;
      copy.value.push({
        key: "project-0",
        value: [],
      });
      this.props.setFormData(copy);
    }
  }

  addComp(e: React.MouseEvent) {
    e.preventDefault();
    const len = this.state.cardComps.length - 1;
    const cur = this.state.cardComps[len].key + 1;

    this.setState({
      cardComps: [
        ...this.state.cardComps,
        { key: cur, comp: this.createCardComp(cur) },
      ],
    }, () => { 
        const copy = this.props.formData;
        const itemKey = `project-${cur}`;

        if (!copy.value.find((element) => element.key === itemKey)) {
          copy.value.push({
            key: itemKey,
            value: [],
          });
          this.props.setFormData(copy);
        }
    });
  }

  delComp(e: React.MouseEvent, delKey: number) {
    e.preventDefault();

    if (this.state.cardComps.length === 1) {
      return;
    }

    let compCopy = this.state.cardComps;
    compCopy = compCopy.filter((element) => {
      return element.key !== delKey;
    });
    this.setState(
      {
        cardComps: compCopy,
      },
      () => {
        const copy = this.props.formData;
        const itemKey = `project-${delKey}`;
        copy.value = copy.value.filter((element) => {
          return element.key !== itemKey;
        });
        this.props.setFormData(copy);
      }
    );
  }

  createCardComp(index: number) {
    return (
      <Card>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <FormClass
                  controlId="proj-name"
                  inputType="text"
                  label="Project Name"
                  validate="text"
                  placeholder="Cool Project"
                  formData={this.props.formData}
                  setFormData={this.props.setFormData}
                  itemKey={`project-${index}`}
                ></FormClass>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormClass
                  controlId="proj-start-date"
                  inputType="date"
                  label="Date Started"
                  validate="date"
                  formData={this.props.formData}
                  setFormData={this.props.setFormData}
                  itemKey={`project-${index}`}
                ></FormClass>
              </Col>
              <Col>
                <FormClass
                  controlId="proj-end-date"
                  inputType="date"
                  label="Date Ended"
                  validate="date"
                  formData={this.props.formData}
                  setFormData={this.props.setFormData}
                  itemKey={`project-${index}`}
                ></FormClass>
              </Col>
            </Row>
            <Row>
              <FormClass
                controlId="proj-responsibilites"
                inputType="text"
                label="Project Description"
                validate="resp"
                formData={this.props.formData}
                setFormData={this.props.setFormData}
                itemKey={`project-${index}`}
              ></FormClass>
            </Row>
            <Row>
              <Col className="d-flex justify-content-end">
                <Button
                  type="button"
                  className="btn m-1"
                  onClick={(e) => this.delComp(e, index)}
                >
                  Remove
                </Button>
                <Button
                  type="button"
                  className="btn m-1"
                  onClick={(e) => this.addComp(e)}
                >
                  Add
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }

  render(): React.ReactNode {
    return (
      <Container>
        {this.state.cardComps.map((element) => {
          return (
            <Row className="mb-1" key={`project-${element.key}`}>
              {element.comp}
            </Row>
          );
        })}
      </Container>
    );
  }
}

export default Projects;