<template>
  <div>
    <div class="navbar navbar-default">
      <div class="container-fluid container">
        <div class="navbar-header">
          <a class="navbar-brand">
            图书列表
          </a>
        </div>
        <ul class="navbar-nav nav">
          <li><router-link to="/list">图书列表</router-link></li>
          <li><router-link to="/add">添加图书</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        components: {},
        methods: {}
    }
</script>
<style scoped>

</style>
