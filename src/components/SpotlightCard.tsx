import React, { useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  spotSize?: number;
  spotOpacity?: number;
}

const SpotlightCard: React.FC<Props> = ({
  children,
  className = '',
  style,
  spotSize = 360,
  spotOpacity = 0.045,
}) => {
  const ref  = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        background: pos
          ? `radial-gradient(${spotSize}px at ${pos.x}px ${pos.y}px, rgba(255,255,255,${spotOpacity}), transparent 70%)`
          : undefined,
      }}
      onMouseMove={e => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setPos(null)}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
