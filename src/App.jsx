import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <div className="min-h-screen transition-colors duration-300 flex flex-col">
        <Header />
        <main className="flex-1 pt-20">
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
