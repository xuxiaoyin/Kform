<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <form-test></form-test> -->
    <good-select></good-select>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FormTest from './components/FormTest.vue'
import GoodSelect from './components/GoodSelect'

export default {
  name: 'app',
  components: {
    HelloWorld,
    FormTest,
    GoodSelect
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
