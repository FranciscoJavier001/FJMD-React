import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar>
          <Switch>
            <Route path="/" exact component={Inicio}/>
          </Switch>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
