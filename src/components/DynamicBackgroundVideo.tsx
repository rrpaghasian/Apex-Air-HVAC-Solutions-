import React, { RefObject } from 'react';

interface DynamicBackgroundVideoProps {
  videoRef: RefObject<HTMLVideoElement | null>;
}

export const DynamicBackgroundVideo: React.FC<DynamicBackgroundVideoProps> = ({ videoRef }) => {
  return (
    <div 
      className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-slate-950 pointer-events-none bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80')`
      }}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        poster="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80"
        className="w-full h-full object-cover"
        style={{ objectFit: 'cover' }}
      >
        {/* Primary static video file served from public/ */}
        <source src="/video_1_reversed.mp4" type="video/mp4" />
        {/* Direct CDN fallback */}
        <source src="https://dl.dropboxusercontent.com/scl/fi/36poffkevs1mggew52f03/video_1_reversed.mp4?rlkey=yk7nqitc61hq39uyjcbw4g0m2&st=w8bjjtlo&dl=1" type="video/mp4" />
      </video>

      {/* Ambient cinematic gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75 pointer-events-none" />
    </div>
  );
};
