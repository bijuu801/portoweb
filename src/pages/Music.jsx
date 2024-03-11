import PageWrap from "../components/PageWrap";
import SoundCloudEmbed from "../components/SoundCloudEmbed";

const MusicPage = () => {
  const soundCloudURL = 'https://soundcloud.com/liveatthebijuu';
  return (
    <PageWrap
      centerColumnContent={
        <div className="container mx-auto px-6 mt-8">
          <div className="justify-center flex-wrap ml-8">
            <SoundCloudEmbed />
          </div>
          <div className="justify-center flex-wrap my-4 ml-8">
            <SoundCloudEmbed />
          </div>
          <div className="justify-center flex-wrap my-4 ml-8">
            <SoundCloudEmbed />
          </div>
        </div>
      }
    />

  );
};

export default MusicPage;