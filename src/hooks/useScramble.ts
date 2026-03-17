import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function scrambleText(text: string, progress: number): string {
  const nonSpaceLen = text.replace(/[\s\n.%<+]/g, '').length;
  let idx = 0;
  return text.split('').map(char => {
    if (/[\s\n.%<+]/.test(char)) return char;
    const charProgress = idx++ / Math.max(nonSpaceLen, 1);
    // Characters settle left-to-right: each char settles when progress passes its threshold
    const settleAt = charProgress * 0.65 + 0.35;
    if (progress >= settleAt) return char;
    return CHARS[Math.floor(Math.random() * CHARS.length)];
  }).join('');
}

interface Options {
  duration?: number;
  delay?: number;
  enabled?: boolean;
}

export function useScramble(
  text: string,
  { duration = 1000, delay = 0, enabled = true }: Options = {}
): string {
  const [output, setOutput] = useState(() => (enabled ? scrambleText(text, 0) : text));
  const rafRef   = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!enabled) {
      setOutput(text);
      return;
    }

    setOutput(scrambleText(text, 0));

    timerRef.current = setTimeout(() => {
      const start = performance.now();

      const animate = () => {
        const progress = Math.min((performance.now() - start) / duration, 1);
        setOutput(scrambleText(text, progress));
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setOutput(text);
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [text, duration, delay, enabled]);

  return output;
}
