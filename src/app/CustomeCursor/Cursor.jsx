"use client"
import { useEffect } from 'react';
import gsap from 'gsap';
import './Cursor.css'; // Ensure this path is correct based on your project structure

const  Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursorFollower');

    let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

    gsap.set(cursor, { opacity: 1 });
    gsap.set([cursor, follower], { xPercent: -50, yPercent: -50 });

    const updatePosition = () => {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;
      gsap.set(follower, { x: posX, y: posY });
      gsap.set(cursor, { x: mouseX, y: mouseY });
      requestAnimationFrame(updatePosition);
    };

    updatePosition();

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.3 });
      gsap.to(follower, { scale: 1.2, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, { scale: 1, duration: 0.3 });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.querySelectorAll('a, button, .hover-target').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('a, button, .hover-target').forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor"><span className="piu">SCOPRI</span></div>
      <div className="cursorFollower"></div>
    </>
  );
};

export default  Cursor;
