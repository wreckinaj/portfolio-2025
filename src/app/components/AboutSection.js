'use client';

import React, {useRef} from "react";
import Image from "next/image";
import {motion, useInView} from 'framer-motion'

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return(
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            style={{ overflow: 'hidden' }}
        >
            <h2 className="text-4xl font-bold text-white mb-4">
                About Me
            </h2>
            <p className="text-base lg:text-lg">
                Welcome to my website! My name is Anthony. I am a third-year student
                at Oregon State University studying computer science and mathematics.
            </p>
            <br/>
            <p className="text-base lg:text-lg">
                My major interests include both web and mobile application development,
                artificial intelligence, applied mathematics, and probability. I also
                enjoy building robots, reading data and statistics, and studying
                geography.
            </p>
            <br/>
            <p className="text-base lg:text-lg">
                Feel free to take a look at my achievements below, as well as use the
                contact form and social links at the bottom to connect with me!
            </p>
        </motion.div>
    );
};

export default AboutSection;