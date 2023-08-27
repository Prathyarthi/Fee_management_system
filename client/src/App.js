import './App.css';
import { Routes, Route } from 'react-router-dom';

//components
import Home from './components/Home.js';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import PageNotFound from './components/PageNotFound';
import About from './components/About';
import Details from './components/Details';

function App() {
  return (
    <>
      <div className="App  auto  flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:resetPasswordToken"
            element={<ResetPassword />}
          />
          <Route path="*" element={<PageNotFound />} />
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/details" element={<Details />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
