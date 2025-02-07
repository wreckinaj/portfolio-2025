'use client';

import React, {useRef} from "react";
import Image from "next/image";
import {motion, useInView} from 'framer-motion'

const SocialSection = () => {
    return(
        <footer className="relative flex flex-col items-center justify-evenly bg-gray-600">
        <div className="overflow-hidden">
        <ul className="relative grid grid-cols-4 gap-4">
            <li>
                <a href="https://github.com/wreckinaj">
                    Github
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/anthony-silva-613165291/">
                    LinkedIn
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/@AnthonySilva0228">
                    YouTube
                </a>
            </li>
            <li>
                <a href="">
                    Instagram
                </a>
            </li>
        </ul>
        </div>
        <p className="relative">Made by Anthony Silva</p>
        </footer>
    );
}

export default SocialSection;