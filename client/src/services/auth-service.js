import axios from "axios";
const basic_api = "https://react-project-2-coding-tutorial-backend.onrender.com/api/auth";

class authService {
    // 本地註冊
    register(username, email, password) {
        return axios.post(
            `${basic_api}/register`,
            { username, email, password }
        );
    }

    // 本地登入
    login(email, password) {
        return axios.post(
            `${basic_api}/login`,
            { email, password }
        );
    }

    // 登出
    logout() {
        localStorage.removeItem("user_data");
    }

    // 找出目前的使用者
    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user_data"));
    }

    // 使用 Google 登入
    loginWithGoogle(credential) {
        return axios.post(
            `${basic_api}/login/google`,
            { credential }
        );
    }

    // 使用 FB 登入
    loginWithFacebook(accessToken, userData) {
        return axios.post(
            `${basic_api}/login/facebook`,
            { accessToken, userData }
        );
    }
}

const newAuthService = new authService();
export default newAuthService;