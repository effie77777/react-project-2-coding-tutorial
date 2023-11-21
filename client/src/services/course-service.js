import axios from "axios";
const basic_api = "https://react-project-2-coding-tutorial-backend.onrender.com/api/course";

class courseService {
    searchAllCourses() {
        let token;
        if (localStorage.getItem("user_data")) {
            let parsed = JSON.parse(localStorage.getItem("user_data"));
            // if (parsed.token) {
                token = parsed.token;
            // } else if (parsed.access_token) {
            //     token = parsed.access_token;
            // }
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
        // .then((d) => {
        //     console.log("inside checkOut service. d is: ", d);
        //     return d;
        // })
        // .catch((e) => {
        //     console.log(e);
        // });
    }
}

const newCourseService = new courseService();
export default newCourseService;