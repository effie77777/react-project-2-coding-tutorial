import axios from "axios";
const basic_api = "https://react-project-2-coding-tutorial-backend.onrender.com/api/auth";

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
}

const newAuthService = new authService();
export default newAuthService;