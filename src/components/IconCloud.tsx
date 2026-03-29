import { useEffect, useRef } from "react";
import {
  SiJavascript,
  SiPython,
  SiPhp,
  SiWordpress,
  SiShopify,
  SiMysql,
  SiFigma,
  SiGithub,
  SiReact,
  SiBootstrap,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiVercel,
  SiGit,
} from "react-icons/si";

export default function TechIconCloud() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  /* =========================
     ROTATION ANIMATION
  ========================== */
  useEffect(() => {
    let frameId: number;
    let angle = 0;

    const animate = () => {
      angle += 0.003;

      if (containerRef.current) {
        containerRef.current.style.transform = `
          rotateY(${angle * 50}deg)
          rotateX(${angle * 25}deg)
        `;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  /* =========================
     ICONS + BRAND COLORS
  ========================== */
  const icons = [
    { Icon: SiJavascript, color: "#F7DF1E" },
    { Icon: SiPython, color: "#3776AB" },
    { Icon: SiPhp, color: "#777BB4" },
    { Icon: SiWordpress, color: "#21759B" },
    { Icon: SiShopify, color: "#7AB55C" },
    { Icon: SiMysql, color: "#4479A1" },
    { Icon: SiFigma, color: "#F24E1E" },
    { Icon: SiGithub, color: "#ffffff" },
    { Icon: SiReact, color: "#61DAFB" },
    { Icon: SiBootstrap, color: "#7952B3" },
    { Icon: SiNextdotjs, color: "#ffffff" },
    { Icon: SiTypescript, color: "#3178C6" },
    { Icon: SiHtml5, color: "#E34F26" },
    { Icon: SiCss, color: "#1572B6" },
    { Icon: SiNodedotjs, color: "#339933" },
    { Icon: SiVercel, color: "#ffffff" },
    { Icon: SiGit, color: "#F05032" },
  ];

  /* =========================
     SPHERE POSITIONING
     (Fibonacci Sphere)
  ========================== */
  const radius = 120;
  const total = icons.length;

  return (
    <div
      className="flex justify-center items-center h-[400px]"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={containerRef}
        className="relative w-[260px] h-[260px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {icons.map(({ Icon, color }, i) => {
          // Fibonacci sphere distribution
          const phi = Math.acos(-1 + (2 * i) / total);
          const theta = Math.sqrt(total * Math.PI) * phi;

          const x = radius * Math.cos(theta) * Math.sin(phi);
          const y = radius * Math.sin(theta) * Math.sin(phi);
          const z = radius * Math.cos(phi);

          return (
            <div
              key={i}
              className="absolute transition-transform duration-300 hover:scale-125"
              style={{
                color,
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                filter: `drop-shadow(0 0 8px ${color})`,
              }}
            >
              <Icon size={40} />
            </div>
          );
        })}
      </div>
    </div>
  );
}