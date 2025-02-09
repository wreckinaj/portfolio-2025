'use client';

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeaderSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-red-600 mb-2 sm:mb-4 sm:text-5xl text-4xl lg:text-6xl font-bold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600'>
                            Hello, I'm Anthony,{' '}
                        </span>
                        <div
                            className='inline-block align-top'
                            style={{
                                minWidth: '300px',
                                height: '1.2em', // Default for single-line text
                                transition: 'height 0.2s ease-in-out',
                            }}
                        >
                            <TypeAnimation
                                sequence={[
                                    'Software Engineer.',
                                    1000,
                                    'Backend Developer.',
                                    1000,
                                    'AI Fanatic.',
                                    1000,
                                    'Swimmer.',
                                    1000,
                                    'Geography Lover.',
                                    1000,
                                    'Leader.',
                                    1000,
                                    'Problem Solver.',
                                    1000,
                                    'a person on the spectrum.',
                                    1000,
                                    'willing to make a difference.',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{
                                    display: 'inline-block',
                                    whiteSpace: 'pre-wrap',
                                    lineHeight: '1.2',
                                }}
                                repeat={Infinity}
                            />
                        </div>
                    </h1>
                    <p className='text-zinc-400 text-base sm:text-lg mb-4 lg:text-xl'>
                        Changing coding to change the world!
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 via-pink-500 to-purple-500 hover:bg-slate-200 text-white'>
                            Connect With Me
                        </button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-purple-500 hover:bg-slate-800 text-white border mt-3'>
                            <span className='block bg-sky-800 hover:bg-slate-800 rounded-full px-5 py-2'>
                                My Resume
                            </span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-sky-700 w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            src="/anthony.jpg"
                            alt="Anthony's image"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;