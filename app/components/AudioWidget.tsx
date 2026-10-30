'use client';

import { useEffect, useRef, useState } from 'react';

export default function AudioWidget() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

  // Try autoplay once; if the browser blocks it, pulse the button
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    audio.play()
      .then(() => setPlaying(true))
      .catch(() => setBlocked(true)); // autoplay blocked — invite the click

    return () => audio.pause();
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => {
        setPlaying(true);
        setBlocked(false);
      }).catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={toggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        className={`flex items-center gap-3 bg-neutral-950/90 border border-white/20 rounded-full pl-3 pr-5 py-2 backdrop-blur hover:border-red-600 transition-colors ${
          blocked && !playing ? 'animate-pulse' : ''
        }`}
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold">
          {playing ? '❚❚' : '▶'}
        </span>
        <span className="font-display font-bold text-white text-xs uppercase tracking-widest hidden sm:inline">
          {playing ? 'Now Playing' : 'CTS Soundtrack'}
        </span>
      </button>
      <audio ref={audioRef} src="/audio/theme.mp3" loop preload="auto" />
    </div>
  );
}