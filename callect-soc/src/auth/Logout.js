import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Homepage from "../components/mainmenu/homepage/homepage";

const LogoutButton = () => {
    const { isAuthenticated } = useAuth0();
    return(
        isAuthenticated && (
            <Homepage/>
        )
    )
}
export default LogoutButton;

/*<button className="login" onClick={() => logout()}>
                Odhlásenie
            </button>*/