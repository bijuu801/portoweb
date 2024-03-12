const SoundCloudEmbed = ({ song_link, song_title, track_id }) => {
    const embedUrl = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track_id}&color=%23287617&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`

    return (
        <div>
            <iframe
                width="95%"
                height="180"
                allow="autoplay"
                src={embedUrl}>
            </iframe>
            <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif', fontWeight: '100' }}>
                <a href="https://soundcloud.com/liveatthebijuu" title="bijuu" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }} />
                <a href={song_link} title={song_title} target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }} />
            </div>
        </div>
    );
};

export default SoundCloudEmbed;
