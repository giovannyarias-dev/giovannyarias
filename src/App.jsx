import { useEffect, useState } from 'react'
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import './App.css'
import { leftFrameLogo, leftFrame } from './paths/paths';
import { getIndex, useFlubber } from './use-flubber';

const paths = [leftFrame, leftFrameLogo, leftFrame];
const colors = ["#00cc88", "#0099ff", "#00cc88"];

function App() {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 3,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });

    return () => animation.stop();
  }, [pathIndex]);

  return (
    <svg width="400" height="400">
      <g transform="scale(10 10)">
        <motion.path fill={fill} d={path} />
      </g>
    </svg>
  );
}

export default App


