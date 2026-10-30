'use client';

import { useEffect, useRef, useState } from 'react';

export default function AudioWidget() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  // Attempt autoplay; browsers will usually block until first interaction
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    audio.play().then(() => setPlaying(true)).catch(() => {});
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setPlaying(true);
          setError(false);
        })
        .catch(() => setError(true)); // now you'll SEE it fail instead of silent nothing
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-950/95 border-t border-white/10 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center gap-4 px-4 py-2">

        <button
          onClick={toggle}
          aria-label={playing ? 'Pause music' : 'Play music'}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-red-600 text-white text-sm font-bold shrink-0 hover:bg-red-700 transition-colors"
        >
          {playing ? '❚❚' : '▶'}
        </button>

        <div className="flex-1 min-w-0">
          <p className="font-display font-bold text-white text-xs uppercase tracking-widest truncate">
            {error ? 'Audio file not found — check the file path' : playing ? 'Now Playing' : 'CTS Soundtrack'}
          </p>
          <p className="text-white/40 font-body text-[10px] uppercase tracking-widest">
            {error ? '' : 'Chesapeake Tower Solutions'}
          </p>
        </div>

        <audio ref={audioRef} src="/audio/dave-song.mp3" loop preload="auto" className="hidden" />
      </div>
    </div>
  );
}