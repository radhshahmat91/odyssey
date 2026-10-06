export type FilmScene = {
  label: string;
  title: string;
  description: string;
  kind: 'youtube' | 'file';
  videoId?: string;
  start?: number;
  end?: number;
  src?: string;
  poster?: string;
};

export function HeroVideo({videoId,poster,title='Bangladesh in motion'}:{videoId:string;poster:string;title?:string}){
  return <div className="hero-video" aria-hidden="true">
    <img className="hero-media hero-poster" src={poster} alt="" />
    <iframe
      className="hero-video-frame"
      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&playsinline=1&rel=0`}
      title={title}
      loading="eager"
      allow="autoplay; encrypted-media; picture-in-picture"
    />
  </div>
}

export function FilmSceneCard({scene}:{scene:FilmScene}){
  const youtubeSrc = scene.videoId
    ? `https://www.youtube-nocookie.com/embed/${scene.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${scene.videoId}&modestbranding=1&playsinline=1&rel=0${scene.start ? `&start=${scene.start}` : ''}${scene.end ? `&end=${scene.end}` : ''}`
    : '';

  return <article className="film-scene">
    <div className="film-scene-media">
      {scene.kind === 'youtube' ? <iframe
        src={youtubeSrc}
        title={scene.title}
        loading="lazy"
        allow="autoplay; encrypted-media; picture-in-picture"
      /> : <video
        src={scene.src}
        poster={scene.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />}
      <div className="film-scene-shade" />
      <div className="film-scene-label">{scene.label}</div>
    </div>
    <div className="film-scene-copy">
      <h3 className="serif">{scene.title}</h3>
      <p>{scene.description}</p>
    </div>
  </article>
}

export function CinematicVideo({videoId,title='Bangladesh in motion'}:{videoId:string;title?:string}){
  return <div className="cinema-video-wrap">
    <div className="cinema-video-copy"><div className="eyebrow" style={{color:'var(--gold)'}}>Watch the journey</div><h3 className="serif">{title}</h3><p>Experience Bangladesh in motion before you choose where to go. Use the player controls for the full 4K version where available.</p></div>
    <div className="cinema-video"><iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`} title={title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
  </div>
}
