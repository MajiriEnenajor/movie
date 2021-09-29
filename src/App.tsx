import React from 'react';
import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom';
import { Home, Liked } from "pages";
import UseMovieContext from 'hooks/UseMovieContext';
import Navbar from 'components/Navbar';

function App() {
  return (
    <UseMovieContext>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/liked">
            <Liked />
          </Route>
        </Switch>
      </Router>
    </UseMovieContext>
  );
}
export default App;
