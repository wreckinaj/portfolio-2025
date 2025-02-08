'use client';

import React, {useRef} from "react";
import Image from "next/image";
import {motion, useInView} from 'framer-motion'
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa'; // Importing icons

const SocialSection = () => {
    return(
        <footer className="relative flex flex-col h-48 items-center justify-evenly">
        <div className="overflow-hidden">
        <ul className="relative grid grid-cols-4 gap-4">
            <li>
                <a className="flex w-16 h-16 items-center justify-center rounded-md border-2 border-black" href="https://github.com/wreckinaj">
                    <FaGithub/>
                </a>
            </li>
            <li>
                <a className="flex w-16 h-16 items-center justify-center rounded-md border-2 border-black" href="https://www.linkedin.com/in/anthony-silva-613165291/">
                    <FaLinkedin/>
                </a>
            </li>
            <li>
                <a className="flex w-16 h-16 items-center justify-center rounded-md border-2 border-black" href="https://www.youtube.com/@AnthonySilva0228">
                    <FaYoutube/>
                </a>
            </li>
            <li>
                <a className="flex w-16 h-16 items-center justify-center rounded-md border-2 border-black" href="https://www.instagram.com/wreckinaj/">
                    <FaInstagram/>
                </a>
            </li>
        </ul>
        </div>
        <p className="relative">Made by Anthony Silva</p>
        </footer>
    );
}

export default SocialSection;