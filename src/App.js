import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import suit from "./assets/suit.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img={suit}
        rating={5.0}
        reviewCount={6}
        location="Meguro"
        title="The perfect suit for a pitch!"
        description="This black ensemble will have the crowd mesmerized."
        price={2000}
      />
    </div>
  );
}

export default App;
