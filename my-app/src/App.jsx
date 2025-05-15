import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/layouts/Layout'

import Home from './pages/Home';
import Score from "./pages/Score"
import Invalid from './pages/Invalid'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home />} />
          <Route path = "score" element = {<Score />} />
          <Route path="*" element={<Invalid/>} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
