<template>
  <section class="app-body">
    <div>{{name}}</div>
    <h1>{{age}}</h1>
    <h1 @click="hander">{{sex}}</h1>
  </section>
</template>
<script>
  export default {
    
    // props: {
    //   name: String,
    //   age: Number
    // }
    props: ['name', 'age', 'sex'],
    methods: {
      hander () {
        console.log(1111)
      }
    }
  }
</script>