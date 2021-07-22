import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./comps/Home";
import Cart from "./comps/Cart";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
