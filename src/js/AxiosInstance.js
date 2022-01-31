import axios from "axios";
import {invmentApiKey} from "@/env";

console.log(invmentApiKey);
export default axios.create({
    baseURL: "http://invment.test:8080/api/v1",
    headers: {
        Authorization: "Bearer " + invmentApiKey,
    },
});
