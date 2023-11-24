import axios from "axios";
const basic_api = "https://react-project-2-coding-tutorial-backend.onrender.com/api/course";
// const basic_api = "http://localhost:8080/api/course";

class courseService {
    searchAllCourses() {
        let token;
        if (localStorage.getItem("user_data")) {
            token = JSON.parse(localStorage.getItem("user_data")).token;
        } else {
            token = "";
        }
        return axios.get(
            `${basic_api}/search`,
            { headers: { Authorization: token } }
        );
    }

    checkOut(ItemName, TotalAmount) {
        let token;
        if (localStorage.getItem("user_data")) {
            token = JSON.parse(localStorage.getItem("user_data")).token;
        } else {
            token = "";
        }
        return axios.get(
            `${basic_api}/payment/${ItemName}/${TotalAmount}`,
            { headers: { Authorization: token } }
        )
    }

    enroll(studentId, courseId) {
        let token;
        localStorage.getItem("user_data")
        ? token = JSON.parse(localStorage.getItem("user_data")).token
        : token = "";
        return axios.post(
            `${basic_api}/enroll`,
            { studentId, courseId },
            { headers: { Authorization: token } }
        );
    }
}

const newCourseService = new courseService();
export default newCourseService;