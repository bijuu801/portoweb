import WaveSurferPlayer from '.././components/WaveSurferPlayer';

const MusicPage = () => {
  const url = '/test.wav';
  return (
    <div>
      <WaveSurferPlayer url={url} />
    </div>
  );
};

export default MusicPage;