import axios from "axios";

export default axios.create({
    baseURL: "http://invment.test:8080/api/v1",
    headers: {
        Authorization: "Bearer " + "4|OgqIertbg5SkN1mdgYINS7djpmqqnwgkzLOwB40c",
    },
});
