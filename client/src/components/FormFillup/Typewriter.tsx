import { useState, useEffect } from "react";

interface Props {
  text: string | string[];
  delay: number;
}

export const Typewriter = ({ text, delay }: Props) => {

  const [currentText, setCurrent] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);

  useEffect(() => {
    setCurrent("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (Array.isArray(text)) {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          if (itemIndex < text[currentIndex].length) {
            setCurrent((prevText) => prevText + text[currentIndex][itemIndex]);
            setItemIndex((prev) => prev + 1);
          } else {
            setCurrent((prev) => prev + "\n");
            setCurrentIndex((prev) => prev + 1);
            setItemIndex(0);
          }
        }, delay);

        return () => clearTimeout(timeout);
      }
    } else {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrent((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, delay);

        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex, delay, itemIndex, text]);

  return <div style={{ whiteSpace: "pre-line" }}>{currentText}</div>;
};
