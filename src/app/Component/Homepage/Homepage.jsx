import React, { useEffect } from 'react'
import "./Homepage.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export const Homepage = () => {

  useGSAP(() => {
    const arrow = document.querySelectorAll('.arrow');

    gsap.fromTo(
      arrow,
      { x: 0 }, // Start with x position at 0
      {
        x: '+=20', // Move 10 pixels to the right
        duration: 1,
        delay: 2,
        ease: 'power2',
        repeat: -1, // Repeat infinitely
        yoyo: true, // Reverse the animation to return to the default position
      }
    );

    gsap.fromTo(
      arrow,
      { opacity: 0 }, // Start with opacity 0
      {
        opacity: 1, // Fade in after the delay
        duration: 1,
        delay: 2,
        ease: 'power2',
      }
    );


    const headingElement = document.getElementById("heading");

    let typeSplit;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 640px)", () => {

      typeSplit = new SplitType(headingElement, {
        types: 'lines, words, chars',
      });
    });

    mm.add("(max-width: 639px)", () => {

      typeSplit = new SplitType(headingElement, {
        types: 'words',
        tagName: 'span',
      });
    });

    gsap.fromTo(
      typeSplit.words || typeSplit.lines,
      {
        y: '100%',
        opacity: 0,
      },
      {
        y: '0%',
        opacity: 1,
        duration: 0.50,
        ease: 'sine.out',
        stagger: 0.10,
        onComplete: () => {
          typeSplit.revert();
        },
      }
    );


    const animation = gsap.fromTo(
      headingElement,
      {
        scaleX: 1,
        skewY: 0,
      },
      {
        scaleX: 0,
        scrollTrigger: {
          trigger: headingElement,
          start: 'bottom -70%',
          end: 'top -60%',
          scrub: 2,
        },
        ease: 'none',
        skewY: 5,
      }
    );

    return () => {
      mm.revert();
      if (typeSplit) {
        typeSplit.revert();
      }
      animation.kill();
    };
  }, []);



  return (
    <>
      <div className={`panel text-[#41C9E2] bg-[#EEF5FF] px-5 xl:px-10 sm:py-0 py-5 relative`}>
        <h1 id='heading' className='xl:text-[150px] xl:w-[88%] lg:text-[115px] sm:text-[100px] text-[80px] leading-[90px] lg:leading-[150px] xl:leading-[190px] sm:leading-[120px] tracking-wider  w-full '>Hi, I'm YUVARAJ. <br className='sm:block hidden' /> A passionate Full Stack Developer based in <span className=''> India.</span></h1>
        <div id="arrow" className='absolute arrow top-0 -right-[12rem] z-0'>
          <svg
            enableBackground="new 0 0 512 512"
            height="100px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            width="512px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <path
                d="M41.037,340.689c-3.81,0-7.233-2.57-8.211-6.367c-1.099-4.261,1.23-8.655,5.368-10.131l47.232-16.829
                      c0.572-0.198,1.166-0.349,1.771-0.431l175.874-22.665l-187.493,9.186c-4.606,0.165-8.552-3.267-8.884-7.859
                      c-0.224-3.117,1.26-5.969,3.665-7.627l-37.103-4.957c-4.646-0.63-7.909-4.892-7.287-9.551c0.626-4.639,4.949-7.913,9.542-7.283
                      l40.509,5.426l197.604-4.033l193.192-18.379c4.768-0.563,8.813,2.984,9.261,7.644c0.438,4.667-2.976,8.813-7.651,9.252
                      l-14.242,1.359c0.662,0.887,1.151,1.924,1.425,3.063c0.944,3.863-0.929,7.858-4.493,9.616l-18.055,8.887
                      c-0.847,0.415-1.743,0.68-2.671,0.813l-79.998,10.313L42.417,340.573C41.953,340.655,41.493,340.689,41.037,340.689z"
                fill="#231F20"
              />
              <path
                d="M329.317,354.699c-2.909,0-5.736-1.492-7.319-4.162c-2.329-3.945-1.104-9.035,2.76-11.489L448,260.805
                      c-74.71-34.093-124.071-56.376-131.821-59.51c-1.609-0.373-3.127-1.202-4.287-2.354c-0.937-0.937-1.625-2.048-2.038-3.25
                      c-1.534-2.388-8.075-12.112-13.962-20.708c-2.171-3.176-1.931-7.42,0.58-10.338c2.521-2.91,6.683-3.756,10.147-2.089
                      l171.972,83.606c2.769,1.343,4.591,4.087,4.758,7.154c0.1,1.633-0.282,3.225-1.045,4.6c2.256,1.493,3.697,4.018,3.797,6.771
                      c0.115,3.216-1.592,6.217-4.41,7.76l-148.303,81.21C332.095,354.367,330.693,354.699,329.317,354.699z"
                fill="#231F20"
              />
              <path
                d="M302.913,385.505c-3.059,0-6.009-1.658-7.526-4.542c-2.181-4.161-0.571-9.286,3.572-11.475l161.062-84.477
                      L297.284,141.357c-3.516-3.109-3.847-8.473-0.745-11.988c3.1-3.515,8.472-3.855,11.987-0.746l171.97,151.813
                      c2.089,1.84,3.142,4.609,2.802,7.378c-0.331,2.769-2.005,5.206-4.476,6.499l-171.972,90.213
                      C305.591,385.19,304.24,385.505,302.913,385.505z"
                fill="#231F20"
              />
            </g>
          </svg>
        </div>
        <div id='arrow' className='absolute arrow bottom-0 -right-[12rem] z-0'>
          <svg
            enableBackground="new 0 0 512 512"
            height="100px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            width="512px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <path
                d="M41.037,340.689c-3.81,0-7.233-2.57-8.211-6.367c-1.099-4.261,1.23-8.655,5.368-10.131l47.232-16.829
                      c0.572-0.198,1.166-0.349,1.771-0.431l175.874-22.665l-187.493,9.186c-4.606,0.165-8.552-3.267-8.884-7.859
                      c-0.224-3.117,1.26-5.969,3.665-7.627l-37.103-4.957c-4.646-0.63-7.909-4.892-7.287-9.551c0.626-4.639,4.949-7.913,9.542-7.283
                      l40.509,5.426l197.604-4.033l193.192-18.379c4.768-0.563,8.813,2.984,9.261,7.644c0.438,4.667-2.976,8.813-7.651,9.252
                      l-14.242,1.359c0.662,0.887,1.151,1.924,1.425,3.063c0.944,3.863-0.929,7.858-4.493,9.616l-18.055,8.887
                      c-0.847,0.415-1.743,0.68-2.671,0.813l-79.998,10.313L42.417,340.573C41.953,340.655,41.493,340.689,41.037,340.689z"
                fill="#231F20"
              />
              <path
                d="M329.317,354.699c-2.909,0-5.736-1.492-7.319-4.162c-2.329-3.945-1.104-9.035,2.76-11.489L448,260.805
                      c-74.71-34.093-124.071-56.376-131.821-59.51c-1.609-0.373-3.127-1.202-4.287-2.354c-0.937-0.937-1.625-2.048-2.038-3.25
                      c-1.534-2.388-8.075-12.112-13.962-20.708c-2.171-3.176-1.931-7.42,0.58-10.338c2.521-2.91,6.683-3.756,10.147-2.089
                      l171.972,83.606c2.769,1.343,4.591,4.087,4.758,7.154c0.1,1.633-0.282,3.225-1.045,4.6c2.256,1.493,3.697,4.018,3.797,6.771
                      c0.115,3.216-1.592,6.217-4.41,7.76l-148.303,81.21C332.095,354.367,330.693,354.699,329.317,354.699z"
                fill="#231F20"
              />
              <path
                d="M302.913,385.505c-3.059,0-6.009-1.658-7.526-4.542c-2.181-4.161-0.571-9.286,3.572-11.475l161.062-84.477
                      L297.284,141.357c-3.516-3.109-3.847-8.473-0.745-11.988c3.1-3.515,8.472-3.855,11.987-0.746l171.97,151.813
                      c2.089,1.84,3.142,4.609,2.802,7.378c-0.331,2.769-2.005,5.206-4.476,6.499l-171.972,90.213
                      C305.591,385.19,304.24,385.505,302.913,385.505z"
                fill="#231F20"
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  )
}
