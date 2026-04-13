import React from 'react';

interface HeadingWithWatermarkProps {
  text: string;
  className?: string;
  watermarkText?: string;
  watermarkClassName?: string;
}

export default function HeadingWithWatermark({ text, className = '', watermarkText, watermarkClassName = '' }: HeadingWithWatermarkProps) {
  const displayWatermark = watermarkText || text;

  return (
    <div className={`relative ${className}`}>
      <span className={`absolute -top-10 left-0 text-8xl font-black text-zinc-200 uppercase tracking-tighter select-none z-0 whitespace-nowrap opacity-50 ${watermarkClassName}`}>
        {displayWatermark}
      </span>
      <h1 className="relative z-10 text-5xl font-black text-[#1e3a8a] uppercase tracking-tight">
        {text}
      </h1>
    </div>
  );
}
