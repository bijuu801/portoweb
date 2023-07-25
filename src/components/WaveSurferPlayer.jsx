import { useEffect, useState } from 'react';
import useWaveSurfer from './WaveSurfer';

const WaveSurferPlayer = ({ url }) => {
  const { waveSurfer, containerRef } = useWaveSurfer({
    waveColor: '#18342C',
    progressColor: '#2A3330',
    cursorColor: '#2C2A33',
    backend: 'WebAudio',
  });

  // const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (waveSurfer.current) {
      waveSurfer.current.load(url);
    }
  }, [url, waveSurfer]);

  return (
    <div className='container mx-auto px-4'>
      <div className='bg-accent' id="waveform" ref={containerRef} />
      <button onClick={() => waveSurfer.current.playPause()} className='btn btn-neutral px-2 py-2 text-gray' >
        |> / ||
      </button>
      {/* <button onClick={() => waveSurfer.current.isMuted(setIsMuted(!isMuted))}>
        Mute
      </button> */}
    </div>
  );
};

export default WaveSurferPlayer;
