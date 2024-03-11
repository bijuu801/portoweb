const SoundCloudEmbed = () => {
    return (
        <div>
            <iframe
                width="95%"
                height="180"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1173664141&color=%23287617&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
            <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif', fontWeight: '100' }}>
                <a href="https://soundcloud.com/liveatthebijuu" title="bijuu" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>bijuu</a>
                ·
                <a href="https://soundcloud.com/liveatthebijuu/suffer-machine" title="suffer machine" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>suffer machine</a>
            </div>
        </div>
    );
};

export default SoundCloudEmbed;
