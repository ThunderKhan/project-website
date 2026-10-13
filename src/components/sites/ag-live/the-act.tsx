import { RevealTitle } from "./reveal-title";
import { actBio, assets, genres, stats } from "./content";

export function TheAct() {
  return (
    <section id="the-act" aria-labelledby="act-h">
      <div className="act-photo-wrap">
        <img
          src={assets.heroPhoto}
          alt="Reference performance photo — preview only"
          loading="lazy"
        />
        <div className="act-photo-cap">Reference imagery · client media to follow</div>
      </div>

      <div className="act-copy">
        <p className="section-eyebrow">The Artist</p>
        <RevealTitle id="act-h" lines={["Where Every", "Note Lands."]} />

        <p className="act-bio">{actBio}</p>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-cell" key={stat.label}>
              <span className="stat-num" data-target={stat.target} data-suffix={stat.suffix}>
                0
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="genre-row">
          {genres.map((genre) => (
            <span className="genre-pill" key={genre}>
              {genre}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}