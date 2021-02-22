import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import FormFilme from './components/Form';
import Header from './components/Header';
import Footer from './components/Footer';
import Lista from './components/Lista';




function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Header/>

      <Switch>

        <Route exact path="/" component={FormFilme}>
          <FormFilme/>
        </Route>

        <Route path="/lista" component={Lista}>
          <Lista/>
        </Route>
        
      

        </Switch>
    
    </BrowserRouter>

   
        
    </div>
  );
}

export default App;
