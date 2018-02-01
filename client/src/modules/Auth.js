class Auth {
    static authenticateUser(token, user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", user);
    }

    static isUserAuthenticated() {
        return localStorage.getItem("token") !== null;
    }

    static deauthenticateUser() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    static getToken() {
        return localStorage.getItem("token");
    }

    static getUser() {
        return localStorage.getItem("user");
    }
}

export default Auth;
