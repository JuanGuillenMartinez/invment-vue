import AxiosInstance from "@/js/AxiosInstance";

const CategoryRequest = {
    getAll() {
        const response = AxiosInstance.get("/categories");
        return response;
    },
    delete(id) {
        return AxiosInstance.delete("/categories/" + id);
    },
};

export default CategoryRequest;
