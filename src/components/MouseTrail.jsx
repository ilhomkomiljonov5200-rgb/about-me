import { useEffect } from "react";

function MouseTrail() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const dot = document.createElement("div");
      dot.className = "cursor-dot";
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";

      document.body.appendChild(dot);

      setTimeout(() => {
        dot.remove();
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}

export default MouseTrail;
