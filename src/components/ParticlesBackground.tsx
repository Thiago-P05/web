import { useEffect } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

interface ParticlesBackgroundProps {
  height?: string;
  className?: string;
}

const ParticlesBackground = ({ height = "100vh", className = "" }: ParticlesBackgroundProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      window.particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 200,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle"
          },
          "opacity": {
            "value": 0.08,  // Más visible
            "random": false
          },
          "size": {
            "value": 3,
            "random": true
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,  // Más visible
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "push": {
              "particles_nb": 4
            }
          }
        },
        "retina_detect": true
      });
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      id="particles-js" 
      className={`absolute top-0 left-0 w-full ${className}`}
      style={{
        height: height,
        backgroundColor: '#000000',
        zIndex: 0  // Neutro, no negativo
      }}
    />
  );
};

export default ParticlesBackground;