import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Container } from "reactstrap";


function App() {
  return (
    <div className="App">
      <Container>
        <Navi />
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
