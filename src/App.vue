<style>
  @import "./assets/css/base.css";
</style>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import flexible from "./assets/js/flexible"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
