import axios from "axios";

export default axios.create({
    baseURL: "http://invment.test:8080/api/v1",
    headers: {
        Authorization: "Bearer " + "1|3mVe2xFmmJ5qEahVjhQJjzwsgu5rOLzcVMbJrg1p",
    },
});
