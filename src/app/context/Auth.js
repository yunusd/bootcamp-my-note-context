import { useEffect, useState } from "react"
import AuthContext from "./AuthContext"

const Auth = ({children}) => {
    const [user, setUser] = useState({authenticated: false});

    useEffect(() => {
        const storageUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : user;
        setUser(storageUser)
        if(!storageUser?.authenticated && window.location.pathname !== '/login'){
            window.location.replace('/login')
        }
    }, [user])

    const handleLogin = (user) => {
        const authUser = {...user, authenticated: true};
        localStorage.setItem('user', JSON.stringify(authUser))
        setUser(authUser)
        window.location.replace('/');
    }

    const handleLogout = () => {
        localStorage.clear()
        setUser({authenticated: false});
        window.location.replace('/login')
    }
    
    return (
        <AuthContext.Provider value={{
            user,
            handleLogin,
            handleLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default Auth;