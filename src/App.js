import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirstComponent from "./components/pages/FirstComponent/FirstComponent";
import SecondComponent from "./components/pages/SecondComponent/SecondComponent";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={FirstComponent} />
          <Route path="/second-component" component={SecondComponent} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
