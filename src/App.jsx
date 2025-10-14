import "./App.css";
import Header from "./core/components/layout/Header";
import Footer from "./core/components/layout/Footer";
import Landing from "./core/components/layout/Landing";
import RootRouter from "./RootRouter";

function App() {
  return (
    <>
      <Header />
      <RootRouter />
      <Footer />
    </>
  );
}

export default App;
