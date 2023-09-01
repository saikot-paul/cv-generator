import React, { ChangeEvent, Component } from "react";
import "../../styling/form.css";
import plus from "../../../assets/plus-circle.svg";
import minus from "../../../assets/dash-circle.svg";
import { Col, Form, Row, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
  validateAlpha,
  validateEmail,
  validateText,
  validateUrl,
} from "../Exports/Validate";
import { FormData, nestedItem, item } from "../../interface/interface";
import debounce from "lodash/debounce";

type Props = {
  className?: string | null;
  controlId: string;
  inputType: string;
  label: string;
  options?: { value: string; label: string }[];
  placeholder?: string | null;
  validate:
    | string
    | null
    | "text"
    | "alpha"
    | "email"
    | "url"
    | "options"
    | "date";
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  itemKey: string;
};

type State = {
  respList: nestedItem[];
  validationError: string;
};

class FormClass extends Component<Props, State> {
  debounceHandleChange: (e: ChangeEvent) => void;
  debounceHandleResp: (e: ChangeEvent, key: string) => void;
  constructor(props: Props) {
    super(props);

    this.state = {
      respList: [
        {
          key: this.getRandom(),
          value: "",
        },
      ],
      validationError: "",
    };

    this.debounceHandleChange = debounce(this.handleChange, 1750);
    this.debounceHandleResp = debounce(this.handleRespChange, 1750);
  }

  createRespList(customKey: string) {
    return (
      <>
        <Container>
          <Row key={customKey} className="mb-1">
            <Col md={10}>
              <Form.Control
                type="text"
                onChange={(e) => this.debounceHandleResp(e, customKey)}
              ></Form.Control>
            </Col>
            <Col md={2} className="buttons">
              <Button
                type="button"
                className="btn btn-danger mb-1"
                onClick={(e) => this.delResp(e, customKey)}
              >
                <img src={minus} alt="minus button" />
              </Button>
              <Button
                type="button"
                className="btn btn-success mb-1"
                onClick={(e) => {
                  this.addResp(e);
                }}
              >
                <img src={plus} alt="plus button" />
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  addResp(event: React.MouseEvent) {
    event.preventDefault();
    let key = this.getRandom();

    while (this.state.respList.find((element) => element.key === key)) {
      key = this.getRandom();
    }

    this.setState({
      respList: [...this.state.respList, { key: key, value: "" }],
    });
  }

  delResp(event: React.MouseEvent, delKey: string) {
    event.preventDefault();

    if (this.state.respList.length === 1) {
      return;
    }

    console.log(this.state.respList);

    let respCopy = [...this.state.respList];
    respCopy = respCopy.filter((element) => {
      return element.key !== delKey;
    });

    this.setState(
      {
        respList: respCopy,
      },
      () => this.createRespFormList()
    );
  }

  getRandom(): string {
    return Math.floor(Math.random() * 1000).toString();
  }

  getValidate(input: string) {
    if (this.props.validate === null) {
      return null;
    }

    switch (this.props.validate) {
      case "alpha":
      case "resp":
        return validateAlpha(input);
      case "email":
        return validateEmail(input);
      case "text":
        return validateText(input);
      case "url":
        return validateUrl(input);
    }
  }

  getForm() {
    let body;

    switch (this.props.validate) {
      case "resp":
        body = (
          <>
            <Row>
              <Form.Group className="mb-1" controlId={this.props.controlId}>
                <Row>
                  <Form.Label>{this.props.label}</Form.Label>
                  {this.state.respList.map((element) => {
                    return (
                      <React.Fragment key={`resp-${element.key}`}>
                        {this.createRespList(element.key)}
                      </React.Fragment>
                    );
                  })}
                </Row>
              </Form.Group>
            </Row>
            {}
          </>
        );
        break;
      case "alpha":
      case "email":
      case "url":
      case "text":
        body = (
          <>
            <Row>
              <Form.Group className="mb-1" controlId={this.props.controlId}>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control
                  type={this.props.inputType}
                  placeholder={
                    this.props.placeholder == null ? "" : this.props.placeholder
                  }
                  onChange={(e) => {
                    this.debounceHandleChange(e);
                  }}
                  isInvalid={!!this.state.validationError}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {this.state.validationError}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </>
        );
        break;
      case "date":
        body = (
          <>
            <Row>
              <Form.Group className="mb-1" controlId={this.props.controlId}>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control
                  type={this.props.inputType}
                  placeholder={
                    this.props.placeholder == null ? "" : this.props.placeholder
                  }
                  onChange={(e) => this.debounceHandleChange(e)}
                ></Form.Control>
              </Form.Group>
            </Row>
          </>
        );
        break;
      case "options":
        body = (
          <>
            <Row>
              <Form.Group className="mb-1" controlId={this.props.controlId}>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Select onChange={(e) => this.handleSelectChange(e)}>
                  {this.props.options?.map((element, index) => {
                    return (
                      <option
                        value={element.value}
                        key={`${element.value}-${index}`}
                      >
                        {element.label}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            </Row>
          </>
        );
    }
    return body;
  }

  handleChange(e: React.ChangeEvent) {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const value = target.value.trim();
    

    const isValid = this.getValidate(value);

    if (isValid == false) {
      this.setState({
        validationError: `Invalid ${this.props.label?.toLowerCase()}`,
      });
    } else {
      this.setState({
        validationError: "",
      });

      const newData = {
        key: this.props.label.toLowerCase().split(" ").join(""),
        value: value,
      };

      this.changeFormData(newData);
    }
  }

  handleSelectChange(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const value = target.value;

    const newData = {
      key: this.props.label.toLowerCase().split(" ").join(""),
      value: value,
    };

    this.changeFormData(newData);
  }

  handleRespChange(e: React.SyntheticEvent, key: string) {
    const target = e.target as HTMLInputElement;
    const value: string = target.value;

    const newResp = {
      key: key,
      value: value,
    };

    this.setState(
      {
        respList: [
          ...this.state.respList.map((element) => {
            if (element.key === newResp.key) {
              element.value = value;
            }
            return element;
          }),
        ],
      },
      () => this.createRespFormList()
    );
  }

  private createRespFormList() {
    const list = [...this.state.respList];
    const formDataCopy = { ...this.props.formData };
    const item = formDataCopy.value.find(
      (element) => element.key === this.props.itemKey
    );
    if (item) {
      const nestedItem = item.value.find(
        (element) => element.key === "respList"
      );

      if (nestedItem) {
        nestedItem.list = list;
      } else {
        item.value.push({
          key: "respList",
          value: "respList",
          list: list,
        });
      }
    }
  }

  changeFormData(newData: nestedItem) {
    const formDataCopy = { ...this.props.formData };
    const item = formDataCopy.value.find(
      (element) => element.key === this.props.itemKey
    );
    if (item) {
      const nestedItem = item.value.find(
        (element) => element.key === newData.key
      );
      if (nestedItem) {
        nestedItem.value = newData.value;
      } else {
        item.value.push(newData);
      }
    } else {
      const newItem: item = {
        key: this.props.itemKey,
        value: [
          {
            key: newData.key,
            value: newData.value,
          },
        ],
      };
      formDataCopy.value.push(newItem);
    }

    this.props.setFormData(formDataCopy);
  }

  render() {
    return <>{this.getForm()}</>;
  }
}

export default FormClass;


