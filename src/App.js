import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import Books from './pages/Books';
import Authors from './pages/Authors';
import Auth, { AuthRoute } from './components/Auth';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

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
              <li>
                <Link to="/users/login">Login</Link>
              </li>
              <li>
                <Link to="/users/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </header>
        <section className="container">
          <Routes>
            <Route
              path="/"
              element={(
                <Auth>
                  <Books />
                </Auth>
              )}
            />
            <Route
              path="/users/login"
              element={(
                <AuthRoute>
                  <LogIn />
                </AuthRoute>
              )}
            />
            <Route
              path="/users/signup"
              element={(
                <AuthRoute>
                  <SignUp />
                </AuthRoute>
              )}
            />
            <Route
              path="/authors"
              element={(
                <Auth>
                  <Authors />
                </Auth>
              )}
            />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
