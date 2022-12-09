import React, { useState } from "react";
import { motion, useAnimation } from 'framer-motion';
import {
  Box,
} from "@chakra-ui/react";

import {
  Star,
  ThumbUp,
  ThumbDown,
  InformationCircle,
  XCircle,
  PlusCircle,
} from "@styled-icons/heroicons-outline";

import styles from './BouncingBar.module.scss'


const bubbleVariants = {
  opened: {
    y: -115,
    opacity: 1
  },
  closed: {
    y: 0,
    opacity: 0
  }
}
export const BouncingBar = ({
  icons:[]
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isTapping, setIsTapping] = useState(false);
  const svgControls = useAnimation();
  const handleTapStart = () => {
    if (!isClicked) {
      setIsTapping(true);
      svgControls.start({
        d: 'M 0 100 Q 200 125 400 100 L 400 200 L 0 200 Z'
      });
    }
  }
  const handleTapEnd = () => {
    if (!isClicked) {
      setIsTapping(false);
      svgControls.start({
        d: [
          'M 0 100 Q 200 125 400 100 L 400 200 L 0 200 Z',
          'M 0 100 Q 200 75 400 100 L 400 200 L 0 200 Z',
          'M 0 100 Q 200 100 400 100 L 400 200 L 0 200 Z'
        ],
        transition: {
          ease: [1, .14, .45, .86],
          duration: .5
        }
      });
    } 
  }
  const handleTapCancel = () => {
    setIsTapping(false);
    svgControls.start({
      d: 'M 0 100 Q 200 100 400 100 L 400 200 L 0 200 Z'
    })
  }
  return (
    <div className={styles["bouncing-bar"]}>
      <div className={styles["bar-container"]}>
        <div className={styles["icons-container"]}>
          <motion.div 
            className={styles["icon-background"]}
            animate={{ 
              rotate: isClicked ? 45 : 0,
              y: isTapping ? 7 : 0
            }}
            onClick={() => setIsClicked(!isClicked)}
            onTapStart={handleTapStart}
            onTap={handleTapEnd}
            onTapCancel={handleTapCancel}
            whileTap={{ backgroundColor: '#ffcdcc' }}
          >
            <PlusCircle/>
          </motion.div>
         
        </div>
        <svg viewBox="0 0 400 200" className={styles["bar"]}>
          <motion.path 
            d="M 0 100 Q 200 100 400 100 L 400 200 L 0 200 Z"
            animate={svgControls}
          />
        </svg>
        <motion.div 
          className={styles["bubbles-container"]}
          animate={isClicked ? "opened" : "closed"}
        >
          <motion.div 
            className={styles["bubble"]}
            variants={bubbleVariants}
          >
            <ThumbDown/>
          </motion.div>
          <motion.div 
            className={styles["bubble"]}
            variants={bubbleVariants}
            transition={{ delay: isClicked ? .07 : .05 }}
          >
            <Star/>
          </motion.div>
          <motion.div 
            className={styles["bubble"]}
            variants={bubbleVariants}
          >
            <ThumbUp/>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export type BouncingBarProps = React.ComponentProps<typeof BouncingBar>;
