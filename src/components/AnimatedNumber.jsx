'use client';

import React, { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";

const AnimatedNumber = ({ number }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView({ ref });

  useEffect(() => {

  }, []);

  return <span ref={ref}>{number}</span>;
};

export default AnimatedNumber;
