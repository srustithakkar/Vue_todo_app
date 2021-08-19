<template>
<div  class="text-center mt-2">
  <div class="text-center mt-2">
    <router-link to="/userlist">UserList</router-link>
  </div>
  <div class="pt-2  component">
    <GetTodos></GetTodos>
  </div>
  <div class="pt-4  component">
    <CurrentTodos></CurrentTodos>
  </div>
  <div class="pt-4 component">
    <CompletedTodos></CompletedTodos>
  </div>

</div>
</template>

<script>
import GetTodos from "../components/GetTodo.vue"
import CurrentTodos from "../components/CurrentTodos.vue"
import CompletedTodos from "../components/CompletedTodos.vue"

export default {

  components:{
   GetTodos,
   CurrentTodos,
   CompletedTodos
  }
}

</script>