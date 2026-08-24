import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Box } from "@chakra-ui/react";

// Scroll Reveal - Elemento aparece ao rolar
export const ScrollReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}> = ({ children, delay = 0, direction = "up" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, ...directionOffset[direction] },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, delay } },
      }}
    >
      {children}
    </motion.div>
  );
};

// Contador Animado - Números que contam
export const AnimatedCounter: React.FC<{
  end: number;
  duration?: number;
  suffix?: string;
}> = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const start = performance.now();
      const animate = (time: number) => {
        const progress = Math.min((time - start) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// Glassmorphism Card
export const GlassCard: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(10px)"
      border="1px solid rgba(255, 255, 255, 0.2)"
      borderRadius="2xl"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
      p={8}
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
      }}
      transition="all 0.3s ease"
    >
      {children}
    </Box>
  );
};

// Gradiente Animado
export const AnimatedGradient: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      bg="linear-gradient(135deg, #FF8C42 0%, #FFA366 50%, #FF8C42 100%)"
      backgroundSize="200% 200%"
      animation="gradient 3s ease infinite"
      borderRadius="2xl"
      p={8}
    >
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      {children}
    </Box>
  );
};

// Partículas Flutuantes
export const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; speed: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 0.3 + 0.1,
    }));
    setParticles(newParticles);

    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          y: p.y - p.speed,
          x: p.x + Math.sin(p.y * 0.1) * 0.3,
        }))
      );
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="absolute" top="0" left="0" right="0" bottom="0" overflow="hidden">
      {particles.map((p, i) => (
        <Box
          key={i}
          position="absolute"
          left={`${p.x}%`}
          top={`${p.y}%`}
          width={`${p.size}px`}
          height={`${p.size}px`}
          borderRadius="full"
          bg="brand.orange"
          opacity={0.2 + Math.random() * 0.5}
        />
      ))}
    </Box>
  );
};