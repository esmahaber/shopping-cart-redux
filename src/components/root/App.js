import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import CartDetails from "../cart/CartDetails";

function App() {
  return (
    <div className="App">
      <Container>
        <Navi />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/cart" exact component={CartDetails} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
