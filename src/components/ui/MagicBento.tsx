import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagicBentoProps {
  children?: React.ReactNode;
  className?: string;
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  glowColor?: string;
  disableAnimations?: boolean;
}

const MagicBento: React.FC<MagicBentoProps> = ({
  children,
  className = '',
  textAutoHide = false,
  enableStars = false,
  enableSpotlight = false,
  enableBorderGlow = false,
  enableTilt = false,
  enableMagnetism = false,
  clickEffect = false,
  spotlightRadius = 400,
  particleCount = 12,
  glowColor = "255, 255, 255",
  disableAnimations = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const borderGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disableAnimations || !containerRef.current) return;

    const container = containerRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (enableSpotlight && spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          x,
          y,
          duration: 0.1,
          ease: 'power2.out',
        });
      }

      if (enableBorderGlow && borderGlowRef.current) {
         gsap.to(borderGlowRef.current, {
           '--mouse-x': `${x}px`,
           '--mouse-y': `${y}px`,
           duration: 0.1,
         });
      }

      if (enableMagnetism) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const dx = x - centerX;
        const dy = y - centerY;

        gsap.to(container, {
          x: dx * 0.04,
          y: dy * 0.04,
          duration: 0.4,
          ease: 'power2.out',
        });
      }

      if (enableTilt) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 5; // Max 5deg
        const rotateY = ((x - centerX) / centerX) * -5;

        gsap.to(container, {
          rotateX,
          rotateY,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
        if (enableMagnetism) {
          gsap.to(container, {
            x: 0,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
          });
        }
        if (enableTilt) {
            gsap.to(container, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: 'power2.out',
            });
        }
    };

    const handleClick = () => {
      if (!clickEffect) return;
      gsap.fromTo(
        container,
        { scale: 0.98 },
        { scale: 1, duration: 0.22, ease: 'power2.out' },
      );
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    if (clickEffect) container.addEventListener('click', handleClick);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (clickEffect) container.removeEventListener('click', handleClick);
    };
  }, [disableAnimations, enableSpotlight, enableBorderGlow, enableTilt, enableMagnetism, clickEffect]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl ${className} group`}
      style={{ perspective: enableTilt ? '1000px' : 'none' }}
    >
      {/* Background Stars */}
      {enableStars && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {Array.from({ length: particleCount }).map((_, i) => (
            <Star key={i} index={i} glowColor={glowColor} />
          ))}
        </div>
      )}

      {/* Spotlight Effect */}
      {enableSpotlight && (
        <div
          ref={spotlightRef}
          className="absolute pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            width: spotlightRadius * 2,
            height: spotlightRadius * 2,
            left: -spotlightRadius,
            top: -spotlightRadius,
            background: `radial-gradient(circle, rgba(${glowColor}, 0.15) 0%, rgba(${glowColor}, 0) 70%)`,
            transform: 'translate(0, 0)',
          }}
        />
      )}

      {/* Border Glow */}
      {enableBorderGlow && (
        <div
          ref={borderGlowRef}
          className="absolute inset-0 z-20 pointer-events-none rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
             background: `radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(${glowColor}, 0.4), transparent 40%)`,
             maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
             maskClip: 'content-box, border-box',
             maskComposite: 'exclude',
             padding: '1px',
             // @ts-ignore
             '--mouse-x': '0px',
             '--mouse-y': '0px',
          }}
        />
      )}

      {/* Content */}
      <div className={`relative z-10 h-full w-full ${textAutoHide ? 'transition-all duration-300' : ''}`}>
        {children}
      </div>
    </div>
  );
};

const Star = ({ index, glowColor }: { index: number; glowColor: string }) => {
  const starRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const star = starRef.current;
    if (!star) return;

    // Random initial position
    gsap.set(star, {
      x: Math.random() * 100 + '%',
      y: Math.random() * 100 + '%',
      scale: Math.random() * 0.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    });

    // Floating animation
    gsap.to(star, {
      y: `+=${Math.random() * 20 - 10}%`,
      x: `+=${Math.random() * 20 - 10}%`,
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 3 + 2,
      delay: index * 0.02,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <div
      ref={starRef}
      className="absolute w-1 h-1 rounded-full bg-white"
      style={{
        boxShadow: `0 0 4px rgba(${glowColor}, 0.8)`,
      }}
    />
  );
};

export default MagicBento;
