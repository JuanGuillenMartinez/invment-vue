import axios from "axios";
import { invmentApiKey, pathApi } from "/src/env";

export default axios.create({
    baseURL: pathApi,
    headers: {
        Authorization: "Bearer " + invmentApiKey,
    },
});
