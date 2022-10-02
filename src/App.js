import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data"

function App() {
  const outfits = Data.map((outfit) => {
    return <Card
      key={outfit.id}
      img={outfit.coverImg}
      rating={outfit.stats.rating}
      reviewCount={outfit.stats.reviewCount}
      location={outfit.location}
      title={outfit.title}
      description={outfit.description}
      price={outfit.price}
      availability={outfit.unavailable}
    />
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {outfits}
      </section>
    </div>
  );
}

export default App;
