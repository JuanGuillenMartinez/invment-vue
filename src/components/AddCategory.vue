<template>
    <form @submit.prevent="addCategory" >
        <div class="mb-3">
            <label class="form-label"
                >Nombre de la categoría</label
            >
            <input
                v-model="name"
                type="text"
                class="form-control"
                id="name-input"
            />
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
</template>

<script>
import request from "@/js/CategoryRequest"
export default {
    data: function() {
        return {
            name: ""
        }
    },
    methods: {
        addCategory: function() {
            request.create({name: this.name}).then( (response) => {
                this.handleClick()
                console.log(response);
            }).catch( (error) => {
                console.log(error);
            })
        },
        handleClick: function() {
            this.$emit("changedCategories");
        }
    },
    emits: [ "changedCategories" ]
};
</script>

<style></style>
