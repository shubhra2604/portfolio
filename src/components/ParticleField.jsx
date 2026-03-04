import { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrameId;
    const pointer = { x: null, y: null, active: false };

    const particleCount = 90;
    const particles = [];

    const setCanvasSize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const resetParticle = (particle) => {
      particle.x = Math.random() * window.innerWidth;
      particle.y = Math.random() * window.innerHeight;
      particle.vx = (Math.random() - 0.5) * 0.55;
      particle.vy = (Math.random() - 0.5) * 0.55;
      particle.radius = 1 + Math.random() * 1.8;
    };

    const initializeParticles = () => {
      particles.length = 0;
      for (let index = 0; index < particleCount; index += 1) {
        const particle = {};
        resetParticle(particle);
        particles.push(particle);
      }
    };

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -20 || particle.x > window.innerWidth + 20) {
          particle.vx *= -1;
        }

        if (particle.y < -20 || particle.y > window.innerHeight + 20) {
          particle.vy *= -1;
        }

        if (pointer.active && pointer.x !== null && pointer.y !== null) {
          const distanceX = pointer.x - particle.x;
          const distanceY = pointer.y - particle.y;
          const distance = Math.hypot(distanceX, distanceY);

          if (distance < 180) {
            particle.x -= (distanceX / distance) * 0.25;
            particle.y -= (distanceY / distance) * 0.25;
          }
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(165, 180, 252, 0.58)";
        context.fill();
      }

      for (
        let sourceIndex = 0;
        sourceIndex < particles.length;
        sourceIndex += 1
      ) {
        for (
          let targetIndex = sourceIndex + 1;
          targetIndex < particles.length;
          targetIndex += 1
        ) {
          const sourceParticle = particles[sourceIndex];
          const targetParticle = particles[targetIndex];
          const distanceX = sourceParticle.x - targetParticle.x;
          const distanceY = sourceParticle.y - targetParticle.y;
          const distance = Math.hypot(distanceX, distanceY);

          if (distance < 110) {
            context.beginPath();
            context.moveTo(sourceParticle.x, sourceParticle.y);
            context.lineTo(targetParticle.x, targetParticle.y);
            context.strokeStyle = `rgba(251, 191, 36, ${0.13 - distance / 850})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }
      }

      animationFrameId = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      pointer.x = null;
      pointer.y = null;
    };

    setCanvasSize();
    initializeParticles();
    draw();

    window.addEventListener("resize", setCanvasSize);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 opacity-70"
      aria-hidden="true"
    />
  );
}
