import axios from "axios";
import {invmentApiKey} from "/src/js/env";

export default axios.create({
    baseURL: "http://invment.test:8080/api/v1",
    headers: {
        Authorization: "Bearer " + invmentApiKey,
    },
});
