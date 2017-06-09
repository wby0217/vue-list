<template>
    <div>
      <Navbar/>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
export default {
  components:{
    Navbar
  }
}
</script>

<style>

</style>
