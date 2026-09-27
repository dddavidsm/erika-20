function Hero() {
  return (
    <section className="hero-section" aria-labelledby="page-title">
      <div className="hero-section__content">
        <p className="eyebrow hero-section__eyebrow">para ti</p>
        <h1 id="page-title">
          Felices <span className="hero-section__number">20</span> años,
          <br />
          <em>Èrika.</em>
        </h1>
        <p className="hero-section__subtitle">
          Un pequeño lugar para guardar algunos de nuestros recuerdos.
        </p>
      </div>

      <a className="hero-section__scroll" href="#recuerdos" aria-label="Bajar a nuestros recuerdos">
        <span>nuestros recuerdos</span>
        <span className="hero-section__arrow" aria-hidden="true">
          ↓
        </span>
      </a>
    </section>
  )
}

export default Hero
