import React, { useRef, useEffect } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    
    const resizeHandler = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeHandler);

    const cols = Math.floor(w / 25) + 1;
    const ypos = Array(cols).fill(0);

    const draw = () => {
      const isDark = document.documentElement.classList.contains('dark');
      
      // Background fade
      ctx.fillStyle = isDark ? 'rgba(17, 24, 39, 0.08)' : 'rgba(249, 250, 251, 0.08)';
      ctx.fillRect(0, 0, w, h);

      // Matrix characters
      ctx.fillStyle = isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(37, 99, 235, 0.1)';
      ctx.font = '14pt Monaco, monospace';

      ypos.forEach((y, ind) => {
        const chars = '01abcdefghijklmnopqrstuvwxyz';
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = ind * 25;
        ctx.fillText(text, x, y);
        
        if (y > 100 + Math.random() * 10000) {
          ypos[ind] = 0;
        } else {
          ypos[ind] = y + 25;
        }
      });
    };
    
    const interval = setInterval(draw, 80);
    resizeHandler();

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />;
};

export default MatrixBackground;