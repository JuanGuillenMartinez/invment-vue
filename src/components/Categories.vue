<template>
    <div>
        <div>
            <h1>Lista de Categorías</h1>
        </div>
        <div>
            <button
                data-bs-toggle="modal"
                data-bs-target="#modal-add"
                type="button"
                class="btn btn-success"
            >
                Añadir categoría
            </button>
        </div>
        <div class="container-main">
            <div class="container-cat container-categories">
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
                                        @click="deleteCategory(category)"
                                        class="fas fa-trash btn-awesome"
                                    ></i>
                                    <i
                                        @click="setCurrentCategory(category)"
                                        class="far fa-eye btn-awesome"
                                    ></i>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="showed" class="container-cat container-form">
                <FormCategory
                    v-on:refreshCategories="refresh"
                    v-if="showed"
                    :category="currentCategory"
                />
            </div>
        </div>
        <div class="modal-add-category">
            <div
                class="modal fade"
                id="modal-add"
                tabindex="-1"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                Añadir categoría
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <add-category
                                v-on:changedCategories="showCategories"
                            />
                        </div>
                        <div class="modal-footer"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import request from "@/js/CategoryRequest";
import FormCategory from "@/components/FormCategory.vue";
import AddCategory from "./AddCategory.vue";

export default {
    components: { FormCategory, AddCategory },
    data: function () {
        return {
            categories: [],
            changed: false,
            showed: false,
            currentCategory: null,
        };
    },
    methods: {
        refresh: function (id) {
            this.showCategory(id);
            this.showCategories();
        },
        setCurrentCategory: function (category) {
            this.currentCategory = category;
            this.showed = true;
        },
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
                    console.log(error.toJSON());
                });
        },
        showCategory: function (id) {
            this.currentId = id;
            this.showed = true;
            request.get(id).then(({ data: { data } }) => {
                this.currentCategory = data;
            });
            console.log(this.currentId);
        },
        deleteCategory: function (category) {
            request
                .delete(category.id)
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
.container-main {
    display: grid;
    grid-template-columns: 2fr 1fr;
}
</style>
