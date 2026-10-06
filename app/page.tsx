import Link from 'next/link';
import { ArrowRight, Compass, Map, MapPin, Play, ShieldCheck, Sparkles, Waves, Mountain, Leaf, Landmark, Hotel } from 'lucide-react';
import { destinations } from '@/lib/destinations';
import { CinematicVideo, FilmSceneCard, HeroVideo } from '@/components/media';

const scenes = [
  { label:"01 · Cox's Bazar", title:'Follow the horizon.', description:'An endless shoreline, salt air and a golden edge to the Bay of Bengal.', kind:'youtube' as const, videoId:'oYRw02g706M', start:1146, end:1235 },
  { label:'02 · Bandarban', title:'Let the hills surprise you.', description:'Waterfalls, forest trails and green ridges reveal a quieter Bangladesh.', kind:'file' as const, src:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Damtua%20Waterfall%20Alikodom%2C%20Bandarban%20%28%E0%A6%A6%E0%A6%BE%E0%A6%AE%E0%A6%A4%E0%A7%81%E0%A7%9F%E0%A6%BE%20%E0%A6%9D%E0%A6%B0%E0%A7%8D%E0%A6%A3%E0%A6%BE%2C%20%E0%A6%86%E0%A6%B2%E0%A7%80%E0%A6%95%E0%A6%A6%E0%A6%AE%2C%20%E0%A6%AC%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%B0%E0%A6%AC%E0%A6%A8%29.webm', poster:destinations[1].hero },
  { label:'03 · Sylhet', title:'Slow down into green.', description:'Tea gardens, rivers and morning mist create a softer rhythm for the journey.', kind:'youtube' as const, videoId:'oYRw02g706M', start:816, end:1050 }
];

const moods = [
  { icon: Waves, title:'The Coast', text:'Sunrise beaches, island water and long horizons.', href:'/destinations/cox-bazar', image: destinations[0].hero },
  { icon: Mountain, title:'The Hills', text:'Waterfalls, forest paths and cloud-wrapped ridges.', href:'/destinations/bandarban', image: destinations[1].hero },
  { icon: Leaf, title:'The Green', text:'Tea country, wetlands and slow mornings.', href:'/destinations/sylhet', image: destinations[2].hero },
  { icon: Landmark, title:'The Stories', text:'Mosques, palaces, riverside cities and living history.', href:'/destinations/dhaka', image: destinations[6].hero },
];

export default function Home(){
  return <>
    <header className="hero">
      <HeroVideo poster={destinations[0].hero} videoId="oYRw02g706M" title="Bangladesh cinematic travel film" />
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one"/><div className="hero-orbit hero-orbit-two"/>
      <div className="container hero-content reveal">
        <div className="hero-kicker"><span>01</span><i/> BANGLADESH · LIFETIME EXPERIENCES</div>
        <h1 className="serif">A country of <em>unexpected</em> beauty.</h1>
        <p>Come for the coast. Wander into the hills. Lose an afternoon in tea country. Bangladesh is a journey made of small wonders, warm encounters and landscapes that stay with you.</p>
        <div className="hero-actions"><Link href="/destinations" className="btn goldbtn">Begin the journey <ArrowRight size={16}/></Link><Link href="#inspiration" className="btn ghost"><Play size={14} fill="currentColor"/> Watch the story</Link></div>
        <div className="hero-bottomline"><span>8 places to begin</span><span>Nature · Culture · Heritage</span><span>Travel smarter</span></div>
      </div>
      <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
    </header>

    <div className="marquee"><span>COX’S BAZAR · BANDARBAN · SYLHET · MOULVIBAZAR · CHATTOGRAM · SAINT MARTIN’S · DHAKA · RAJSHAHI · </span><span>COX’S BAZAR · BANDARBAN · SYLHET · MOULVIBAZAR · CHATTOGRAM · SAINT MARTIN’S · DHAKA · RAJSHAHI · </span></div>

    <section className="intro-section" id="inspiration">
      <div className="container intro-grid">
        <div><div className="eyebrow" style={{color:'var(--jade)'}}>Get inspired</div><h2 className="serif">Don't just visit Bangladesh.<br/><span>Feel it.</span></h2></div>
        <div className="intro-copy"><p>From the world's longest natural sea beach to misty tea gardens and green hill country, Bangladesh changes character from one journey to the next.</p><p>We've arranged the country around <strong>experiences</strong>, not just locations—so a first-time visitor can quickly find the kind of trip they are dreaming about.</p></div>
      </div>
      <div className="container mood-grid">{moods.map((m,i)=>{const Icon=m.icon;return <Link href={m.href} className="mood-card" key={m.title}><img src={m.image} alt={m.title}/><div className="mood-shade"/><div className="mood-index">0{i+1}</div><div className="mood-icon"><Icon size={17}/></div><div className="mood-copy"><h3 className="serif">{m.title}</h3><p>{m.text}</p><span>Discover <ArrowRight size={14}/></span></div></Link>})}</div>
    </section>

    <section className="places-section">
      <div className="container">
        <div className="section-head editorial-head"><div><div className="eyebrow" style={{color:'var(--jade)'}}>Places to go</div><h2 className="serif">Start anywhere.<br/><span>Go everywhere.</span></h2></div><div><p>Eight destinations, eight different moods. Open a guide for attractions, origin stories, routes, local transport, practical costs and safety information.</p><Link className="text-link" href="/destinations">View all destinations <ArrowRight size={15}/></Link></div></div>
        <div className="dest-grid">{destinations.map((d,i)=><Link href={`/destinations/${d.slug}`} className="dest-card reveal-card" style={{'--delay':`${i*55}ms`} as any} key={d.slug}><img src={d.hero} alt={d.name}/><div className="dest-index">0{i+1}</div><div className="dest-info"><h3>{d.name}</h3><p>{d.tagline}</p><span className="dest-arrow">↗</span></div></Link>)}</div>
      </div>
    </section>

    <section className="feature feature-editorial"><div className="container split"><div className="split-img cinematic-frame"><img src={destinations[1].hero} alt="Bandarban hills in Bangladesh"/><div className="image-caption">Bandarban · Chittagong Hill Tracts</div></div><div className="split-copy"><div className="eyebrow" style={{color:'var(--jade)'}}>The invitation</div><h2 className="serif">A country that rewards curiosity.</h2><p>Bangladesh is not a checklist. It is wet earth after rain, tea leaves under morning mist, a fishing boat crossing a copper sea, and old streets where everyday life carries centuries of memory.</p><div className="quote">“The most memorable places are the ones that make you look twice.”</div><div className="chips"><span className="chip">Slow travel</span><span className="chip">Local culture</span><span className="chip">Nature</span><span className="chip">Heritage</span></div></div></div></section>

    <section className="film-section"><div className="container"><div className="film-heading"><div><div className="eyebrow" style={{color:'var(--gold)'}}>Bangladesh in motion</div><h2 className="serif">Three landscapes.<br/><span>One unforgettable country.</span></h2></div><p>Watch the coast breathe, the hills roar and the tea country slow time down. The visual story changes with every few hundred kilometres.</p></div><div className="film-grid">{scenes.map(scene=><FilmSceneCard key={scene.label} scene={scene}/>)}</div></div></section>

    <section className="plan-section"><div className="container"><div className="plan-intro"><div><div className="eyebrow" style={{color:'var(--jade)'}}>Plan your trip</div><h2 className="serif">Everything you need,<br/><span>before you go.</span></h2></div><p>Explore first. When you're ready, sign in to book a hotel or flight. Every destination guide is designed to answer the practical questions a foreign traveller has before arriving.</p></div><div className="plan-grid"><Link href="/destinations" className="plan-card"><Compass/><span>Explore</span><h3 className="serif">Choose your destination</h3><p>Find beaches, hills, tea gardens, cities and heritage.</p><ArrowRight/></Link><Link href="/book" className="plan-card"><Hotel/><span>Stay & fly</span><h3 className="serif">Book with confidence</h3><p>Sign in when you're ready to arrange hotels and flights.</p><ArrowRight/></Link><Link href="/destinations#guides" className="plan-card"><Map/><span>Travel guide</span><h3 className="serif">Know before you go</h3><p>Routes, local fares, seasons, tips and emergency contacts.</p><ArrowRight/></Link></div></div></section>

    <section className="motion-section"><div className="container"><CinematicVideo videoId="oYRw02g706M" title="Bangladesh — a cinematic first look"/></div></section>

    <section className="safety"><div className="container"><div className="section-head"><div><div className="eyebrow">Travel with confidence</div><h2 className="serif">Beautiful journeys<br/>need practical details.</h2></div><p style={{color:'#9aa8a4'}}>Each destination includes transport guidance, indicative local fares, practical tips and official emergency contacts.</p></div><div className="safety-grid"><div className="safety-card"><MapPin size={20}/><div className="number">08</div><b>Destination guides</b><p style={{color:'#9aa8a4'}}>Attractions, origins, best seasons, routes and local etiquette.</p></div><div className="safety-card"><ShieldCheck size={20}/><div className="number">999</div><b>Emergency service</b><p style={{color:'#9aa8a4'}}>Police, fire and ambulance through Bangladesh’s national emergency service.</p></div><div className="safety-card"><Sparkles size={20}/><div className="number">24/7</div><b>Travel confidence</b><p style={{color:'#9aa8a4'}}>Clear information designed around the questions international visitors actually ask.</p></div></div></div></section>
  </>
}
