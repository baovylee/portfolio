import { useReveal } from "../hooks/useReveal.js";

export default function Reveal({ children, as: Tag = "div", className = "", ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${visible ? "in-view" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
