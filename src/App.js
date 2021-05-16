import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { HomeScreen } from "./screens";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
};

export default App;
