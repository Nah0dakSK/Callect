import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";
import "./Auth.css";

function Auth() {
    const { isLoading, error } = useAuth0();
    return(
        <main>
            {error && <p>Auth Error</p>}
            {!error && isLoading && <p className="loading-1">Loading...</p>}
            {!error && !isLoading && (
                <>
                    <Login />
                    <Logout />
                </>
            )}
        </main>
    )
}
export default Auth;