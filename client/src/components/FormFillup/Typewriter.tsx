import { useState, useEffect } from "react";

interface Props {
  text: string | string[];
  delay: number;
}

export const Typewriter = ({ text, delay }: Props) => {

  const [currentText, setCurrent] = useState("");
  const [arrayIndex, setarrayIndex] = useState(0);
  const [stringIndex, setstringIndex] = useState(0);

  useEffect(() => {
    setCurrent("");
    setarrayIndex(0);
    setstringIndex(0);
  }, [text]);

  useEffect(() => {
    if (arrayIndex < text.length) {
      const timeout = setTimeout(() => {
        if (stringIndex < text[arrayIndex].length) {
          setCurrent((prevText) => prevText + text[arrayIndex][stringIndex]);
          setstringIndex((prev) => prev + 1);
        } else {
          setarrayIndex((prev) => prev + 1);
          setstringIndex(0);
        }
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [arrayIndex, delay, stringIndex, text]);

  return <div style={{ whiteSpace: "pre-line" }}>{currentText}</div>;
};
