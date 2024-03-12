import PageWrap from "../components/PageWrap";
import SoundCloudEmbed from "../components/SoundCloudEmbed";

const MusicPage = () => {
  const soundCloudURL = 'https://soundcloud.com/liveatthebijuu';
  return (
    <PageWrap
      centerColumnContent={
        <div className="container mx-auto px-6 mt-8">
          <div className="justify-center flex-wrap ml-8">
            <SoundCloudEmbed song_link="https://soundcloud.com/liveatthebijuu/pique-thru-the-blinds" song_title="pique thru the blinds" track_id="1539925177"/>
          </div>
          <div className="justify-center flex-wrap my-4 ml-8">
            <SoundCloudEmbed song_link="https://soundcloud.com/liveatthebijuu/ill-never-b-picture-perfect" song_title="ill never b picture perfect beyonce" track_id="1529074732"/>
          </div>
          <div className="justify-center flex-wrap my-4 ml-8">
            <SoundCloudEmbed song_link="https://soundcloud.com/liveatthebijuu/if-only-4-one-night" song_title="if only 4 one night" track_id="871949812"/>
          </div>
          <div className="justify-center flex-wrap my-4 ml-8">
            <SoundCloudEmbed song_link="https://soundcloud.com/liveatthebijuu/no-s" song_title="no ?s" track_id="1539925180" />
          </div>
        </div>
      }
    />

  );
};

export default MusicPage;

