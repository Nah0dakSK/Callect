import React from "react";
import "./Auth.css";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return(
        !isAuthenticated && (
            <>
            <div class="container-log">
                <div class="brand-logo"></div>
                <div class="brand-title">CALLECT</div>
                <p className="brand-text">Vitajte na hernej webovej stránke Callect.</p>
            <div class="inputs">
                <button className="login" onClick={() => loginWithRedirect()}>
                Prihlásenie
            </button>
            </div>
            </div>
        </>
            
        )
    )
}
export default LoginButton;