import { motion } from "framer-motion";

export default function Hamburger({ active }: { active: boolean }) {
  return (
    <svg
      width="48px"
      height="48px"
      viewBox="0 0 48 48"
      version="1.1"
      xmlns="http://www.w3.org/2000/motion.svg"
    >
      <g>
        <motion.line
          variants={{
            inactive: { y: 0, rotate: 0 },
            active: { y: "7px", rotate: "-45deg" },
          }}
          animate={active ? "active" : "inactive"}
          x1="0"
          y1="17"
          x2="48"
          y2="17"
          stroke-width="3"
          stroke="#DD8004"
        />
        <motion.line
          variants={{
            inactive: { y: 0 },
            active: { y: "-7px", rotate: "45deg" },
          }}
          animate={active ? "active" : "inactive"}
          x1="0"
          y1="31"
          x2="48"
          y2="31"
          stroke-width="3"
          stroke="#DD8004"
        />
      </g>
    </svg>
  );
}
