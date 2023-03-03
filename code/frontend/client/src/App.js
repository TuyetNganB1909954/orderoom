import './App.css';
import {BrowserRouter  as Router} from 'react-router-dom'
import { DataProvider } from './GlobalState';
import Header from './components/header/header';
import Home from './components/main/Home'
function App() {
  return (
    <DataProvider>
      <Router>
      <div>
        <div className='row'>
            <Header/>
            <Home/>
        </div>
      </div>
      </Router>

    </DataProvider>
   
  );
}

export default App;