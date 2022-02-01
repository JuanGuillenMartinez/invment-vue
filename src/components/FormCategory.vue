<template>
    <div class="card">
        <div class="card-body">
            <div class="container-form">
                <h4 class="title-form">Ver y actualizar categorias</h4>
            <form @submit.prevent="updateCategory">
                <div class="mb-3">
                    <label class="form-label">ID de la categoría</label>
                    <input
                        v-model="currentCategory.id"
                        disabled
                        type="text"
                        class="form-control"
                    />
                </div>
                <div class="mb-3">
                    <label for="category_name" class="form-label"
                        >Nombre de la categoría</label
                    >
                    <input
                        v-model="currentCategory.name"
                        type="text"
                        class="form-control"
                        id="category_name"
                    />
                </div>
                <button type="submit" class="btn btn-primary btn-form-update">
                    Actualizar
                </button>
                <button
                    @click="$emit('refreshCategories', currentCategory.id)"
                    type="button"
                    class="btn btn-light"
                >
                    Limpiar
                </button>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
import request from "@/js/CategoryRequest";
export default {
    data: function () {
        return {
            currentCategory: this.category,
        };
    },
    methods: {
        updateCategory: function () {
            request
                .update(this.category)
                .then((response) => {
                    const {
                        data: { message },
                    } = response;
                    alert(message);
                })
                .catch((error) => {
                    error.toJSON();
                });
        },
    },
    props: {
        category: Object,
    },
    watch: {
        $props: {
            handler: function ({ category }) {
                this.currentCategory = category;
            },
            deep: true,
        },
    },
    emits: ["refreshCategories"],
};
</script>

<style>
.title-form {
    text-align: center;
    margin-bottom: 36px;
}
.container-form {
    /* border: 1px solid; */
    padding: 24px 16px 24px 16px;
    /* border-radius: 12px; */
}
.btn-form-update {
    float: right;
}
.card {
    border-radius: 12px;
}
</style>
