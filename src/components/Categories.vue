<template>
    <div>
        <div>
            <h1>Lista de Categorías</h1>
        </div>
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Creación</th>
                        <th scope="col">Actualización</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="category in categories" :key="category.id">
                        <th scope="row">{{ category.id }}</th>
                        <td>{{ category.name }}</td>
                        <td>{{ category.created_at }}</td>
                        <td>{{ category.updated_at }}</td>
                        <td>
                            <div class="button-container">
                                <i
                                    @click="editar()"
                                    class="far fa-plus-square btn-awesome"
                                ></i>
                                <i
                                    @click="deleteCategory(category.id)"
                                    class="fas fa-trash btn-awesome"
                                ></i>
                                <i class="far fa-eye btn-awesome"></i>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import request from "@/js/CategoryRequest";
export default {
    data: function () {
        return {
            categories: [],
            changed: false,
        };
    },
    methods: {
        showCategories: function () {
            this.changed = false;
            request
                .getAll()
                .then(({ data: response }) => {
                    const { data } = response;
                    console.log(data);
                    this.categories = data;
                })
                .catch((error) => {
                    const {
                        response: {
                            data: { message },
                        },
                    } = error;
                    console.log(message);
                });
        },
        editCategory: function () {
            console.log("Sirvio el click");
        },
        deleteCategory: function (id) {
            request
                .delete(id)
                .then(({ data: response }) => {
                    const { message } = response;
                    this.changed = true;
                })
                .catch((error) => {
                    const {
                        response: {
                            data: { message },
                        },
                    } = error;
                    console.log(message);
                });
        },
        showCategory: function () {
            console.log("Sirvio el click");
        },
    },
    watch: {
        changed(change) {
            if (change) {
                this.showCategories();
            }
        },
    },
    mounted() {
        this.showCategories();
    },
};
</script>

<style>
.button-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
}
.btn-awesome:hover {
    cursor: pointer;
}
</style>
