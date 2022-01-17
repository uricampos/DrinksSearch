import './App.css';
import { DrinksProvider } from './Contexts/DrinksContext';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Search from './Components/Search';
import Recipe from './Components/Recipe';

function App() {

  return (
    <div>
      <DrinksProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/recipe" element={<Recipe />} />
          </Routes>
        </Router>
      </DrinksProvider>
    </div>
  );
}

export default App;
