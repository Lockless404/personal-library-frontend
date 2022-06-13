import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import Books from './pages/Books';
import Authors from './pages/Authors';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="leftNav">
            <h1>Book Library</h1>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Books</Link>
              </li>
              <li>
                <Link to="/authors">Authors</Link>
              </li>
            </ul>
          </div>
        </header>
        <section className="container">
          <Routes>
            <Route path="/" exact element={<Books />} />
            <Route path="/authors" element={<Authors />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
