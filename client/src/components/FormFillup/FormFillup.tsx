import React, { useState } from "react";
import {
  AccordionComp,
  Contact,
  DesiredPostion,
  Education,
  Experience,
  Projects,
} from "./Exports/FormComponents";
import { Button, Accordion, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FormData } from "../interface/interface";
import { debounce } from "lodash";
import axios from "axios";
import { Typewriter } from "./Typewriter";

type Props = {
  contactData: FormData;
  desiredPosition: FormData;
  educationData: FormData;
  experienceData: FormData;
  projectData: FormData;
  setContact: React.Dispatch<React.SetStateAction<FormData>>;
  setDesiredPosition: React.Dispatch<React.SetStateAction<FormData>>;
  setEducation: React.Dispatch<React.SetStateAction<FormData>>;
  setExperience: React.Dispatch<React.SetStateAction<FormData>>;
  setProject: React.Dispatch<React.SetStateAction<FormData>>;
};

export const FormFillup: React.FC<Props> = (props) => {
  const [text, setText] = useState<string[]>([
    "Click on Generate Suggestions to get suggestions on your resume.",
  ]);
  const baseUrl = "http://localhost:3000";

  const debounceHandleSubmitMuliple = debounce(async (e: React.MouseEvent) => {
    e.preventDefault();

    const reqParams = getResponsibility();
    setText([
      "Loading....................................................................................................",
    ]);

    if (
      reqParams === null ||
      reqParams === undefined ||
      reqParams[0][0] == ""
    ) {
      setText(["Enter some experiences please."]);
      return;
    }

    const requests = reqParams.map(async (experience: string[]) => {
      try {
        const response = await axios.get(`${baseUrl}/generate`, {
          params: {
            experienceArray: experience,
          },
        });

        return response.data.generations[0].text;
      } catch (error) {
        console.log(error);
        return "Unable to get suggestions, please try again later. Thank you :)";
      }
    });

    Promise.all(requests).then((suggestions) => {
      console.log(suggestions);
      setText(suggestions);
    });
  }, 2500);

  const getResponsibility: () => string[][] | null = () => {
    const obj = { ...props.experienceData };
    const value = obj.value;

    console.log(value);

    if (value.length === 0) {
      console.log("value.length === 0");
      return null;
    }

    if (value[0].value.length === 0) {
      console.log("value[0].value.length === 0");
      return null;
    }

    const respValues = value.map((element) => {
      return element.value
        .filter((element) => {
          return element.key === "respList";
        })
        .map((element) => {
          if (element.list) {
            return element.list;
          }
        });
    });

    const reqParam: string[][] = [];
    respValues.forEach((element) => {
      element.forEach((element) => {
        if (element) {
          reqParam.push(element.map((item) => item.value));
        }
      });
    });

    return reqParam;
  };

  const {
    contactData,
    desiredPosition,
    educationData,
    experienceData,
    projectData,
    setContact,
    setDesiredPosition,
    setEducation,
    setExperience,
    setProject,
  } = props;

  const writeComponent = (
    <Card>
      <Card.Body>
        <Typewriter text={text} delay={20}></Typewriter>
      </Card.Body>
    </Card>
  );

  return (
    <Container style={{ border: "none" }}>
      <Card>
        <Accordion alwaysOpen defaultActiveKey={"0"}>
          <AccordionComp
            children={
              <DesiredPostion
                formData={desiredPosition}
                setFormData={setDesiredPosition}
              ></DesiredPostion>
            }
            eventKey="0"
            title={"Customize your resume for a specific job"}
          ></AccordionComp>
          <AccordionComp
            children={
              <Contact
                formData={contactData}
                setFormData={setContact}
              ></Contact>
            }
            eventKey={"1"}
            title={"Contact"}
          ></AccordionComp>
          <AccordionComp
            children={
              <Education
                formData={educationData}
                setFormData={setEducation}
              ></Education>
            }
            eventKey={"2"}
            title={"Education"}
          ></AccordionComp>
          <AccordionComp
            children={
              <Experience
                formData={experienceData}
                setFormData={setExperience}
              ></Experience>
            }
            eventKey={"3"}
            title={"Experience"}
          ></AccordionComp>
          <AccordionComp
            children={
              <Projects
                formData={projectData}
                setFormData={setProject}
              ></Projects>
            }
            eventKey={"4"}
            title={"Projects"}
          ></AccordionComp>
          <AccordionComp
            children={writeComponent}
            eventKey="5"
            title="AI suggestions powered by Cohere"
          ></AccordionComp>
        </Accordion>
        <div className="d-flex justify-content-end">
          <Button
            type="submit"
            style={{ margin: "0.25rem" }}
            onClick={(e) => {
              debounceHandleSubmitMuliple(e);
            }}
          >
            Generate suggestions
          </Button>
          <Button
            type="button"
            style={{ margin: "0.25rem" }}
            onClick={getResponsibility}
          >
            Download
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default FormFillup;
