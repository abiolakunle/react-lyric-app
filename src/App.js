import React, { Component } from "react";
import "./App.css";

//Import components
import NavBar from "./components/layout/NavBar";
import Index from "./components/layout/Index";
import Lyric from "./components/tracks/Lyric";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./Context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path={"/"} component={Index} />
                <Route exact path={"/lyric/track/:id"} component={Lyric} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
