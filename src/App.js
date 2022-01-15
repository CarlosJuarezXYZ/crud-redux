import Average from "./components/layout/Average";
import Clients from "./components/layout/Clients";
import FormClient from "./components/layout/FormClient";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={FormClient} />
      <Route path="/clients" component={Clients} />
      <Route path="/average" component={Average} />
      </Switch>
    </Router>
  );
}

export default App;
