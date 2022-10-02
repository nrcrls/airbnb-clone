function Hero() {
  const heroImage = process.env.PUBLIC_URL + '/assets/photo-grid.png'

  return (
    <section className='hero'>
      <article className='hero-body'>
        <h1 className="hero-header">The world is your closet</h1>
        <p className="hero-text">Rent an awesome outfit for any occasion.</p>
      </article>
      <img src={heroImage} className="hero-photo" alt="hero" />
    </section>
  );
}

export default Hero;
