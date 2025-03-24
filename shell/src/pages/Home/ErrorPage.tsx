import ErrorScreen from 'login/error'
import { useAuthProvider } from '../../context/AuthContext'

export default function ErrorPage () {
    const {loginAction, token} = useAuthProvider();

    return (
        <ErrorScreen onLogin={loginAction} token={token}/>
    )
}