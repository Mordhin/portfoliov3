import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/navigation/Navbar"
import Page from "./components/pages/Page";
import {Presentation, Hops, Trackmania, Pokedex, Portfolio, Contact} from "./components/pages/index";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Page>
          <Switch>
            <Route path="/" exact component={Presentation}/>
            <Route path="/hops" exact component={Hops}/>
            <Route path="/trackmania" exact component={Trackmania}/>
            <Route path="/pokedex" exact component={Pokedex}/>
            <Route path="/portfolio" exact component={Portfolio}/>
            <Route path="/contact" exact component={Contact}/>
            <Redirect to="/" />
          </Switch>
        </Page>
      </BrowserRouter>
    </div>
  );
}

export default App;
