import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import WhyHooks from './data/01.why-hooks';
import BasicHooks from './data/02.basic-hooks';
import AdvancedHooks from './data/03.advanced-hooks';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/01.why-hooks">Why Hooks?</Link>
              </li>
              <li>
                <Link to="/02.basic-hooks">Basic Hooks</Link>
              </li>
              <li>
                <Link to="/03.advanced-hooks">Advanced Hooks</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route path="/01.why-hooks">
              <WhyHooks />
            </Route>
            <Route path="/02.basic-hooks">
              <BasicHooks />
            </Route>
            <Route path="/03.advanced-hooks">
              <AdvancedHooks />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
