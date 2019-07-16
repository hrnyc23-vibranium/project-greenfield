import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const NewRoute = () => {
  return (
    <div>
      <p> New Route</p>
    </div>
  )
}

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <div className="App" >
          Greenfiled here
        </div>
        <Switch>
          <Route path="/new" component={NewRoute} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}
export default App;
