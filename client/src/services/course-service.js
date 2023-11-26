import axios from "axios";
const basic_api = "https://react-project-2-coding-tutorial-backend.onrender.com/api/course";
// const basic_api = "http://localhost:8080/api/course";

class courseService {
    searchAllCourses(limit = 0) {
        console.log(limit);
        let token;
        if (localStorage.getItem("user_data")) {
            token = JSON.parse(localStorage.getItem("user_data")).token;
        } else {
            token = "";
        }
        return axios.get(
            `${basic_api}/search/${limit}`,
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
        console.log("ask for html from the server");
        return axios.get(
            `${basic_api}/payment/${ItemName}/${TotalAmount}`,
            { headers: { Authorization: token } }
        )
    }

    enroll(studentId, courseId, orderDetail, orderPrice) {
        let token;
        localStorage.getItem("user_data")
        ? token = JSON.parse(localStorage.getItem("user_data")).token
        : token = "";
        return axios.post(
            `${basic_api}/enroll`,
            { studentId, courseId, orderDetail, orderPrice },
            { headers: { Authorization: token } }
        );
    }
}

const newCourseService = new courseService();
export default newCourseService;