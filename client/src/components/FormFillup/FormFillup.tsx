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
import { useState } from "react";
import { Typewriter } from "./Typewriter";

interface Props {
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
}

export const FormFillup = ({
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
}: Props) => {
  const [text, setText] = useState("");

  function scrollToGenerate() {
    const section = document.getElementById("suggestions");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    console.log("\n");
    try {
      await axios.get("http://localhost:3000/generate").then((response) => {
        console.log(response);
        const data = response.data;
        console.log(data);
        const newText = data.generations[0].text;
        setText(newText);
        console.log(text);
      });
    } catch (error) {
      console.log(error);
    }
    console.log("done");
  }

  const debounceHandleSubmit = debounce(handleSubmit, 3000);

  return (
    <>
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
          </Accordion>
          <div className="d-flex justify-content-end">
            <Button
              type="submit"
              style={{ margin: "0.25rem" }}
              onClick={(e) => {
                scrollToGenerate();
                debounceHandleSubmit(e);
              }}
            >
              Generate suggestions
            </Button>
            <Button type="button" style={{ margin: "0.25rem" }}>
              Download
            </Button>
          </div>
          <Typewriter text={text} delay={30}></Typewriter>
        </Card>
      </Container>
    </>
  );
};
