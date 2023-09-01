import { Accordion } from "react-bootstrap";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  eventKey: string;
  title: string;
}

function AccordionComp({ children, eventKey, title }: Props) {
  return (
    <>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>{children}</Accordion.Body>
      </Accordion.Item>
    </>
  );
}

export default AccordionComp;
