<template>
    <div id="completed-todos" class="container-fluid input ">
        <h3 v-if="completed.length > 0"><u>Completed({{completed.length}})</u></h3>
        <ul class="list-group list ">
            <li class="list-group-item list shadow" v-for="(todo, index) in completed" :key="index" >
                <template>{{todo.body}}</template>
            <div class="btn-group  ">
                <button type="button" @click="remove(todo)" class="btn btn-default btn-sm btn-custom">
                <span class="glyphicon glyphicon-remove-circle "></span> Remove
                </button>
            </div>
            </li>
        </ul>

    </div>
</template>

<script>
    export default{
        
        computed: {
            completed(){
                return this.$store.getters.completedTodos
            }
        },
        methods: {
            remove(todo){
                this.$store.dispatch('removeTodo', todo)
            }
        }
    }
</script>