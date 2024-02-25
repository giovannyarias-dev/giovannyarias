import { useEffect, useState } from 'react'
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import './App.css'
import { leftFrameLogo, leftFrame, leftLens, leftLensLogo } from './paths/paths';
import { getIndex, useFlubber } from './use-flubber';

const framePaths = [leftFrame, leftFrameLogo, leftFrame];
const lensPaths = [leftLens, leftLensLogo, leftLens];
const colors = ["#00cc88", "#0099ff", "#00cc88"];

function App() {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, framePaths.map(getIndex), colors);
  const framePath = useFlubber(progress, framePaths);

  const lensPath = useFlubber(progress, lensPaths);


  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 3,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === framePaths.length - 1) {
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
    <>
      <svg width="200" height="200">
        <g transform="scale(10 10)">
          <motion.path fill={fill} d={framePath} />
          <motion.path fill={'#242424'} d={lensPath} />
        </g>
      </svg>
    </>
  );
}

export default App


