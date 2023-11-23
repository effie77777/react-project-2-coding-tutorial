import axios from "axios";
const basic_api = "https://react-project-2-coding-tutorial-backend.onrender.com/api/auth";
// const basic_api = "http://localhost:8080/api/auth";

class authService {
    register(username, email, password) {
        return axios.post(
            `${basic_api}/register`,
            { username, email, password }
        );
    }

    login(email, password) {
        return axios.post(
            `${basic_api}/login`,
            { email, password }
        );
    }

    logout() {
        localStorage.removeItem("user_data");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user_data"));
    }

    loginWithGoogle(credential) {
        return axios.post(
            `${basic_api}/login/google`,
            { credential }
        );
    }
}

const newAuthService = new authService();
export default newAuthService;