import { useEffect, useRef, useState } from 'react';

interface Options {
  speed?: number;
  delay?: number;
  enabled?: boolean;
}

export function useTypewriter(
  text: string,
  { speed = 38, delay = 0, enabled = true }: Options = {}
): { displayed: string; done: boolean } {
  const [displayed, setDisplayed] = useState('');
  const timerRef    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!enabled) {
      setDisplayed(text);
      return;
    }

    setDisplayed('');

    timerRef.current = setTimeout(() => {
      let i = 0;
      intervalRef.current = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length && intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }, speed);
    }, delay);

    return () => {
      if (timerRef.current)    clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, speed, delay, enabled]);

  return { displayed, done: displayed.length >= text.length };
}
