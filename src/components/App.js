import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchBar from "../containers/search_bar";
import ReleasesList from "../containers/releases_list";
import ReleasePage from "../containers/release_page";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SearchBar />
          <Route exact path="/" component={ReleasesList} />
          <Switch>
            <Route exact path="/release/:id" component={ReleasePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
