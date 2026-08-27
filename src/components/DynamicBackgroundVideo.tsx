import React, { RefObject } from 'react';

interface DynamicBackgroundVideoProps {
  videoRef: RefObject<HTMLVideoElement | null>;
}

export const DynamicBackgroundVideo: React.FC<DynamicBackgroundVideoProps> = ({ videoRef }) => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-neutral-950 pointer-events-none">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        style={{ objectFit: 'cover' }}
      >
        {/* Primary static video file served from public/ */}
        <source src="/video_1_reversed.mp4" type="video/mp4" />
        {/* Direct CDN fallback */}
        <source src="https://dl.dropboxusercontent.com/scl/fi/36poffkevs1mggew52f03/video_1_reversed.mp4?rlkey=yk7nqitc61hq39uyjcbw4g0m2&st=w8bjjtlo&dl=1" type="video/mp4" />
      </video>

      {/* Ambient cinematic gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70 pointer-events-none" />
    </div>
  );
};
