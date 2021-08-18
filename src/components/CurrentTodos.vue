<template>
    <div id="current-todos" class="container-fluid input ">
        <h3 v-if="todos.length > 0">Current({{todos.length}})</h3>
        <ul class="list-group list">
            <li class="list-group-item list  " v-for="(todo, index) in todos"  :key='index'>
                <template>{{todo.body}}</template>
            <div class="btn-group  ">
                <button type="button" @click="edit(todo)" class="btn btn-default btn-sm btn-custom">
                <span class="glyphicon glyphicon-edit"></span> Edit
                </button>
                <button type="button" @click="complete(todo)" class="btn btn-default btn-custom btn-sm">
                <span class="glyphicon glyphicon-ok-circle"></span> Complete
                </button>
                <button type="button" @click="remove(todo)" class="btn btn-default btn-custom btn-sm">
                <span class="glyphicon glyphicon-remove-circle"></span> Remove
                </button>
            </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    methods: {
        edit(todo){
            this.$store.dispatch('editTodo', todo)
        },
        complete(todo){
            this.$store.dispatch('completeTodo', todo)
        },
        remove(todo){
            this.$store.dispatch('removeTodo', todo)
        }
    },
    computed: {
        todos(){
            return this.$store.getters.todos
        }
    }
}
</script>
<style>
    .btn-group{
        float: right;
    }
</style>