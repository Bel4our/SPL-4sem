import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RegistrationForm from './RegistrationForm';
import NotFound from './NotFound';
import SignInForm from './SignInForm';
import ResetPasswordForm from './ResetPassword';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/sign-up" element={<RegistrationForm/>} />
          <Route path="/sign-in" element={<SignInForm/>} />
          <Route path="/reset-password" element={<ResetPasswordForm/>} />
          <Route path="/" element={<NotFound/>}/>
        </Routes>
      </Router>
  );
}

export default App;
