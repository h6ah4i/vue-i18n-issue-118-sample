<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/detail">Detail</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>

</style>