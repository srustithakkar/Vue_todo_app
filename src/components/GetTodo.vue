<template>
<div fluid>
  <div class="row">
  <div id="get-todo" class="mt-5 d-flex input" fluid>
    <div class="input-head">
          <input class="form-control col-6 "
      :value="newTodo"
      @change="getTodo"
      placeholder="Please add text">
    <button class="btn btn-primary  " @click="addTodo">Add Todo</button>

    </div>
    </div>
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

