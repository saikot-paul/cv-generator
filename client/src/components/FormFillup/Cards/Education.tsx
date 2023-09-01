import FormClass from "./FormClass";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { FormData } from "../../interface/interface";
import { Component } from "react";

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

class Education extends Component<Props, State> {
  defaultApplied: boolean;
  options: { value: string; label: string }[];
  constructor(props: Props) {
    super(props);

    this.defaultApplied = false;
    this.options = [
      { value: "Bachelor", label: "Bachelor's" },
      { value: "Diploma", label: "Diploma" },
      { value: "Master", label: "Master's" },
      { value: "Doctorate", label: "Doctorate" },
    ];

    this.state = {
      cardComps: [
        {
          key: 0,
          comp: this.createCardComp(0),
        },
      ],
    };
  }

  componentDidMount(): void {
    if (!this.defaultApplied) {
      this.defaultApplied = true;
      const copy = this.props.formData;
      const itemKey = `education-0`;
      if (!copy.value.find((element) => element.key === itemKey)) {
        copy.value.push({
          key: itemKey,
          value: [
            {
              key: "degreetype",
              value: "Bachelor",
            },
          ],
        });
        this.props.setFormData(copy);
      }
    }
  }

  addComp(e: React.MouseEvent) {
    e.preventDefault();
    const len = this.state.cardComps.length - 1;
    const cur = this.state.cardComps[len].key + 1;

    this.setState(
      {
        cardComps: [
          ...this.state.cardComps,
          { key: cur, comp: this.createCardComp(cur) },
        ],
      },
      () => {
        const copy = this.props.formData;
        const itemKey = `education-${cur}`;
        if (!copy.value.find((element) => element.key === itemKey)) {
          copy.value.push({
            key: itemKey,
            value: [
              {
                key: "degreetype",
                value: "Bachelor",
              },
            ],
          });
          this.props.setFormData(copy);
        }
      }
    );
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
        const itemKey = `education-${delKey}`;
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
                  controlId={"inst_name"}
                  inputType={"text"}
                  label={"Institution Name"}
                  validate={"text"}
                  placeholder={"Super Cool Institution Name"}
                  formData={this.props.formData}
                  setFormData={this.props.setFormData}
                  itemKey={`education-${index}`}
                ></FormClass>
              </Col>
              <Col>
                <FormClass
                  controlId={"deg_type"}
                  inputType={"select"}
                  label={"Degree Type"}
                  validate={"options"}
                  options={this.options}
                  formData={this.props.formData}
                  setFormData={this.props.setFormData}
                  itemKey={`education-${index}`}
                ></FormClass>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormClass
                  controlId={"deg_name"}
                  inputType={"text"}
                  label={"Degree Name"}
                  validate={"text"}
                  placeholder={"Super Cool Degree"}
                  formData={this.props.formData}
                  setFormData={this.props.setFormData}
                  itemKey={`education-${index}`}
                ></FormClass>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormClass
                  controlId="city-name"
                  inputType="text"
                  label="Location - City"
                  validate="text"
                  placeholder="City"
                  formData={this.props.formData}
                  setFormData={this.props.setFormData}
                  itemKey={`education-${index}`}
                ></FormClass>
              </Col>
              <Col>
                <FormClass
                  controlId="state-name"
                  inputType="text"
                  label="Location - State/Province"
                  validate="text"
                  placeholder="State"
                  formData={this.props.formData}
                  setFormData={this.props.setFormData}
                  itemKey={`education-${index}`}
                ></FormClass>
              </Col>
            </Row>
            <Row className="mb-1">
              <Col>
                <FormClass
                  controlId={"deg_start_date"}
                  inputType={"date"}
                  label={"Degree Start Date"}
                  validate={"date"}
                  formData={this.props.formData}
                  setFormData={this.props.setFormData}
                  itemKey={`education-${index}`}
                ></FormClass>
              </Col>
              <Col>
                <FormClass
                  controlId={"deg_end_date"}
                  inputType={"date"}
                  label={"Degree End Date"}
                  validate={"date"}
                  formData={this.props.formData}
                  setFormData={this.props.setFormData}
                  itemKey={`education-${index}`}
                ></FormClass>
              </Col>
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

  render() {
    return (
      <Container>
        {this.state.cardComps.map((element) => {
          return (
            <Row className="mb-1" key={`education-${element.key}`}>
              {element.comp}
            </Row>
          );
        })}
      </Container>
    );
  }
}

export default Education;