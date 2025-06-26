import { useState, useEffect } from "react";

export function useTypingEffect(texts = [], speed = 100, pause = 1500) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (texts.length === 0) return;

    let currentText = texts[textIndex];
    let timer;

    if (!isDeleting && charIndex <= currentText.length) {
      // Typing
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && charIndex >= 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else {
      // Switch modes
      timer = setTimeout(() => {
        setIsDeleting((prev) => !prev);

        if (!isDeleting) {
          // Start deleting after full text typed
          setCharIndex((prev) => prev - 1);
        } else {
          // Move to next text after deletion
          setTextIndex((prev) => (prev + 1) % texts.length);
          setCharIndex(0);
        }
      }, pause);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return displayedText;
}
