import AxiosInstance from "@/js/AxiosInstance";

const CategoryRequest = {
    getAll() {
        const response = AxiosInstance.get("/categories");
        return response;
    },
    get(id) {
        return AxiosInstance.get("/categories/" + id);
    },
    delete(id) {
        return AxiosInstance.delete("/categories/" + id);
    },
    update(data) {
        return AxiosInstance.put("/categories/" + data.id, data);
    },
    create(data) {
        return AxiosInstance.post("/categories", data);
    }
};

export default CategoryRequest;
