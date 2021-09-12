import Button from '../../shared-components/button';
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Logout = () => {
    const {handleLogout} = useContext(AuthContext);
    
    return (
        <Button 
            type="submit"
            onClick={(e) => {
                e.preventDefault();
                handleLogout();
            }}
        >
            Logout
        </Button>
    )
}

export default Logout;