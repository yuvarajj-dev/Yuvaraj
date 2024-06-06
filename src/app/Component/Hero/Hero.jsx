"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';
import { Homepage } from '../Homepage/Homepage';
import { About } from '../About/About';
import { Project } from '../Project/Project';
import { Contact } from '../Contact/Contact';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            let sections = gsap.utils.toArray(".panel");

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".container",
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () => "bottom+=1000% bottom",
                    markers: true
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            
            <div className="container ">
                <Homepage />
                <About />
                <Project />
                <Contact />
            </div>
        </>
    );
}

export default Hero;
