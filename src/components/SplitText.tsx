import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SplitText = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}: {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: string;
  from?: { opacity: number; y?: number; x?: number };
  to?: { opacity: number; y?: number; x?: number };
  threshold?: number;
  rootMargin?: string;
  textAlign?: string;
  tag?: string;
  onLetterAnimationComplete?: () => void;
}) => {
  const ref = useRef<HTMLElement>(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Keep callback ref updated
  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      // Prevent re-animation if already completed
      if (animationCompletedRef.current) return;
      
      const el = ref.current;
      const elements = el.querySelectorAll('.split-char, .split-word');
      
      if (elements.length === 0) return;

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      // Set initial state
      gsap.set(elements, { ...from });

      const animation = gsap.to(elements, {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
          toggleActions: 'play none none none',
          onEnter: () => {
            // Ensure animation plays
          }
        },
        onComplete: () => {
          animationCompletedRef.current = true;
          onCompleteRef.current?.();
        }
      });

      // Fallback: if element is already in view, animate immediately
      const rect = el.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInView) {
        // Trigger animation immediately if already in viewport
        setTimeout(() => {
          if (!animationCompletedRef.current) {
            gsap.to(elements, {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
              onComplete: () => {
                animationCompletedRef.current = true;
                onCompleteRef.current?.();
              }
            });
          }
        }, 100);
      }

      return () => {
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === el) st.kill();
        });
        if (animation) animation.kill();
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded
      ],
      scope: ref
    }
  );

  const splitTextContent = () => {
    // Check if parent has gradient classes
    const hasGradient = className.includes('bg-gradient') || className.includes('bg-clip-text');
    const isTransparent = className.includes('text-transparent');
    
    if (splitType === 'chars' || splitType.includes('chars')) {
      return text.split('').map((char, i) => (
        <span 
          key={i} 
          className={`split-char ${hasGradient && isTransparent ? className : ''}`}
          style={{ 
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
            minWidth: char === ' ' ? '0.25em' : 'auto'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    } else if (splitType === 'words' || splitType.includes('words')) {
      return text.split(' ').map((word, i, arr) => (
        <span 
          key={i} 
          className={`split-word ${hasGradient && isTransparent ? className : ''}`}
          style={{ 
            display: 'inline-block',
            whiteSpace: 'nowrap',
            marginRight: i < arr.length - 1 ? '0.25em' : '0'
          }}
        >
          {word}
        </span>
      ));
    }
    return text;
  };

  const renderTag = () => {
    const hasGradient = className.includes('bg-gradient') || className.includes('bg-clip-text');
    const isTransparent = className.includes('text-transparent');
    
    // Remove gradient classes from parent if splitting text
    const parentClasses = hasGradient && isTransparent 
      ? className.replace(/text-transparent|bg-clip-text|bg-gradient-[^\s]*/g, '').trim()
      : className;
    
    const style = {
      textAlign,
      display: 'block',
      width: '100%',
      whiteSpace: 'normal' as const,
      wordWrap: 'break-word' as const,
      willChange: 'transform, opacity'
    };
    const classes = `split-parent ${parentClasses}`;
    const content = splitTextContent();
    
    switch (tag) {
      case 'h1':
        return (
          <h1 ref={ref as any} style={style} className={classes}>
            {content}
          </h1>
        );
      case 'h2':
        return (
          <h2 ref={ref as any} style={style} className={classes}>
            {content}
          </h2>
        );
      case 'h3':
        return (
          <h3 ref={ref as any} style={style} className={classes}>
            {content}
          </h3>
        );
      case 'h4':
        return (
          <h4 ref={ref as any} style={style} className={classes}>
            {content}
          </h4>
        );
      case 'h5':
        return (
          <h5 ref={ref as any} style={style} className={classes}>
            {content}
          </h5>
        );
      case 'h6':
        return (
          <h6 ref={ref as any} style={style} className={classes}>
            {content}
          </h6>
        );
      default:
        return (
          <p ref={ref as any} style={style} className={classes}>
            {content}
          </p>
        );
    }
  };
  return renderTag();
};

export default SplitText;
