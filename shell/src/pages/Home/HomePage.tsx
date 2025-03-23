import Home from 'login/home'
import { useAuthProvider } from '../../context/AuthContext'

export default function HomePage () {
    const {loginAction} = useAuthProvider();

    return (
        <Home onLogin={loginAction}/>
    )
}