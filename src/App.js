import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { AboutScreen, HomeScreen, ServicesScreen } from "./screens";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/services" component={ServicesScreen} />
        <Route path="/about" component={AboutScreen} />
      </Switch>
    </Router>
  );
};

export default App;
