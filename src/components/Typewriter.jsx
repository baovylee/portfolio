import { useEffect, useState } from "react";

export default function Typewriter({
  lines,
  typingSpeed = 55,
  deletingSpeed = 30,
  pauseAfterType = 1200,
  pauseAfterDelete = 300,
}) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState(prefersReducedMotion ? lines[0] : "");
  const [phase, setPhase] = useState("typing"); // "typing" | "deleting"

  useEffect(() => {
    if (prefersReducedMotion) return; 

    const currentLine = lines[lineIndex];
    let timeout;

    if (phase === "typing") {
      if (text.length < currentLine.length) {
        timeout = setTimeout(
          () => setText(currentLine.slice(0, text.length + 1)),
          typingSpeed
        );
      } else {
        timeout = setTimeout(() => setPhase("deleting"), pauseAfterType);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(currentLine.slice(0, text.length - 1)),
          deletingSpeed
        );
      } else {
        timeout = setTimeout(() => {
          setLineIndex((i) => (i + 1) % lines.length);
          setPhase("typing");
        }, pauseAfterDelete);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    phase,
    lineIndex,
    lines,
    typingSpeed,
    deletingSpeed,
    pauseAfterType,
    pauseAfterDelete,
    prefersReducedMotion,
  ]);

  return (
    <span className="typewriter-line">
      {text}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}
