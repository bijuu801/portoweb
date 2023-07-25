import { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const useWaveSurfer = (options) => {
  const waveSurferRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    if(containerRef.current) {
      waveSurferRef.current = WaveSurfer.create({...options, container: containerRef.current});

      return () => {
        waveSurferRef.current.destroy();
      };
    }
  }, [containerRef, options]);

  return { waveSurfer: waveSurferRef, containerRef };
};

export default useWaveSurfer;
