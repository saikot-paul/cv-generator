import FormClass from "./FormClass";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FormData } from "../../interface/interface";

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const DesiredPosition = ({ formData, setFormData }: Props) => {
  return (
    <Card className="mb-1">
      <Card.Body>
        <FormClass
          controlId="desiredPosition"
          inputType="text"
          label="Desired Position"
          validate={"text"}
          placeholder={"Dream Job"}
          formData={formData}
          setFormData={setFormData}
          itemKey="desiredPosition"
        ></FormClass>
      </Card.Body>
    </Card>
  );
};

export default DesiredPosition;
