import StyledFormWrapper from "./styles/StyledFormWrapper";
import StyledLoginWrapper from "./styles/StyledLoginWrapper";
import StyledLoginHeader from "./styles/StyledLoginHeader";
import Button from '../../shared-components/button';
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

const Login = () => {
    const {handleLogin} = useContext(AuthContext);
    const [user, setUser] = useState({username: '', password: ''});

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    
    return (
        <StyledLoginWrapper>
            <div>
                <StyledLoginHeader>
                    Login
                </StyledLoginHeader>

                <StyledFormWrapper>
                    <input type="text" name="username" onChange={handleChange} placeholder="username" />
                    <input type="password" name="password" onChange={handleChange} placeholder="password" />
                    <Button 
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            handleLogin(user);
                        }}
                    >
                        Log In
                    </Button>
                </StyledFormWrapper>
            </div>
        </StyledLoginWrapper>
    )
}

export default Login;