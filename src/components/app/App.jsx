import React, { Component } from 'react';
import AllHoroscopes from '../../containers/AllHoroscopes';
import DetailPage from '../../containers/DetailPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <main>
            <Switch>
              <Route path="/" exact={true}
                component={AllHoroscopes}
              />

              <Route path="/:sign" exact={true}
                component={DetailPage} 
              />

              <Redirect to="/" />

            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
