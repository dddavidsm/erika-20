function Ending() {
  return (
    <section className="ending-section" aria-labelledby="ending-title">
      <div className="ending-section__ornament" aria-hidden="true">
        · · ·
      </div>
      <p className="ending-section__line">Y todavía nos quedan muchas fotos por hacer.</p>
      <h2 id="ending-title">
        Felices 20, Èrika.
        <br />
        <em>Te quiero ♡</em>
      </h2>
      <a className="ending-section__back" href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Volver al principio <span aria-hidden="true">↑</span>
      </a>
    </section>
  )
}

export default Ending
