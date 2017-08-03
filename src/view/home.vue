<template>
  <section>
    <h1>我是首页</h1>
    <div v-for="(value, key) in useInfo" :key="key">{{value}}</span></div>
    <div @click="changeObj">改变对象</div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      useInfo: {
        name: 'liaocaiming',
        age: '18'
      }
    }
  },
  methods: {
    changeObj () {
      console.log(888)
      this.useInfo = Object.assign({sex: 'name'}, this.useInfo)
    }
  }
}
</script>
<style>
  body {
    background: red;
  }
</style>