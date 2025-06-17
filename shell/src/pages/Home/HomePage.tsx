import Home from 'login/home';
import { useAuthProvider } from '../../context/AuthContext';

export default function HomePage() {
  const { loginAction, token } = useAuthProvider();

  return <Home onLogin={loginAction} token={token} />;
}
