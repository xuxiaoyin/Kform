<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <form-test></form-test> -->
    <!-- <good-select></good-select> -->
    <qq-list></qq-list>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FormTest from './components/FormTest.vue'
import GoodSelect from './components/GoodSelect'
import QqList from './components/QqList'

export default {
  name: 'app',
  components: {
    HelloWorld,
    FormTest,
    GoodSelect,
    QqList
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
