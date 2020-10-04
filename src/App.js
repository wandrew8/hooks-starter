import React, { createContext, useState } from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Countries from './pages/Countries';
import Country from './pages/Country';
import Search from './pages/Search';

export const ModeContext = createContext();

const App = () => {
    const [ darkMode, setDarkMode ] = useState(false);

    return(
      <ModeContext.Provider
      value={{
        darkMode: darkMode
      }}>
        <Router basename="/hooks-starter/">
          <Switch>
            <Route path="/countries/:id">
              <Country />
            </Route>
            <Route path="/countries">
              <Countries darkMode={darkMode} setDarkMode={setDarkMode} />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ModeContext.Provider>
    ) 
}

export default App;
