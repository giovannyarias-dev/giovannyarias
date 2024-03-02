import { useEffect, useState } from 'react'
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { leftFrameLogo, leftFrame, leftLens, leftLensLogo, rightFrame, rightFrameLogo, rightLens, rightLensLogo } from '../../paths/paths';
import { getIndex, useFlubber } from '../../hooks/useFlubber';

const framePaths = [leftFrame, leftFrameLogo, leftFrame];
const lensPaths = [leftLens, leftLensLogo, leftLens];

const rightFramePaths = [rightFrame, rightFrameLogo, rightFrame];
const rightLensPaths = [rightLens, rightLensLogo, rightLens];

const colors = ["#00cc88", "#0099ff", "#00cc88"];

function Glasses() {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, framePaths.map(getIndex), colors);
  
  const framePath = useFlubber(progress, framePaths);
  const lensPath = useFlubber(progress, lensPaths);

  const rightFramePath = useFlubber(progress, rightFramePaths);
  const rightLensPath = useFlubber(progress, rightLensPaths);

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
      <svg width="300">
        <g transform="scale(7.5 7.5)">
          <motion.path fill={fill} d={framePath}/>
          <motion.path fill={'#242424'} d={lensPath} />
          
          <motion.path fill={fill} d={rightFramePath} />
          <motion.path fill={'#242424'} d={rightLensPath} />
        </g>
      </svg>
    </>
  );
}

export default Glasses