import { useState, useEffect } from "react";

interface Props {
  text: string;
  delay: number;
}

export const Typewriter = ({ text, delay }: Props) => {

  const [currentText, setCurrent] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrent("");
    setCurrentIndex(0);
  }, [text, delay]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrent((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);


  return <span>{currentText}</span>;
};
