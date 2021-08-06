import {BrowserRouter as Router , Route } from 'react-router-dom';
import './css/common.css';
import Dashboard from './components/dashboard/dashboard';
import SignUp from './components/authentication/signUp';
import Login from './components/authentication/login';
import ForgotPassword from './components/authentication/forgotPassword';

function App() {
    return (
          <div className="App">
              <Router>

                <Route
                  exact
                  path={"/auth/registration"}
                  component={SignUp} />

                <Route
                  exact
                  path={"/auth/login"}
                  component={Login} />

                <Route
                  exact
                  path={"/auth/forgot-password"}
                  component={ForgotPassword} />

                <Route
                  exact
                  path={"/"}
                  component={Dashboard} />

                <Route
                  exact
                  path={"/table"}
                  component={Dashboard} />

              </Router>
          </div>
    );
}

export default App;
