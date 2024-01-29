import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Category from './Components/Category';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/categories' element={<Category />} />
      </Routes>
      
    </div>
  );
}

export default App;
