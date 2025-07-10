import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div className="min-h-screen transition-colors duration-300 flex flex-col">
        <Header />
        <main className="flex-1"></main>
        <Footer />
      </div>
    </>
  );
}

export default App;
