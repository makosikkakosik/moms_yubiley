const mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=71.477%2C51.142%2C71.492%2C51.152&layer=mapnik&marker=51.147163%2C71.484732";
const twoGisUrl = "https://2gis.kz/astana/geo/70000001100730165";

export default function Home() {
  return <main>
    <section className="hero" id="top">
      <div className="corner cornerLeft" aria-hidden="true" /><div className="corner cornerRight" aria-hidden="true" />
      <div className="heroInner">
        <p className="eyebrow">Приглашение на юбилей</p><div className="monogram" aria-hidden="true">Ю</div>
        <h1>Юлии — <span>50</span></h1><p className="lead">Дорогие родные и друзья!</p>
        <p className="intro">Приглашаю вас разделить со мной радость этого особенного дня и провести тёплый вечер в кругу близких людей.</p>
        <a className="button buttonPrimary" href="#details">Узнать подробности</a>
      </div><div className="scrollHint" aria-hidden="true"><span />листайте вниз</div>
    </section>
    <section className="details" id="details">
      <div className="sectionHeading"><p className="eyebrow">Сохраните дату</p><h2>Буду рада видеть вас</h2><div className="divider"><span>✦</span></div></div>
      <div className="dateCard"><div className="dateMonth">Август</div><div className="dateGrid">
        <div><span className="detailLabel">Суббота</span><strong>29</strong></div>
        <div className="year"><span>2026</span><span className="line" /></div>
        <div><span className="detailLabel">Начало</span><strong>16:00</strong></div>
      </div></div>
      <div className="place"><p className="eyebrow">Место встречи</p><h2>Банкетный зал<br />«Argyn»</h2>
        <p className="address">Астана · проспект Магжана Жумабаева, 20</p>
        <a className="button buttonDark" href={twoGisUrl} target="_blank" rel="noreferrer">Построить маршрут <span aria-hidden="true">↗</span></a>
      </div>
    </section>
    <section className="mapSection" aria-label="Карта места проведения"><div className="mapFrame">
      <iframe title="Банкетный зал Argyn на карте" src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      <div className="mapBadge"><span>29</span><small>августа</small></div>
    </div></section>
    <footer><div className="footerMark">Ю</div><p>До встречи на моём юбилее!</p><h2>С любовью, Юлия</h2><a href="#top" aria-label="Вернуться к началу">↑</a></footer>
  </main>;
}
