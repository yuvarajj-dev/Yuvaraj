"use client"
import gsap from 'gsap/all';
import Lenis from '@studio-freight/lenis';
import React, { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Scroll = () => {
    useEffect(() => {
        const scroll_len = new Lenis();
        scroll_len.on("scroll", ScrollTrigger.update)
        gsap.ticker.add((time) => {
            scroll_len.raf(time * 900)
        })
        gsap.ticker.lagSmoothing(0)
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
        </>
    )
}

export default Scroll