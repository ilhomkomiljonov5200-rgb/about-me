import { useEffect } from "react";

export default function useCursorTrail() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const dot = document.createElement("span");
      dot.className = "cursor-dot";
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      document.body.appendChild(dot);

      setTimeout(() => {
        dot.remove();
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
}
