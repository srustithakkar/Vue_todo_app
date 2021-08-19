<template>
    <div id="get-todo" class=" row"  >
      <div class="col-6   add ">
        <input class="form-control text-center justify-content-end  col-4"
          :value="newTodo"
          @change="getTodo"
          placeholder="Please add text"
        >
      </div>
      <div class="col-6 text-start add">
        <button class="btn btn-primary  col-6S text-center " @click="addTodo">Add Todo</button>
      </div>
    </div>
</template>

<script>
  export default{
    methods: {
      getTodo(ev){
        console.log(ev.target.value)
        this.$store.dispatch('getTodo', ev.target.value)
      },
      addTodo(){
        debugger
        this.$store.dispatch('addTodo')
        this.$store.dispatch('clearTodo')
      }
    },
    computed: {
      newTodo(){
        return this.$store.getters.newTodo
      }
    }
  }
</script>

