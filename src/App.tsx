const event = {
  host: "Юлия",
  age: 50,
  date: "29 августа",
  year: 2026,
  weekday: "Суббота",
  time: "16:00",
  venue: "Банкетный зал «Argyn»",
  city: "Астана",
  address: "проспект Магжана Жумабаева, 20",
  twoGisUrl: "https://2gis.kz/astana/geo/70000001100730165",
  mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=71.477%2C51.142%2C71.492%2C51.152&layer=mapnik&marker=51.147163%2C71.484732",
} as const;

export default function App() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="corner corner-left" aria-hidden="true" />
        <div className="corner corner-right" aria-hidden="true" />
        <div className="hero-inner">
          <p className="eyebrow">Приглашение на юбилей</p>
          <div className="monogram" aria-hidden="true">Ю</div>
          <h1>{event.host} — <span>{event.age}</span></h1>
          <p className="lead">Дорогие родные и друзья!</p>
          <p className="intro">Приглашаю вас разделить со мной радость этого особенного дня и провести тёплый вечер в кругу близких людей.</p>
          <a className="button button-primary" href="#details">Узнать подробности</a>
        </div>
        <div className="scroll-hint" aria-hidden="true"><span />листайте вниз</div>
      </section>

      <section className="details" id="details">
        <div className="section-heading">
          <p className="eyebrow">Сохраните дату</p>
          <h2>Буду рада видеть вас</h2>
          <div className="divider"><span>✦</span></div>
        </div>
        <div className="date-card">
          <div className="date-month">Август</div>
          <div className="date-grid">
            <div><span className="detail-label">{event.weekday}</span><strong>29</strong></div>
            <div className="year"><span>{event.year}</span><span className="line" /></div>
            <div><span className="detail-label">Начало</span><strong>{event.time}</strong></div>
          </div>
        </div>
        <div className="place">
          <p className="eyebrow">Место встречи</p>
          <h2>{event.venue}</h2>
          <p className="address">{event.city} · {event.address}</p>
          <a className="button button-dark" href={event.twoGisUrl} target="_blank" rel="noreferrer">Построить маршрут <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="map-section" aria-label="Карта места проведения">
        <div className="map-frame">
          <iframe title={`${event.venue} на карте`} src={event.mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="map-badge"><span>29</span><small>августа</small></div>
        </div>
      </section>

      <footer>
        <div className="footer-mark">Ю</div>
        <p>До встречи на моём юбилее!</p>
        <h2>С любовью, {event.host}</h2>
        <a href="#top" aria-label="Вернуться к началу">↑</a>
      </footer>
    </main>
  );
}
