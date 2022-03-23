import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Scheduling from "./components/Scheduling/Scheduling";

function App() {
  return (
    <>
      <Header />
      <main>
        <Scheduling />
      </main>
      <Footer />
    </>
  );
}

export default App;
