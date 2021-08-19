<template>
  <div class="text-center">
      <button @click="getUsers()" class="m-3 text-center">Get Users</button>
    <div class="row m-3  ">
      <div v-for="user in users" :key="user.id" class="col-4 shadow  mb-5 ">
        <div class="card border shadow-lg" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{{user.id}} </h5>
            <h6 class="card-subtitle mb-2 ">{{user.name}}</h6>
            <p class="card-text"> Phone: {{user.phone}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
  export default {
    name:"GetUsers",
    data(){
      return {
        users: []
      }
    },
    methods: {
      getUsers(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((Response) =>{
          console.log(Response.data)
          this.users = Response.data
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
}
</script>