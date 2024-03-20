import logo from "./logo.svg";
import "./App.css";
import FoodMenuPage from "./components/foodMenuPage";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <FoodMenuPage />
      <Footer />
    </div>
  );
}

export default App;
