import { createElement } from "react";
import { animate } from "@motionone/dom";

export default function MotionHover({
  as: Component = "div",
  className = "",
  children,
  hoverScale = 1.03,
  hoverY = -6,
  hoverRotate = 0,
  usePointerTilt = false,
  maxTilt = 7,
  ...rest
}) {
  const handleEnter = (event) => {
    if (usePointerTilt) {
      event.currentTarget.style.transformStyle = "preserve-3d";
      event.currentTarget.style.willChange = "transform";
      return;
    }

    animate(
      event.currentTarget,
      {
        transform: `translateY(${hoverY}px) scale(${hoverScale}) rotate(${hoverRotate}deg)`,
      },
      { duration: 0.24, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
    );
  };

  const handleMove = (event) => {
    if (!usePointerTilt) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * (maxTilt * 2);
    const rotateX = (0.5 - y) * (maxTilt * 2);

    animate(
      event.currentTarget,
      {
        transform: `translateY(${hoverY}px) scale(${hoverScale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotate(${hoverRotate}deg)`,
      },
      { duration: 0.18, easing: "ease-out" },
    );
  };

  const handleLeave = (event) => {
    animate(
      event.currentTarget,
      {
        transform:
          "translateY(0px) scale(1) rotateX(0deg) rotateY(0deg) rotate(0deg)",
      },
      { duration: 0.24, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
    );
  };

  return createElement(
    Component,
    {
      className,
      onMouseEnter: handleEnter,
      onMouseMove: handleMove,
      onMouseLeave: handleLeave,
      ...rest,
    },
    children,
  );
}
