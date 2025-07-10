import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <div className="min-h-screen transition-colors duration-300 flex flex-col">
        <Header />
        <main className="flex-1 pt-20">
          <Hero />
          <Services />
          <About />
          {/* <Portfolio /> */}
          {/* <Testimonials /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
