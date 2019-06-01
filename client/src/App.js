import React from 'react';
 import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom';
 import PG from './components/test/PG';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/test" component={PG}/>
        </Switch>
      </Router>

       
    </div>
  );
}

export default App;
