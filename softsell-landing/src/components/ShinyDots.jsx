import React, { useState, useEffect } from 'react';

const ShinyDots = () => {
  const [dots, setDots] = useState([]);
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      const newDot = {
        x: event.clientX,  
        y: event.clientY, 
        size: Math.random() * 5 + 3, 
        color: `hsl(${Math.random() * 360}, 100%, 50%)`, 
      };
      
      setDots((prevDots) => {
        const updatedDots = [...prevDots, newDot];
        if (updatedDots.length > 5) {
          updatedDots.shift(); 
        }
        return updatedDots;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div>
      {dots.map((dot, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${dot.x - dot.size / 2}px`,   
            top: `${dot.y - dot.size / 2}px`,    
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
            borderRadius: '50%',
            pointerEvents: 'none', 
            animation: 'shine 1s ease-out', 
          }}
        />
      ))}
    </div>
  );
};

export default ShinyDots;
