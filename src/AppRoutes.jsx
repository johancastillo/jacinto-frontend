import Home from './pages/home/Home.jsx';
import {Router, Route, Switch} from "wouter"
import Navigation from './components/navigation/Navigation.jsx';

const App = () => {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/" component={Home} />  
        <Route path="/nosotros" component={Home} />  
        <Route path="/login" component={Home} />  
        <Route path="/register" component={Home} />  
      </Switch>
    </Router>
  );
}

export default App;
